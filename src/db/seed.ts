import { faker } from "@faker-js/faker";
import { users, restaurants } from "./schema";
import { db } from "./connection";
import chalk from "chalk";

// Reset Database

await db.delete(users);
await db.delete(restaurants);

console.log(chalk.yellow("✅ Database reset!"));

// Create customers

await db.insert(users).values([
  {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role: "customer",
  },
  {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role: "customer",
  },
]);

console.log(chalk.magenta("✅ Created customers!"));

// Create manager

const [manager] = await db
  .insert(users)
  .values([
    {
      name: faker.person.fullName(),
      email: "admin@admin.com",
      role: "manager",
    },
  ])
  .returning({ id: users.id });

console.log(chalk.magenta("✅ Created manager!"));

// Create restaurant

await db.insert(restaurants).values([
  {
    name: faker.company.name(),
    description: faker.lorem.paragraph(),
    managerId: manager.id,
  },
]);

console.log(chalk.magenta("✅ Created restaurant!"));

console.log(chalk.blueBright("✅ Database seeded successfully!"));

process.exit();

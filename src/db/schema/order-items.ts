import { text, pgTable, integer } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";
import { users, orders } from ".";

export const orderItems = pgTable("order_items", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey(),
  orderId: text("order_id")
    .notNull()
    .references(() => orders.id, {
      onDelete: "cascade",
    }),
  productId: text("product_id").references(() => users.id, {
    onDelete: "set null",
  }),
  totalInCents: integer("total_in_cents").notNull(),
  quantity: integer("quantity").notNull(),
});

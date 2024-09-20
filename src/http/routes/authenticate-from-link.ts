import Elysia, { t } from "elysia";
import { db } from "../../db/connection";
import dayjs from "dayjs";
import { auth } from "../auth";

export const authenticateFromLink = new Elysia().use(auth).get(
  "/auth-links/authenticate",
  async ({ query, jwt, cookie: { auth }, set }) => {
    const { code } = query;

    const authLinkFromCode = await db.query.authLinks.findFirst({
      where(fields, { eq }) {
        return eq(fields.code, code);
      },
    });

    if (!authLinkFromCode) {
      throw new Error("Auth link not found.");
    }

    const daysSinceAuthLinkWasCreated = dayjs().diff(
      authLinkFromCode.createdAt,
      "days"
    );

    if (daysSinceAuthLinkWasCreated > 7) {
      throw new Error("Auth link expired, please generate a new one.");
    }

    const managedRestaurant = await db.query.restaurants.findFirst({
      where(fields, { eq }) {
        return eq(fields.managerId, authLinkFromCode.userId);
      },
    });

    const token = await jwt.sign({
      sub: authLinkFromCode.userId,
      restaurantId: managedRestaurant?.id,
    });

    auth.value = token;
    auth.httpOnly = true;
    auth.maxAge = 60 * 60 * 24 * 7; // 7 days
    auth.path = "/";
  },
  {
    query: t.Object({
      code: t.String(),
      redirect: t.String(),
    }),
  }
);

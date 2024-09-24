import { Elysia, t } from "elysia";
import { registerRestaurant } from "./routes/register-restaurant";
import { sendAuthLink } from "./routes/send-auth-link";
import { authenticateFromLink } from "./routes/authenticate-from-link";
import { signOut } from "./routes/sign-out";
import { getProfile } from "./routes/get-profile";
import { getManagedRestaurant } from "./routes/get-managed-restaurant";
import { getOrderDetails } from "./routes/get-order-details";
import { approveOrder } from "./routes/approve-order";
import { cancelOrder } from "./routes/cancel-order";
import { deliveryOrder } from "./routes/delivery-order";
import { dispatchOrder } from "./routes/dispatch-order";
import { getOrders } from "./routes/get-orders";
import { getMonthReceipt } from "./routes/get-month-receipt";
import { getDayOrdersAmount } from "./routes/get-day-orders-amount";
import { getMonthOrderAmount } from "./routes/get-month-orders-amount";
import { getMonthCanceledAmount } from "./routes/get-month-canceled-orders-amount";
import { getPopularProducts } from "./routes/get-popular-products";

const app = new Elysia()
  .use(registerRestaurant)
  .use(sendAuthLink)
  .use(authenticateFromLink)
  .use(signOut)
  .use(getProfile)
  .use(getManagedRestaurant)
  .use(getOrderDetails)
  .use(approveOrder)
  .use(cancelOrder)
  .use(deliveryOrder)
  .use(dispatchOrder)
  .use(getOrders)
  .use(getMonthReceipt)
  .use(getDayOrdersAmount)
  .use(getMonthOrderAmount)
  .use(getMonthCanceledAmount)
  .use(getPopularProducts)
  .onError(({ code, error, set }) => {
    switch (code) {
      case "VALIDATION": {
        set.status = error.status;
        return error.toResponse();
      }

      case "NOT_FOUND": {
        return new Response(null, { status: 404 });
      }

      default: {
        set.status = 500;
        console.error(error);
        return new Response(null, { status: 500 });
      }
    }
  });

app.listen(3333, () => {
  console.log("🚀 HTTP server running!");
});

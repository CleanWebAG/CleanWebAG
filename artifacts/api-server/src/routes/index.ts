import { Router, type IRouter } from "express";
import healthRouter from "./health";
import sendEmailRouter from "./send-email";
import sendBookingRouter from "./send-booking";

const router: IRouter = Router();

router.use(healthRouter);
router.use(sendEmailRouter);
router.use(sendBookingRouter);

export default router;

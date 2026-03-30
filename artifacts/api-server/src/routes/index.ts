import { Router, type IRouter } from "express";
import healthRouter from "./health";
import sendEmailRouter from "./send-email";

const router: IRouter = Router();

router.use(healthRouter);
router.use(sendEmailRouter);

export default router;

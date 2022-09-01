import { Router } from "express";
import logger from "../config/logger";
import routerBlockchain from "./router-blockchain";

const router = Router();
logger.info("routes start!");
console.log("test");

router.get("/", (_, res) => {
    logger.info("api-docs start");
    res.redirect("/api-docs");
});
router.get("/bc", routerBlockchain.test);

export default router;

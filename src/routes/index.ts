import { Router } from "express";

const router = Router();


router.get("/", (_, res) => res.redirect("/api-docs"));

export default router;

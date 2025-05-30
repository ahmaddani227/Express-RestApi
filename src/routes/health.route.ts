import { Router, Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";

export const HealthRouter: Router = Router();

HealthRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  logger.info("Healt check success");
  res.status(200).send("Hello World!");
});

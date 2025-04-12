import { Router, Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";
import { createProductValidation } from "../validation/product.validation";

export const ProductRouter: Router = Router();

ProductRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  logger.info("Product check success");
  res.status(200).send({
    status: true,
    statusCode: 200,
    data: [{ name: "sepatu compas", price: 500000 }],
  });
});

ProductRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = createProductValidation(req.body);

  if (error) {
    logger.error(`Error: product - create - ${error.details[0].message}`);
    res.status(400).send({
      status: false,
      statusCode: 400,
      message: error.details[0].message,
      data: {},
    });
  }

  logger.info("Product check success");
  res.status(200).send({
    status: true,
    statusCode: 200,
    message: "Product created successfully",
    data: req.body,
  });
});

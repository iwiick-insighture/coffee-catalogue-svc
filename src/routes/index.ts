import {
  healthHandler,
  addCoffeeHandler,
  getAllCoffeesHandler,
  getCoffeeByIdHandler,
  updateCoffeeHandler,
  deleteCoffeeHandler,
} from "../handlers";

const express = require("express");
const router = express.Router();

router.get("/health", healthHandler);
router.get("/", getAllCoffeesHandler);
router.get("/:id", getCoffeeByIdHandler);
router.post("/", addCoffeeHandler);
router.put("/:id", updateCoffeeHandler);
router.delete("/:id", deleteCoffeeHandler);

export default router;

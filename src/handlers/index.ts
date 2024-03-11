import { HttpStatusCode } from "axios";
import { Request, Response } from "express";
import { ApiResponse } from "../common/api-response.dto";
import {
  addCoffee,
  deleteCoffeeById,
  getCoffeeById,
  getCoffees,
  updateCoffeeById,
} from "../services";
import configData from "../configs/config";
import { getPrefixedUUID } from "../utils";

export const healthHandler = (_: Request, res: Response) => {
  res.status(HttpStatusCode.Ok).json({
    message: `coffee-catalogue-svc is up and running on port :: ${configData.port}`,
  } as ApiResponse);
};

export const getAllCoffeesHandler = async (_: Request, res: Response) => {
  try {
    const data = await getCoffees();
    res.status(HttpStatusCode.Ok).json({
      message: `All Coffees fetched`,
      data,
    } as ApiResponse);
  } catch (err) {
    res.status(HttpStatusCode.BadRequest).json({
      success: false,
      error: err,
    } as ApiResponse);
  }
};

export const getCoffeeByIdHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await getCoffeeById(id);
    res.status(HttpStatusCode.Ok).json({
      message: `Coffee found by ID :: ${id}`,
      data,
    } as ApiResponse);
  } catch (err) {
    res.status(HttpStatusCode.BadRequest).json({
      error: err,
    } as ApiResponse);
  }
};

export const addCoffeeHandler = async (req: Request, res: Response) => {
  try {
    const id = getPrefixedUUID();
    const newCoffee = req.body;
    const data = await addCoffee({ ...newCoffee, id });
    res.status(HttpStatusCode.Ok).json({
      message: `Added New Coffee`,
      data,
    } as ApiResponse);
  } catch (err) {
    res.status(HttpStatusCode.BadRequest).json({
      error: err,
    } as ApiResponse);
  }
};

export const updateCoffeeHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const udatedCoffee = req.body;
  try {
    const data = await updateCoffeeById(id, udatedCoffee);
    res.status(HttpStatusCode.Ok).json({
      message: `Updated Coffee :: ${id}`,
      data,
    } as ApiResponse);
  } catch (err) {
    res.status(HttpStatusCode.BadRequest).json({
      error: err,
    } as ApiResponse);
  }
};

export const deleteCoffeeHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await deleteCoffeeById(id);
    res.status(HttpStatusCode.Ok).json({
      message: `Coffee Deleted :: ${id}`,
      data,
    } as ApiResponse);
  } catch (err) {
    res.status(HttpStatusCode.BadRequest).json({
      error: err,
    } as ApiResponse);
  }
};

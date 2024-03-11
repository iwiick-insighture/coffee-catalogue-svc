import { HttpStatusCode } from "axios";
import { Request, Response } from "express";
import { ApiResponse } from "../common/api-response.dto";
import configData from "../configs/config";

export const healthHandler = (req: Request, res: Response) => {
  res.status(HttpStatusCode.Ok).json({
    message: `coffee-catalogue-svc is up and running on port :: ${configData.port}`,
  } as ApiResponse);
};

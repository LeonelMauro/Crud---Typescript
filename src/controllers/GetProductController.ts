import { Request, Response } from "express";
import { GetProductDataService } from "../services/GetProductDataService";

class GetProductController {
  async handle(request: Request, response: Response) {
    let { id } = request.query;
    id = id.toString();

    const getProductDataService = new GetProductDataService();

    const product = await getProductDataService.getData(id);

    return response.render("edit-product", {
      product: product
    });
  }
}

export { GetProductController };
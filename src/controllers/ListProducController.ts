import { Request, Response } from "express";
import { ListProductService } from "../services/ListProductService";

class ListProductController {
  async handle(request: Request, response: Response) {
    const listProductService = new ListProductService();

    const products = await listProductService.list();

    return response.render("product", {
        products: products
    });
  }
}

export { ListProductController };
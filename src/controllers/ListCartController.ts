import { Request, Response } from "express";
import { ListCartService } from "../services/ListCartService";

class ListCartController {
  async handle(request: Request, response: Response) {
    const listCartService = new ListCartService();

    const carts = await listCartService.list();

    return response.render("cart", {
      carts: carts
    });
  }
}

export { ListCartController };
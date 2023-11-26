import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProductService";

class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, description, price } = request.body;

    const createProductService = new CreateProductService();

    try {
      await createProductService.create({
        name,
        description,
        price
        
      }).then(() => {
        response.render("message", {
          message: "Producto creado correctamente"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Error al crear producto: ${err.message}`
      });
    }

  }
}

export { CreateProductController };
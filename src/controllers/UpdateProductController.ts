import { Request, Response } from "express";
import { UpdateProductService } from "../services/UpdateProductService";

class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { id, name, description, price } = request.body;

    const updateProductService = new UpdateProductService();

    try {
      await updateProductService.update({ id, name, description, price  }).then(() => {
        response.render("message", {
          message: "Producto actualizado "
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Error al actualizar Producto: ${err.message}`
      });
    }

  }
}

export { UpdateProductController };
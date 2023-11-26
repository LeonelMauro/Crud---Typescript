import {Request , Response } from "express";
import { DeleteProductService } from "../services/DeleteProductService";

class DeleteProductController {
    async handle (request : Request , response: Response){
        const {id} = request.body;
        const deleteProductService = new DeleteProductService ();
        
        try {
            await deleteProductService.delete(id).then(() => {
              response.render("message", {
                message: "Producto eliminado"
              });
            });
          } catch (err) {
            response.render("message", {
              message: `Error al borrar el producto: ${err.message}`
            });
          }
        }
      }
      
export { DeleteProductController };

 
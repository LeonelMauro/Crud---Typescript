import {Request , Response } from "express";
import { DeleteProductService } from "../services/DeleteProductService";

class DeleteProductController {
    async handle (request : Request , response: Response){
        const {id} = request.body;
        const deleteProductService = new DeleteProductService ();
        
        try {
            await deleteProductService.delete(id).then(() => {
              response.render("message", {
                message: "Usuário eliminado"
              });
            });
          } catch (err) {
            response.render("message", {
              message: `Erro ao deletar usuário: ${err.message}`
            });
          }
        }
      }
      
export { DeleteProductController };

 
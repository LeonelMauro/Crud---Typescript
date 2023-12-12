import { Request,Response } from "express"
import {DeleteCartService} from "../services/DeleteCartService"
import { error } from "console";

class DeleteCartController {
    async handle (request : Request , response : Response){
        const {id} = request.body;
        const deleteCartController = new DeleteCartService ();

        try{
            await deleteCartController.delete(id).then(()=>{
                response.render("message",{
                        message : "Producto elimida del Carro"
                    });
                    });
            }catch (err){
                response.render("message",{
                    message :`Error de producto: ${err.message}`
                })
            }
    }
}

export {DeleteCartController}
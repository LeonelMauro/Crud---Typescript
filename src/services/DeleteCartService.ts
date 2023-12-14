import { CartRepository } from "../repositories/CartRepository";
import {CartItem} from "../entities/CartItem"
import {getCustomRepository} from "typeorm"

class DeleteCartService{
    async delete (id: string){
        const cartRepository = getCustomRepository(CartRepository);

        const cart = await cartRepository
        .createQueryBuilder ()
        .delete ()
        .from(CartItem)
        .where (" id =: id",{id})
        .execute ();

    return cart
    }
}

export { DeleteCartService}
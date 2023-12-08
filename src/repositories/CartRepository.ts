import { Repository, EntityRepository } from "typeorm";
import { CartItem } from "../entities/CartItem";

@EntityRepository(CartItem)
class CartRepository extends Repository<CartItem>{ }

export { CartRepository };
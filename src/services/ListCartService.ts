import { getCustomRepository } from "typeorm";
import { CartRepository } from "../repositories/CartRepository";

class ListCartService {
  async list() {
    const cartRepository = getCustomRepository(CartRepository);

    const carts = await cartRepository.find();

    return carts;
  }
}

export { ListCartService };
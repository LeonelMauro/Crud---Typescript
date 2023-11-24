import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../repositories/ProductRepository";

class ListProductService {
  async list() {
    const productRepository = getCustomRepository(ProductRepository);

    const products = await productRepository.find();

    return products;
  }
}

export { ListProductService };
import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../repositories/ProductRepository";

class GetProductDataService {
  async getData(id: string) {
    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository.findOne(id);

    return product;
  }
}

export { GetProductDataService };
import { getCustomRepository } from "typeorm";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/ProductRepository";

class DeleteProductService {
  async delete(id: string) {
    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository
      .createQueryBuilder()
      .delete()
      .from(Product)
      .where("id = :id", { id })
      .execute();

    return product;

  }
}

export { DeleteProductService };
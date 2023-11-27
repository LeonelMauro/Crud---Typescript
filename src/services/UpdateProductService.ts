import { getCustomRepository } from "typeorm";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/ProductRepository";

interface IProduct {
  id: string;
  name: string;
  description : string;
  price : number;
}

class UpdateProductService {
  async update({ id, name, description, price }: IProduct) {
    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository
      .createQueryBuilder()
      .update(Product)
      .set({ name, description, price})
      .where("id = :id", { id })
      .execute();

    return product;

  }
}

export { UpdateProductService };
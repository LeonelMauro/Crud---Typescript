import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../repositories/ProductRepository";

class SearchProductService {
  async search(search: string) {
    if (!search) {
      throw new Error("Por favor preencha o campo de busca");
    }

    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository
      .createQueryBuilder()
      .where("name like :search", { search: `%${search}%` })
      .orWhere("description like :search", { search: `%${search}%` })
      .orWhere("price like :search", { search: `%${search}%` })
      
      .getMany();

    return product;

  }
}

export { SearchProductService };
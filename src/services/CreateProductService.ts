import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../repositories/ProductRepository";

interface IProduct {
  name: string;
  description: string;
  price: number;

}

class CreateProductService {
  async create({ name, description, price, }: IProduct) {
    if (!name || !description || !price ) {
      throw new Error("Por favor preencha todos os campos");
    }

    const productsRepository = getCustomRepository(ProductRepository);

    const productnameAlreadyExists = await productsRepository.findOne({ name });

    if (productnameAlreadyExists) {
      throw new Error("Username já está cadastrado");
    }

    const descriptionAlreadyExists = await productsRepository.findOne({ description });

    if (descriptionAlreadyExists) {
      throw new Error("Descripcion já está cadastrado");
    }

    const product = productsRepository.create({ name, description, price });

    await productsRepository.save(product);

    return product;

  }
}

export { CreateProductService };
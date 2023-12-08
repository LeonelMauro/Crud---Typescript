import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { CartItem } from "../entities/CartItem";
import { Product } from "../entities/Product";

class CartController {
   async addToCart(req: Request, res: Response) {
    const { productId, quantity } = req.body;

    const productRepository = getRepository(Product);
    const product = await productRepository.findOne(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const cartItemRepository = getRepository(CartItem);
    let cartItem = await cartItemRepository.findOne({ where: { product } });

    if (!cartItem) {
      cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 0;
    }

    cartItem.quantity += quantity;
    await cartItemRepository.save(cartItem);

    return res.json({ message: "Product added to cart successfully" });
  }

}

export { CartController };

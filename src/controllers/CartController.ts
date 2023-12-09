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
      // Si el ítem no existe en el carrito, crear uno nuevo
      cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 0;
    }

    // Sumar la cantidad proporcionada al carrito
    cartItem.quantity += quantity;

    // Guardar o actualizar el ítem en el carrito
    await cartItemRepository.save(cartItem);

    // Redirigir o enviar una respuesta, según tus necesidades
    res.redirect("/products");
  }
}

export { CartController };

// src/entities/Product.ts

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { CartItem } from "./CartItem";

@Entity("products")
class Product {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price: number;

  @OneToMany(() => CartItem, cartItem => cartItem.product)
  cartItems: CartItem[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Product };

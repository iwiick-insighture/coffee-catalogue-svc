import * as Joi from "joi";
import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Coffee {
  @PrimaryColumn({
    type: "varchar",
  })
  readonly id?: string;
  @Column({
    type: "varchar",
  })
  readonly name: string;
  @Column({
    type: "integer",
  })
  readonly quantity: number;
  @Column({
    type: "decimal",
  })
  readonly price: number;

  constructor(data: Coffee) {
    if (data) {
      this.id = data?.id;
      this.name = data.name;
      this.quantity = data.quantity;
      this.price = data.price;
    }
  }
}

export const CoffeeSchema = Joi.object({
  id: Joi.string(),
  name: Joi.string().required(),
  quantity: Joi.string().required(),
  price: Joi.string().required(),
}).options({
  abortEarly: false,
});

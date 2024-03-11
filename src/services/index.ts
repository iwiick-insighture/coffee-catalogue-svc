import { dataSource } from "../configs/db";
import { Coffee } from "../entities/coffee.entity";
const coffeeRepo = dataSource.getRepository(Coffee);

export const getCoffees = async (): Promise<Coffee[]> => {
  return await coffeeRepo.find();
};

export const addCoffee = async (newCoffee: Coffee): Promise<Coffee> => {
  const coffee = new Coffee(newCoffee);
  await coffeeRepo.save(coffee);
  return coffee;
};

export const getCoffeeById = async (id: string): Promise<Coffee | null> => {
  return await coffeeRepo.findOneBy({ id });
};

export const updateCoffeeById = async (
  id: string,
  newCoffee: Coffee
): Promise<Coffee | null> => {
  await coffeeRepo.update(id, newCoffee);
  return newCoffee;
};

export const deleteCoffeeById = async (id: string): Promise<string> => {
  await coffeeRepo.delete(id);
  return id;
};

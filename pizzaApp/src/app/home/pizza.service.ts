import { Injectable } from '@angular/core';

import { Pizza } from './pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  constructor() { }

  private pizza: Pizza;
  private pizzas = [] as Array<Pizza>;
  private totalPrice = 0;
  private pizzasInOrder = 0;

  allPizzas(){
    return[...this.pizzas];
  }

  addPizza(topping: string, size: string, quantity: number){
    var price = 5.99;
    switch(size){
      case 'Medium':
        price +=2;
        break;
      case 'Large':
        price +=4;
        break;
      case 'X-Large':
        price +=5;
        break;
      case 'Party':
        price +=6;
        break;
    }
    price *= quantity;

    this.pizza = {toppings: topping, size: size, quantity: quantity, price: price};
    this.pizzas.push(this.pizza);
    this.totalPrice += price;
    this.pizzasInOrder += quantity;
  }

  getTotal(){
    return this.totalPrice;
  }

  getNumOfPizzas(){
    return this.pizzasInOrder;
  }

  removePizza(index){
    this.totalPrice -= this.pizzas[index].price;
    this.pizzasInOrder -= this.pizzas[index].quantity;

    this.pizzas.splice(index, 1);
  }

  newOrder(){
    this.pizzas = [] as Array<Pizza>;
    this.pizzasInOrder = 0;
    this.totalPrice = 0;
  }

}

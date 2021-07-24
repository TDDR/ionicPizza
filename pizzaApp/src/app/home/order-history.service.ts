import { Injectable } from '@angular/core';
import { PizzaService } from './pizza.service';
import { OrderHistory } from './order-history';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  constructor(private pizzaService: PizzaService,
              private location: Location) { }

  date: string;
  order: OrderHistory;
  history = [] as Array<OrderHistory>;

  addOrder(){
    this.order = {date: new Date().toLocaleString(),
                  price: this.pizzaService.getTotal(),
                  quantity: this.pizzaService.getNumOfPizzas()}
    this.history.push(this.order);
    this.pizzaService.newOrder();
    this.location.back();
  }

  getHistory(){
    return [...this.history];
  }
}

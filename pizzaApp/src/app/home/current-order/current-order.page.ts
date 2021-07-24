import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Location } from '@angular/common';
import { OrderHistoryService } from '../order-history.service';

@Component({
  selector: 'app-current-order',
  templateUrl: './current-order.page.html',
  styleUrls: ['./current-order.page.scss'],
})
export class CurrentOrderPage implements OnInit {
  pizzaList;
  amount;
  quantity;

  constructor(private pizzaService: PizzaService,
              private orderHistory: OrderHistoryService) { }

  ngOnInit() {
    this.loadLocal();
  }

  loadLocal(){
    this.pizzaList = this.pizzaService.allPizzas();
    this.amount = this.pizzaService.getTotal();
    this.quantity = this.pizzaService.getNumOfPizzas();
  }

  placeOrderClicked(){
    this.orderHistory.addOrder();
    alert("Your order has been placed!");
  }

  deletePizza(index){
    this.pizzaService.removePizza(index);
    this.loadLocal();
  }







}

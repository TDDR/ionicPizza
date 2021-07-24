import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PizzaService} from './pizza.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  toppings = ["Pepperoni", "Cheese", "Vegetable", "Deluxe", "Meat Lovers"];
  theTopping = "None Selected";
  size = ["Small", "Medium", "Large", "X-Large", "Party"];
  theSize = "None Selected";
  quantity = 0;

  constructor(private pizzaService: PizzaService,
              private router: Router) {}

  ngOnInit(){
  }

  toppingSelected(toppingSelected){
    this.theTopping = toppingSelected;
  }

  sizeSelected(sizeSelected){
    this.theSize = sizeSelected;
  }

  quantitySelected(quantitySelected){
    this.quantity = quantitySelected.detail.value;
  }

  placeOrderClicked(){
    if (this.theTopping === "None Selected"){
      alert("Opps, you forgot to choose a topping!");
    }
    else if (this.theSize === "None Selected"){
      alert("Opps, you forgot to select a size!");
    }
    else if (this.quantity === 0){
      alert("Opps, you forgot to choose a how many pizzas you want!");
    }
    else{
      this.pizzaService.addPizza(this.theTopping, this.theSize, this.quantity);
      alert("Your order now has " + this.pizzaService.getNumOfPizzas() + " pizza(s), and the total is $" + this.pizzaService.getTotal().toFixed(2));
      this.clearOrder();
    }
  }

  myOrderClicked(){
    this.router.navigate(['order-manager']);
    this.clearOrder();
  }

  clearOrder(){
    this.theTopping = "None Selected";
    this.theSize = "None Selected";
    this.quantity = 0;
  }
}

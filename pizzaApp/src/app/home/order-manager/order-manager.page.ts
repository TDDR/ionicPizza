import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.page.html',
  styleUrls: ['./order-manager.page.scss'],
})
export class OrderManagerPage implements OnInit {

  constructor(private router: Router,
              private location: Location,
              private pizzaService: PizzaService) { }

  ngOnInit() {
  }

  currentOrderClicked(){
    this.router.navigate(['current-order']);
  }
  updateOrderClicked(){
    this.location.back();
  }
  orderHistoryClicked(){
    this.router.navigate(['order-history']);
  }
  newOrderClicked(){
    this.pizzaService.newOrder();
    this.router.navigate(['']);
  }
}

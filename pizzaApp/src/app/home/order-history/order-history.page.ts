import { Component, OnInit } from '@angular/core';
import { OrderHistoryService } from '../order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {
  constructor(private orderHistory: OrderHistoryService) { }

  history;

  ngOnInit() {
    this.history = this.orderHistory.getHistory();
  }

}

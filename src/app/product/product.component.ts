import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  itemCount: number = 0;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemCount = this.itemService.getItemCount();
  }
  increment() {
    this.itemService.incrementItemCount();
    this.itemCount = this.itemService.getItemCount();
  }

  decrement() {
    this.itemService.decrementItemCount();
    this.itemCount = this.itemService.getItemCount();
  }
}

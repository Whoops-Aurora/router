import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemCount: number = 0;

  constructor() { }

  // Method to increment the item count
  incrementItemCount() {
    this.itemCount++;
  }

  // Method to decrement the item count
  decrementItemCount() {
    if (this.itemCount > 0) {
      this.itemCount--;
    }
  }

  // Method to get the current item count
  getItemCount() {
    return this.itemCount;
  }
}

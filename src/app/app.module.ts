import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeproductComponent } from './homeproduct/homeproduct.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ItemService } from './item.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeproductComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }

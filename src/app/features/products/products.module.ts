import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './pages/product/product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }

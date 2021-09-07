import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodesComponent } from './codes/codes.component';
import { EmptyComponent } from './empty/empty.component';
import { SummaryComponent } from './summary/summary.component';



@NgModule({
  declarations: [
    CodesComponent,
    EmptyComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }

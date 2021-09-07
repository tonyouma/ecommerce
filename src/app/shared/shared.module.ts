import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemQuantityComponent } from './components/item-quantity/item-quantity.component';
import { TitleComponent } from './components/title/title.component';
import { SimplePageComponent } from './components/simple-page/simple-page.component';
import { WordWrapPipe } from './pipes/word-wrap.pipe';



@NgModule({
  declarations: [
    ItemQuantityComponent,
    TitleComponent,
    SimplePageComponent,
    WordWrapPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

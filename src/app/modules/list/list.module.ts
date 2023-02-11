import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { CardComponent } from './components/card/card.component';
import { ListPageComponent } from './components/list-page/list-page.component';


@NgModule({
  declarations: [
    CardComponent,
    ListPageComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }

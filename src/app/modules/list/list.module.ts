import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsModule } from 'src/app/commons/commons.module';

import { ListRoutingModule } from './list-routing.module';
import { CardComponent } from './components/card/card.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardComponent, ListPageComponent],
  imports: [CommonModule, ListRoutingModule, CommonsModule, FormsModule],
})
export class ListModule {}

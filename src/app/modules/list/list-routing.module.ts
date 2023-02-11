import { CommonModule } from '@angular/common';
import { ListPageComponent } from './components/list-page/list-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: ListPageComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRoutingModule {}

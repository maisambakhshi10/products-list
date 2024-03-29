import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './products/list/list.component';
import { DetailComponent } from './products/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },

  { path: ':id', component: DetailComponent }
  ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

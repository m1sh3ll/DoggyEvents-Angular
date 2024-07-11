import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventCategoryListComponent } from './features/event-category/event-category-list/event-category-list.component';
import { AddEventCategoryComponent } from './features/event-category/add-event-category/add-event-category.component';

const routes: Routes = [
  {
    path: 'event-categories',
    component: EventCategoryListComponent
  }, {
    path: 'event-categories/add-event-category',
    component: AddEventCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

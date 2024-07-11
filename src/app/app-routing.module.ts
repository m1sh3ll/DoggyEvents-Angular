import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventCategoryListComponent } from './features/event-category/event-category-list/event-category-list.component';
import { AddEventCategoryComponent } from './features/event-category/add-event-category/add-event-category.component';
import { EditEventCategoryComponent } from './features/event-category/edit-event-category/edit-event-category.component';
import { DoggyEventListComponent } from './features/doggy-event/doggy-event-list/doggy-event-list.component';

import { EditDoggyEventComponent } from './features/doggy-event/edit-doggy-event/edit-doggy-event.component';
import { AddDoggyEventComponent } from './features/doggy-event/add-doggy-event/add-doggy-event.component';

const routes: Routes = [

  {
    path: '',
    component: AddDoggyEventComponent
  },
  {
    path: 'event-categories',
    component: EventCategoryListComponent
  },
  {
    path: 'event-categories/add-event-category',
    component: AddEventCategoryComponent
  },
  {
    path: 'event-categories/edit-event-category/:id',
    component: EditEventCategoryComponent
  },
  {
    path: 'doggy-events',
    component: DoggyEventListComponent
  },
  {
    path: 'doggy-events/add-doggy-event',
    component: AddDoggyEventComponent
  },
  {
    path: 'doggy-events/edit-doggy-event/:id',
    component: EditDoggyEventComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

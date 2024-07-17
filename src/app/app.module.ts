import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { EventCategoryListComponent } from './features/event-category/event-category-list/event-category-list.component';
import { AddEventCategoryComponent } from './features/event-category/add-event-category/add-event-category.component';
import { EditEventCategoryComponent } from './features/event-category/edit-event-category/edit-event-category.component';

import { EditDoggyEventComponent } from './features/doggy-event/edit-doggy-event/edit-doggy-event.component';
import { DoggyEventListComponent } from './features/doggy-event/doggy-event-list/doggy-event-list.component';
import { AddDoggyEventComponent } from './features/doggy-event/add-doggy-event/add-doggy-event.component';
import { TimezonePipe } from './timezone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventCategoryListComponent,
    AddEventCategoryComponent,
    EditEventCategoryComponent,
    AddDoggyEventComponent,
    EditDoggyEventComponent,
    DoggyEventListComponent,
    TimezonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    //{
    //  provide: HTTP_INTERCEPTORS,
    //  useClass: AuthInterceptor,
    //  multi: true
    //}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

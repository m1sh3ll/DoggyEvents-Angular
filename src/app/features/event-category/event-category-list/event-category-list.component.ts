import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventCategory } from '../models/event-category.model';
import { EventCategoryService } from '../services/event-category.service';

@Component({
  selector: 'app-event-category-list',
  templateUrl: './event-category-list.component.html',
  styleUrls: ['./event-category-list.component.css']
})
export class EventCategoryListComponent implements OnInit {

  categories$?: Observable<EventCategory[]>;

  constructor(private eventCategoryService: EventCategoryService) { }


    ngOnInit(): void {
      this.categories$ = this.eventCategoryService.getAllCategories();
    }


}

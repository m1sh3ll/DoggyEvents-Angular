import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddEventCategoryRequest } from '../models/add-event-category-request.model';
import { Observable } from 'rxjs';
import { EventCategory } from '../models/event-category.model';

@Injectable({
  providedIn: 'root'
})
export class EventCategoryService {

  constructor(private http: HttpClient) { }


  addCategory(model: AddEventCategoryRequest): Observable<void> {
    return this.http.post<void>(`https://nerdommicro-001-site3.ctempurl.com/api/eventcategories`, model
    );
  }

  getAllCategories(): Observable<EventCategory[]> {
    return this.http.get<EventCategory[]>(`https://nerdommicro-001-site3.ctempurl.com/api/eventcategories`);
  }

  getCategoryById(id: string): Observable<EventCategory> {
    return this.http.get<EventCategory>(`https://nerdommicro-001-site3.ctempurl.com/api/eventcategories/${id}`);
  }


}

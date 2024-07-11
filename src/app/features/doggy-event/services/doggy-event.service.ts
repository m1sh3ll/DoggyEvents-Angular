import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AddDoggyEvent } from '../models/add-doggy-event.model';
import { DoggyEvent } from '../models/doggy-event.model';
import { UpdateDoggyEvent } from '../models/update-doggy-event.model';


@Injectable({
  providedIn: 'root'
})
export class DoggyEventService {

  constructor(private http: HttpClient) { }

  createDoggyEvent(model: AddDoggyEvent): Observable<DoggyEvent> {
    return this.http.post<DoggyEvent>(`https://nerdommicro-001-site3.ctempurl.com/api/doggyevents`, model);
  }

  getAllDoggyEvents(): Observable<DoggyEvent[]> {
    return this.http.get<DoggyEvent[]>(`https://nerdommicro-001-site3.ctempurl.com/api/doggyevents`);
  }

  getDoggyEventById(id: string): Observable<DoggyEvent> {
    return this.http.get<DoggyEvent>(`https://nerdommicro-001-site3.ctempurl.com/api/doggyevents/${id}`);
  }

  updateDoggyEvent(id: string, updateDoggyEvent: UpdateDoggyEvent): Observable<DoggyEvent> {
    return this.http.put<DoggyEvent>(`https://nerdommicro-001-site3.ctempurl.com/api/doggyevents/${id}`,
      updateDoggyEvent
    );
  }
  
  deleteDoggyEvent(id: string): Observable<DoggyEvent> {
    return this.http.delete<DoggyEvent>(`https://nerdommicro-001-site3.ctempurl.com/api/doggyevents/${id}`
    );
  }


}

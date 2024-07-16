import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DoggyEventService } from '../services/doggy-event.service';
import { DoggyEvent } from '../models/doggy-event.model';


@Component({
  selector: 'app-doggy-event-list',
  templateUrl: './doggy-event-list.component.html',
  styleUrls: ['./doggy-event-list.component.css']
})
export class DoggyEventListComponent implements OnInit {
  doggyEvents$?: Observable<DoggyEvent[]>;

  constructor(private doggyEventService: DoggyEventService) { }

  ngOnInit(): void {
    this.doggyEvents$ = this.doggyEventService.getAllDoggyEvents();
  }
}

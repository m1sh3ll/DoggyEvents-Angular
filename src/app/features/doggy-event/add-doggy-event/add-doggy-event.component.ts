
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AddDoggyEvent } from '../models/add-doggy-event.model';
import { EventCategory } from '../../event-category/models/event-category.model';
import { DoggyEventService } from '../services/doggy-event.service';
import { EventCategoryService } from '../../event-category/services/event-category.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-doggy-event',
  templateUrl: './add-doggy-event.component.html',
  styleUrls: ['./add-doggy-event.component.css']
})
export class AddDoggyEventComponent implements OnInit {
  isHighlighted?: boolean;

  //variables
  model: AddDoggyEvent;
  eventCategories$?: Observable<EventCategory[]>;
  addDogEventSubscription?: Subscription;
  dogName?: string;
  highlightedImage: string | null;

  //constructor
  constructor(
    private doggyEventService: DoggyEventService,
    private categoryService: EventCategoryService,
    private router: Router) {

    this.model = {
      dogName: '',
      publishedDate: new Date(),
      eventCategories: []
    };

    this.highlightedImage = null;
  } //end constructor


  ngOnInit(): void {
    this.eventCategories$ = this.categoryService.getAllCategories();
  
  }

  setDog(newDogName: string, imageId: string): void {
    this.model.dogName = newDogName;
    this.highlightedImage = imageId;
  }

  onFormSubmit(): void {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    
    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;

    this.model.publishedDate = new Date(formattedDate);

    console.log(this.model.dogName);
    this.addDogEventSubscription = this.doggyEventService.createDoggyEvent(this.model).subscribe({
      next: (response) => {
        this.router.navigateByUrl('doggy-events');
      }
    })
    console.log(this.model);
  }

}



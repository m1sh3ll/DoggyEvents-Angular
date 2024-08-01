
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AddDoggyEvent } from '../models/add-doggy-event.model';
import { EventCategory } from '../../event-category/models/event-category.model';
import { DoggyEventService } from '../services/doggy-event.service';
import { EventCategoryService } from '../../event-category/services/event-category.service';


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

      

    this.model.publishedDate = new Date();

    
    this.addDogEventSubscription = this.doggyEventService.createDoggyEvent(this.model).subscribe({
      next: (response) => {
        this.router.navigateByUrl('doggy-events');
      }
    })
    console.log(this.model);
  }

}



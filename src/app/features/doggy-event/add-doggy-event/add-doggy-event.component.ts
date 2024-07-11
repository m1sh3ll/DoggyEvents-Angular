
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
  categories$?: Observable<EventCategory[]>;
  addDogEventSubscription?: Subscription;
  imageSelectSubscription?: Subscription;
  isImageSelectorVisible: boolean = false;
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
      categories: []
    };

    this.highlightedImage = null;
  } //end constructor


  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();
  
  }

  setDog(newDogName: string, imageId: string): void {
    this.model.dogName = newDogName;
    this.highlightedImage = imageId;
  }

  onFormSubmit(): void {
    console.log(this.model.dogName);
    this.addDogEventSubscription = this.doggyEventService.createDoggyEvent(this.model).subscribe({
      next: (response) => {
        this.router.navigateByUrl('doggy-events');
      }
    })
    console.log(this.model);
  }

}



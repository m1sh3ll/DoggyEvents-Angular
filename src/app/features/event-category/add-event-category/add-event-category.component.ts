import { Component, OnDestroy } from '@angular/core';
import { AddEventCategoryRequest } from '../models/add-event-category-request.model';
import { Subscription } from 'rxjs';
import { EventCategoryService } from '../services/event-category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event-category',
  templateUrl: './add-event-category.component.html',
  styleUrls: ['./add-event-category.component.css']
})
export class AddEventCategoryComponent implements OnDestroy {

  model: AddEventCategoryRequest;
  private addCategorySubscription?: Subscription;

  constructor(private categoryService: EventCategoryService,
    private router: Router) {
    this.model = {
      name: ''
    };
  }

  onFormSubmit() {
    this.addCategorySubscription = this.categoryService.addCategory(this.model)
      .subscribe({
        next: (response) => {
          console.log("Post was successful!");
          this.router.navigateByUrl('event-categories');
        },
        error: (error) => {
          console.log("An error occurred");
        }
      });
  }

  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }

}

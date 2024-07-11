import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventCategory } from '../models/event-category.model';
import { EventCategoryService } from '../services/event-category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateEventCategoryRequest } from '../models/update-category-request.model';

@Component({
  selector: 'app-edit-event-category',
  templateUrl: './edit-event-category.component.html',
  styleUrls: ['./edit-event-category.component.css']
})
export class EditEventCategoryComponent implements OnInit, OnDestroy {

  id: string | null = null;
  paramsSubscription?: Subscription;
  editCategorySubscription?: Subscription;
  deleteCategorySubscription?: Subscription;

  category?: EventCategory;

  constructor(
    private categoryService: EventCategoryService,
    private route: ActivatedRoute,
    private router: Router) {
  };

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap
      .subscribe({
        next: (params) => {
          this.id = params.get('id');

          if (this.id) {
            //get the data from the API
            this.categoryService.getCategoryById(this.id)
              .subscribe({
                next: (response) => {
                  this.category = response;
                },
                error: (error) => {
                  console.log("An error occurred");
                }
              })
          }
          console.log("Get was successful!")
        },
        error: (error) => {
          console.log("An error occurred")
        }
      });
  }


  onFormSubmit(): void {
    const updateCategoryRequest: UpdateEventCategoryRequest = {
      name: this.category?.name ?? ''
    };

    //pass this object to service
    if (this.id) {
      this.editCategorySubscription = this.categoryService.updateCategory(this.id, updateCategoryRequest)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('event-categories');
          }
        })
    }

  }

  onDelete(): void {
    if (this.id) {
      this.deleteCategorySubscription = this.categoryService.deleteCategory(this.id)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('event-categories');
          }
        })
    }
  }
 


  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.editCategorySubscription?.unsubscribe();
    this.deleteCategorySubscription?.unsubscribe();
  }

}

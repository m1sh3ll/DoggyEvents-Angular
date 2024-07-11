import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventCategoryComponent } from './add-event-category.component';

describe('AddEventCategoryComponent', () => {
  let component: AddEventCategoryComponent;
  let fixture: ComponentFixture<AddEventCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEventCategoryComponent]
    });
    fixture = TestBed.createComponent(AddEventCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

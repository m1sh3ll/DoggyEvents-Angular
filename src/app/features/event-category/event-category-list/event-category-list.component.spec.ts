import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCategoryListComponent } from './event-category-list.component';

describe('EventCategoryListComponent', () => {
  let component: EventCategoryListComponent;
  let fixture: ComponentFixture<EventCategoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventCategoryListComponent]
    });
    fixture = TestBed.createComponent(EventCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

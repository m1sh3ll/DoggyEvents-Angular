import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventCategoryComponent } from './edit-event-category.component';

describe('EditEventCategoryComponent', () => {
  let component: EditEventCategoryComponent;
  let fixture: ComponentFixture<EditEventCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEventCategoryComponent]
    });
    fixture = TestBed.createComponent(EditEventCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

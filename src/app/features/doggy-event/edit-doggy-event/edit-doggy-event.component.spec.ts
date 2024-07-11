import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDoggyEventComponent } from './edit-doggy-event.component';

describe('EditDoggyEventComponent', () => {
  let component: EditDoggyEventComponent;
  let fixture: ComponentFixture<EditDoggyEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDoggyEventComponent]
    });
    fixture = TestBed.createComponent(EditDoggyEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

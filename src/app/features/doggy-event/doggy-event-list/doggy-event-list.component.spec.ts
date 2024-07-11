import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggyEventListComponent } from './doggy-event-list.component';

describe('DoggyEventListComponent', () => {
  let component: DoggyEventListComponent;
  let fixture: ComponentFixture<DoggyEventListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoggyEventListComponent]
    });
    fixture = TestBed.createComponent(DoggyEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

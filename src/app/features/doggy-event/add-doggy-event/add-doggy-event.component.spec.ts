import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDoggyEventComponent } from './add-doggy-event.component';



describe('AddDoggyEventComponent', () => {
  let component: AddDoggyEventComponent;
  let fixture: ComponentFixture<AddDoggyEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDoggyEventComponent]
    });
    fixture = TestBed.createComponent(AddDoggyEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

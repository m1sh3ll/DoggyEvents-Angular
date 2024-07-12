import { EventCategory } from "../../event-category/models/event-category.model";


export interface DoggyEvent {
  id: string;
  dogName: string;  
  publishedDate: Date;  
  eventCategories: EventCategory[];
}

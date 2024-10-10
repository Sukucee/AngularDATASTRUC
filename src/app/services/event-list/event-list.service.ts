import { Injectable } from '@angular/core';
import EventList from '../../Database/EventList';
@Injectable({
  providedIn: 'root'
})
export class EventListService {
  private event: EventList[]=[];

  addEvent(event: string, organizer: string, fee: number):void
  {this.event.push({
    event:event,
    organizer:organizer,
    fee:fee
  })
}
  getEvent():EventList[]{
    return this.event;
  }
  constructor() { }
}

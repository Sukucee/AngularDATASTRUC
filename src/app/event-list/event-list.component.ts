import { Component } from '@angular/core';
import EventList from '../Database/EventList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventListService } from '../services/event-list/event-list.service';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  	EventList=[] as EventList [];
	constructor(private eventService: EventListService){
		this.EventList=this.eventService.getEvent();
	}
	event: string = '';
	organizer: string = '';
	fee: number = 0;

	addEvnt(): void {
		this.eventService.addEvent(
			this.event,
			this.organizer,
			this.fee,
		);

		this.fee = 10000;
		this.event = '';
		this.organizer = '';
	}
}

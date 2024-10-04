import { Component } from '@angular/core';
import EventList from '../Database/EventList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  Event: EventList[] = [];
	event: string = '';
	organizer: string = '';
	fee: number = 0;

	addEvnt(): void {
		this.Event.push({
			event: this.event,
			organizer: this.organizer,
			fee: this.fee,
		});

		this.fee = 10000;
		this.event = '';
		this.organizer = '';
	}
}

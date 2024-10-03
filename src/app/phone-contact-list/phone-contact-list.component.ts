import { Component } from '@angular/core';
import PhoneContactsList from '../Database/PhoneContactList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-phone-contact-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './phone-contact-list.component.html',
  styleUrl: './phone-contact-list.component.css'
})
export class PhoneContactListComponent {
  phone: PhoneContactsList[] = [];
	
	name: string = '';
	relations: string = '';
	contact: number = 0;

	addContacts(): void {
		this.phone.push({
			name: this.name,
			relations: this.relations,
			contact: this.contact,
		});

		this.contact = 0;
		this.relations = '';
		this.name = '';
	}
}

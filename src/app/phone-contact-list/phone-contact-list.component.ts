import { Component } from '@angular/core';
import PhoneContactsList from '../Database/PhoneContactList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhoneContactListService } from '../services/phone-contact-list/phone-contact-list.service';

@Component({
  selector: 'app-phone-contact-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './phone-contact-list.component.html',
  styleUrl: './phone-contact-list.component.css'
})
export class PhoneContactListComponent {
  phone = [] as PhoneContactsList [];
  constructor(private phoneService: PhoneContactListService)
  {this.phone=this.phoneService.getPhoneContacts();}
	
	name: string = '';
	relations: string = '';
	contact: number = 0;

	addContacts(): void {
		this.phoneService.addPhoneContacts(
			this.name,
			this.relations,
			this.contact,
		);

		this.contact = 0;
		this.relations = '';
		this.name = '';
	}
}

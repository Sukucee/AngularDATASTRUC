import { Injectable } from '@angular/core';
import PhoneContactsList from '../../Database/PhoneContactList';
@Injectable({
  providedIn: 'root'
})
export class PhoneContactListService {
  private phone: PhoneContactsList[]=[];

  addPhoneContacts(name: string, relations: string, contact: number):void
  {this.phone.push({
    name:name,
    relations:relations,
    contact:contact
  });
}
  getPhoneContacts():PhoneContactsList[]{
    return this.phone;
  }
  constructor() { }
}

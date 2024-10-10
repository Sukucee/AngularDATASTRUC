import { Injectable } from '@angular/core';
import LanguageList from '../../Database/LanguageList';
@Injectable({
  providedIn: 'root'
})
export class LanguageListService {
  private language: LanguageList[]=[];

  addLanguage(name: string, country: string):void
  {this.language.push({
    name:name,
    country:country
  });
}
  getLanguage(): LanguageList[]{
    return this.language;
  }
  constructor() { }
}

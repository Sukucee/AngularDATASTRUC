import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import LanguageList from '../Database/LanguageList';
import { LanguageListService } from '../services/language-list/language-list.service';

@Component({
  selector: 'app-language-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent {
  LanguageList=[] as LanguageList[];
  constructor(private languageService: LanguageListService)
  {this.LanguageList=this.languageService.getLanguage();}
	    name: string = '';
      country: string = '';

	addLang(): void {
		this.languageService.addLanguage(
			this.name,
      this.country,
		);

		this.name = '';
		this.country = '';
}
}

import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import LanguageList from '../Database/LanguageList';

@Component({
  selector: 'app-language-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent {
  language: LanguageList[] = [];
	name: string = '';
  country: string = '';

	addLang(): void {
		this.language.push({
			name: this.name,
      country: this.country,
		});

		this.name = '';
		this.country = '';
}
}

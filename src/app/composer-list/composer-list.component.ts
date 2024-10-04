import { Component } from '@angular/core';
import ComposerList from '../Database/ComposerList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-composer-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})
export class ComposerListComponent {
  composer: ComposerList[] = [];
	name: string = '';
	works: string = '';

	addArt(): void {
		this.composer.push({
			name: this.name,
      works:this.works,
		});
    this.works = '';
		this.name = '';
	}
}

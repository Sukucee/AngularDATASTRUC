import { Component } from '@angular/core';
import ComposerList from '../Database/ComposerList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComposerListService } from '../services/composer-list/composer-list.service';

@Component({
  selector: 'app-composer-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})
export class ComposerListComponent {
  ComposerList=[] as ComposerList[];
  constructor(private composerService: 
    ComposerListService){
      this.ComposerList=this.composerService.getComposer();
    }
  
	name: string = '';
	works: string = '';

	addArt(): void {
		this.composerService.addComposer(
			this.name,
      this.works,
		);
    this.works = '';
		this.name = '';
	}
}

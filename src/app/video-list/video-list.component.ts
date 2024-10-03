import { Component } from '@angular/core';
import VideoList from '../Database/VideoList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css'
})
export class VideoListComponent {
  video: VideoList[] = [];
	title: string = '';
	uploader: string = '';

	addVideo(): void {
		this.video.push({
			title: this.title,
			uploader: this.uploader,
		});

		this.title = '';
		this.uploader = '';
	}
}

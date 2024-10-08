import { Component } from '@angular/core';
import VideoList from '../Database/VideoList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VideoListService } from '../services/video-list/video-list.service';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css'
})
export class VideoListComponent {
  video=[] as VideoList [];
  constructor (private videoService: VideoListService)
  {this.video=this.videoService.getVideo();}
	title: string = '';
	uploader: string = '';

	addVideo(): void {
		this.videoService.addVideo(
			this.title,
			this.uploader,
		);

		this.title = '';
		this.uploader = '';
	}
}

import { Injectable } from '@angular/core';
import VideoList from '../../Database/VideoList';
@Injectable({
  providedIn: 'root'
})
export class VideoListService {
  private video: VideoList[]=[];

  addVideo(title: string, uploader: string):void
  {this.video.push({
    title:title,
    uploader:uploader
  });
}
  getVideo():VideoList[]
  {return this.video;}
  constructor() { }
}

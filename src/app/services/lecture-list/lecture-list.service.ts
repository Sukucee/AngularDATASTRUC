import { Injectable } from '@angular/core';
import LectureList from '../../Database/LectureList';
@Injectable({
  providedIn: 'root'
})
export class LectureListService {
  private lecture: LectureList[]=[];

  
  addLecture(title: string, lecturer: string, date: string, time: string, duration:string, location: string ):void
  {this.lecture.push({
    title:title,
    lecturer:lecturer,
    date:date,
    time:time,
    duration:duration,
    location:location
  });
}
  getLecture():LectureList[]{
    return this.lecture;
  }  
  constructor() { }
}

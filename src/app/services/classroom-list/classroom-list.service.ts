import { Injectable } from '@angular/core';
import ClassroomList from '../../Database/ClassroomList';
@Injectable({
  providedIn: 'root'
})
export class ClassroomListService {
  private classroom: ClassroomList[]=[];
  addClassroom(section:string, building:number, teacher:string, grade:number):void
  {this.classroom.push({
      section:section,
      building:building,
      teacher:teacher,
      grade:grade,
    });
  }

  getClassroom():ClassroomList[]{
    return this.classroom;
  }
  constructor() { }
}

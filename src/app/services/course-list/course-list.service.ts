import { Injectable } from '@angular/core';
import CourseList from '../../Database/CourseList';
@Injectable({
  providedIn: 'root'
})
export class CourseListService {
private course: CourseList[]=[];

addCourse(id: string, name: string):void{this.course.push({
  id:id,
  name:name,
});
}
  getCourse():CourseList[]{
    return this.course;
  }
  constructor() { }
}

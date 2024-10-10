import { Injectable } from '@angular/core';
import SubjectList from '../../Database/SubjectList';
@Injectable({
  providedIn: 'root'
})
export class SubjectListService {
  private subject: SubjectList[]=[];

  addSubject(unit: number, name: string, proctor: string, duration: string):void
  {this.subject.push({
      unit:unit,
      name:name,
      proctor:proctor,
      duration:duration
  });
}
  getSubject():SubjectList[]
  {return this.subject;}
  constructor() { }
}

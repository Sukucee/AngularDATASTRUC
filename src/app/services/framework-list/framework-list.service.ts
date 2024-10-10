import { Injectable } from '@angular/core';
import FrameworkList from '../../Database/FrameworkList';
@Injectable({
  providedIn: 'root'
})
export class FrameworkListService {
  private framework: FrameworkList[]=[];

  addFramework(name: string, type: string, purpose: string):void
  {this.framework.push({
    name:name,
    type:type,
    purpose:purpose
  })
}
  getFramework():FrameworkList[]{
    return this.framework;
  }
  constructor() { }
}

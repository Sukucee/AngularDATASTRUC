import { Injectable } from '@angular/core';
import DevToolList from '../../Database/DevToolList';
@Injectable({
  providedIn: 'root'
})
export class DevelopersToolListService {
  private devtools: DevToolList[]=[];

  addDevTool(name: string, type: string, purpose: string):void{
    this.devtools.push({
      name:name,
      type:type,
      purpose:purpose
    })
  }
  getDevTool():DevToolList[]{
    return this.devtools;
  }

  constructor() { }
}

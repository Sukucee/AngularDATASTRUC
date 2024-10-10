import { Injectable } from '@angular/core';
import PresentationList from '../../Database/PresentationList';
@Injectable({
  providedIn: 'root'
})
export class PresentationListService {
  private presentation: PresentationList[]=[];

  addPresentation(title: string, content: string, presenter: string):void
  {this.presentation.push({
    title:title,
    content:content,
    presenter:presenter    
  });
}
  getPresentation():PresentationList[]{
    return this.presentation;
  }
  constructor() { }
}

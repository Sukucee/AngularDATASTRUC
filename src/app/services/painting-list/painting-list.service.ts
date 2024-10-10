import { Injectable } from '@angular/core';
import PaintingList from '../../Database/PaintingList';
@Injectable({
  providedIn: 'root'
})
export class PaintingListService {
  private painting: PaintingList[]=[];

  addPainting(title: string, style: string):void
  {this.painting.push({
      title:title,
      style:style
  });
}
  getPainting():PaintingList[]{
    return this.painting;
  }
  constructor() { }
}

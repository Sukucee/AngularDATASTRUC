import { Injectable } from '@angular/core';
import ComposerList from '../../Database/ComposerList';
@Injectable({
  providedIn: 'root'
})
export class ComposerListService {
  private composer: ComposerList[]=[];

  addComposer(name: string, works: string):void
  {this.composer.push({
    name:name,
    works:works,
  });
}
getComposer():ComposerList[]{
  return this.composer;
}
  constructor() { }
}

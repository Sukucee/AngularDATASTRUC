import { Injectable } from '@angular/core';
import BuildingList from '../../Database/BuildingList';
@Injectable({
  providedIn: 'root'
})
export class BuildingListService {
private build: BuildingList[]=[];
addBuild(type: string, feature: string, purpose: string ): void {this.build.push({
  type: type,
  feature: feature,
  purpose: purpose,
});

}
getBuild():BuildingList[]{
  return this.build;

}
  constructor() { }
}

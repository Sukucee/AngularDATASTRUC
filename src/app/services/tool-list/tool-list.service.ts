import { Injectable } from '@angular/core';
import ToolList from '../../Database/ToolList';
@Injectable({
  providedIn: 'root'
})
export class ToolListService {
private tool: ToolList[]=[];

	
  addTool(id: string, name: string, type: string, price: number):void
{this.tool.push({
  id:id,
  name:name,
  type:type,
  price:price
});
}
  getTool():ToolList[]{
    return this.tool;
  }
  constructor() { }
}

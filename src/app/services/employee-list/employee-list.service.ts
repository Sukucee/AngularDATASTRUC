import { Injectable } from '@angular/core';
import EmployeeList from '../../Database/EmployeeList';
@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
  private employee: EmployeeList[]=[];

  addEmployee(id: string, name: string, position: string, age: number):void
    {this.employee.push({
      id:id,
      name:name,
      position:position,
      age:age,
    });
  }
    getEmployee():EmployeeList[]{
      return this.employee;
    }
  constructor() { }
}

import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import EmployeeList from '../Database/EmployeeList';
import { EmployeeListService } from '../services/employee-list/employee-list.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
	EmployeeList=[] as EmployeeList [];
	constructor(private employeeService: EmployeeListService){
		this.EmployeeList=this.employeeService.getEmployee();
	}
	id: string = '';
	name: string = '';
	position: string = '';
	age: number = 18;

	addEmployee(): void {
		this.employeeService.addEmployee(
			this.id,
			this.name,
			this.position,
			this.age,
		);

		this.age = 18;
		this.position = '';
		this.id = '';
		this.name = '';
	}
}

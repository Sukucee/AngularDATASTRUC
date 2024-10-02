import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

export const routes: Routes = [

    {
    title: 'Student List',
		component: StudentListComponent,
		path: 'student-list',
	},
	{
		title: 'Employee List',
			component: EmployeeListComponent,
			path: 'employee-list',
		},


];

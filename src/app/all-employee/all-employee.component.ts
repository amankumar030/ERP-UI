import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css']
})
export class AllEmployeeComponent implements OnInit {

  constructor( private empService:EmployeeService) { 
    
  }
  employee:Employee[]=[];
  ngOnInit(): void {
    this.empService.getAllEmployee().subscribe((data)=>{this.employee=data,
    console.log(data)},
    (error)=>console.log(error))   
  
  }

}

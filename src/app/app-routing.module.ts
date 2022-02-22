import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';


const routes: Routes = [
  { path: 'all-employee', component: AllEmployeeComponent },
  {path:'add-employee',component:NewEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartementComponent} from "./departement/departement.component";
import {SalariesComponent} from "./salaries/salaries.component";

const routes: Routes = [
  {path:'departement', component:DepartementComponent},
  {path:'salaries', component:SalariesComponent},
  {path:'salaries/:id', component:SalariesComponent},
  {path:'refreshSalaries', component:SalariesComponent},
  {path:'refresh', component:DepartementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

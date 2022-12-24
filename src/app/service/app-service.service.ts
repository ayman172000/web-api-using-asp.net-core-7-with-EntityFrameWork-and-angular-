import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Departement, DepartementReq, Salarie, SalariesReq, UpdateDepReq, updateSalarieReq} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http:HttpClient) { }

  public getAllDepartement()
  {
    return this.http.get<Departement[]>("http://localhost:5213/api/departements");
  }

  public saveDepartement(req:DepartementReq)
  {
    return this.http.post<Departement>("http://localhost:5213/api/departements",req);
  }

  public updateDepartement(req:UpdateDepReq)
  {
    return this.http.put("http://localhost:5213/api/departements/"+req.departementId,req)
  }

  public deleteDepartement(id:number)
  {
    return this.http.delete("http://localhost:5213/api/departements/"+id)
  }


  public saveSalarie(req:SalariesReq)
  {
    return this.http.post("http://localhost:5213/api/Salaries",req)
  }

  public updateSalarie(req:updateSalarieReq)
  {
    return this.http.put("http://localhost:5213/api/Salaries/"+req.id,req)
  }

  public deleteSalarie(id:number)
  {
    return this.http.delete("http://localhost:5213/api/Salaries/"+id)
  }


  public getAllSalaries()
  {
    return this.http.get<Salarie[]>("http://localhost:5213/api/Salaries")
  }


  public getAllSalariesBydepartement(id:number)
  {
    return this.http.get<Salarie[]>("http://localhost:5213/api/Salaries/dep/"+id)
  }
}

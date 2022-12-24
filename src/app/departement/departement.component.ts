import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Departement} from "../model/model";
import {AppServiceService} from "../service/app-service.service";
import {DialogDepartementComponent} from "../dialog-departement/dialog-departement.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Location} from "@angular/common";


@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit{
  displayedColumns: string[] = ['code', 'name', 'action'];
  dataSource = new MatTableDataSource<Departement>();


  constructor(private service:AppServiceService,
              private dialog:MatDialog,
              private router:Router,
              private location:Location) {
  }

  ngOnInit(): void {
    this.service.getAllDepartement().subscribe(data=>{
      this.dataSource.data=data
    })
  }


  addData() {
    this.dialog.open(DialogDepartementComponent,{
      width:'30%'
    })
  }

  removeData() {

  }

  Delete(element:Departement) {
    this.service.deleteDepartement(element.departementId).subscribe(data=>{
      this.refresh();
    },
      error => {
      alert(error.error.message)
      })
  }
  refresh(): void {
    this.router.navigateByUrl("refresh", { skipLocationChange: true }).then(() => {
      this.router.navigate([decodeURI(this.location.path())]);
    });
  }
  Edit(element:Departement) {
    this.dialog.open(DialogDepartementComponent,{
      width:'30%',
      data:element
    })
  }

  listeSalarieDep(row: Departement) {
    this.router.navigateByUrl("salaries/"+row.departementId)
  }
}

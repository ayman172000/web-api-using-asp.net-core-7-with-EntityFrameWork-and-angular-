import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Salarie} from "../model/model";
import {AppServiceService} from "../service/app-service.service";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {DialogDepartementComponent} from "../dialog-departement/dialog-departement.component";
import {DialogSalariesComponent} from "../dialog-salaries/dialog-salaries.component";


@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.css']
})
export class SalariesComponent implements OnInit{
  displayedColumns: string[] = ['lname', 'fname', 'age','salaire','departement','action'];
  dataSource = new MatTableDataSource<Salarie>();
  departementId!:number

  constructor(private service:AppServiceService,
              private dialog:MatDialog,
              private router:Router,
              private location:Location,
              private route:ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.departementId=this.route.snapshot.params['id']
    if(this.departementId)
    {
      this.service.getAllSalariesBydepartement(this.departementId).subscribe(data=>{
        this.dataSource.data=data
      })
    }
    else
    {
      this.service.getAllSalaries().subscribe(data=>{
        this.dataSource.data=data
      })
    }
  }

  addData() {
    this.dialog.open(DialogSalariesComponent,{
      width:'30%'
    })
  }

  removeData() {

  }

  Delete(element:Salarie) {
    this.service.deleteSalarie(element.departementId).subscribe(data=>{
        this.refresh();
      },
      error => {
        alert(error.error.message)
      })
  }

  refresh(): void {
    this.router.navigateByUrl("refreshSalaries", { skipLocationChange: true }).then(() => {
      this.router.navigate([decodeURI(this.location.path())]);
    });
  }

  Edit(element:Salarie) {
    this.dialog.open(DialogSalariesComponent,{
      width:'30%',
      data:element
    })
  }


}

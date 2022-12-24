import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DepartementReq, UpdateDepReq} from "../model/model";
import {AppServiceService} from "../service/app-service.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Location} from "@angular/common";


@Component({
  selector: 'app-dialog-departement',
  templateUrl: './dialog-departement.component.html',
  styleUrls: ['./dialog-departement.component.css']
})
export class DialogDepartementComponent implements OnInit{
  actionBtn: string="Save";
  element: boolean=true;
  departementForm!: FormGroup

  constructor(private fb:FormBuilder,
              private service:AppServiceService,
              private dialogRef:MatDialogRef<any>,
              private router:Router,
              private location:Location,
              @Inject(MAT_DIALOG_DATA) public handleDepartement:any) {
  }

  ngOnInit(): void {
    this.departementForm=this.fb.group(
      {
        code:['',Validators.required],
        name:['',Validators.required]
      }
    )
    if(this.handleDepartement)
    {
      this.actionBtn='Update'
      this.departementForm.controls['code'].setValue(this.handleDepartement.codeDep)
      this.departementForm.controls['name'].setValue(this.handleDepartement.nameDep)
    }
  }

  addDepartement() {
    let code=this.departementForm.controls['code'].value;
    let name=this.departementForm.controls['name'].value;
    let req=new DepartementReq(code,name)
    this.service.saveDepartement(req).subscribe(data=>{
      alert("departement saved succ")
        this.departementForm.reset();
        this.dialogRef.close();
        this.refresh()
    },
      error =>
    alert(error.error.message))
  }

  refresh(): void {
    this.router.navigateByUrl("refresh", { skipLocationChange: true }).then(() => {
      this.router.navigate([decodeURI(this.location.path())]);
    });
  }

  updateDepartement() {
    let code=this.departementForm.controls['code'].value;
    let name=this.departementForm.controls['name'].value;
    let req=new UpdateDepReq(Number(this.handleDepartement.departementId),code,name)
    this.service.updateDepartement(req).subscribe(data=>{
        alert("departement saved succ")
        this.departementForm.reset();
        this.dialogRef.close();
        this.refresh()
      },
      error =>
        alert(error.error.message))
  }


}

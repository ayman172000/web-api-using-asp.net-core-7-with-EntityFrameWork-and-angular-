import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Departement, SalariesReq, updateSalarieReq} from "../model/model";
import {AppServiceService} from "../service/app-service.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-dialog-salaries',
  templateUrl: './dialog-salaries.component.html',
  styleUrls: ['./dialog-salaries.component.css']
})
export class DialogSalariesComponent implements OnInit{

  actionBtn: string="Save";
  element: boolean=true;
  salariesForm!: FormGroup
  dep!: Departement[];


  constructor(private service:AppServiceService,
              private fb:FormBuilder,
              private dialogRef:MatDialogRef<any>,
              private router:Router,
              private location:Location,
              @Inject(MAT_DIALOG_DATA) public handleClient:any) {
  }

  ngOnInit(): void {


    this.salariesForm=this.fb.group({
      lname:['',Validators.required],
      fname:['',Validators.required],
      age:['',[Validators.required,Validators.min(18),Validators.max(65)]],
      salaire:['',[Validators.required,Validators.min(2900)]],
      dep:['',Validators.required],
    })
    this.service.getAllDepartement().subscribe(data=>{
      this.dep=data
    })
    if(this.handleClient)
    {
      this.actionBtn="Update"
      this.salariesForm.controls['lname'].setValue(this.handleClient.lastName);
      this.salariesForm.controls['fname'].setValue(this.handleClient.firstName);
      this.salariesForm.controls['age'].setValue(this.handleClient.age);
      this.salariesForm.controls['salaire'].setValue(this.handleClient.salaire);
    }
  }

  addSalaries() {
    let lname=this.salariesForm.controls['lname'].value;
    let fname=this.salariesForm.controls['fname'].value;
    let age=this.salariesForm.controls['age'].value;
    let salaire=this.salariesForm.controls['salaire'].value;
    let dep=Number(this.salariesForm.controls['dep'].value);

    let req=new SalariesReq(lname,fname,age,salaire,dep)
    this.service.saveSalarie(req).subscribe(data=>{
        alert("salarie saved succ")
        this.salariesForm.reset();
        this.dialogRef.close();
        this.refresh()
      },
      error =>
        alert(error.error.message))
  }

  updateSalaries() {
    let lname=this.salariesForm.controls['lname'].value;
    let fname=this.salariesForm.controls['fname'].value;
    let age=this.salariesForm.controls['age'].value;
    let salaire=this.salariesForm.controls['salaire'].value;
    let req = new updateSalarieReq(Number(this.handleClient.id),lname,fname,age,salaire)
    this.service.updateSalarie(req).subscribe(data=>{
        alert("departement saved succ")
        this.salariesForm.reset();
        this.dialogRef.close();
        this.refresh()
      },
      error =>
        alert(error.error.message))
  }

  refresh(): void {
    this.router.navigateByUrl("refreshSalaries", { skipLocationChange: true }).then(() => {
      this.router.navigate([decodeURI(this.location.path())]);
    });
  }
}

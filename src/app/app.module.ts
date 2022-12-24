import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartementComponent } from './departement/departement.component';
import {HttpClientModule} from "@angular/common/http";

import { DialogDepartementComponent } from './dialog-departement/dialog-departement.component';
import {ReactiveFormsModule} from "@angular/forms";

import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from '@angular/material/table';
import { DialogSalariesComponent } from './dialog-salaries/dialog-salaries.component';
import { SalariesComponent } from './salaries/salaries.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartementComponent,
    DialogDepartementComponent,
    DialogSalariesComponent,
    SalariesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

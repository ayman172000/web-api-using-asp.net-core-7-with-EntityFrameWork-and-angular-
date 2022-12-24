import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDepartementComponent } from './dialog-departement.component';

describe('DialogDepartementComponent', () => {
  let component: DialogDepartementComponent;
  let fixture: ComponentFixture<DialogDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDepartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

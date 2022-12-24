export class Departement{
  departementId:number
  nameDep	: string
  codeDep	: string

  constructor(departementId: number, nameDep: string, codeDep: string) {
    this.departementId = departementId;
    this.nameDep = nameDep;
    this.codeDep = codeDep;
  }
}

export class DepartementReq
{
  nameDep	: string
  codeDep	: string

  constructor(nameDep: string, codeDep: string) {
    this.nameDep = nameDep;
    this.codeDep = codeDep;
  }
}
export class UpdateDepReq {
  departementId: number
  nameDep: string
  codeDep: string


  constructor(departementId: number, nameDep: string, codeDep: string) {
    this.departementId = departementId;
    this.nameDep = nameDep;
    this.codeDep = codeDep;
  }
}

export class Salarie {
  id: number
  lastName: string
  firstName: string
  age: number
  salaire: number
  departementId: number
  departement: Departement

  constructor(id: number, lastName: string, firstName: string, age: number, salaire: number, departementId: number, departement: Departement) {
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
    this.age = age;
    this.salaire = salaire;
    this.departementId = departementId;
    this.departement = departement;
  }
}

export class SalariesReq{
  lastName	: string
  firstName	:string
  age	: number
  salaire	: number
  departementId	: number

  constructor(lastName: string, firstName: string, age: number, salaire: number, departementId: number) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.age = age;
    this.salaire = salaire;
    this.departementId = departementId;
  }
}

export class updateSalarieReq{
  id : number
  lastName :	string
  firstName	: string
  age	: number
  salaire	: number


  constructor(id: number, lastName: string, firstName: string, age: number, salaire: number) {
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
    this.age = age;
    this.salaire = salaire;
  }
}


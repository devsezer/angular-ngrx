export class Company {
  id: string;
  companyName: string;
  description: string;
  parentCompanyId: number;
  subCompanies?: Company[];

  constructor(parentId: number ) {
    this.parentCompanyId = parentId;
  }
}

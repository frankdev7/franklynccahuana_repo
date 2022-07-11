export class CompanyDto {
  constructor(name: string, status: number) {
    this.name = name;
    this.status = status;
  }

  name: string;
  status: number;
}
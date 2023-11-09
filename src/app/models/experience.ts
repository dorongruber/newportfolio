export class Experience {

  company: string;
  date: string;
  role: string;
  responsibilities: string[];

  constructor(company: string, date: string, role: string, responsibilities: string[]) {
    this.company = company;
    this.date = date;
    this.role = role;
    this.responsibilities = responsibilities;
  }
}

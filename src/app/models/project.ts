export class Project {
  constructor(
    public name: string,
    public aboutProject: string[],
    public gitUrl: string,
    public frontTech: string[],
    public backTech: string[],
    public images: string[],
  ) {}
}

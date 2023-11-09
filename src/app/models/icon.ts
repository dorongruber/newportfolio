export class Icon {
  name: string;
  index: number;
  componentRef: any;

  constructor(name: string, index: number, componentRef: any) {
    this.name = name;
    this.index = index;
    this.componentRef = componentRef;
  }
}

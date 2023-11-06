import { Type } from "@angular/core";

export class TemplateComponent {
  constructor(public bodyComponent: Type<any>,public index: number) {}
}

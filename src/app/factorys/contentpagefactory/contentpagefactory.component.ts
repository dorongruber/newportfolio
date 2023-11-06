import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ComponentDirective } from 'src/app/directives/component.directive';
import { TemplateComponent } from 'src/app/models/template-component';

@Component({
  selector: 'app-contentpagefactory',
  templateUrl: './contentpagefactory.component.html',
  styleUrls: ['./contentpagefactory.component.css']
})
export class ContentpagefactoryComponent implements OnChanges {
  @Input() componentRef: TemplateComponent | undefined;
  @ViewChild(ComponentDirective, {static: true}) bodyHost: ComponentDirective | undefined;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
      if(changes) {
        this.initSelectedComponent();
      }
  }

  initSelectedComponent() {
    if (this.componentRef && this.bodyHost) {
      this.bodyHost.viewContainerRef.clear();
      this.bodyHost.viewContainerRef.createComponent(this.componentRef.bodyComponent);
    }
  }

}

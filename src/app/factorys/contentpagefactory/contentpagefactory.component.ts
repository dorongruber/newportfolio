import { Component, ComponentFactoryResolver, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ComponentDirective } from 'src/app/directives/component.directive';
import { TemplateComponent } from 'src/app/models/template-component';

@Component({
  selector: 'app-contentpagefactory',
  templateUrl: './contentpagefactory.component.html',
  styleUrls: ['./contentpagefactory.component.css']
})
export class ContentpagefactoryComponent implements OnChanges {
  @Input() componentRef: TemplateComponent | undefined;
  @Input() selectedPage: number;
  @ViewChild(ComponentDirective, {static: true}) bodyHost: ComponentDirective | undefined;

  width: number;
  index =0;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.selectedPage = 0;
    this.width = window.innerWidth - 45;
   }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes) {
        this.initSelectedComponent();
      }
  }

  initSelectedComponent() {
    if (this.componentRef && this.bodyHost) {
      const bodyComponentFactory =
      this.componentFactoryResolver.resolveComponentFactory(this.componentRef.bodycomponent);
      this.index = this.componentRef.index;
      const bodyViewContainerRef = this.bodyHost.viewContainerRef;
      bodyViewContainerRef.clear();

      const selectedComponenRef = bodyViewContainerRef.createComponent(bodyComponentFactory);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { TemplateComponent } from 'src/app/models/template-component';
import { ControlService } from 'src/app/services/control.service';
import { SelectedComponentService } from 'src/app/services/selectcomponent.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  selectedComponent: TemplateComponent;
  elementRef: HTMLElement | null = null;
  constructor(
    private controlService: ControlService,
    private selectedComponentService: SelectedComponentService
  ) {
    const index = this.controlService.getCurrentPage();
    this.selectedComponent = this.selectedComponentService.InitComponentRef(index);

    window.addEventListener('unload', (event) => {
      window.localStorage.removeItem('currentPageIndex');
    });
  }

  ngOnInit() {
    this.elementRef = document.querySelector('.sidenav-container');

    this.controlService.pageChanged
    .subscribe(page => {
      this.ShowPage(page);
    });
  }

  ShowPage(index: number) {
    if(this.elementRef) {
      this.elementRef.classList.toggle('loadscreen');
      setTimeout(() => {
        this.selectedComponent = this.selectedComponentService.InitComponentRef(index);
        this.elementRef!.classList.toggle('loadscreen');
      }, 500);
    }
  }
}

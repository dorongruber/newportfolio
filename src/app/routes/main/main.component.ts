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

  selectedIndex = 0;
  windowWidth: number = 0;
  localStorage = window.localStorage;
  selectedComponent: TemplateComponent;
  elementRef: any;
  constructor(
    private controlService: ControlService,
    private selectedComponentService: SelectedComponentService
  ) {
    this.selectedIndex = this.controlService.getCurrentPage();
    this.selectedComponent = this.selectedComponentService.InitComponentRef(this.selectedIndex);
  }

  ngOnInit() {
    this.windowWidth = window.innerWidth - 45;
    this.elementRef =document.querySelector('.sidenav-container');
    this.controlService.setCurrentPage(this.selectedIndex);
    this.ShowPage();

    this.controlService.pageChanged
    .subscribe(page => {
      this.selectedIndex = page;
      this.ShowPage();
    });

    window.addEventListener('unload', (event) => {
      window.localStorage.removeItem('currentPageIndex');
    });
  }



  ShowPage() {
    if(this.elementRef) {
      this.elementRef.classList.toggle('loadscreen');
      setTimeout(() => {
        this.selectedComponent = this.selectedComponentService.InitComponentRef(this.selectedIndex);
        if(this.elementRef)
          this.elementRef.classList.toggle('loadscreen');
      }, 1300);
      this.localStorage.removeItem('currentPageIndex');
    }
  }
}

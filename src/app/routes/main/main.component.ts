import { Component, OnInit } from '@angular/core';
import { LandingComponent } from 'src/app/components/landing/landing.component';
import { Icon } from 'src/app/models/icon';
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
  constructor(
    private controlService: ControlService,
    private selectedComponentService: SelectedComponentService
  ) {
    this.selectedComponent = this.selectedComponentService.getLandingPage();
  }

  ngOnInit() {
    this.windowWidth = window.innerWidth - 45;

    this.controlService.setCurrentPage(this.selectedIndex);
    this.ShowPage(this.selectedIndex);

    this.controlService.pageChanged
    .subscribe(page => {
      this.selectedIndex = page;
      //this.selectedComponent = this.selectedComponentService.InitComponentRef(this.selectedIndex);
      this.ShowPage(this.selectedIndex);
    });

    window.addEventListener('unload', (event) => {
      window.localStorage.removeItem('currentPageIndex');
    });
  }



  ShowPage(index: number) {
    const selectedEl = document.querySelector('.sidenav-container');
    if(selectedEl) {
      selectedEl.classList.toggle('loadscreen');
      setTimeout(() => {
        this.selectedComponent = this.selectedComponentService.InitComponentRef(this.selectedIndex);
        selectedEl.classList.toggle('loadscreen');
      }, 1300);
      this.localStorage.removeItem('currentPageIndex');
      this.localStorage.setItem('currentPageIndex', `${index}`);
    }

  }
}

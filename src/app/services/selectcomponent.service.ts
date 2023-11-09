import { Injectable } from "@angular/core";
import { ContactComponent } from "../components/contact/contact.component";
import { ExperienceComponent } from "../components/experience/experience.component";
import { LandingComponent } from "../components/landing/landing.component";
import { ProjectsComponent } from "../components/projects/projects.component";
import { TechnologiesComponent } from "../components/technologies/technologies.component";
import { TemplateComponent } from "../models/template-component";

@Injectable({providedIn: 'root'})
export class SelectedComponentService {
  constructor() {}

  InitComponentRef(index: number) {
    let component: any;
    switch(index) {
      case 1:
        component = ExperienceComponent;
        break;
      case 2:
        component = ProjectsComponent;
        break;
      case 3:
        component = TechnologiesComponent;
        break;
      case 4:
        component = ContactComponent;
        break;
      default:
        component = LandingComponent;
    }
    return this.getPage(index, component);
  }

  getPage(index: number, component: any) {
    return new TemplateComponent(component,index);
  }

}

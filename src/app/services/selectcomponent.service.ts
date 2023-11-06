import { Injectable } from "@angular/core";
import { AboutComponent } from "../components/about/about.component";
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
    switch(index) {
      case 0:
        return this.getLandingPage();
      case 1:
        return this.getAboutPage();
      case 2:
        return this.getExperincePage();
      case 3:
        return this.getProjectsPage();
      case 4:
        return this.getTechPage();
      case 5:
        return this.getContactPage();
      default:
        return this.getLandingPage();
    }

  }

  getLandingPage() {
    return new TemplateComponent(LandingComponent,0);
  }

  getAboutPage() {
    return new TemplateComponent(AboutComponent,1);
  }

  getExperincePage() {
    return new TemplateComponent(ExperienceComponent,2);
  }

  getProjectsPage() {
    return new TemplateComponent(ProjectsComponent,3);
  }

  getTechPage() {
    return new TemplateComponent(TechnologiesComponent,4);
  }

  getContactPage() {
    return new TemplateComponent(ContactComponent,5);
  }
}

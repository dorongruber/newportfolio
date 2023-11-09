import { ContactComponent } from "../components/contact/contact.component";
import { ExperienceComponent } from "../components/experience/experience.component";
import { LandingComponent } from "../components/landing/landing.component";
import { ProjectsComponent } from "../components/projects/projects.component";
import { TechnologiesComponent } from "../components/technologies/technologies.component";
import { Icon } from "../models/icon";

export const icons: Icon[] = [
  new Icon('home', 0, LandingComponent),
  new Icon('work', 1, ExperienceComponent),
  new Icon('list', 2, ProjectsComponent),
  new Icon('card_travel', 3, TechnologiesComponent),
  new Icon('mail', 4, ContactComponent),
];

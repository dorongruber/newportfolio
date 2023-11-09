import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatIconModule} from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './routes/main/main.component';
import { ProjectComponent } from './routes/project/project.component';
import { ContentpagefactoryComponent } from './factorys/contentpagefactory/contentpagefactory.component';
import { ComponentDirective } from './directives/component.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconComponent } from './components/icon/icon.component';
import { LandingComponent } from './components/landing/landing.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ProjectComponent,
    ContentpagefactoryComponent,
    ComponentDirective,
    IconComponent,
    LandingComponent,
    TechnologiesComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

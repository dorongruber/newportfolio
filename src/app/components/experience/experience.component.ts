import { Component, OnInit } from '@angular/core';
import { proexpes } from 'src/app/consts/professional-experience';
import { Experience } from 'src/app/models/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'
    ,'../../styles/mainheader.component.css']
})
export class ExperienceComponent implements OnInit {
  expHistory: Experience[] = proexpes;
  constructor() { }

  ngOnInit(): void {
  }

}

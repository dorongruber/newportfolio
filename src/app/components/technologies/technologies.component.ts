import { Component, OnInit } from '@angular/core';
import { techs } from 'src/app/consts/techs';
import { Tech } from 'src/app/models/tech';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css',
    '../../styles/mainheader.component.css']
})
export class TechnologiesComponent implements OnInit {
  techs: Tech[] = techs;
  constructor() { }

  ngOnInit(): void {
  }

}

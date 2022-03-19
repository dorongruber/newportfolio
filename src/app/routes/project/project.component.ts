import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Project } from 'src/app/models/project';
import { projectsList } from './data/projects';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  index: number = 0;
  project: Project = projectsList[this.index];
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(switchMap(params => {
      return params.getAll('index')
    }))
    .subscribe(res => {
      this.index = +res;
      this.project = projectsList[this.index];
    })
  }

}

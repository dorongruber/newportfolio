import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css',
    '../../styles/mainheader.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  navigateTo(index: number) {
    this.router.navigate([`../project/${index}`],{relativeTo: this.route});
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Icon } from 'src/app/models/icon';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() icon!: Icon;
  isSelected: boolean = false;
  constructor(
    private controlService: ControlService
  ) {
  }

  ngOnInit() {
    this.controlService.pageChanged.subscribe(res => {
      this.isSelected = res == this.icon.index;

    });
  }

  onPageSelect() {
    this.controlService.setCurrentPage(this.icon.index);
  }

}

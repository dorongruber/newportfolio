import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css',
    '../../styles/mainheader.component.css']
})
export class TechnologiesComponent implements OnInit {
  iconsFront = [
    '../../assets/images/icons/angular.png',
    '../../assets/images/icons/rxjs.png',
    '../../assets/images/icons/javascript.png',
    '../../assets/images/icons/matireals2.png',
    '../../assets/images/icons/css.png',
    '../../assets/images/icons/typescript.png',
    '../../assets/images/icons/googleplatform.png'
  ];
  iconsBack = [
    '../../assets/images/icons/nodejs2.png',
    '../../assets/images/icons/express.png',
    '../../assets/images/icons/python.png',
    '../../assets/images/icons/mongoose.png',
    '../../assets/images/icons/mongodb.png',
    '../../assets/images/icons/socket.io.png'

  ];
  constructor() { }

  ngOnInit(): void {
  }

}

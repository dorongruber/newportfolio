import { Tech } from "../models/tech";

export const techs: Tech[] = [
  new Tech("front end",[
    'assets/images/svg/angular.svg',
    'assets/images/svg/typescript.svg',
    'assets/images/svg/square-js.svg',
    'assets/images/svg/html5.svg',
    'assets/images/svg/css3.svg',
  ]),
  new Tech("back end",[
    'assets/images/svg/node.svg',
    'assets/images/svg/csharp.svg',
    'assets/images/svg/mongodb-icon.svg',
    'assets/images/svg/firebase.svg',
    'assets/images/svg/microsoft-sql-server.svg'

  ]),
  new Tech("third party services", [
    'assets/images/svg/google-cloud.svg',
    'assets/images/svg/paypal.svg',
    'assets/images/svg/material.svg',
  ]),
  new Tech("DevOps and Deployment", [
    'assets/images/svg/square-git.svg',
    'assets/images/svg/aws.svg',
    'assets/images/svg/heroku.svg',
  ])
];

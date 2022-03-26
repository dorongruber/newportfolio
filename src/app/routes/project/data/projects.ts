import { Project } from "src/app/models/project";


export const projectsList: Project[] = [
  {
    name: 'Calendar',
    aboutProject: [
      'In this project the user can',
      'make reminders by dates and',
      'view them by selecting a',
      'specific date.'
    ],
    gitUrl: 'https://github.com/dorongruber/new-doto-list',
    frontTech: [
      'angular',
      'Angular Material',
      'HTML',
      'CSS'
    ],
    backTech: [
      'NodeJS',
      'Express',
      'Mongodb',
      'Mongoose'
    ],
    images: [
      '../../../assets/images/newproject1/login.PNG',
      '../../../assets/images/newproject1/login_error.PNG',
      '../../../assets/images/newproject1/register.PNG',
      '../../../assets/images/newproject1/month.PNG',
      '../../../assets/images/newproject1/month2.PNG',
      '../../../assets/images/newproject1/daypartone.PNG',
      '../../../assets/images/newproject1/dayparttwo.PNG',
      '../../../assets/images/newproject1/form.PNG',
      '../../../assets/images/newproject1/dialog_event.PNG',
    ],
  },
  {
    name: 'Chat',
    aboutProject: [
      'In this project the user can',
      'create private\group chats with',
      'people who are currently login.'
    ],
    gitUrl: 'https://github.com/dorongruber/chat',
    frontTech: [
      'angular',
      'RxJS',
      'Angular Material',
      'socket.io-client',
      'HTML',
      'CSS'
    ],
    backTech: [
      'NodeJS',
      'Express',
      'Mongodb',
      'Mongoose',
      'socket.io'
    ],
    images: [
      '../../assets/images/project3/login_m.PNG',
      '../../assets/images/project3/register_m.PNG',
      '../../assets/images/project3/landing_m.PNG',
      '../../assets/images/project3/newchat_m.PNG',
      '../../assets/images/project3/chat_m.PNG',
      '../../assets/images/project3/chats_m.PNG',
      '../../assets/images/project3/user_info_m.PNG',
      '../../assets/images/project3/login_d.PNG',
      '../../assets/images/project3/register_d.PNG',
      '../../assets/images/project3/landing_d.PNG',
      '../../assets/images/project3/newChat_userInfo_d.PNG'
    ],
  },
  {
    name: 'Share Car Ride',
    aboutProject: [
      'In this project the user can',
      'Pick one of two roles driver/passenger and create a ride.',
      'After creating a ride all of the opposite role users with same ride (from, to) will apper to you.',
      'As a passenger you can send requests to open a chat with the driver.',
      'As a driver you can approve/reject users request to chat.',
      'The purpose of the chat is to coordinate the ride.',
      'This project isnt fully compelete.'
    ],
    gitUrl: '',
    frontTech: [
      'angular',
      'RxJS',
      'Angular Material',
      'socket.io-client',
      'HTML',
      'CSS',
      'GOOGLE API'
    ],
    backTech: [
      'NodeJS',
      'Express',
      'Mongodb',
      'Mongoose',
      'socket.io'
    ],
    images: [
      '../../assets/images/project4/login.PNG',
      '../../assets/images/project4/register.PNG',
      '../../assets/images/project4/selectrole.PNG',
      '../../assets/images/project4/mainpage.PNG',
      '../../assets/images/project4/form.PNG',
      '../../assets/images/project4/samelocation.PNG',
      '../../assets/images/project4/driversinfo.PNG',
      '../../assets/images/project4/newchatevent.PNG',
      '../../assets/images/project4/chat.PNG',
    ],
  }
]

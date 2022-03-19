import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URI = 'api/email/';
// const URI = 'http://localhost:4200/api/email/';
@Injectable({providedIn: 'root'})
export class EmailService {
  constructor(
    private http: HttpClient
  ) {}

  SendEmail(email: {fromAddress: string, subject: string, newMessage: string}) {
    const test = {
      fromAddress: email.fromAddress,
      subject: email.subject,
      text: email.newMessage
    };
    this.http.post(`${URI}sendemail`, test).subscribe(res => {
      // console.log('back response -> ', res);
      alert(res);
    });
  }
}

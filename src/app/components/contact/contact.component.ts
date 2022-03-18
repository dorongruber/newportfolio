import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmailService } from 'src/app/services/mail.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  messageFormat = new FormGroup({
    fromAddress: new FormControl(''),
    subject: new FormControl(''),
    newMessage: new FormControl('')
  });

  constructor(
    private emailservice: EmailService
  ) { }

  ngOnInit() {
  }

  SendMail(mail: FormGroup) {
    console.log('ContactformComponent SendMail -> ', mail);
    const newmessage = {
      fromAddress: mail.value.fromAddress,
      subject: mail.value.subject,
      newMessage: mail.value.newMessage
    };
    this.emailservice.SendEmail(newmessage);
  }
}

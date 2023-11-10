import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/mail.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../../styles/mainheader.component.css']
})
export class ContactComponent implements OnInit {
  form = new FormGroup({
    fromAddress: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    newMessage: new FormControl('', [Validators.required])
  });

  constructor(
    private emailservice: EmailService
  ) { }

  ngOnInit() {
  }

  SendMail(form: FormGroup) {
    if(form.invalid) {
      return;
    }
    const newmessage = {
      fromAddress: form.value.fromAddress,
      subject: form.value.subject,
      newMessage: form.value.newMessage
    };
    this.emailservice.SendEmail(newmessage);
  }
}

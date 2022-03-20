const nodemailer = require('nodemailer');

class MailService {

  sendMail(fromAddress, subject, text) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
          user: process.env.ADDR,
          pass: process.env.PASS
        }
      });

      const mailOptions = {
        from: fromAddress,
        to: process.env.ADDR,
        subject,
        text
      }

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          throw new Error(error)
        } else {
          console.log('Email sent: ' + info.response);
          return 'The email was sent successfully, we will be in touch';
        }
      });
    } catch(err) {
      throw new Error(err)
    }
  }
}

module.exports = {
  mainService: new MailService()
}

const express = require('express');
const router = express.Router();

const { mailService } = require('../service/main');

router.post('/sendemail', sendMail)

module.exports = router;

function sendMail(req,res,next) {
  const {fromAddress, subject, text} = req.body;
  mailService.sendMail()
  .then(successMessage => {
    res.status(200).send(successMessage);
  })
  .catch(err => {
    res.status(401).send(err);
  })
}

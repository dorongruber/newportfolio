const express = require('express');
const router = express.Router();

const { mailService } = require('../service/main');

router.post('/sendemail', sendMail)

module.exports = router;

function sendMail(req,res,next) {
  const {fromAddress, subject, text} = req.body;
  mailService.sendMail()
  .then(mailSended => {
    res.status(200).send(mailSended);
  })
  .catch(err => {
    res.status(401).send({message: err});
  })
}

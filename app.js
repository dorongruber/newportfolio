const express = require('express');
const cors = require('cors');
const path = require('path');
const emailRouter = require('./back/sendmail');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist/portfolio')));
app.use(express.json());
app.use('/api/email', emailRouter);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization, Content-Length"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'dist/portfolio/index.html'))
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('listening ob port ' + PORT));

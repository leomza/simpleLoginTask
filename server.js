const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.static('public/dist'));


/* app.get('/',(req, res)=>{
  res.send('<h1>I am alive!!!!!</h1>')
}) */

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

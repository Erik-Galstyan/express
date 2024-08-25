const express = require('express');
const app = express();

app.get("/test", function (req,res) {
  console.log(req.headers);
  console.log("hello");
  res.send("Hello");                                   
});
                                                                                
app.post('/test', (req, res) => {
  console.log("Gmp");
  res.send(" ");
});

app.listen(4450);
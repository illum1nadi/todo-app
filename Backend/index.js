const express = require("express");
const app = express();

app.use(express.json());

/*
  expected input format for each todo : 
  body {
    title : string;
    description : string;
  }
  
  expected input format for status update :
  body {
    id : string
  }
*/

app.post("/todo", (req, res) = {

})

app.get("/todo", (req, res) = {
  
})

app.put("/completed", (req, res) = {
  
})
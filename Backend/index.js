const express = require("express");
const {createTodo, updateTodo} = require("./types");
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

app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if(!parsedPayload.success) {
    res.status(411).json({
      msg : "You sent the wrong inputs."
    });
    return;
  }

})

app.get("/todos", (req, res) = {
  
})

app.put("/completed", (req, res) => {
  const createPayload = req.body;
  const parsedPayload = updateTodo.safeParse(createPayload);
  if(!parsedPayload.success) {
    res.status(411).json({
      msg : "You sent the wrong inputs."
    });
    return;
  }
})
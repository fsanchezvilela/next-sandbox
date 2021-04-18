const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // re routing custom paths server side route
  server.get("/p/:id", (req,res)=>{
    app.render(req,res,"/posts",{id: req.params.id})
  })

  server.get("*", (req,res)=>{
    return handle(req,res)
  })

  server.listen(3000, error=>{
    if(error) throw error;
    console.log("> Now Serving on localhost:3000") 
  })
})
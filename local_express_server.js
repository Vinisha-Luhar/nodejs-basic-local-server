const express = require("express");

const app = express();

const PORT=3000;

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.get("/about",(req,res)=>{
    res.send("About Page");
});

app.get("/users",(req,res)=>{
    res.send("Users Page");
});

app.get("/products",(req,res)=>{
    res.send("Products Page");
});


app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});
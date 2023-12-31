import express from 'express';
import bodyParser from 'body-parser';
var app = express();
var port = 3000;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
let counter = 0;
let ejscounter ;
let title ="";
let details ="";
// whenever user creates a new blog counter increases by one
let aryan = [];
let ejsaryan  = [];
app.post("/blog",(req,res)=>{
    res.render('create.ejs');
})
// first implementation using array of objects then will think of stack
app.post("/create",(req,res)=>{
    aryan[counter] ={
        title :`${req.body.title}`,
        details :`${req.body.details}`
    }
    counter++;
    res.redirect("/");
})
app.get("/",(req,res)=>{
    res.render('index.ejs',{
        ejscounter: counter,
        ejsaryan: aryan 
    })
})
app.listen(port,()=>{
    console.log(`Server is running at port number : ${port}`);
})




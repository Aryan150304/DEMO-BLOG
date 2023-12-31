import express from 'express';
import bodyParser from 'body-parser';
var app = express();
var port = 3000;
var name = "";

app.use(bodyParser.urlencoded({extended : true}));

function aryan(req,res,next){
    console.log(req.body);
    res.render('index.ejs',{
        name : req.body.inputtext
    })
    next();
}
// we cant load res.render in middlewares as they get loaded first befor app.post and app.egt
// custom middleware 

app.use(aryan);
app.post("/submit",(req,res)=>{
    console.log("POSTED");
   
})
app.get("/",(req,res)=>{
    res.render('forme.ejs',{
        name : "Aryan"
    })
})
app.listen(port,()=>{
    console.log(`Server is running at port number : ${port}`);
})




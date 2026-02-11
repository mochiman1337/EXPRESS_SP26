const express = require('express');
const app = express() //Calling express as a function sets up server
//
app.get('/',(req, res)=>{
console.log('Here');
//res.send('<h1>Hi</h1>')
res.render('index');
});//Request and respond, This is a ananomysous function

app.get('/pizza',(req, res)=>{
console.log('Pizza Here');
res.send('<h1>Hawaiian Pizza is the greatest</h1>')
});
/*
When you enter a destination after the slash you get a different response
Make sure you have these before the app.listen
*/

app.get('/status',(req,res)=>{
    res.status(500).send('Check the inspect mode for internal code error. Should be internal 500 code.');
    //res."name" : change name to the /name
});
/*
app.get('/status2',(req,res)=>{
    res.status2(500).json(message:'Json error 500');
});
*/


app.listen(3030); //Tell our app to listen for requests
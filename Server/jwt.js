const express = require('express')
const app=express();
const jwt = require('jsonwebtoken')

const token = jwt.sign({id:1,name:'amit'},'jwtsecret',{expiresIn:'1d'});

console.log(token);

const payload = jwt.verify(token,'jwtsecret');
console.log(payload);


app.get('/',(req,res)=> {
    res.write('Welcome');
    res.end()
})

app.listen(8080, console.log('Port is listening at 8080'));

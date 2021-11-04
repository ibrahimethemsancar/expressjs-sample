import express from 'express';
import pgPromise from 'pg-promise';
const router =express.Router();
const pgp=pgPromise({});
const app = express();
const port = 3001;
const dotenv = require('dotenv').config();
const birdsRouter = require('./routes/birds')
const usersRouter = require('./routes/users')
const homeRouter = require('./routes/home')
// const pgp = pgPromise({});
// var db = pgp('postgres://postgres:123456@localhost:5432/postgres')

// var db=pgp({
//   user:'wmiknhvfoolrmz',
//   password:'019a4c977640d9a942ac67fa65288a21b4c95ead73fda408005f69756ed6cff1',
//   host:'ec2-18-202-1-222.eu-west-1.compute.amazonaws.com',
//   port:5432,
//   database:'d6mm3a66jpi9ec',
//   ssl:{
//     rejectUnauthorized:false
//   }
// })







// app.get("/users",(req,res)=>{
//     db.query('SELECT id,name,surname FROM "MY_USERS"')
//   .then(function (data) {
//     res.send(data)
//   })
//   .catch(function (error) {
//     res.send(error)
//   })
// })

// app.post("/users",(req,res)=>{
//     db.one('INSERT INTO "MY_USERS" (name,surname) VALUES($1,$2) RETURNING id', [req.body.name,req.body.surname],
//     (event)=>event.id)
//     .then((data)=>
        
//         res.send(data)
//         )
// })

app.listen(process.env.PORT  || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
app.use(express.json());
app.use("/",router);
app.use("/birds",birdsRouter);
app.use("/users",usersRouter);
app.use("/",homeRouter);
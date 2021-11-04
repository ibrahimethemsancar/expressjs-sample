var express = require('express');
var router = express.Router();







router.route("/").all((req: any,res: { send: (arg0: string) => void; })=>{
    res.send('Try another routes like /users')
   })

module.exports=router;
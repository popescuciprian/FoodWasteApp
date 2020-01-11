const express = require('express');
const bodyParser = require('body-parser');
const tables = require('./tables.js');
const router = express.Router();
router.use(bodyParser.json());

router.post('/register',(req,res)=>{
    if(req.body){
        let payload = req.body;
        let conflictUser = await tables.AppUser.findOne({
            where:{
                username:payload.username
            }
        });
        if(conflictUser){
            res.status(400).json({message:conflictUser});
        }else{
            res.status(200).json({message:"Ready to register!"});
        }
    }else{
        res.status(400).json({message:"Post without body!"});
    }
});
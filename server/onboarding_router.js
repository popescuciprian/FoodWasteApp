const express = require('express');
const bodyParser = require('body-parser');
const tables = require('./tables.js');
const router = express.Router();
router.use(bodyParser.json());

router.post('/register',async (req,res)=>{
    if(req.body){
        let payload = req.body;
        let conflictUser = await tables.AppUser.findOne({
            attributes:['username'],
            where:{
                username:payload.username
            }
        });
        if(conflictUser){
            res.status(400).json({message:"Username allready taken!"});
        }else{
            await tables.AppUser.create(payload);
            res.status(200).json({message:`User ${payload.username} created`});
        }
    }else{
        res.status(400).json({message:"Post without body!"});
    }
});

router.get('/login',async (req,res)=>{
    if(req.body){
        let payload = req.body;
        let user = await tables.AppUser.findOne({
            where:{
                username:payload.username
            }
        });
        if(user){
            if(user.password === payload.password){
                res.status(200).json({message:`Authorized!`});
            }else{
                res.status(400).json({message:`InvalidCredentials`});
            }
        }else{
                res.status(400).json({message:`InexistentUser`});
            }
    }else{
        res.status(400).json({message:"Post without body!"});
    }
});

module.exports = router;
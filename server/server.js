const tables = require('./tables.js');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
tables.sync();
app.use(express.static(__dirname+'/public'));

app.get('/app_users',async (req,res)=>{
    try{
    let users = await tables.AppUser.findAll();
    res.status(200).json(users);
}catch(err){
    res.status(500).json({message:err.message});
}
});

app.get('/foods', async(req,res)=>{
    try{
    let food = await tables.Food.findAll();
    res.status(200).json(food);
}catch(err){
    res.status(500).json({message:err.message});
}
});

app.get('/:app_user/foods', async(req,res)=>{
try{
    let user = await tables.AppUser.findAll(
    {
        where:{
            username:req.params.app_user
        },
        include:[{
             model: tables.Food 
        }]
    });
    if(user)res.status(200).json(user[0].food);
    else throw new Error();
}catch(err){
    res.status(500).json({message:err.message});
}
});

app.get('/food_categories', async(req,res)=>{
    
});

app.get('/relationships', async(req,res)=>{
    
});

app.post('/app_users',async (req,res)=>{
    try{
        if (req.query.bulk && req.query.bulk == 'on'){
            console.log(req.body);
			await tables.AppUser.bulkCreate(req.body)
			res.status(201).json({message : 'created'})
		}else{
            await tables.AppUser.create(req.body);
            res.status(200).json({message:`User created:${JSON.stringify(req.body)}`});
		}
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

app.post('/:app_user/foods', async(req,res)=>{
    try{
        let food = req.body;
        let user = await tables.AppUser.findOne({
            where:{
                username:req.params.app_user
            }
        });
        if(user){
            if (req.query.bulk && req.query.bulk == 'on'){
                console.log(req.body);
                food.forEach((f)=>{f.appUserId=user.id});
			    await tables.Food.bulkCreate(req.body)
			    res.status(201).json({message : 'created'})
		    }else{
                food.appUserId=user.id;
                await tables.Food.create(food);
                res.status(200).json({message:'Created'});
		    }
        }
        else{
            throw new Error();
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

app.post('/food_categories', async(req,res)=>{
    
});

app.post('/relationships', async(req,res)=>{
    
});

app.listen(8080);
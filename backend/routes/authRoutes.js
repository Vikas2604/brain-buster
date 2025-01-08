const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('../models/user');

const router = express.Router();


// signup route --------->

router.post('/signup', async (req, res)=> {
    const { name, email, password } = req.body;

    try{
        const userExists = await user.findOne({email});
        if (userExists) {
            return res.status(400).json({
                message: 'user already exists'
            });
        }

        const newUser = new user({ name, email, password });

        await newUser.save();

        res.status(201).json({
            message: 'user registered successfully'
        });
    } catch (error){
        console.error(error);
        res.status(500).json({
            message: 'server error'
        });
    }
});



// signin route --------->


router.post('/signin', async (req,res)=>{
    const{ email, password } = req.body;

    try{
        const User = await user.findOne({email});
        if (!User) {
            return res.status(400).json({
                message: 'invalid credentials'
            });
        }

        const isMatch = await bcrypt.compare(password, User.password);
        if (!isMatch){
            return res.status(400).json({
                message: 'invalid credentials'
            });
        }

        const token = jwt.sign({userId: User._id}, 'your_jwt_secret', {expiresIn: 'ih'});

        res.status(200).json({token});
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'server error'
        });
    }
});



module.exports = router;
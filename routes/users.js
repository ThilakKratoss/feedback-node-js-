const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const mongoose = require('mongoose');


//load user model
require('../models/User');
const User = mongoose.model('users');

router.get('/login',(req,res)=>{
    res.render('users/login');
   }); 


   router.get('/register',(req,res)=>{
   res.render('users/register');
   });
   
   //login form post
   router.post('/login',(req,res,next)=>{
    console.log(req.body.name);
    console.log(req.body.comment);
  
    
    req.flash('success_msg','message sent');
     
   });
    
  
   
   //register form post
   router.post('/register',(req,res)=>{
   let errors= [];

   if(req.body.password != req.body.password2){
       errors.push({text:'password did not match'});
   }
   
   if(req.body.password.length < 4 ){
    errors.push({text:'password must be atleast 4 characters'});
   }

     if(errors.length > 0){
       
           res.render('users/register',{
           errors : errors,
           name  : req.body.name,
           email : req.body.email,
           password : req.body.password,
           password2 : req.body.password2
                           });
                            }
     else{
       User.findOne({email:req.body.email})
       .then(user=>{
          if(user){
            req.flash('success_msg','Email is already taken try another MailId :>)');
            res.redirect('/users/register');
          }
          else{
            const newUser = new User ({
              name: req.body.name,
              comment: req.body.comment,
             
            });
          
           bcrypt.genSalt(10, (err,salt)=>{
            bcrypt.hash(newUser.password,salt,(err,hash)=>{
              if(err) throw err;
              newUser.password = hash;
              newUser.save()
              .then(user =>{
                req.flash('success_msg','you are now registered and log in');
                res.redirect('/users/login');
              })
              .catch(err =>{
                console.log(err);
                return;
              });
            });
           }); 
          }
       });
            
     }
    });

        //logout user
      router.get('/logout',(req,res) =>{
        req.logout();
        req.flash('success_msg','you are logged out');
        res.redirect('/users/login');
      });


    module.exports = router;




       /* const newUser = new User ({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
      
       bcrypt.genSalt(10, (err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
          .then(user =>{
            req.flash('success_msg','you are now registered and log in');
            res.redirect('/users/login');
          })
          .catch(err =>{
            console.log(err);
            return;
          });
        });
       });*/ 
   
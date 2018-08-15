/*const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const {ensureAuthenticated} = require('../helpers/auth');


require('../models/Idea');

const Idea = mongoose.model('ideas');
    router.get('/',(req,res)=>{
    Idea.find({user : req.user.id})
    .sort({date:'desc'})
    .then(ideas =>{
      res.render('ideas/index',{
        ideas:ideas
      });
    }); 
  });
  router.get('/add',(req,res)=>{
    res.render('ideas/add');
  });
  
  router.get('/edit/:id',ensureAuthenticated,(req,res)=>{
   Idea.findOne({
    _id:req.params.id
   })
   .then(idea=>{
     if(idea.user != req.user.id){
      req.flash('success_msg','Not Authorized');
       res.redirect('/ideas');
     }else{
      res.render('ideas/edit',{
        idea : idea
      });
     }
   });
  });
  router.post('/',(req,res)=>{
    let errors = [];
    if(!req.body.title){
      errors.push({text:"please add a title"});
                       }
    if(!req.body.details){
      errors.push({text:"please add some details"});
                         }
    if(errors.length > 0){
      res.render('ideas/add',{
        errors:errors,  
        title:req.body.title,
        details:req.body.details
    });
      }
      else{
        const newUser = {
          title:req.body.title,
          details:req.body.details,
          user:req.user.id
        }
          new Idea(newUser)
          .save()
          .then(idea =>{
            req.flash('success_msg','Video Idea Added');
            res.redirect('/ideas');
          })
          }
     });
     router.put('/:id',(req,res)=>{
    Idea.findOne({
      _id:req.params.id
    })
    .then(idea =>{
      idea.title = req.body.title,
      idea.details = req.body.details;
      
      idea.save()
      .then(idea => {
        req.flash('success_msg','Video Idea Updated');
        res.redirect('/ideas');
      }) 
                });
       });
  
       router.delete('/:id',(req,res)=>{
     Idea.remove({_id: req.params.id})
      .then(idea=>{
        req.flash('success_msg','Video Idea Removed');
        res.redirect('/ideas');
      });
     });

     router.post('/users/login',(req,res)=>{
      req.flash('success_msg','Sucessfully addded');
     })
module.exports = router;*/
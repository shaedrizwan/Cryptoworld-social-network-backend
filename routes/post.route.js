const express = require('express')
const { verifyAuth } = require('../middlewares/auth.middleware')
const Post = require('../models/post.model')
const router = express.Router()

router.use(verifyAuth)
router.route('/')
    .get(async(req,res)=>{
        try{
            const posts = await Post.find({}).populate('user')
            res.json({success:true,posts})
        }catch(err){
            res.json({success:false,error:err.message})
        }
    })

router.route('/add')
    .post(async(req,res)=>{
        try{
            const post = req.body
            const addPost = new Post(post)
            const addedPost = await addPost.save()
            res.json({success:true,addedPost})
        }catch(err){
            res.json({success:false,error:err.message})
        }
    })

module.exports = router
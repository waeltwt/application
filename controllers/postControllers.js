const { json } = require('express');
const Post = require('../Models/postModel')





const addPost = async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    // const newBody = JSON.parse(req.body.info);

    try {
        const imagePath = 'http://localhost:5000/uploads/${req.file.filename}'
        console.log(imagePath)

        const { description, title} = req.body;
        console.log(req.file.path);
        //const newBody = JSON.parse(req.body.info);

        const newPost = await Post.create({
            title: req.body.title,
            desc: req.body.desc,
            owner: req.body.owner,
            image: req.file.path,
        });
        res.json(newPost);


    } catch (error) {
        res.status(201).json({ message: 'errors' });

    }
}


//get all posts
//route GET /api/post/getposts
//access PUBLIC
const getPosts = async (req, res) => {
    try {
        const Posts = await Post.find({})
        res.json(Posts)


    } catch (error) {
        res.status(201).json({ message: 'errors' });

    }
}


//delete a post by id
//route delete /api/post/:postId
//access PRIVATE - owner
const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        if (post.owner._id !== req.userId) return res.status(401).json({ msg: 'you are not autorized' })
        await Post.findByIdAndDelete(req.param.postId)
    } catch (error) {
        res.status(201).json({ message: 'errors' });

    }







};
module.exports = { addPost, getPosts, deletePost };
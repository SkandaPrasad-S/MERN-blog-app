const router = require('express').Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require('bcrypt');
const saltRounds = 10;

//CREATE POST

//update our user
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save()
        return res.status(200).json(savedPost)

    } catch (err) {
        return res.status(500).json(err)
    }
});

//UPDATE
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username == req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set : req.body
                    },
                    { new:true }
                );
                return res.status(200).json(updatedPost)
            } catch (err) {
                return res.status(500).json(err)
            }
        } else {
            return res.status(401).json("You can update only your post")
        }
    } catch (err) {
        return res.status(500).json(err)
    }

});

//DELETE

router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username == req.body.username) {
            try {
                await Post.deleteOne()
                return res.status(200).json("Post has been deleted")
            } catch (err) {
                return res.status(500).json(err)
            }
        } else {
            return res.status(401).json("You can update only your post")
        }
    } catch (err) {
        return res.status(500).json(err)
    }

});
// get a single post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (err) {
        return res.status(500).json(err);
    }
})

//get all posts

router.get("/", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if(username){
            posts = await Post.find({username});
        } else if(catName){
            posts = await Post.find({categories: {
                $in: [catName]
            }});
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);  // Corrected variable name
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router
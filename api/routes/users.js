const router = require('express').Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require('bcrypt');
const saltRounds = 10;

//Register
async function hashPassword(password) {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw error;
    }
}

async function comparePassword(password, hashedPassword) {
    try {
        const match = await bcrypt.compare(password, hashedPassword);
        return match;
    } catch (error) {
        throw error;
    }
}

//update our user
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            req.body.password = await hashPassword(req.body.password);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });
            res.status(200).json(updatedUser)


        } catch (err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(401).json("You can update only your account")
    }

});

//DELETE
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json("User not found");
            }

            try {
                await Post.deleteMany({ username: user.username });
                await User.findByIdAndDelete(req.params.id);
                return res.status(200).json("User has been deleted");
            } catch (err) {
                return res.status(500).json(err);
            }
        } catch (err) {
            return res.status(404).json("User not found");
        }
    } else {
        return res.status(401).json("You can delete only your account");
    }
});

//get user

router.get("/:id", async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        const {password,...others} = user._doc
        res.status(200).json(others)
    }catch(err){
        return res.status(500).json(err);
    }
})

module.exports = router
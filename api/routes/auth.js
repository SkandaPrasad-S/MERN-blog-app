const router = require('express').Router();
const User = require("../models/User");
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

router.post("/register", async (req, res) => {
    try {

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await hashPassword(req.body.password);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

//LOGIN

router.post('/login', async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
  
      if (!user) {
        return res.status(400).json('Wrong credentials');
      }
  
      const validated = await comparePassword(req.body.password, user.password);
  
      if (!validated) {
        return res.status(400).json('Wrong credentials');
      }
      
      const {password, ...others} = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router
const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const multer = require("multer")
dotenv.config();
app.use(express.json());

async function connectToDatabase() {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      process.exit(1); // Exit the process with an error code
    }
  }
  
  // Call the function to connect to the database
connectToDatabase();

const storage = multer.diskStorage({
  destination : (req,file,cb) => {
    cb(null, "images")
  },filename:(req,file,cv) => {
    cb(null,req.body.name)
  }
});
const upload = multer({storage:storage})

app.post("/api/upload",upload.single("file"),(req,res)=>{
  res.status(200).json("File has been uploaded")
})
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/categories",categoryRoute)

app.use("/",(req,res) => {
    console.log("This is main url")
})

app.listen("5000",()=>{
    console.log("Server has started")
})
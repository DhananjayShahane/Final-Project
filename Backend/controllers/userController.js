import userModal from "../models/userModels.js";
import bcrypt from "bcryptjs";
import validator from "validator";
import jwt from 'jsonwebtoken'


// login user 

const loginUser = async (req, res) =>{

    const {email, password} = req.body;
    try {
        const user = await userModal.findOne({email});

        if(!user){
            return res.json({success:false, message: "User not found"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        
        if(!isMatch){
            return res.json({success:false, message: "Incorrect password"});
        }

        const token = createToken(user._id);

        res.json({success:true, token});

    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Server Error"});
    }


}

// create Token

const createToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET);




// register user

const registerUser = async (req, res) =>{
   const {name,password,email} = req.body;
   try {
    //   check if user already
    const exists = await userModal.findOne({email});
    if(exists){
        return res.json({success:false, message: "User already exists"});
    }else{

        // validate email and stong password
        if(!validator.isEmail(email)){
            return res.json({success:false, message: "Invalid email address"});
        }

        if(password.length < 8){
            return res.json({success:false, message: "Password must be at least 8 characters long"});
        }

        // hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModal({
            name:name,
            email: email,
            password: hashedPassword
        })

        // save method
      const user =  await newUser.save();
      const token = createToken(user._id);
      res.json({success:true, token});
    }
   } catch (error) {
      console.log(error);
      res.json({success:false, message:"Error saving"});
      
   }
}


export {loginUser, registerUser};
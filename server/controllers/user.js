import User from "../models/User.js";

const postsignup =  async(req,res)=>{
    const {fullname,email,password,dob} =req.body
    const user=new User({
     fullname:fullname,
     email:email,
     password:password,
     dob:new Date (dob)
    })
    try{
   
    const savedUser =await user.save();
    res.json({
     success:true,
     message:"singup successfully ",
     data:savedUser
     })
    
   }
   catch(e){
     res.json({
       success: false,
       message: e.message,
       data: null,
     })
   }
   } 



   const postlogin =  async (req,res)=>{
    const {email,password} =req.body;
  
      const user = await User.findOne({
        email:email,
        password:password
      });
      if(user){
        return res.json({
          success:true,
          message:"Login successful",
          data:user
  
        })
      }
     else{
      return res.json({
        success:false,
        message:"Invalid credentials",
        data:null
      })
    }
  }

   export{postsignup , postlogin}
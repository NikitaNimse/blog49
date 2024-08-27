import Blog from "../models/Blog.js";
import User from "../models/User.js"

const postblog = async(req,res)=>{
    const {title,content,name,image,date,Language,user} =req.body
    const blog=new Blog({
      
       title: title,
       content: content,
       name: name,
       image: image,
       date: date,
       Language:Language,
       user:user

       });

       try{
   
        
        const savedblog =await blog.save();
        res.json({
         success:true,
         message:"blog  successfully ",
         data:savedblog
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

/*const getblog = async (req,res)=>{

  const allblogs = await Blog.find().sort({createdAt: -1})

   res.json({
     successs:true,
     data: allblogs,
     message:"all blog fetched  successfully" 
   })
 } */



   const getblog= async (req,res)=>{

    const {userId} = req.query;
    const user =await User.findById(userId)
    if(!user){
      return res.json({
        success:false,
        message:"user not found",
        data:null
      })
    }
    
    const blogs = await Blog.find ({user: userId})
    return res.json({
      success:true,
      message:"blog fetched successfully",
      data:blogs 
    })
    }



const putblog = async(req, res) => {
  const {title, content, name, image, date, Language, user} = req.body;
  const blog = new Blog({
      title: title,
      content: content,
      name: name,
      image: image,
      date: date,
      Language: Language,
      user: user
  });

  try {
      const savedblog = await blog .save();
      res.json({
          success: true,
          message: "Blog posted successfully",
          data: savedblog
      });
  } catch(e) {
      res.json({
          success: false,
          message: e.message,
          data: null
      });
  }
};






const deleteblog = async(req,res)=>{
  const {id}=req.params;

  await Blog.deleteOne({_id:id});
  
  res.json({
    success: true,
    message: `Blog Deleted successfully`,
    data: null
})
}



export {postblog , getblog , putblog , deleteblog}
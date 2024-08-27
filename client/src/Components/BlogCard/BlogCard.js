import "./BlogCard.css"
import toast, {Toaster} from "react-hot-toast";

import axios from "axios";
import { Link } from 'react-router-dom'

function BlogCard({ _id, title,content,name,image,date,Language, createdAt, loadBlogs }) {

    const deleteblog = async () => {
        const response = await axios.delete(`${process.env.REACT_APP_bACKEND_URL}/blog/${_id}`)
    
        toast.success(response.data.message)
    
        loadBlogs()
      }
    
      return (
       /*
        <div className="card-container">
          <h1 className="title">
            {title}
          </h1>
    
          <span className="transaction-card-date">
            {new Date(createdAt).toLocaleString()}
          </span>
    
          <span className="contentpre">
            {content}
          </span>

          <div className="author-card">

          <span className="author-avtar" >
             <img src={image}  alt="aimg" className="author-avtar" />
          </span> 
    
          <span className="name">
            {name}
          </span>
       
          <span className="date" >
         
           {date} 
          </span>
          </div>
          <span className="category-badge">
          
           {Language}
          </span>
    
          <button className="transaction-card-delete" onClick={deleteblog}>
            Delete
          </button>
          <Toaster />
        </div>*/




        <div className="blog-card">
          <h1 className="title-blog">
            {title}
          </h1>

          <span className="poster" >
             <img src={image}  alt="aimg" className="author-avtar" />
          </span> 
    
          <span className="info1">
            {name}
            {new Date(createdAt).toLocaleString()}
           
          </span>
    
          <h5 className="info1">
            {content}
          </h5>

       

        <div className="author-card">
    
       
       
          <span className="date" >
           {date} 
          </span>
          </div>
         
          <div className="category-badge">
          
           Language: {Language}
          </div>
          
         <Link to={`/update/${_id}`}>
         <button 
         type="button" 
        className="transaction-card-delete"
         > Update</button>
          </Link>
    
          <button className="transaction-card-delete" onClick={deleteblog}>
            Delete
          </button>
          <Toaster />
        </div>
      )
    }
    
    export default BlogCard
import React, { useEffect } from 'react'
import "./UpdateBlog.css"
import { useParams } from 'react-router-dom';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import toast, {Toaster} from 'react-hot-toast'
import axios from 'axios';

function UpdateBlog() {
    const {id} = useParams();

    const [user, setUser] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [date,setDate] = useState('')
    const [Language, setLanguage] = useState('')


  const updateblog = async() => {
    const response =await axios.put(`${process.env.React_APP_API_URL}/blog/${id}`,{
      user: user._id,
      title: title,
      content: content,
      name: name,
      image: image,
      date: date,
      Language:Language,
    })

    toast.success(response.data.message)

  }

const loadblog =async (id) =>{

    if(!id){
      return
    }
    const response =await axios.get(`${process.env.React_APP_API_URL}/blog/${id}`)
    const{title, content, name, image, date, Language,user}= response.data.data

    setTitle(title)
    setContent(content)
    setName( name)
    setImage(image)
    setDate( date)
    setLanguage(Language)
  }


useEffect(()=>{
  
   loadblog(id)
    
    
   },[id])

  return (
    <div>
    <h3 className="auth-heading">
      Add Blog For {user.fullname}
    </h3>

  <form className="auth-form">
    <input
      type="text"
      placeholder="Title"
      className="user-input"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />

    <input
      type="text"
      placeholder="content"
      className="user-input"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      />

      <input
      type="text"
      placeholder="name"
      className="user-input"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />

      <input
      type="text"
      placeholder="image"
      className="user-input"
      value={image}
      onChange={(e) => setImage(e.target.value)}
      />
       <input
      type="text"
      placeholder="date"
      className="user-input"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      />
       <input
      type="text"
      placeholder="Language"
      className="user-input"
      value={Language}
      onChange={(e) => setLanguage(e.target.value)}
      />

    <button type="button" className="btn-auth" onClick={UpdateBlog}>
      Update Blog
    </button>
  </form>

  <Toaster />
</div>
)
}





export default UpdateBlog
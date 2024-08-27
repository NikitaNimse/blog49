import React, { useEffect, useState } from 'react'
import "./Home.css"
import toast, {Toaster} from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'
import  BlogCard from '../../Components/BlogCard/BlogCard.js'
import ImgAdd from "./add.png"
import Navbar from "./../../Components/Navbar/Navbar.js";

function Home() {
  const [user, setUser] = useState('')
  const [blogs, setBlogs] = useState([])
 
useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    if(currentUser){
      setUser(currentUser)
    }

    if(!currentUser){
      window.location.href = '/login'
    }
  }, [])

const loadBlogs = async () => {
    if(!user._id){
      return
    }
    toast.loading('Loading blogs...')

    const response = await axios.get(`${process.env.REACT_APP_bACKEND_URL}/blogs?userId=${user._id}`)

    const allBlogs = response.data.data
    toast.dismiss()

    setBlogs(allBlogs)
  }

  useEffect(() => {
    loadBlogs()
  }, [user])


 return (<>
   <Navbar />
    <div>
      <h1 className="home-greeting">Hello, {user.fullname}</h1>
      
      <h2 className="home-heading">Welcome to the Blog App</h2>

      <span className='logout' onClick={() => {
        localStorage.clear()
        toast.success('Logged out successfully')

        setTimeout(()=>{
          window.location.href = '/login'
        }, 3000)
      }}>
        Logout
      </span>

      


<div className='transactions-container'>
    {
          blogs.map((blog) => {
            const {_id, title, content,name,image,date,Language, createdAt,loadBlogs} = blog

            return (< BlogCard
              key={_id}
              _id={_id}
              title={title}
              content={content}
              name={name}
              image={image}
              date={date}
              Language={Language}
              createdAt={createdAt}
              loadBlogs={loadBlogs}
            />)
          })
        }

      <Link to='/add-blog'>
        <img src={ImgAdd} alt='Add Transaction' className='add-transaction' />
      </Link>
      </div>
      <Toaster/>
    </div>
    </>
  )
}

export default Home
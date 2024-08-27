import axios from "axios"
import "./AddBlog.css"
import { useState, useEffect } from 'react'
import toast, {Toaster} from "react-hot-toast"

function AddBlog() {
  const [user, setUser] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [date,setDate] = useState('')
  const [Language, setLanguage] = useState('')

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    if (currentUser) {
      setUser(currentUser)
    }

    if (!currentUser) {
      window.location.href = '/login'
    }
  }, [])

  const AddBlog = async () => {
    const response = await axios.post(`${process.env.REACT_APP_bACKEND_URL}/blog`, {
      title,
      content,
      name,
      image,
      date,
      Language,
      user: user._id
    })

    toast.success(response.data.message)

    setTitle('')
    setContent('')
    setName('')
    setImage('')
    setDate('')
    setLanguage('')

    setTimeout(() => {
      window.location.href = '/'
    }, 2000)
  }

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

        <button type="button" className="btn-auth" onClick={AddBlog}>
          Add Blog
        </button>
      </form>

      <Toaster />
    </div>
  )
}

export default AddBlog
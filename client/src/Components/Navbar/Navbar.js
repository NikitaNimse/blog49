import "./Navbar.css"

 import React from 'react'
 import toast, {Toaster} from 'react-hot-toast'
  
  function Navbar() {
    return (
     <>
     <div className="Nav">
      <span className="menu">Blog📝</span>
      <a href="/" className="nav-menu">Home</a>
      <a href="/login" className="nav-menu">Login</a>
     
      <span className='logout' onClick={() => {
        localStorage.clear()
        toast.success('Logged out successfully')

        setTimeout(()=>{
          window.location.href = '/login'
        }, 3000)
      }}>
        Logout
      </span>
      </div>
    <Toaster />
     </>
    )
  }
  
  export default Navbar
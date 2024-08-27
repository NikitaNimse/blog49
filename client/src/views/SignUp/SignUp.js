import React, { useState } from 'react'
import './SignUp.css'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'
import { Link } from 'react-router-dom'

function Signup() {

  const [user, setUser] = useState({
    fullname: '',
    email: '',
    password: '',
    dob: ''
  })

  const signup = async () => {
    const response = await axios.post(`${process.env.REACT_APP_bACKEND_URL}/signup`, {
      fullname: user.fullname,
      email: user.email,
      password: user.password,
      dob: user.dob
    })

    if(response.data.success){
      toast.success(response.data.message)

      setUser({
        fullname: '',
        email: '',
        password: '',
        dob: ''
      })
    }
    else{
      toast.error(response.data.message)
    }
  }


  return (
    <div>

      <h2 className='heading'>User Registration</h2>

    <div className='auth-form'>
      
  <form >
        <input
          type="text"
          placeholder="Fullname"
          className='user-input'
          value={user.fullname}
          onChange={(e) => setUser({ ...user, fullname: e.target.value})}
          />

        <input
          type="email"
          placeholder="Email"
         className='user-input'
          value={user.email}
          onChange={(e)=>setUser({...user, email: e.target.value})}
          />

        <input
          type="password"
          placeholder="Password"
          className='user-input'
          value={user.password}
          onChange={(e)=>setUser({...user, password: e.target.value})}
          />

        <input
          type="date"
          placeholder="Date of Birth"
          className='user-input'
          value={user.dob}
          onChange={(e)=>setUser({...user, dob: e.target.value})}
          />

        <button
          type='button'
          onClick={signup}
          className='btn-auth'
          >
          Register
        </button>
      </form>

      <Link to='/login'>Already have an account? Login</Link>

      <Toaster />
    </div>
    </div>

   
   
  )
}

export default Signup
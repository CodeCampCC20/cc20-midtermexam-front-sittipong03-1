import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <div className='m-8 text-center flex justify-center gap-6'>
        <NavLink to ="/">Todo List</NavLink>
        <NavLink to ="/login">Login</NavLink>
        <NavLink to ="/register">Register</NavLink>
    </div>
  )
}

export default Navbar
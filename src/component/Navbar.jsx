import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <div className='h-20 text-white p-6 text-center flex justify-center gap-6 bg-gray-500 '>
        <NavLink to ="/">Todo List</NavLink>
        <NavLink to ="/login">Login</NavLink>
        <NavLink to ="/register">Register</NavLink>
    </div>
  )
}

export default Navbar
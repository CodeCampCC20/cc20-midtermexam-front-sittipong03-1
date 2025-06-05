import React from 'react'

function LoginPage() {
  return (
    <div>
        <div className='flex justify-start items-center flex-col'>
            <h1>Welcome</h1>
            <form>
                <div className='flex-col'>
                    <input className="input input-neutral"
                    type="text" placeholder='email'/>
                    <input className="input input-neutral" 
                    type="text" placeholder='password'/>
                    <input className="btn"
                    type="submit" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage
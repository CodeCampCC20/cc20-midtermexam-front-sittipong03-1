import React, { useState } from 'react'

function LoginPage() {
  const initData = {
    email : "" ,
    password : ""
  }


  const [input , setInput ] = useState(initData)
  const [errorInput , setErrorInput] = useState(initData)

  const handleChange = (evt)=>{
    const { id, value } = evt.target
    console.log(id)
    console.log(value)

  }
  console.log(input)

  const hdlSubmit = (e)=>{
    e.preventDefault()
    if(input.email.trim()===''){
      console.log('enter data')
    }
    setInput(input.email)
    setInput(errorInput.email)

  }
  console.log(initData)
  return (
    <div>
        <div className='flex items-center flex-col w-[100%] mt-6 '>
          <div className=' bg-gray-700 w-[300px] p-4 rounded-2xl'>
            <h1 className='text-3xl color text-white mb-4'>Welcome</h1>
            <form onSubmit = {hdlSubmit}>
                <div className='flex flex-col gap-4'>
                    <input className="input input-neutra  bg-gray-400"
                    type="text" 
                    id='email'
                    placeholder='email'
                    onChange={handleChange}
                    error={errorInput.email}
                    value={input.email}
                    />
                    <input className="input input-neutral  bg-gray-400" 
                    type="text" placeholder='password'/>
                    <div>
                    <input className="btn w-[100%] bg-gray-300"
                    type="submit" />
                    </div>
                </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default LoginPage
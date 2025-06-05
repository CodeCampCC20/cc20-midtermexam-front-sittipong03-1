import React from 'react'

function TodoElement(props) {
    const {id , taskName , completed ,userId} = props


  return (
    <div>
        <div className='flex flex-row items-center w-80 mb-1'>
            <input className='m-0.5 basis-1/5' 
            type="checkbox"></input>
            <div className=' text-white basis-3/5'>{taskName}</div>
            <button className=" text-white basis-1/5">x</button>
        </div>
    </div>
  )
}

export default TodoElement
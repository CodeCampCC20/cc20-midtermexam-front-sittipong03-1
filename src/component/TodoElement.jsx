import React from 'react'

function TodoElement(props) {
    const {id , taskName , completed ,userId ,hdlDelete} = props


  return (
    <div>
        <div className='flex flex-row items-center w-80 mb-1'>
            <input className='m-0.5 basis-1/5' 
            type="checkbox"></input>
            <div className='text-white basis-3/5'>{taskName}</div>
            <button className=" text-white basis-1/5 hover:text-gray-600"
            onClick={() => hdlDelete(id ,userId)}>x</button>
        </div>
    </div>
  )
}

export default TodoElement
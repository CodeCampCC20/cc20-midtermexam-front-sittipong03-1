import React from 'react'

function TodoElement(props) {
    const {id , taskName , completed ,userId} = props


  return (
    <div>
        <div className='flex flex-row items-center w-80 bg-amber-900'>
            <input className='m-1 basis-1/5' 
            type="checkbox"></input>
            <div className='basis-3/5'>{taskName}</div>
            <button className="btn basis-1/5">x</button>
        </div>
    </div>
  )
}

export default TodoElement
import React, { useState , useEffect} from 'react'
import patchApi from '../api/patchApi'

function TodoElement(props) {
    const {id , taskName , completed ,userId ,hdlDelete} = props
    const [statusCompleted , setStatusCompleted] = useState(completed)
    
    useEffect(()=>{
      patchApi(id , userId ,statusCompleted ,taskName )
    },[statusCompleted])
    const hdlChange = ()=>{
      setStatusCompleted(prv => !prv);
    }

  return (
    <div>
        <div className='flex flex-row items-center w-80 mb-1'>
            <input className='m-0.5 basis-1/5' 
            type="checkbox"
            checked={statusCompleted}
            onChange={hdlChange}></input>
            <div className= {`text-white basis-3/5 ${statusCompleted  ? 'line-through' : ''} `}>{taskName}</div>
            <button className=" text-white basis-1/5 hover:text-gray-600"
            onClick={() => hdlDelete(id ,userId)}>x</button>
        </div>
    </div>
  )
}

export default TodoElement
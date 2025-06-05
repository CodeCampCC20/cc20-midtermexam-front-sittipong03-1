import React, { useEffect, useState } from 'react'
import TodoElement from '../component/TodoElement'
import axios from "axios"
import useTodoStore from '../api/usetodoStore'
import postApi from '../api/postApi'

function TodoListPage() {
    const [getTodo , setGetTodo] = useState('')
    
    const getApi = useTodoStore((state)=> state.getApi)
    const todoLists = useTodoStore((state)=> state.todoLists)

    useEffect(()=>{
        getApi(29)
        // postApi(29 ,'should work')
    
    },[])




    // async function postUser(id, post) {
    // try {
    //     const response = await axios.post(`http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos` ,{
    //         taskName: post ,
    //         userId : id
    //     });
    // } catch (error) {
    //     console.error(error);
    // }
    // }
    // postUser(29 , 'from vscode again')
    
    // async function postFetch(id, post){
    //     const res = await fetch("http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos",{
    //         method: "POST",
    //         body: JSON.stringify({ 
    //             taskName: post,
    //             userId : id
    //         }),

    //     })

    // }

    // postFetch(29 , 'vs code 2 ')
const hdlsubmitbtn = (e)=>{
    e.preventDefault()
    console.log(getTodo)


}
    

  return (
    <div>
        <div className='w-full h-[100vh] flex-col flex items-center '>
            <div className='bg-gray-700 w-[400] mt-6 p-4 rounded-2xl '>
            <div className='flex justify-between w-[100%] p-2'>
                <h1 className='text-white text-3xl '>My Todo</h1>
                {/* <div>logo smt</div> */}
            </div>
            <div className='w-[100%] p-2'>
                <form action="">
                <input className='w-[75%] h-[100%]' type="text" placeholder='new task' 
                value = {getTodo}
                onChange={e => setGetTodo(e.target.value)}
                />
                <button type="submit" className='btn btn-sm w-[25%]'
                onClick={hdlsubmitbtn}
                >submit</button>
                </form>
            </div>
            <hr className='m-1 mb-3 w-[100%] text-gray-400'/>
            <div>
                {
                    todoLists.map(el => <TodoElement id={el.id} taskName={el.taskName} completed={el.completed} userId={el.userId}/>)
                }
            </div>
            </div>
        </div>
    </div>
  )
}

export default TodoListPage
import React, { useEffect, useState } from 'react'
import TodoElement from '../component/TodoElement'
import axios from "axios"
import useTodoStore from '../api/usetodoStore'
// import getApi from "../api/getApi"

function TodoListPage() {
    const [getTodo , setGetTodo] = useState([])
    
    const getApi = useTodoStore((state)=> state.getApi)
    const todoLists = useTodoStore((state)=> state.todoLists)

    useEffect(()=>{
        // postUser()
        getApi(29)
    
    },[])




    // async function postUser() {
    // try {
    //     const response = await axios.post(`http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos` ,{
    //         taskName: "test from vscode" ,
    //         userId : 29
    //     });
    // } catch (error) {
    //     console.error(error);
    // }
    // }
    
    // async function postFetch(){
    //     const res = await fetch(`http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos`,{
    //         method: "POST",
    //         body: JSON.stringify({ 
    //             taskName: "test from vscode" ,
    //             userId : 29
    //         }),

    //     })
    //     const json = await res.json();
    //     console.log(json)
    // }


    

  return (
    <div>
        <div className='w-full h-[100vh] flex-col flex items-center '>
            <div className='bg-gray-700 w-[400] mt-6 p-4 rounded-2xl '>
            <div className='flex justify-between w-[100%] p-2'>
                <h1 className='text-white text-3xl '>My Todo</h1>
                {/* <div>logo smt</div> */}
            </div>
            <div className='w-[100%] p-2'>
                <input className='w-[80]' type="text" placeholder='new task' />
                <button className='btn gap-0 m-0'>submit</button>
                <hr className='m-1 mt-3 w-[100%] text-gray-400'/>
            </div>
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
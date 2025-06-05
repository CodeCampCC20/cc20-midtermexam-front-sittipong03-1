import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router'
import MainLayout from '../layouts/MainLayout'
import LoginPage from '../pages/LoginPage'
import TodoListPage from '../pages/TodoListPage'
import RegisterPage from '../pages/RegisterPage'

function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
                <Route path='/' element={<MainLayout/>}>
                <Route index element={<TodoListPage/>}/>
                <Route path='login' element={<LoginPage/>}/>
                <Route path='register' element = {<RegisterPage/>} />  
                </Route>   
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
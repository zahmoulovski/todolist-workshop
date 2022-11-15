import React from 'react'
import { useSelector } from "react-redux";
import Todo from './Todo';
 

const Todolist = () => {
    const todo = useSelector((state) => state.todolist)
  return (
    <div>
      {todo.map((el)=> <Todo todoobj={el} /> )}
    </div>
  )
}

export default Todolist







import React from 'react'
import { handelDelete } from './redux/ToDoslice'
import {useDispatch} from 'react-redux'
const Todo = ({todoobj}) => {
  const Dispatch=useDispatch()
  return (
    <div>
      <ul>
        <li>
            {todoobj.text}
        </li>
        <button onClick={() => Dispatch(handelDelete(todoobj.id))}>remove</button>

      </ul>
    </div>
  )
}

export default Todo

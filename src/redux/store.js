





import { configureStore } from '@reduxjs/toolkit'
import  Todolistslice from './ToDoslice'

export default configureStore({
  reducer: {
    todolist:Todolistslice
  },
})
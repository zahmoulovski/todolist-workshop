import { createSlice } from '@reduxjs/toolkit'

export const Todolistslice=createSlice({
    name:"todolist",
    initialState:[
        { id: 1, text: "todo list 1", isDone: false },
        { id: 2, text: "todolist 2", isDone: false },
        { id: 3, text: "todolist 3", isDone: false },
      ],
      reducers:{
        handelDelete:(state,action)=>{
            return state.filter((el) => el.id !== action.payload),
            console.log('handledelete')
        },
        handleDone:(state,action)=>{
            return state.map((el) => {
            if (el.id==action.payload){
                return { ...el, isDone : !el.isDone  }
            } else { return {...el} }}
            )},
        
      }
})

export const {handleDone,handelDelete}=Todolistslice.actions;
export default Todolistslice.reducer
import {createSlice, nanoid} from '@reduxjs/toolkit';

// nanoid for random no. generation like Date.now()

const initialState = {
    todos : [{id: 1,text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,  
    reducers:{
        addTodo : (state,action) =>{
            const todo = {
                id: nanoid(),              // random string
                text: action.payload    // payload ek obj hai
            }
            state.todos.push(todo)
        },
        removeTodo : (state,action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo : (state,action) => {
            state.todos = state.todos.map((todo)=> {text:action.payload})  
        }
    }

    // reducers ke function ke andar hamesha 2 cheeze milengi 1. State  && 2. Action   1. State --> batayega ki abhi current state kya hai aapke todo ka        2. Action --> batayega ki current state ka id kya hai ?? kuch values aye wo ki jaise id etc etc ... 
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions  

export default todoSlice.reducer
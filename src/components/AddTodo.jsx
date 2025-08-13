import React, { useState } from 'react'
import { addTodo } from '../features/todo/todoSlice.js'
import { useDispatch } from 'react-redux';
const AddTodos = () => {
    const [input, setInput] = useState('');
    const dispath=useDispatch();

    const addTodoHandler=(e)=>{
        e.preventDefault();
        dispath(addTodo(input))
        setInput('');
    }
    return (
        <form onSubmit={addTodoHandler}>
            <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button type='submit'>submit</button>
        </form>
    )
}

export default AddTodos;
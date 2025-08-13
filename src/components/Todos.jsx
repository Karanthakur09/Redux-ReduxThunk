import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice.js';

const Todos = () => {
    const todos = useSelector(state => state.todos); //in use selector u get access of the state
    const dispath = useDispatch();

    return (
        <>
            <div>
                {todos.map((todo) => (
                    <li key={todo.id} >
                        {todo.text}
                        <button onClick={() => dispath(removeTodo(todo.id))}>
                            X
                        </button>
                    </li>
                ))}
            </div>
        </>
    )
}

export default Todos
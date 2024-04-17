import {IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";


function Todo( { todo , onRemoveTodo, onUpdateTodo} ) {
    
    const{ id, content } = todo;
    const[editable , setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);

    const updateTodo = () => {
        const request = {
            id : id ,
            content : newTodo,
        }
        onUpdateTodo(request);
        setEditable(false);

    }

    const removeTodo = () => {
        onRemoveTodo(id);
    }
    // const [newTodo, setNewTodo] = useState(content);
    
    return (
        <div className="todo-list">
            <div>
                {
                    editable ? <input value={newTodo} onChange={(e)=> setNewTodo(e.target.value)} className="todo-input" type="text"  /> : content
                } 
            </div>
            <div> 
                <IoIosRemoveCircle className="todo-icons" onClick = {removeTodo}/>
                {
                    editable ? <FaCheck className="todo-icons" onClick={updateTodo} /> : <FaEdit className="todo-icons" onClick = {()=> setEditable(true)}  />
                }
                
                
            </div>
            


        </div>
    )
}

export default Todo;
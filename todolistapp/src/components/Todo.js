import React, {useState} from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({todos, completeTodo, removeTodo, updateTodo }) {

    const [edit, serEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        serEdit({
            id: null,
            value: ''
        });
    };

  return todos.map((todo, index) => (
    <div 
        className={todo.isComplete ? 'todo-row complete' :'todo-row'} 
        key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine 
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
                <TiEdit 
                    onClick={() => setImmediate({id: todo.id, value: todo.text})}
                    className='edit-icon'
                />
            </div>
    </div>
  ))
}

export default Todo

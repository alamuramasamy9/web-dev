import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Todos = () => {

    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos);
    const [todo, setTodo] = useState({ do: '', done: false });


    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue
        };
        console.log('newTodo', newTodo)
        setTodo(newTodo);
    }

    const createTodoClickHandler = () => {
        const action = {
            type: 'create-todo',
            todo
        };
        dispatch(action);
    }

    const deleteTodoClickHandler = (todo) => {
        const action = {
            type: 'delete-todo',
            todo
        };
        dispatch(action);
    }

    const updateTodoClickHandler = (todo) => {
        const action = {
            type: 'update-todo',
            todo
        };
        dispatch(action);
    }

    return (
        <>
            <h3>Todos</h3>
            <input
                onChange={todoChangeHandler}
                defaultValue={todo.do}
                className="form-control"
            />
            <button onClick={createTodoClickHandler}
                    className="btn btn-primary">
                Create New Todo
            </button>

            <ul className="list-group">
                {
                    todos.map(todo =>
                        <li className="list-group-item">

                            <input checked={todo.done}
                                   onChange={(event) =>
                                       updateTodoClickHandler(
                                           {
                                               ...todo,
                                               done: event.target.checked
                                           })}
                                   type="checkbox"
                            />

                            &nbsp;&nbsp; {todo.do}

                            <button onClick={() =>
                                deleteTodoClickHandler(todo)}
                                    className="btn btn-danger float-end">
                                Delete
                            </button>

                        </li>

                    )
                }
            </ul>
        </>
    );
};
export default Todos;
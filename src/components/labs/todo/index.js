import TodoList from "./todo-List.js";
import React from "react";



const Todos = () => {
        return(
            <>
                    <h1>Todo List</h1>
                    {TodoList()}
            </>
        )
};

export default Todos;
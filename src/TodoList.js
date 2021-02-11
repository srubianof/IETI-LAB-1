import React from "react";
import {Todo} from "./Todo";

export const TodoList = ({items: todoList}) => {
    const listMap = todoList.map((item, index) => {
            return (
                <li key={index}>
                    <Todo text={item.text}
                          priority={item.priority}
                          dueDate={item.dueDate}/>
                </li>
            );
        }
    );
    return (<ul>{listMap}</ul>)
};



import React from "react";
import { useSelector } from "react-redux";
import Todo from "../todo/todo";
import styles from "./todo_list.module.css";

const TodoList = (props) => {
  const todos = useSelector((state) => state.todos.todos);
  console.log("todos > ", todos);

  return (
    <section>
      <ul></ul>
    </section>
  );
};

export default TodoList;

import React from "react";
import { useSelector } from "react-redux";
import Todo from "../todo/todo";
import styles from "./todo_list.module.css";

const TodoList = (props) => {
  const todos = useSelector((state) => state.todos.todos);
  console.log("todos > ", todos);

  return (
    <div className={styles.container}>
      <section className={styles.working}>
        <h2 className={styles.title}>Working 👩🏻‍💻</h2>
        <div className={styles.todos}>
          {todos.map((todo) =>
            todo.isDone === false ? <Todo todo={todo} key={todo.id} /> : null
          )}
        </div>
      </section>
      <section className={styles.done}>
        <h2 className={styles.title}>Done 🎉</h2>
        <div className={styles.todos}>
          {todos.map((todo) =>
            todo.isDone === true ? <Todo todo={todo} key={todo.id} /> : null
          )}
        </div>
      </section>
    </div>
  );
};

export default TodoList;

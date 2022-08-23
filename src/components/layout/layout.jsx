import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import TodoList from "../todo_list/todo_list";

const Layout = (props) => (
  <>
    <Header />
    <TodoList />
    <Footer />
  </>
);

export default Layout;

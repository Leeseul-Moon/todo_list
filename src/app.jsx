import styles from "./app.module.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import TodoList from "./components/todo_list/todo_list";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;

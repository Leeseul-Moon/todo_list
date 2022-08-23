import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Detail from "./components/detail/detail";
import Layout from "./components/layout/layout";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path="/" exact element={<Layout />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

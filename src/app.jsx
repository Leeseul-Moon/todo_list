import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Detail from "./components/detail/detail";
import Layout from "./components/layout/layout";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" exact element={<Layout />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

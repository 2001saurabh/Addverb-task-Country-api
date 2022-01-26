import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import "./App.css";

import ContriesDetail from "./Components/ContriesDetail";
import Header from "./Components/Header";
// import "semantic-ui-css/semantic.min.css";
function App() {
  return (
    <Router>
      <main className="bg-gray-100 dark:bg-gray-900">
        <Header />
        <Routes>
          <Route path="/" exact element={<ContriesDetail />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;

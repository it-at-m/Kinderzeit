
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Login from "./pages/login";
export default function App() {
  return (
    <BrowserRouter>
    <switch>
    <Route exact path="frontend/pages/index.tsx">
        <Home/>
      </Route>
    <Route exact path="/frontend/pages/login.tsx">
        <Login />
      </Route>
    </switch>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

import { BrowserRouter,Route, Routes } from "react-router-dom";
import Login from "./pages/login-page";
import HomePage  from "./pages/home-page";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<HomePage  />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
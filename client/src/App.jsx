import { BrowserRouter,Route, Routes } from "react-router-dom";
import Login from "./pages/login-page";
import HomePage  from "./pages/home-page";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<HomePage  />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/Document" element={<DocumentPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
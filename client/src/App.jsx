import { BrowserRouter,Route, Routes } from "react-router-dom";
import Login from "./pages/login-page";
import HomePage  from "./pages/home-page";
import Contact from "./pages/contact-page";
import OrderInfo from "./pages/order-info";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomePage  />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/order-info" element={<OrderInfo />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
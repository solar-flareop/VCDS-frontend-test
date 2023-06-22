import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import SubService from "./pages/SubService";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/#services" element={<Home />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/sub-services/:mainServiceId" element={<SubService />} />
          <Route path="/detailproduct" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

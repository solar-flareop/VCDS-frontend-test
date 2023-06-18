import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import SubService from "./pages/SubService";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sub-services/:mainServiceId" element={<SubService />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
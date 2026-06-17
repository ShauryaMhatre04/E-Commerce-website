import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import Cart from "./pages/Cart";
import ProceedToBuy from "./pages/ProceedToBuy";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <Testimonials />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/buy/:id" element={<ProceedToBuy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
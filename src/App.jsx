import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import PropertyDetail, { ListingsPage } from "./pages/PropertyDetail/PropertyDetail";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<ListingsPage />} />
            <Route path="/buy/:slug" element={<PropertyDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

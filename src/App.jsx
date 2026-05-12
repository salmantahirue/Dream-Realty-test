import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import PropertyDetail, { ListingsPage } from "./pages/PropertyDetail/PropertyDetail";
import NeighborhoodDetail, { NeighborhoodsListPage } from "./pages/NeighborhoodDetail/NeighborhoodDetail";
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
            <Route path="/neighborhoods" element={<NeighborhoodsListPage />} />
            <Route path="/neighborhoods/:slug" element={<NeighborhoodDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Aldi from "./pages/Aldi";
import Costco from "./pages/Costco";
import Hardware from "./pages/Hardware";
import Target from "./pages/Target";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />   {/* default route inside Layout */}
        <Route path="aldi" element={<Aldi />} />
        <Route path="costco" element={<Costco />} />
        <Route path="hardware" element={<Hardware />} />
        <Route path="target" element={<Target />} />
      </Route>
    </Routes>
  );
}

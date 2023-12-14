import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./layouts/MainLayout";
import { NotFound } from "./components/NotFound";
import { Home } from "./pages/home/Home";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { About } from "./pages/about/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

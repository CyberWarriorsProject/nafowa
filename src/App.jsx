import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { NotFound } from "./components/NotFound";
import { Home } from "./pages/home/Home";
import { Services } from "./pages/services/Services";
import News from "./pages/services/News";
import { Contact } from "./pages/contact/Contact";
import { About } from "./pages/about/About";
import NewsDisplay from "./pages/services/NewsDisplay";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDisplay />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

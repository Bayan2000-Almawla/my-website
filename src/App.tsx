import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import Home from "./pages/Home";
import PullUps from "./pages/PullUps";
import PushUps from "./pages/PushUps";
import Abs from "./pages/Abs";
import Nutrition from "./pages/Nutrition";
import Programs from "./pages/Programs";
import Beginners from "./pages/Beginners";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageTitles />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pullups" element={<PullUps />} />
          <Route path="/pushups" element={<PushUps />} />
          <Route path="/abs" element={<Abs />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/beginners" element={<Beginners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function PageTitles() {
  const { pathname } = useLocation();

  useEffect(() => {
    const base = "أفضل تمارين وزن الجسم لبناء العضلات";
    const map: Record<string, string> = {
      "/": base,
      "/pullups": `تمارين العقلة — ${base}`,
      "/pushups": `تمارين الضغط — ${base}`,
      "/abs": `تمارين البطن — ${base}`,
      "/nutrition": `الدايت والتغذية — ${base}`,
      "/programs": `برامج تدريب — ${base}`,
      "/beginners": `برنامج المبتدئين — ${base}`,
      "/contact": `اتصل بنا — ${base}`,
    };
    document.title = map[pathname] ?? base;
  }, [pathname]);

  return null;
}


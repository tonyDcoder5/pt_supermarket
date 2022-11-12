import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeLayout from "./pages/Home/HomeLayout";
import WeeklyAd from "./pages/WeeklyAd/WeeklyAd";
import GalleryPage from "./pages/Gallery/GalleryPage";
import CateringPage from "./pages/Catering/CateringPage";
import Contact from "./pages/Contact/ContactPage";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <div className="body">
          <Hero />
          <Routes>
            <Route exact path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomeLayout />} />
            <Route path="/weekly-ad" element={<WeeklyAd />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/catering" element={<CateringPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

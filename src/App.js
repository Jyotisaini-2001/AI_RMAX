/** @format */

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import { useEffect } from "react";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App bg-gradient-to-r from-gray-50 to-red-50 px-4">
        <Navbar />
        <div className="max-w-screen-1120 mx-auto px-4">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>

      {/* Chat Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button>
          <img alt="chat" src="./chat.svg" />
        </button>
      </div>
    </Router>
  );
}

export default App;

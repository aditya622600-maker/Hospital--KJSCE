import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Appointments from "./pages/Appointments.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <BrowserRouter>
      <main className="app-shell">
        <header className="topbar">
          <Link className="brand" to="/" aria-label="KJS Healthcare home">
            <span className="brand-mark" aria-hidden="true">+</span>
            <span>KJS <strong>Healthcare</strong></span>
          </Link>
          <nav className="main-nav" aria-label="Main navigation">
            <Link to="/">Home</Link>
            <Link to="/appointments">Appointments</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>

        <footer className="page-footer">
          Demonstration interface · Sample patient information only
        </footer>
      </main>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// 1. Improved Page Components with a "Card" look
const Home = () => (
  <div style={pageStyle}>
    <h2>🏠 Home Page</h2>
    <p>Welcome to our beautiful React application!</p>
  </div>
);

const About = () => (
  <div style={pageStyle}>
    <h2>✨ About Us</h2>
    <p>We are learning how to build modern web apps using React Router.</p>
  </div>
);

const Contact = () => (
  <div style={pageStyle}>
    <h2>📞 Contact</h2>
    <p>Feel free to reach out via email or social media.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div style={containerStyle}>
        {/* 2. Styled Navigation Bar */}
        <nav style={navStyle}>
          <h1 style={{ color: 'white', margin: 0, fontSize: '1.2rem' }}>MyProject</h1>
          <div>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/about" style={linkStyle}>About</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
          </div>
        </nav>

        {/* 3. Main Content Area */}
        <main style={{ marginTop: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer style={footerStyle}>
          Built with React & React Router
        </footer>
      </div>
    </BrowserRouter>
  );
}

// --- CSS-IN-JS STYLES ---

const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  backgroundColor: '#f4f7f6',
  minHeight: '100vh',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#2c3e50',
  padding: '15px 25px',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  marginLeft: '20px',
  fontWeight: '500',
  fontSize: '0.9rem',
};

const pageStyle = {
  padding: '40px',
  backgroundColor: 'white',
  borderRadius: '10px',
  marginTop: '20px',
  textAlign: 'center',
  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
};

const footerStyle = {
  textAlign: 'center',
  marginTop: '40px',
  fontSize: '0.8rem',
  color: '#7f8c8d',
};

export default App;
// src/App.js
import React, { useState } from 'react';
import './App.css';

function GenButton() {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const [grayScale, setGrayScale] = useState(0);
  const [blur, setBlur] = useState(0);
  const [brightness, setBrightness] = useState(1);

  const handleGenClick = () => {
    setLoading(true);
    setTimeout(() => {
      if (text.includes("gray")) {
        setGrayScale(Math.random()*25+50);
        console.log("gray");
      }
      if (text.includes("blur")) {
        setBlur(Math.random()*2+0.5);
      }
      if (text.includes("bright")) {
        setBrightness(Math.random()/2 + 1);
      }
      setLoading(false);
    }, Math.floor(Math.random() * 2000) + 1000);
  }

  const handleResetClick = () => {
    setGrayScale(0);
    setBrightness(1);
    setBlur(0);
  }
  return (<>
    <div style={{ display: 'grid', justifyContent: 'center', flexDirection: 'column', gap: '10px' }}>
      <img src="terminator-future-movies.jpg" alt='terminator thing' style={{ width: '500px', 
        filter: `grayscale(${grayScale}%) blur(${blur}px) brightness(${brightness})`}}/>
      <input
        type="text"
        value={text}
        disabled={loading}
        onChange={e => setText(e.target.value)}
        placeholder="Type something..."
        style={{
          padding: '8px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '16px',
        }}
      />
      <>{loading ? (
        <p>Loading...</p>
      ) : (
        <button className="gen-button" onClick={handleGenClick}>Generate</button>
      )}</>
      <button className="cta-button" disabled={loading} onClick={handleResetClick}>Reset</button>
    </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">SmartCapture</div>
        <ul className="nav-links">
          <li><a href="#before-after">Before-and-After</a></li>
          <li><a href="#video-tutorials">Video Tutorials</a></li>
          <li><a href="#use-cases">Use Cases</a></li>
          <li><a href="#competitions">AI Competitions</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="#ethics-transparency">Ethics & Transparency</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Master AI Photography Ethically & Creatively</h1>
          <p>Explore interactive before-and-after sliders, video tutorials, AI use cases, and more.</p>
          <button className="cta-button">Start Learning</button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <section id="before-after" className="section before-after">
          <h2>Before-and-After</h2>
          <p>Check out how AI can transform your photos in seconds.</p>
          <GenButton />
          {/* Later, add interactive sliders or image comparisons here */}
        </section>

        <section id="video-tutorials" className="section video-tutorials">
          <h2>Video Tutorials</h2>
          <p>Watch short videos on AI editing, popular tools, and ethical AI practices.</p>
          {/* Thumbnails or embedded videos can go here */}
        </section>

        <section id="use-cases" className="section use-cases">
          <h2>Use Cases</h2>
          <p>See how photographers are using AI to speed up workflows and try new creative ideas.</p>
        </section>

        <section id="competitions" className="section competitions">
          <h2>AI Competitions</h2>
          <p>Learn about AI-focused photo contests and ways to showcase your work.</p>
        </section>

        <section id="community" className="section community">
          <h2>Community</h2>
          <p>Join other photographers, share your AI-edited images, and get feedback.</p>
        </section>

        <section id="ethics-transparency" className="section ethics-transparency">
          <h2>Ethics & Transparency</h2>
          <p>Discover how to use AI responsibly and keep your photos honest and fair.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 SmartCapture. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

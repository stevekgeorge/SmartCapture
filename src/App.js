// src/App.js
import React from 'react';
import './App.css';

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

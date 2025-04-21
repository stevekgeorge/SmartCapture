// src/App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
      <img src="https://stevekgeorge.github.io/SmartCapture/terminator-future-movies.jpg" alt='terminator thing' style={{ width: '500px', 
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

function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Master AI Photography Ethically & Creatively</h1>
          <p>
            Dive in and see how AI can take your photos up a notch. Try our
            before‑and‑after interactive AI model, catch a quick video lesson, or check out
            real‑world tips.
          </p>
          <Link to="/before-after">
            <button className="cta-button">Start Learning</button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Quick Overview */}
        <section className="section overview">
          <h2>What is SmartCapture?</h2>
          <p>
            SmartCapture is your go‑to spot for AI photo tools and tutorials.
            Swap between original and AI‑edited shots, watch bite‑size videos,
            explore real use cases, and pick up best practices for honest AI
            edits.
          </p>
        </section>

        {/* Importance */}
        <section className="section importance">
          <h2>Why AI in Photography Matters</h2>
          <p>
            AI is changing the game for anyone who loves taking pictures. You can
            speed up routine edits like removing noise or tweaking colors, so you
            spend more time shooting and less time behind a screen. Even if you’re
            new to editing, AI tools help you get pro‑level results fast—and you
            still get to call the shots.
          </p>
        </section>

        {/* Ethical Implications */}
        <section className="section ethics">
          <h2>Ethical Considerations</h2>
          <p>
            With great power comes some big questions. If you let AI do too much,
            where does your own style come in? And what about giving credit when
            a model’s training data included other artists’ work? Here you’ll find
            clear advice on how to use AI without losing your creative voice or
            stepping on anyone’s toes.
          </p>
        </section>
      </main>
    </>
  );
}


function BeforeAndAfter() {
  return (<>
    {/* Main Content */}
    <main>
      <section id="before-after" className="section before-after">
        <h2>Before-and-After</h2>
        <p>Check out how AI can transform your photos in seconds.</p>
        <GenButton />
        <div>
          <br />
          1. Generative AI systems can be accessed through text prompts. Try writing a text prompt in the box <br />
          where it says <i> Type something...</i> and hit Generate.
          <br /> <br />
          2. Good! Text prompts are now you are able to talk to the AI system. Depending on the AI, there can be a <br />
          chatbox or an image generator option. Chatboxes will respond back to you in words while image geneartors will <br />
          generate one or more images based off of keywords in your prompt. Make sure your prompts are clear to get the <br />
          best results. 
          <br/> <br />
          Now, let's try editing the image. Depending on the image's <i> mood</i>, we want different levels of contrast, <br />
          saturation, and hue. Try prompting the textbox to make the image brighter, making sure to use the keyword 'bright' <br />
          so that the text prompt is clear.
          <br/> <br />
          3. Great! You can reset the changes created at anytime by pressing the Reset button. Try resetting the editing to <br />
          the original settings by pressing this button.
          <br/> <br />
          4. Awesome. Now let's try a different <i> mood</i>. Let's try a different tool, called blur. Try prompting the textbox <br />
          to blur the image, making sure to use the keyword 'blur'. This tool is useful for bringing other parts of the image into <br />
          focus or for privacy reasons.
        </div>
        {/* Later, add interactive sliders or image comparisons here */}
      </section>
    </main></>);
}

function VideoTutorials() {
  const videos = [
    {
      id: '-2v-VFi_6WU',
      title: 'Luminar Neo: The Ultimate AI Photo Editor Ever?',
      before: 'We kick things off by exploring Luminar Neo: a powerful AI‑driven editor that promises professional results with just a few clicks. Watch to see how its AI masking and relighting tools handle complex edits in seconds.',
      after: 'As you saw, Luminar Neo excels at auto‑selecting tricky edges and rebalancing light. If you need a one‑stop AI editor for rapid enhancements, this one’s a no‑brainer.',
    },
    {
      id: 'neuvkdCLWEk',
      title: 'How To Use Playground AI Step by Step | FULL TUTORIAL',
      before: 'Our next walkthrough takes us into Playground AI, where you’ll learn from scratch how to generate and refine images using its simple prompt‑based interface.',
      after: 'Playground AI’s intuitive layout and powerful customization options let you go from blank canvas to stunning AI art in minutes.',
    },
    {
      id: 'Dk1TxDKzb68',
      title: 'Descript AI Video Editing Tutorial',
      before: 'Lastly, we explore Descript, a revolutionary video editor that treats your transcript like a document. Watch how editing text reshapes your video in real time.',
      after: 'Descript’s text‑based workflow combined with features like auto‑captioning and Overdub makes editing faster than ever. It’s perfect for creators who want speed without sacrificing control.',
    },
  ];

  return (
    <main>
      <section id="video-tutorials" className="section video-tutorials">
        <h2>Video Tutorials</h2>
        <p>
          Dive into our curated selection of quick lessons! Learn how to edit
          with AI, explore the hottest tools on the market, and get tips for
          using AI effectively in your photography workflow.
        </p>

        <div className="video-grid">
          {videos.map(({ id, title, before, after }) => (
            <div className="video-item" key={id}>
              <p className="video-blurb before">{before}</p>

              <div className="video-container">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <p className="video-blurb after">{after}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}



function UseCases() {
  return (<>
    {/* Main Content */}
    <main>
    <section id="use-cases" className="section use-cases">
        <h2>Use Cases</h2>
        <p>See how photographers are using AI to speed up workflows and try new creative ideas.</p>
      </section>
    </main></>);
}

function EthicsTransparency() {
  return (<>
    {/* Main Content */}
    <main>
    <section id="ethics-transparency" className="section ethics-transparency">
        <h2>Ethics & Transparency</h2>
        <p>Discover how to use AI responsibly and keep your photos honest and fair.</p>
        <br /> 
        <div> 
          Generative AI is just another tool in your overall toolkit as a professional photographer. Part of being <br /> 
          technologically literate comes with the responsbility of knowing <i>how</i> to use AI. AI should never be <br />
          the only tool that is used in professional photography-- you are the photographer, not the AI! It should <br />
          be a part of the editing process and not the entire process itself. Since generative AI is able to come up <br />
          with new ideas that weren't necessarily from you, if a large enough chunk of the creative content <br />
          did come from the model, it is good practice to credit the AI model as part of your workflow. <br />
          <br />
          Now that you are a AI savvy photographer, go ahead and revolutionize your business!
          </div>
      </section>
    </main></>);
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="navbar">
        <Link to="/SmartCapture/"><div className="logo">SmartCapture</div></Link>
          <ul className="nav-links">
            <li><Link to="/before-after">Before-and-After</Link></li>
            <li><Link to="/video-tutorials">Video Tutorials</Link></li>
            <li><Link to="/use-cases">Use Cases</Link></li>
            <li><Link to="/ethics-transparency">Ethics & Transparency</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SmartCapture" element={<Home />} />
          <Route path="/SmartCapture/" element={<Home />} />
          <Route path="/before-after" element={<BeforeAndAfter />} />
          <Route path="/video-tutorials" element={<VideoTutorials />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/ethics-transparency" element={<EthicsTransparency />} />
        </Routes>
        

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2025 SmartCapture. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

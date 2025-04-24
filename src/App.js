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

        <img src="https://stevekgeorge.github.io/SmartCapture/logo.png" alt="logo" style={{ width: '500px', borderRadius: '12px', marginTop: '1rem', marginBottom: '1rem', margin: auto}} />
        

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

        <img src="https://stevekgeorge.github.io/SmartCapture/robot.png" alt="robot" style={{ width: '500px', borderRadius: '12px', marginTop: '1rem', marginBottom: '1rem', margin: auto }} />


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
          where it says <i> Type something...</i> and hit Generate. The image might not change, but that's okay. <br />
          <br /> <br />
          Text prompts are now you are able to talk to the AI system. Depending on the AI, there can be a <br />
          chatbox or an image generator option. Chatboxes will respond back to you in words while image generators will <br />
          generate one or more images based off of keywords in your prompt. Make sure your prompts are clear to get the <br />
          best results. For this example, there is no text output.
          <br/> <br />
          2. Now, let's try editing the image. Depending on the image's <i> mood</i>, we want different levels of contrast, <br />
          saturation, and hue. Try prompting the textbox to make the image brighter, making sure to use the keyword 'bright' <br />
          so that the text prompt is clear.
          <br/> <br />
          3. Great! You can reset the changes created at anytime by pressing the Reset button. Try resetting the editing to <br />
          the original settings by pressing this button.
          <br/> <br />
          4. Awesome. Now let's try a different <i> mood</i>. Let's try a different tool, called blur. Try prompting the textbox <br />
          to blur the image, making sure to use the keyword 'blur'. This tool is useful for bringing other parts of the image into <br />
          focus or for privacy reasons.
          <br/> <br />
          5. Now you know that keywords are important to communicate with any text-based AI. Regenerating images and edits multiple <br />
          times to try different ideas provides the most robust way to edit. Let's reset the image and try one more keyword: making the <br />
          image <i>gray</i>.
          <br /> <br />
          That's it for your first tutorial on how to use a generative AI model using text prompts! With a simple keyword such as <br />
          bright or gray, an image can be edited within seconds. Be sure to check out other tutorials under <i> Video Tutorials </i> for <br />
          more detailed examples on how to use AI technology for your photography.
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



// function UseCases() {
//   return (<>
//     {/* Main Content */}
//     <main>
//     <section id="use-cases" className="section use-cases">
//         <h2>Use Cases</h2>
//         <p>See how photographers are using AI to speed up workflows and try new creative ideas.</p>
//       </section>
//     </main></>);
// }

function UseCases() {
  return (
    <main>
      <section id="use-cases" className="section use-cases">
        <h2>Real-World Use Cases of AI in Photography</h2>
        <p>
          Explore how photographers—from hobbyists to pros—are using AI tools to level up their craft.
        </p>

        <div className="video-grid" style={{ marginTop: '2rem' }}>
          <div className="video-item">
            <h3>✨ Wedding Photo Cleanup</h3>
            <img src="https://stevekgeorge.github.io/SmartCapture/wedding.jpg" alt="Wedding Photo Cleanup" style={{ width: '100%', borderRadius: '12px', marginTop: '1rem' }} />
            <p>
              AI tools can quickly remove distractions like photobombers or power lines in outdoor wedding shots.
              This saves hours in post-production and helps meet tight delivery deadlines.
            </p>
          </div>
          <div className="video-item">
            <h3>🎨 AI Styling for Brand Shoots</h3>
            <img src="https://stevekgeorge.github.io/SmartCapture/fashion.jpeg" alt="Brand Shoot Image" style={{ width: '100%', borderRadius: '12px', marginTop: '1rem' }} />
            <p>
              Photographers working with fashion or product brands use AI to generate different visual styles from
              the same shoot—helping clients decide faster.
            </p>
          </div>
          <div className="video-item">
            <h3>🧪 Quick A/B Testing</h3>
            <img src="https://stevekgeorge.github.io/SmartCapture/ad.jpeg" alt="Advertisement Image" style={{ width: '100%', borderRadius: '12px', marginTop: '1rem' }} />
            <p>
              For social media or ads, photographers create multiple image versions with subtle AI tweaks. Test what works—fast.
            </p>
          </div>
          <div className="video-item">
            <h3>🌅 Landscape Enhancement</h3>
            <img src="https://stevekgeorge.github.io/SmartCapture/landscape.jpeg" alt="Landscape Image" style={{ width: '100%', borderRadius: '12px', marginTop: '1rem' }} />
            <p>
              Travel photographers enhance skies and water reflections with AI filters. Flat lighting? Fixed in seconds.
            </p>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#005F73",
            color: "#ffffff",
            padding: "1rem",
            borderRadius: "7px",
            maxWidth: "700px",
            margin: "3rem auto 1rem auto",
            lineHeight: "1.5",
            textAlign: "center",
          }}
        >
          <h3 style={{ marginTop: 0 }}>🚀 Pro Tip</h3>
          <p style={{ color: "#e0f7fa" }}>
            Combine traditional editing with AI for the best results. Use AI to speed up the repetitive parts,
            then fine-tune the rest to match your personal style.
          </p>
        </div>

        <p>
          Want more inspiration? Jump to our <Link to="/video-tutorials">Video Tutorials</Link> for hands-on walkthroughs.
        </p>
      </section>
    </main>
  );
}

function EthicsTransparency() {
  const [answers, setAnswers] = useState([null, null, null]);
  const [feedback, setFeedback] = useState(["", "", ""]);

  const handleAnswer = (questionIndex, selectedAnswer) => {
    const correctAnswers = ["c", "b", "a"];
    const newAnswers = [...answers];
    const newFeedback = [...feedback];

    newAnswers[questionIndex] = selectedAnswer;
    newFeedback[questionIndex] =
      selectedAnswer === correctAnswers[questionIndex]
        ? "✅ Correct!"
        : "❌ Not quite. Try again or review the material above.";

    setAnswers(newAnswers);
    setFeedback(newFeedback);
  };

  return (
    <>
    {/* Main Content */}
    <main>
    <section id="ethics-transparency" className="section ethics-transparency">
      <h2> Ethics in AI Photography </h2>
      <img src="https://stevekgeorge.github.io/SmartCapture/ethics1.jpg" alt="ethics" style={{ width: '500px', borderRadius: '12px', marginTop: '1rem', marginBottom: '1rem', margin: auto }} />

        <br />
        <p>Discover how to use AI responsibly and keep your photos honest and fair.</p>
        <br /> 
        <div>
          Generative AI is just another tool in your overall toolkit as a professional photographer. Part of being <br /> 
          technologically literate comes with the responsbility of knowing <i>how</i> to use AI. AI should never be <br />
          the only tool that is used in professional photography-- you are the photographer, not the AI! It should <br />
          be a part of the editing process and not the entire process itself. Other than that, there are 4 main considerations<br />
          regarding ethics with AI photography.<br />
          <br /><br />
          1. <u>Transparency</u>: Since generative AI is able to come up with new ideas that weren't necessarily from you, if a large enough chunk of the <br />
          creative content did come from the model, it is good practice to credit the AI model as part of your workflow. Overall, <br />
          Be transparent and specific about AI usage by stating which aspects of your photo were AI-enhanced.<br />
          <br /> <br />
          2. <u>Bias</u>: AI tools are not impartial to bias. The tools may be biased on certain features, beauty filters, and enchancements <br />
          from the dataset that it was trained on. The best way to combat these unintended biases is to test your tools on a  <br />
          a variety of different subjects, so that you are able to notice any biased editing during your work. AI is not always <br />
          better than your personal vision, or your impartial editor. Exercise caution!
          <br /> <br />
          3. <u>Consent</u>: If you are editing people, make sure to receive clear consent from them if you are using AI to modify <br />
          their appearance in a significant way. Deepfakes are when people are edited to look like other people, and this <br />
          sort of editing is made more accessible with AI -- exercise courtsey and professionalism in these scenarios. It is <br />
          always the case that people should be consenting to your edits. <br />
          <br /> <br />
          4. <u>Misinformation</u>: Don't use AI to misrepresent people, events, or products. This goes hand and hand with transparency, <br />
          as false advertisement and false subject representation can deeply affect public perception of individuals or communities. <br />
          <br /><br />
          <div style={{ backgroundColor: "#FD3F6C", padding: "1rem", borderRadius: "7px", maxWidth: "700px", margin: "0 auto",}}>
          <img src="https://stevekgeorge.github.io/SmartCapture/quiztime.jpg" alt="quiztimes" style={{ width: '100%', borderRadius: '12px', marginTop: '1rem' }} />
  
  <h2 style={{ color: "white", margin: 0 }}>Test your Knowledge!</h2> </div> <br /> <br />
          <div>
          <p><strong>1. You have used AI tools to touch up a photograph by enhancing the sky and remove some undesired parts from the background of the image. You then
            submit this photograph with the edits to a photography contest. What should you do, given the transparency consideration? </strong></p>
            <br /> 
              <label><input type="radio" name="q1" onChange={() => handleAnswer(0, "a")} /> Keep quiet since AI usage is not a big deal</label><br /> 
              <label><input type="radio" name="q1" onChange={() => handleAnswer(0, "b")} /> Only mention it if you win the contest</label><br /> 
              <label><input type="radio" name="q1" onChange={() => handleAnswer(0, "c")} /> Be clear about how you used AI-assistance in your photograph</label><br /> 
              <p>{feedback[0]}</p>
          <br /> <br />
          <p><strong> 2. You are using an AI editor for some cosmetic touch ups for people in your photograph. You noticed that as you wre prompting the tool to make 
            the subject appear more professional, the tool has lightened the subject's skin. How best should you proceed, given the bias consideration? </strong></p>
            <br />
              <label><input type="radio" name="q2" onChange={() => handleAnswer(1, "a")} /> Keep the tool's changes </label><br /> 
              <label><input type="radio" name="q2" onChange={() => handleAnswer(1, "b")} /> Test the tool on a variety of different subjects, and adjust your process depending on the outcome </label><br /> 
              <label><input type="radio" name="q2" onChange={() => handleAnswer(1, "c")} /> Since the tool is biased on skin tone, only use it for light skinned subjects </label><br /> 
              <p>{feedback[1]}</p>
          <br /><br />
          <p><strong>3. You have been approached by a client to use AI editing software to develop a deepfake of another person. Given the consent and misinformation considerations, how
            best should you proceed? </strong></p>
            <br />
              <label><input type="radio" name="q3" onChange={() => handleAnswer(2, "a")} /> Deepfakes violate consent in this scenario, so refuse the work </label><br /> 
              <label><input type="radio" name="q3" onChange={() => handleAnswer(2, "b")} /> Agree to the work, since the client knows best </label><br /> 
              <label><input type="radio" name="q3" onChange={() => handleAnswer(2, "c")} /> Agree to the work, but only use traditional editing techniques and not AI </label><br /> 
              <p>{feedback[2]}</p>
          </div>
          <br /><br />
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

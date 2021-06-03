import { useState } from 'react';
import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {

  const [scrollId, setScrollId] = useState(null);

  return (
    <div className="app">
      <Navbar setScrollId={setScrollId}/>

      <Profile/>
      
      <Experience scrollId={scrollId}/>

      <Projects scrollId={scrollId} />

      <Skills scrollId={scrollId}/>

      <Education scrollId={scrollId}/>
    </div>
  );
}

export default App;

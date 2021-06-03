import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="app">
      <Navbar/>

      <Profile/>
      
      <Experience/>

      <Projects/>

      <Skills/>

      <Education/>
    </div>
  );
}

export default App;

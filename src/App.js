import './App.css';
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
    </div>
  );
}

export default App;

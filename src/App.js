import './App.css';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Projects from './components/Projects';

function App() {
  return (
    <div className="app">
      <Navbar/>

      <Profile/>
      
      <Experience/>

      <Projects/>
    </div>
  );
}

export default App;

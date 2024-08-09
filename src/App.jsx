import  styles from'./App.module.css';
import Navbar from './components/navbar/Navbar';
import About from './components/About/About';
import Team from './components/Team/Team';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className={styles.App}>
        <Navbar/>
        <Hero/>
        <About/>
        <Team/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;

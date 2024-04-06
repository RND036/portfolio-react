import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar';
import {Banner} from './components/banner';
import { Skills } from './components/skills';
import {Footer} from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills/>
      <Footer/>
      
    </div>
  );
}

export default App;

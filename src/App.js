import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LightBulb from "./pages/page1";
import Page2 from "./pages/page2";
import Counter from "./pages/page3";
import Home from './pages/home';

function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/page1' element={<LightBulb/>} />
        <Route path='/page2' element={<Page2/>} />
        <Route path='/page3' element={<Counter/>} />
      </Routes>
    </Router>
  );
}

export default App;
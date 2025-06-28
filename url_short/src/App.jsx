import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Stats from './components/stats/stats';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/stats" element={<Stats/>} />
      </Routes>
    </Router>
  );
}

export default App;

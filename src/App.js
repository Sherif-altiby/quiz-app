import './App.css'
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Login />} />
        <Route path='/quiz-app' element={<Login />} />
        <Route path='/register' element={<Register />} /> 
      </Routes>
    </Router>
  );
}

export default App;

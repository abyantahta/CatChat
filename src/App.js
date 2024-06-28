import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import Chat from './pages/popo';
import Article from './pages/Article';
import Home from './pages/Home';
function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/chat' element={<Chat/>}></Route>
      <Route path='/article/:id' element={<Article/>}></Route>
    </Routes>
  </Router>
  </>
  );
}

export default App;

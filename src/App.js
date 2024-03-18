import logo from './logo.svg';
import './App.css';
import Visitordsentry from './components/Visitordsentry';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Visitordsentry/>}/>
      <Route path='/Header' element={<Header/>}/>

     </Routes>
     </BrowserRouter>
 
    </div>
  );
}

export default App;

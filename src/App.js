import background from './imgset/background.png';
import './App.css';
import StageList from './components/StageList';
import Stage from './components/Stage' ; 
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom"; 
import Block from './components/Block' ; 


function App() {
  return (
    <BrowserRouter>
    <div className = "app-container">
      <Routes>
        <Route exact path="/" element={<StageList/>}></Route>
        
        <Route path="/stage/:stage" element ={<Stage/>}></Route>
        
        <Route path="/stage/:stage/block/:block" element ={<Block/>}></Route>
  
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
{/*import About from './components/About';*/}
{/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";*/}
function App() {
  const [mode,setmode]=useState('light')
 
  const togglemode=()=>{
    if(mode==='dark'){
      setmode('light')
      document.body.style.backgroundColor='white'
      
      showalert('light mode has been enabled','success')

    }
    else{
      setmode('dark')
      document.body.style.backgroundColor='black'
    
      showalert('dark mode has been enabled','success')


    }
  }
  const[alert,setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
   setTimeout(() => {
    setalert(null)
   }, 1500);

  }
  return (
    <>
   {/* <Router>*/}
    <Navbar title="TextUtils" about="About us" mode={mode} togglemode={togglemode}  />
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm showalert={showalert} heading="Enter your text" mode={mode}/>
     { /*<Switch>

      <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
          </Route>
  </Switch>*/}
   
    </div>
      {/*</Router>*/}

    
    
   
    </>
  );
}

export default App;

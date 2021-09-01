import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
// import About from './components/About';
import React,{useState} from 'react'
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";




function App() {
  const [mode, setmode] = useState('light') 
  const toggleMode=()=>{
    if(mode==='light')
    {
      
      setmode('dark')
      document.body.style.backgroundColor='#343a40'
      showalert('Dark Mode has been enabled','success')
      
    }
    else
    {
      
      setmode('light')
      document.body.style.backgroundColor='white'
      showalert('Light Mode has been enabled','success')
    }
  }
  const [alert, setalert] = useState(null)
  const showalert=(message,type)=>{

    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
        
      setalert(null)
    }, 2500);
  }
  return (
 <>
 {/* <Router> */}
<Navbar title='TextUtils' abouttext='About TextUtils' mode={mode} toggleMode={toggleMode} />
<div className="container">
  <Alert alert={alert} />
  {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/">

          </Route>
        </Switch> */}
          <Textform heading="Enter the text to Analyze" mode={mode} />
  

</div>
{/* </Router> */}

 </>
  );
}

export default App;

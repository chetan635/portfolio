import './App.css';
import Leftnav from './components/Leftnav';
import Middle from './components/Middle';
import Rightnav from './components/Rightnav';
import Aboutus from './components/Aboutus';
import './components/Leftnav.css';
import { useState } from 'react';

function App() {
  const [x, setx] = useState(true)

  const handleX = (p)=>{
    if(p==true){
      document.getElementById("homeIcon").style.color = "rgb(255, 104, 104)"  
      document.getElementById("aboutIcon").style.color = "rgb(202, 202, 202)"
    }
    else{
      document.getElementById("aboutIcon").style.color = "rgb(255, 104, 104)"  
      document.getElementById("homeIcon").style.color = "rgb(202, 202, 202)"
    }
    setx(p)
  }
 if(x){
  return (
    
    <div className="mainRow row">
      <div className="col-md-1 left itemx">
        <Leftnav x = {handleX}/>
      </div>
      <div className="col-md-8 middle itemx">
        <Middle/>
      </div>
      {/* <div className="col-md-8 middle itemx">
        <Aboutus/>
      </div> */}
      <div className="col-md-3 right itemx">
        <Rightnav x = {handleX}/>
      </div>
    </div>
   

  );
 }
 else{
  return (
    
    <div className="mainRow row">
      <div className="col-md-1 left itemx">
        <Leftnav x = {handleX}/>
      </div>
      {/* <div className="col-md-8 middle itemx">
        <Middle/>
      </div> */}
      <div className="col-md-8 middle itemx">
        <Aboutus/>
      </div>
      <div className="col-md-3 right itemx">
        <Rightnav x = {handleX}/>
      </div>
    </div>
   

  );
 }
}

export default App;

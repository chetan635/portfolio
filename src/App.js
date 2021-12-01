import './App.css';
import Leftnav from './components/Leftnav';
import Middle from './components/Middle';
import Rightnav from './components/Rightnav';
import Aboutus from './components/Aboutus';
import Blog1 from './components/Blog';
import './components/Leftnav.css';
import { useState } from 'react';
import firebase from './components/firebase'


function App() {
  const [x, setx] = useState(true)
  const [blog, setblog] = useState(false)
  const [myBlogs, setmyBlogs] = useState([])
  var ref = firebase.firestore().collection("blogs")

  const handleX = (p)=>{
    setblog(false)
    if(p==true){
      document.getElementById("homeIcon").style.color = "rgb(255, 104, 104)"  
      document.getElementById("aboutIcon").style.color = "rgb(202, 202, 202)"
    }
    else{
      document.getElementById("aboutIcon").style.color = "rgb(255, 104, 104)"  
      document.getElementById("homeIcon").style.color = "rgb(202, 202, 202)"
    }
    // console.log(blog)
    setx(p)
    
  }



  const handleBlog= (p)=>{
    // console.log(blog)
    setblog(true)
    getBlogs()
  }


  function getBlogs() {
    ref.onSnapshot((querySnapshot) => {
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())
        });
       setmyBlogs(items)
       
    })
    
    
}



 if(x==true && blog ==false){
  return (
    
    <div className="mainRow row">
      <div className="col-md-1 left itemx">
        <Leftnav handleBlog={handleBlog} x = {handleX}/>
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
 else if(x==false && blog==false){
  return (
    
    <div className="mainRow row">
      <div className="col-md-1 left itemx">
        <Leftnav handleBlog={handleBlog} x = {handleX}/>
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
 else{
  return (
    
    <div className="mainRow row">
      <div className="col-md-1 left itemx">
        <Leftnav handleBlog={handleBlog} x = {handleX}/>
      </div>
      {/* <div className="col-md-8 middle itemx">
        <Middle/>
      </div> */}
      <div className="col-md-8 middle itemx">
        <Blog1 myBlogs={myBlogs}/>
      </div>
      <div className="col-md-3 right itemx">
        <Rightnav  x = {handleX}/>
      </div>
    </div>
   

  );
 }
}

export default App;

import React, { useState } from 'react'
import './Rightnav.css'
// import Drawer from 'rsuite/Drawer';
// import chetan from './chetan.jpeg'
export default function Rightnav(props) {
    // const [currentmode, setcurrentmode] = useState(true)
    // const handleMode = ()=>{
    //     console.log("hello")
    //     if(currentmode===true){
    //         document.body.style.backgroundColor = "#bba9cc"
    //         document.getElementById("right1").style.backgroundColor = "#e6e6e6"
    //         document.getElementById("right2").style.backgroundColor = "#e6e6e6"
    //         document.getElementById("left1").style.backgroundColor = "#e6e6e6"
    //         // document.getElementById("middle1").style.backgroundColor = "#e6e6e6"
    //         document.getElementById("dark").style.display="block"
    //         document.getElementById("dark").style.color="rgb(255, 104, 104)"
    //         document.getElementById("light").style.display="none"
    //         // document.getElementById("abc").style.color = "black"
    //         var x = document.getElementsByClassName("NavIcons");
    //         console.log(x.length)
    //         for(var i=0;i<x.length ;i++){
    //             x[i].style.color="black"
    //         }
    //         var p = document.getElementsByClassName("Icon");
    //         for(var i=0;i<p.length ;i++){
    //             p[i].style.color="black"
    //         }
    //         setcurrentmode(!currentmode)
    //     }
    //     else if(currentmode===false){
    //         document.body.style.backgroundColor = "#121128"
    //         document.getElementById("right1").style.backgroundColor = "#1a162c"
    //         document.getElementById("right2").style.backgroundColor = "#1a162c"
    //         document.getElementById("left1").style.backgroundColor = "#1a162c"
    //         document.getElementById("dark").style.display="none"
    //         document.getElementById("light").style.display="block"
    //         // document.getElementById("middle1").style.backgroundColor = "#1a162c"
    //         // document.getElementById("abc").style.color = "rgb(201, 201, 201)"
    //         var x = document.getElementsByClassName("NavIcons");
    //         for(var i=0;i<x.length ;i++){
    //             x[i].style.color="rgb(201, 201, 201)"
    //         }
    //         var p = document.getElementsByClassName("Icon");
    //         for(var i=0;i<p.length ;i++){
    //             p[i].style.color="rgb(201, 201, 201)"
    //         }
    //         setcurrentmode(!currentmode)
    //     }
    // }

    const handleDjango = ()=>{
        props.x(true)
        setTimeout(() => {
            document.querySelector('#Django').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }, 30);
    }
    const handleFlutter = ()=>{
        props.x(true)
        setTimeout(() => {
            document.querySelector('#Flutter').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }, 30);
    }
    const handleReactJs = ()=>{
        props.x(true)
        setTimeout(() => {
            document.querySelector('#ReactJs').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }, 30);
    }
    const handleNodeJS = ()=>{
        props.x(true)
        setTimeout(() => {
            document.querySelector('#NodeJs').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }, 30);
    }
    const handlecr = ()=>{
        props.x(true)
        setTimeout(() => {
            document.querySelector('#cr').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }, 30);
    }


    return (
        <div className="rightNav">
            {/*  */}
            <div id="right1" className="details">
                <div className="image">
                     <img className="person" src="https://c8.alamy.com/comp/2E8KN83/funny-cartoon-face-of-cute-anime-boy-with-monocle-and-ok-finger-gesture-high-class-good-taste-approval-sign-isolated-vector-clip-art-illustration-2E8KN83.jpg" alt="" />
                </div>
               
                <div className="qualities">
                 <span className="quali1">#Hardworking</span>
                 <span className="quali2">#Team Player</span>
                 <br />
                 <br />
                 <span className="quali3">#enthusiast</span>
                 <span className="quali4">#Developer</span>
                 <span className="quali5">#coder</span>
                 <br />
                 <br />
                 <span className="quali6">#Learner</span>
                 <span className="quali7">#owl</span>
                 <span className="quali8">#chai</span>
                 <span className="quali8">#Peace☮︎</span>
                </div>
            </div>
            <div id="right2" className="skills">
                {/* <div className="title"></div> */}
            <div className="mobile">
                <div className="Items">
                <div onClick={handleDjango} className="indvisual1 a1"><span class="iconify" data-icon="logos:django-icon"></span></div>
                <div onClick={handleFlutter} className="indvisual2 a2"><span class="iconify" data-icon="logos:flutter"></span></div>
                <div onClick={handleReactJs} className="indvisual3 a3"><span class="iconify" data-icon="vscode-icons:file-type-reactjs"></span></div>
                </div>
                <div className="Items">
                <div onClick={handleNodeJS} className="indvisual1 a4"><span class="iconify" data-icon="vscode-icons:file-type-node"></span></div>
                <div onClick={handlecr} className="indvisual2 a5"><span class="iconify" data-icon="logos:python"></span></div>
                <div onClick={handlecr}  className="indvisual3  a6"><span class="iconify" data-icon="vscode-icons:file-type-cpp3"></span></div>
                </div>
            </div>
                <div className="Items">   
                <div className="indvisual1 a7"><span class="iconify" data-icon="vscode-icons:file-type-html"></span></div>
                <div className="indvisual2 a8"><span class="iconify" data-icon="vscode-icons:file-type-css"></span></div>
                <div className="indvisual3 a9"><span class="iconify" data-icon="vscode-icons:file-type-js-official"></span></div>
                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import './Rightnav.css'
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
        }, 10);
    }
    const handleFlutter = ()=>{
        props.x(true)
        setTimeout(() => {
            document.querySelector('#Flutter').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }, 10);
    }
    const handleReactJs = ()=>{
        props.x(true)
        setTimeout(() => {
            document.querySelector('#ReactJs').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }, 10);
    }
    const handleNodeJS = ()=>{
        props.x(true)
        setTimeout(() => {
            document.querySelector('#NodeJs').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }, 10);
    }
    const handlecr = ()=>{
        props.x(true)
        setTimeout(() => {
            document.querySelector('#cr').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }, 10);
    }


    return (
        <div className="rightNav">
            <div style={{backgroundColor:"transparent"}}  className="info">
                <div id="dark"  className="mode infoItem">
                {/* <span class="iconify" data-icon="gg:dark-mode" data-flip="horizontal"></span> */}
                </div>
                
                <img className="Logoimage infoItem" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAKlBMVEXk5ueutLfo6uupsLPg4uPZ3N3U19jJzc+2u76orrLO0dO8wcPAxcfDx8oF30/pAAAE0klEQVR4nO2d2ZasIAxFJajg9P+/ex1q6m7rlkCQEyv7pVf3k3sFEgZNV5WiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKBeEiKq6afuFtll/vRCzTeu8sZ290Vnjp7a6iiXVvbfW/MFa72r5kkT7eg/JvhLtSOTe690lJ8GOn/1Wx06qI7XmgN8Wx16gIlX+oN/q6GtpjtQG+K2OwsJIU6DgrDiIUgwZoQ9FU/qpAwjX2xwbIWGsIwIoSjFeUIpiguCiWPrxP5PityiWfv5PkE80NAZ7nNKYNEbXIELXxeCVzK6iQ1ZkEDSmw802DJNwAzWI1LOEEHmcMgnOinVplV0i9hNv8ZhB7NgEMZc2NPAJYgaxZgwhZBA5Z+ECYBB5BU2Hlk7ZauEdO4EFkW058wTMMGVjv49tSzv9gBy7oRmhgphhkBoLZcidSRewNlEcO9/fWFfa6gWa+AWxin6OaYg1EYl1TfowBFrW8FfD1RCoIuZINFiHGS6HIFLNz5NKkZIp7/Ye0jBLsTBA2wvKJIhz7Z3LEOemTQ3V8HsNgTLN9avF9St++u09uOH1V95fsHvivXd6GALtgK9/ipGnIEKdRI05DIFSaaZUg3Qi/AWn+te/mbn+7dr1b0gzDFOsQfoNbyqwZ1OkBc0Gd9GHKvcbvLkG8K2vL3hzj3ULhRhC3rMMyBBWjOkU7rW9G3xvsuPVwhuX/xqBq2JgppkNlnGKdMT2FxrSFVHz6I30MymcC6d3pAqCFooX0rIN1uHMG5qUL51b7Em4QfGKMgSr+IHaifhWfSOma4Qx+EnmScQ+w/rSDx1G8OoGeyWzR2AHHiOuA0+1hvGoo7wAbhBNhxztKLQTVrUM1Y+O1o4SB+gTqnrf/acjnXFy43eHqHZvugqaqZHfVXBl6Qw5+W5pDLmp2a7zY3+BpomvLO08l+aezi3dPeuLdff8CmiH0s/EAt1bz7pxGLzfThvnn34YJ3cbrWJN50evWzd4s7Wd3Uml29/91DfiutEuSaUfTfe+EP5QXdrvetdKSa1bz+C9oH0StUZAASFq9qt7gGWLu8iZ9SaToPew9D3iSnXWG9Pt7pIdXANlqtzRjrqHJYcWZk4StQNb+F4lQfYd8/aIOXwvjnYsfr54YIubKOmLOs7TL69fYccDDddlOwYcpaU7DudXSGriDu6jHadzawdVDLfZgYrmzHspljal4Y7DWeUx7Lye1fGczvRlAnhTHM4QZO6tF6hocheOciP04Zh3pCZc0fMp5uwVTX2Wr/ACyfg/FMpOwVcyrXA43lljIs8/GAASzKNIpZPoT/hfvQET5FeEGqIbvAM1V9OEJDjf08zx/SQHfIItQqHfge196Tw9AxmwTB/SZuuvkw7PMhwwjT7hyDYlN7wH4JiK0IIM7/zlapDERvI4bUALxZPEcQqcR++kdSZg/8o+B0mtCUiAYFJRRF2P/iIhiCJCmBJEEbNwJdqw9IMfJTqdAhz/HiSyJuZp4JWF2IWNmBDGrk6xNxU/iRqmggZp5DAVk0kXbB9hCHs6s0vMlZuYcr8SsXITNQ2j+r2ImoZRy5o8TVfzEd4oU1aiiUk1kur9QnjNl5VKTcQOynVWFF2o4P7XZsiEGyqKoiiKoiiKoiiKoihn8g8ITEwsG8b5AAAAAABJRU5ErkJggg=="alt="" />
                <div className="name infoItem">
                    @Chetan4788
                </div>
            </div>
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
                <div className="Items">
                    
                <div  className="indvisual1  a7"><span class="iconify" data-icon="vscode-icons:file-type-html"></span></div>
                <div className="indvisual2 a8"><span class="iconify" data-icon="vscode-icons:file-type-css"></span></div>
                <div className="indvisual3 a9"><span class="iconify" data-icon="vscode-icons:file-type-js-official"></span></div>
                </div>
            </div>
        </div>
    )
}

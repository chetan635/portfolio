import React from 'react'
import './Leftnav.css';
export default function Leftnav(props) {

    const handleAbout = ()=>{
        props.x(false)
    }
    const handleHome = ()=>{
        props.x(true)
        
    }
    const handleAboutlink = ()=>{
        props.x(false)
        setTimeout(() => {
            document.querySelector('.per-det').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }, 30);
    }

    const handleCert = ()=>{
        props.x(true)
        setTimeout(() => {
            document.querySelector('#cert').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }, 30);
   
    }
     const handleIntern = ()=>{
        props.x(true)
        setTimeout(() => {
            document.querySelector('#intern').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }, 30);
        
     }
    const handleClose = ()=>{
        // window.open(URL, '_blank');
        window.open()
        window.close()
    }
    return (
        <div id="left1" className="LeftnavBar">
            <div className="myIcon "><span class="iconify" data-icon="mdi:alpha-c-box"></span></div>
            <div onClick={handleHome} style={{color:"#ff6868"}} id="homeIcon" className="homeIcon Icon"><span class="iconify" data-icon="icon-park-outline:all-application"></span></div>
            <div onClick={handleAbout} id="aboutIcon" className="aboutIcon Icon"><span class="iconify" data-icon="simple-icons:informatica"></span></div>
            <div onClick={handleAboutlink} className="contactIcon Icon"><span class="iconify" data-icon="fontisto:at"></span></div>
            <a target="_blank" href="https://drive.google.com/file/d/1t81vFy5U5J_urESMcbJ22RWZtm3FG57t/view?usp=sharing"><div className="resume Icon"><span class="iconify" data-icon="bx:bx-barcode-reader" data-flip="horizontal"></span></div></a>
           <div onClick={handleCert} className="project Icon"><span class="iconify" data-icon="tabler:certificate"></span></div>
            <div onClick={handleIntern} className="internship Icon"><span class="iconify" data-icon="ant-design:safety-certificate-filled"></span></div>

            
            
            <div onClick={handleClose}   className="exitIcon Icon"><span class="iconify" data-icon="mdi:location-exit" data-flip="horizontal"></span></div>
        </div>
    )
}

import React from 'react'
import './Aboutus.css'
import Navbar from './Navbar'
import hobby from './hobby.png'
import ab from './ab.png'
export default function Aboutus() {
    return (
        <div className="aboutus">
            <Navbar />
            <div className="about">
                <div className="row about-info">
                    <div className="col-md-5 profile">
                        <img className="profile-img" src={ab} alt="" />
                    </div>
                    <div className="col-md-7 details2">
                        <div className="abc typewriter2"><h2 className="abc">Somethings About Me</h2></div>
                        <h2>Hii my name is <strong style={{color:"rgb(255, 104, 104)"}}>Chetan Chinchulkar</strong></h2>..
                        I am a fourth year computer Science student at Vishwakatrma institute of Information Technology,Pune.
                        pursuing Dreams,Learning New things in life.  I am learning lots of things in Technical Field and I will keep going ...

                        <h3 style={{color:"#ff6868"}}>“Make it work, make it right, make it fast.” </h3>
                    </div>
                </div>
               
                {/* <hr color="white" style={{color:"white",border:"1" ,opacity:1}} /> */}
                <div className="school">
                    <div className="about-title">
                    <span class="iconify" data-icon="raphael:books"></span> School
                    </div>
                    <div className=""><span className="innerItems">#Rastriya Hindi vidhyalay </span>
                    <span className="innerItems">#Jalna</span>
                    <span className="innerItems">#Maharashtra</span>
                    <span className="innerItems">#Semi</span>
                    {/* <span className="innerItems">#92%</span> */}
                    </div>
                </div>
                <div className="Collage">
                    <div className="about-title">
                    <span class="iconify" data-icon="raphael:books"></span> Collage
                    </div>
                    <div className=""><span className="innerItems">#Rashtramata Collage  </span>
                    <span className="innerItems">#Jalna</span>
                    <span className="innerItems">#Maharashtra</span>
                    <span className="innerItems">#English</span>
                    {/* <span className="innerItems">#92%</span> */}
                    </div>
                </div>
                <div className="Collage">
                    <div className="about-title">
                    <span class="iconify" data-icon="ion:school-sharp"></span> Engineering
                    </div>
                    <div className=""><span className="innerItems">#Vishwakarma Institute of Information Technology  </span>
                    <span className="innerItems">#Pune</span>
                    <span className="innerItems">#Maharashtra</span>
                    <span className="innerItems">#English</span>
                    <span className="innerItems">#Btech-Computer Science</span>
                    <span className="innerItems">#GPA:9.41(Till 6th sem)</span>
                    {/* <span className="innerItems">#92%</span> */}
                    </div>
                </div>
                <div className="Collage">
                    <div className="about-title">
                    <span class="iconify" data-icon="ant-design:safety-certificate-filled"></span> Internships
                    </div>
                    <div className=""><span className="innerItems">#Done a 3 months Internship (project) at Dizitized India </span>
                    <span className="innerItems">#Django</span>
                    <span className="innerItems2">#Website called Chicken on wheels : websites helps customers to order food online and keep track of orders to owners</span>
                    <span className="innerItems">#English</span>
                    {/* <span className="innerItems">#92%</span> */}
                    </div>
                </div>
                
                {/* <hr color="white" style={{color:"white",border:"1" ,opacity:1}} /> */}
                <div className="row about-info">
                    <div className="col-md-9">
                        <h1 style={{color:"#bebebe"}}><span   class="iconify" data-icon="el:brush"></span> Hobbies</h1>
                        <div className="innerItems"><span   style={{color:"#ff00b1"}} class="iconify" data-icon="zondicons:computer-laptop"></span> Interests About New Tech</div>
                        <div className="innerItems"><span   style={{color:"#00fc9f"}} class="iconify" data-icon="maki:cricket"></span> Playing and Watching cricket</div>
                        <div className="innerItems"><span   style={{color:"#ffd509"}} class="iconify" data-icon="fluent:movies-and-tv-16-filled"></span> Watching Movies</div>
                        <div className="innerItems"><span   style={{color:"#00f3ff"}} class="iconify" data-icon="emojione-monotone:video-game"></span> Playing Games</div>
                    </div>
                    <div className="col-md-3">
                            <img className="profile-img3" src={hobby} alt="" />
                    </div>
                </div>
                <div className="about-info row">
                    <div className="col-md-3 current-logo">
                    <span class="iconify" data-icon="fa-solid:user-clock"></span>
                    </div>
                    <div className="col-md-9">
                    <div className="Collage">
                    <div className="about-title">
                     Current 
                    </div>
                    <div className=""><span className="innerItems">#Intern At RSL (Raja Software Labs) </span>
                    {/* <span className="innerItems">#92%</span> */}
                    <span className="innerItems">#Pune</span>
                    <span className="innerItems">#Maharashtar</span>
                    </div>
                </div>
                    </div>
                </div>
                <div className="per-det">
                <div className="row real">
                    <div  className="col-md-5 infocol">
                    <div className="footerIcon"><span class="iconify" data-icon="simple-icons:gmail"></span></div>
                    <span className="text" style={{fontSize:"20px",padding:"10px"}}>chetanchinchulkar4788@gmail.com</span>
                    </div>
                 
                    <div  className="col-md-5 infocol">
                    <div className="footerIcon"><span class="iconify" data-icon="el:phone-alt"></span></div>
                    <span className="text" style={{fontSize:"20px",padding:"10px"}}>+91 9834366791</span>
                 
                    </div>
                </div>
                <div className="row real">
                    <div className="col-md-5 infocol">
                    <div className="footerIcon"><span class="iconify" data-icon="emojione-monotone:birthday-cake"></span></div>
                    <span className="text" style={{fontSize:"20px",padding:"10px"}}>25 Feb 2000</span>
                    </div>
                    <div className="col-md-5 infocol">
                    
                    <div className="footerIcon"><span class="iconify" data-icon="fa-solid:address-book"></span></div>
                    <span className="text" style={{fontSize:"15px",padding:"10px"}}>Jijamata Coloney New Mondha Jalna, 431203</span>
                    </div>
                </div>
                </div>
                {/* <hr color="white" style={{color:"white",border:"1" ,opacity:1}} /> */}
                
            </div>
        </div>
    )
}

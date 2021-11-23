import React from 'react'
import './Aboutus.css'
import Navbar from './Navbar'
import about from './about2.png'
export default function Aboutus() {
    return (
        <div className="aboutus">
            <Navbar />
            <div className="about">
                <div className="row">
                    <div className="col-md-5 profile">
                        <img className="profile-img" src={about} alt="" />
                    </div>
                    <div className="col-md-7 details2">
                        <div className="abc typewriter2"><h2 className="abc">Somethings About Me</h2></div>
                        <h2>Hii my name is <strong style={{color:"rgb(255, 104, 104)"}}>Chetan Chinchulkar</strong></h2>..
                        I am a fourth year computer Science student at Vishwakatrma institute of Information Technology,Pune.
                        pursuing Dreams,Learning New things in life .
                        <br />
                        love playing Cricket, programming , creating Exciting websites, apps , Learning new things
                        <br />
                        <h3 style={{color:"#ff6868"}}>“Make it work, make it right, make it fast.” </h3>
                    </div>
                </div>
                {/* <hr color="white" style={{color:"white",border:"1" ,opacity:1}} /> */}
                <div className="school">
                    <div className="about-title">
                        +School
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
                        +Collage
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
                        +Engineering
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
                        +Internships
                    </div>
                    <div className=""><span className="innerItems">#Done a 3 months Internship (project) at Dizitized India </span>
                    <span className="innerItems">#Django</span>
                    <span className="innerItems2">#Website called Chicken on wheels : websites helps customers to order food online and keep track of orders to owners</span>
                    <span className="innerItems">#English</span>
                    {/* <span className="innerItems">#92%</span> */}
                    </div>
                </div>
                <div className="Collage">
                    <div className="about-title">
                        +Current😉 
                    </div>
                    <div className=""><span className="innerItems">#Intern At RSL (Raja Software Labs) </span>
                    {/* <span className="innerItems">#92%</span> */}
                    <span className="innerItems">#Pune</span>
                    </div>
                </div>
                {/* <hr color="white" style={{color:"white",border:"1" ,opacity:1}} /> */}
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
                {/* <hr color="white" style={{color:"white",border:"1" ,opacity:1}} /> */}
                
            </div>
        </div>
    )
}

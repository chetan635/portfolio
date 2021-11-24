import React from 'react'
import './Navbar.css'
export default function Navbar() {
    return (
        <div id="nav1" className=" nav Navbar">
            
            <a target="_blank" href="https://www.linkedin.com/in/chetan-chinchulkar-a14021213/">
            <div className="linkdin NavIcons">
            <span class="iconify" data-icon="brandico:linkedin-rect"></span>
            </div>
            </a>
            <a target="_blank" href="https://github.com/chetan635/">
            <div className=" NavIcons github">
            <span class="iconify" data-icon="akar-icons:github-fill"></span>
            </div>
            </a>
            
           <a target="_blank" href="https://twitter.com/chetan_4788">
           <div className="twitter NavIcons">
            <span class="iconify" data-icon="akar-icons:twitter-fill"></span>
            </div>
           </a>
            
           <a href="https://www.instagram.com/chetan_4788/" target="_blank">
           <div className="instagram NavIcons">
            <span class="iconify" data-icon="akar-icons:instagram-fill"></span>
            </div>
           </a>
           
           <a href="https://www.hackerrank.com/chetanchinchulk1" target="_blank">
           <div className="hackerrank NavIcons">
            <span class="iconify" data-icon="cib:hackerrank"></span>
            </div>
           </a>
          
            <a target="_blank" href="https://www.codechef.com/users/chetan735">
            <div className="codechef NavIcons">
            <span class="iconify" data-icon="simple-icons:codechef"></span>
            </div>
            </a>
            {/* <div className="gmail NavIcons">
            <span class="iconify" data-icon="logos:google-gmail"></span>
            </div> */}
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import "./Blog.css"
import Navbar from './Navbar'
import firebase from './firebase'

export default function Blog(props) {

    const [flag, setflag] = useState(true)
    const [myBlogs, setmyBlogs] = useState([])
    var ref = firebase.firestore().collection("blogs")
    var blogs2 = []
    // console.log(ref
    // heading component
    // <div className="heading col-md-12">
    //     this is heading
    // </div>

    // message component
    // <div className="message col-md-12">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fuga blanditiis, obcaecati officia atque laudantium sint consequatur placeat molestiae, molestias ipsum sapiente iusto corrupti laborum quia inventore, ratione dolores magni enim quaerat vero provident dicta dolore! Voluptas delectus sapiente nam quisquam excepturi minus architecto cupiditate quia libero a expedita tenetur veritatis maiores vel non, autem sunt qui aspernatur soluta officiis.
    //             </div>

    // imp message component
    // <div className="imp-message col-md-12">
    //     npm install typed.js
    // </div>

    // <div className="photo">
    //                 <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
    //             </div>

    // linkAttribute
    // <div className="link col-md-12">
    //                 <div className="link-name">Link</div>
    //                 <a href="https://github.com/mattboldt/typed.js/">https://github.com/mattboldt/typed.js/</a>
    //             </div>


    // function getBlogs() {
    //     ref.onSnapshot((querySnapshot) => {
    //         const items = []
    //         querySnapshot.forEach((doc) => {
    //             items.push(doc.data())
    //         });
    //         blogs2 = items;
    //         setmyBlogs(items)
    //         // setblog(items)
    //         // console.log(blogs2)
    //         // console.log(blogs2)
    //         // console.log(items[0])
    //         // console.log(items[0])
    //     })
        
        
    // }

   

    const addBlogs = (obj) => {
        let entries = Object.entries(obj)
        entries.sort(function (a, b) {
            if (a[0] > b[0]) {
                return 1;
            }
            if (b[0] > a[0]) {
                return -1;
            }
            return 0;
        });
        // console.log(entries2)
        entries.map(([key, val]) => {
            if (String(key) == "a") {
                var d = document.createElement('div');
                var f = document.createElement('div');
                d.className = "heading";
                f.className="date"
                f.innerHTML =`<span style={{color:"#ff6868",fontSize:"30px"}} class="iconify" data-icon="mdi:alpha-c-box"></span>`+" "+ obj.date
                d.innerHTML = String(val);
                d.appendChild(f);
                
                var p = document.getElementById('blogDetails');
                p.appendChild(d);

            }
            else if (String(key).slice(2, 9) == "message") {
                var d = document.createElement('div');
                d.className = "message";
                d.innerHTML = String(val);
                var p = document.getElementById('blogDetails');
                p.appendChild(d);
            }
            else if (String(key).slice(1, 6) == "photo") {
                var d = document.createElement('img');
                var z = document.createElement('div');
                d.className = "photo";
                d.src = String(val);
                z.className = "imageConatiner"
                z.appendChild(d);
                var p = document.getElementById('blogDetails');
                p.appendChild(z);
            }
            else if (String(key).slice(2, 7) == "photo") {
                var d = document.createElement('img');
                var z = document.createElement('div');
                d.className = "photo";
                d.src = String(val);
                z.className = "imageConatiner"
                z.appendChild(d);
                var p = document.getElementById('blogDetails');
                p.appendChild(z);
            }
            else if (String(key).slice(2, 5) == "imp") {
                var d = document.createElement('div');
                d.className = "imp-message";
                d.innerHTML = String(val);
                var p = document.getElementById('blogDetails');
                p.appendChild(d);
            }
            else if (String(key).slice(2, 6) == "link") {
                var d = document.createElement('div');
                d.className = "link";
                d.innerHTML = val;
                var p = document.getElementById('blogDetails');
                p.appendChild(d);
            }
        });
    }
    function handleDet(element){
        setflag(false)
        console.log(element)
        setTimeout(() => {
            addBlogs(element)
        }, 500);
    }
    const handleBack = ()=>{
        console.log("hello blog")
        setflag(true)
    }
    // <strong style="color:#ff6868"></strong>

    // useEffect(() => {
    //     getBlogs()
    // },[]);

    if (flag === false) {
        return (
            <div className="Blog">
                <Navbar />
                {/* <img onLoad={() => getBlogs()} style={{ display: "none" }} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" /> */}
                <div onClick={handleBack} className=""><span  className="iconify backbtn" data-icon="ion:arrow-back-circle-sharp"></span></div>
                <div id="blogDetails" className="blogDetails col-md-12">

                </div>
            </div>
        )
    }
    else if (flag == true) {
        return (
            <div className="blogItems col-md-12">
                {/* <img onLoad={() => getBlogs()} style={{ display: "none" }} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" /> */}
                <div className="hed">
                    Blogs
                </div>
                { 
                    props.myBlogs.map(ele => {
                        console.log(ele)
                        return <div onClick={()=>handleDet(ele)} className="blogItem col-md-12">
                                    <div className="row ">
                                    <div className="col-md-3 imgCol">
                                        <img src={ele.coverImage} alt="" className="coverImage" />
                                    </div>
                                    <div className="col-md-9">
                                        <div className=""><span className="date">{ele.date}</span></div>
                                        <div className="tit">{ele.a}</div>
                                        <div className="sub">{ele.subtitle}</div>
                                        <div className="extra"><span style={{color:"#ff6868",fontSize:"30px"}} class="iconify" data-icon="mdi:alpha-c-box"></span> <span className="tech">{ele.tech}</span></div>
                                    </div>
                                    </div>
                                </div>
                        
                    })
                }
            </div>
        )
    }
}



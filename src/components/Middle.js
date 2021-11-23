import React from 'react'
import "./Middle.css"
import final from './Final2.png'
import cr1 from './cr1.PNG'
import cr2 from './cr2.PNG'
import cr3 from './cr3.PNG'
import di from './di.PNG'
// import final2 from './final.png'
import Navbar from './Navbar'
export default function middle() {

    const data = {
        django: [
            {
                id: 1,
                Name: "EasyExam",
                details: "Easy Exam is a Django website made to help students to minimize the barrier between nativ language and English",
                img: <span class="iconify" data-icon="healthicons:i-exam-multiple-choice"></span>,
                link: "https://github.com/chetan635/Easy-Exam"
            },
            {
                id: 2,
                Name: "CollageDost",
                details: "This website helps students appearing for Engineering to get best collage according to their cet,JEE,JEE Advance marks and Rank",
                img: <span class="iconify" data-icon="ph:student-fill"></span>,
                link: "https://github.com/chetan635/CollageDost"
            },
            {
                id: 3,
                Name: "Ecommerse Website",
                details: "It is a E-commerse Website , for purchesing goods of different types",
                img: <span class="iconify" data-icon="emojione-monotone:shopping-bags"></span>,
                link: "https://github.com/chetan635/EcommerceWebsite"
            }
        ],
        flutter: [
            {
                id: 4,
                Name: "IMDB App",
                details: "This App helps to find Details of all the movies,imdb rating etc",
                img: <span class="iconify" data-icon="fa:imdb"></span>,
                link: "https://github.com/chetan635/IMDB-App"
            },
            {
                id: 5,
                Name: "News App",
                details: "app provieds All the latest News daily ",
                img: <span class="iconify" data-icon="vaadin:newspaper"></span>,
                link: "https://github.com/chetan635/NewsFlutterApp"
            },
            {
                id: 6,
                Name: "AgriEase App",
                details: "This appcontains #farmingCalculations #liveMandi #WeatherInfo #map #GovRegu #cropHistory #Fertilizer",
                img: <span class="iconify" data-icon="healthicons:agriculture-worker-alt-negative"></span>,
                link: "https://github.com/chetan635/AgriEaseApp"
            },
            {
                id: 7,
                Name: "Corona App",
                details: "In the event of pandamic , this app provided the daily updates of increased count,deaths all All the cities in country",
                img: <span class="iconify" data-icon="healthicons:virus-negative"></span>,
                link: "https://github.com/chetan635/CoronaFlutterApp"
            },
            {
                id: 8,
                Name: "CHaTtTer App",
                details: "A social media chatting app helps to interact with people , send posts add friends etc",
                img: <span class="iconify" data-icon="bi:chat-left-text-fill"></span>,
                link: "https://github.com/chetan635/Chatter-App"
            },
            {
                id: 8,
                Name: "ShopNest app",
                details: "This is a onlinr E-commarse app helps to sell your products and buy products from different sellers ",
                img: <span class="iconify" data-icon="clarity:shopping-cart-solid"></span>,
                link: "https://github.com/chetan635/ShopNest-Flutter-App"
            }
        ],
        Reactjs: [
            {
                id: 9,
                Name: "TextUtils ",
                details: "This Website helps to manepulate the text in different ways ",
                img: <span class="iconify" data-icon="carbon:text-font"></span>,
                link: "https://github.com/chetan635/reactApp"
            },
            {
                id: 10,
                Name: "News Website",
                details: "This Website helps to keep tract of news of all over the world",
                img: <span class="iconify" data-icon="vaadin:newspaper"></span>,
                link: "https://github.com/chetan635/NewsMonkies"
            },
            {
                id: 11,
                Name: "Musify",
                details: "with help of this website you can listen , search all the songs , create playlist and Enjoy",
                img: <span class="iconify" data-icon="cib:apple-music"></span>,
                link: "https://chetan635.github.io/Musify/"
            },
            {
                id: 12,
                Name: "Portfulio",
                details: "This Website itself is made from React js",
                img: <span class="iconify" data-icon="el:website"></span>
            },
        ],
        nodejs: [
            {
                id: 13,
                Name: "CV Maker(Incomplet)",
                details: "This website helps you to create your CV (Incomplet)",
                img: <span class="iconify" data-icon="bx:bx-barcode-reader" data-flip="horizontal"></span>
            },
        ]

    }

    // console.log(django[0].a["Name"])
    //     "a":{
    //         id : 1,
    //         Name : "EasyExam",
    //         details:"Easy Exam is a Django website made to help students to minimize the barrier between nativ language and English",
    //         img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAKlBMVEXk5ueutLfo6uupsLPg4uPZ3N3U19jJzc+2u76orrLO0dO8wcPAxcfDx8oF30/pAAAE0klEQVR4nO2d2ZasIAxFJajg9P+/ex1q6m7rlkCQEyv7pVf3k3sFEgZNV5WiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKBeEiKq6afuFtll/vRCzTeu8sZ290Vnjp7a6iiXVvbfW/MFa72r5kkT7eg/JvhLtSOTe690lJ8GOn/1Wx06qI7XmgN8Wx16gIlX+oN/q6GtpjtQG+K2OwsJIU6DgrDiIUgwZoQ9FU/qpAwjX2xwbIWGsIwIoSjFeUIpiguCiWPrxP5PityiWfv5PkE80NAZ7nNKYNEbXIELXxeCVzK6iQ1ZkEDSmw802DJNwAzWI1LOEEHmcMgnOinVplV0i9hNv8ZhB7NgEMZc2NPAJYgaxZgwhZBA5Z+ECYBB5BU2Hlk7ZauEdO4EFkW058wTMMGVjv49tSzv9gBy7oRmhgphhkBoLZcidSRewNlEcO9/fWFfa6gWa+AWxin6OaYg1EYl1TfowBFrW8FfD1RCoIuZINFiHGS6HIFLNz5NKkZIp7/Ye0jBLsTBA2wvKJIhz7Z3LEOemTQ3V8HsNgTLN9avF9St++u09uOH1V95fsHvivXd6GALtgK9/ipGnIEKdRI05DIFSaaZUg3Qi/AWn+te/mbn+7dr1b0gzDFOsQfoNbyqwZ1OkBc0Gd9GHKvcbvLkG8K2vL3hzj3ULhRhC3rMMyBBWjOkU7rW9G3xvsuPVwhuX/xqBq2JgppkNlnGKdMT2FxrSFVHz6I30MymcC6d3pAqCFooX0rIN1uHMG5qUL51b7Em4QfGKMgSr+IHaifhWfSOma4Qx+EnmScQ+w/rSDx1G8OoGeyWzR2AHHiOuA0+1hvGoo7wAbhBNhxztKLQTVrUM1Y+O1o4SB+gTqnrf/acjnXFy43eHqHZvugqaqZHfVXBl6Qw5+W5pDLmp2a7zY3+BpomvLO08l+aezi3dPeuLdff8CmiH0s/EAt1bz7pxGLzfThvnn34YJ3cbrWJN50evWzd4s7Wd3Uml29/91DfiutEuSaUfTfe+EP5QXdrvetdKSa1bz+C9oH0StUZAASFq9qt7gGWLu8iZ9SaToPew9D3iSnXWG9Pt7pIdXANlqtzRjrqHJYcWZk4StQNb+F4lQfYd8/aIOXwvjnYsfr54YIubKOmLOs7TL69fYccDDddlOwYcpaU7DudXSGriDu6jHadzawdVDLfZgYrmzHspljal4Y7DWeUx7Lye1fGczvRlAnhTHM4QZO6tF6hocheOciP04Zh3pCZc0fMp5uwVTX2Wr/ACyfg/FMpOwVcyrXA43lljIs8/GAASzKNIpZPoT/hfvQET5FeEGqIbvAM1V9OEJDjf08zx/SQHfIItQqHfge196Tw9AxmwTB/SZuuvkw7PMhwwjT7hyDYlN7wH4JiK0IIM7/zlapDERvI4bUALxZPEcQqcR++kdSZg/8o+B0mtCUiAYFJRRF2P/iIhiCJCmBJEEbNwJdqw9IMfJTqdAhz/HiSyJuZp4JWF2IWNmBDGrk6xNxU/iRqmggZp5DAVk0kXbB9hCHs6s0vMlZuYcr8SsXITNQ2j+r2ImoZRy5o8TVfzEd4oU1aiiUk1kur9QnjNl5VKTcQOynVWFF2o4P7XZsiEGyqKoiiKoiiKoiiKoihn8g8ITEwsG8b5AAAAAABJRU5ErkJggg=="
    //     },
    //    "b":{
    //         id : 2,
    //         Name : "CollageDost",
    //         details:"This website helps students appearing for Engineering to get best collage according to their cet,JEE,JEE Advance marks and Rank",
    //         img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAKlBMVEXk5ueutLfo6uupsLPg4uPZ3N3U19jJzc+2u76orrLO0dO8wcPAxcfDx8oF30/pAAAE0klEQVR4nO2d2ZasIAxFJajg9P+/ex1q6m7rlkCQEyv7pVf3k3sFEgZNV5WiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKBeEiKq6afuFtll/vRCzTeu8sZ290Vnjp7a6iiXVvbfW/MFa72r5kkT7eg/JvhLtSOTe690lJ8GOn/1Wx06qI7XmgN8Wx16gIlX+oN/q6GtpjtQG+K2OwsJIU6DgrDiIUgwZoQ9FU/qpAwjX2xwbIWGsIwIoSjFeUIpiguCiWPrxP5PityiWfv5PkE80NAZ7nNKYNEbXIELXxeCVzK6iQ1ZkEDSmw802DJNwAzWI1LOEEHmcMgnOinVplV0i9hNv8ZhB7NgEMZc2NPAJYgaxZgwhZBA5Z+ECYBB5BU2Hlk7ZauEdO4EFkW058wTMMGVjv49tSzv9gBy7oRmhgphhkBoLZcidSRewNlEcO9/fWFfa6gWa+AWxin6OaYg1EYl1TfowBFrW8FfD1RCoIuZINFiHGS6HIFLNz5NKkZIp7/Ye0jBLsTBA2wvKJIhz7Z3LEOemTQ3V8HsNgTLN9avF9St++u09uOH1V95fsHvivXd6GALtgK9/ipGnIEKdRI05DIFSaaZUg3Qi/AWn+te/mbn+7dr1b0gzDFOsQfoNbyqwZ1OkBc0Gd9GHKvcbvLkG8K2vL3hzj3ULhRhC3rMMyBBWjOkU7rW9G3xvsuPVwhuX/xqBq2JgppkNlnGKdMT2FxrSFVHz6I30MymcC6d3pAqCFooX0rIN1uHMG5qUL51b7Em4QfGKMgSr+IHaifhWfSOma4Qx+EnmScQ+w/rSDx1G8OoGeyWzR2AHHiOuA0+1hvGoo7wAbhBNhxztKLQTVrUM1Y+O1o4SB+gTqnrf/acjnXFy43eHqHZvugqaqZHfVXBl6Qw5+W5pDLmp2a7zY3+BpomvLO08l+aezi3dPeuLdff8CmiH0s/EAt1bz7pxGLzfThvnn34YJ3cbrWJN50evWzd4s7Wd3Uml29/91DfiutEuSaUfTfe+EP5QXdrvetdKSa1bz+C9oH0StUZAASFq9qt7gGWLu8iZ9SaToPew9D3iSnXWG9Pt7pIdXANlqtzRjrqHJYcWZk4StQNb+F4lQfYd8/aIOXwvjnYsfr54YIubKOmLOs7TL69fYccDDddlOwYcpaU7DudXSGriDu6jHadzawdVDLfZgYrmzHspljal4Y7DWeUx7Lye1fGczvRlAnhTHM4QZO6tF6hocheOciP04Zh3pCZc0fMp5uwVTX2Wr/ACyfg/FMpOwVcyrXA43lljIs8/GAASzKNIpZPoT/hfvQET5FeEGqIbvAM1V9OEJDjf08zx/SQHfIItQqHfge196Tw9AxmwTB/SZuuvkw7PMhwwjT7hyDYlN7wH4JiK0IIM7/zlapDERvI4bUALxZPEcQqcR++kdSZg/8o+B0mtCUiAYFJRRF2P/iIhiCJCmBJEEbNwJdqw9IMfJTqdAhz/HiSyJuZp4JWF2IWNmBDGrk6xNxU/iRqmggZp5DAVk0kXbB9hCHs6s0vMlZuYcr8SsXITNQ2j+r2ImoZRy5o8TVfzEd4oU1aiiUk1kur9QnjNl5VKTcQOynVWFF2o4P7XZsiEGyqKoiiKoiiKoiiKoihn8g8ITEwsG8b5AAAAAABJRU5ErkJggg=="
    //     },
    //     "c":{
    //         id : 3,
    //         Name : "Ecommerse Website",
    //         details:"It is a E-commerse Website , for purchesing goods of different types",
    //         img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAKlBMVEXk5ueutLfo6uupsLPg4uPZ3N3U19jJzc+2u76orrLO0dO8wcPAxcfDx8oF30/pAAAE0klEQVR4nO2d2ZasIAxFJajg9P+/ex1q6m7rlkCQEyv7pVf3k3sFEgZNV5WiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKBeEiKq6afuFtll/vRCzTeu8sZ290Vnjp7a6iiXVvbfW/MFa72r5kkT7eg/JvhLtSOTe690lJ8GOn/1Wx06qI7XmgN8Wx16gIlX+oN/q6GtpjtQG+K2OwsJIU6DgrDiIUgwZoQ9FU/qpAwjX2xwbIWGsIwIoSjFeUIpiguCiWPrxP5PityiWfv5PkE80NAZ7nNKYNEbXIELXxeCVzK6iQ1ZkEDSmw802DJNwAzWI1LOEEHmcMgnOinVplV0i9hNv8ZhB7NgEMZc2NPAJYgaxZgwhZBA5Z+ECYBB5BU2Hlk7ZauEdO4EFkW058wTMMGVjv49tSzv9gBy7oRmhgphhkBoLZcidSRewNlEcO9/fWFfa6gWa+AWxin6OaYg1EYl1TfowBFrW8FfD1RCoIuZINFiHGS6HIFLNz5NKkZIp7/Ye0jBLsTBA2wvKJIhz7Z3LEOemTQ3V8HsNgTLN9avF9St++u09uOH1V95fsHvivXd6GALtgK9/ipGnIEKdRI05DIFSaaZUg3Qi/AWn+te/mbn+7dr1b0gzDFOsQfoNbyqwZ1OkBc0Gd9GHKvcbvLkG8K2vL3hzj3ULhRhC3rMMyBBWjOkU7rW9G3xvsuPVwhuX/xqBq2JgppkNlnGKdMT2FxrSFVHz6I30MymcC6d3pAqCFooX0rIN1uHMG5qUL51b7Em4QfGKMgSr+IHaifhWfSOma4Qx+EnmScQ+w/rSDx1G8OoGeyWzR2AHHiOuA0+1hvGoo7wAbhBNhxztKLQTVrUM1Y+O1o4SB+gTqnrf/acjnXFy43eHqHZvugqaqZHfVXBl6Qw5+W5pDLmp2a7zY3+BpomvLO08l+aezi3dPeuLdff8CmiH0s/EAt1bz7pxGLzfThvnn34YJ3cbrWJN50evWzd4s7Wd3Uml29/91DfiutEuSaUfTfe+EP5QXdrvetdKSa1bz+C9oH0StUZAASFq9qt7gGWLu8iZ9SaToPew9D3iSnXWG9Pt7pIdXANlqtzRjrqHJYcWZk4StQNb+F4lQfYd8/aIOXwvjnYsfr54YIubKOmLOs7TL69fYccDDddlOwYcpaU7DudXSGriDu6jHadzawdVDLfZgYrmzHspljal4Y7DWeUx7Lye1fGczvRlAnhTHM4QZO6tF6hocheOciP04Zh3pCZc0fMp5uwVTX2Wr/ACyfg/FMpOwVcyrXA43lljIs8/GAASzKNIpZPoT/hfvQET5FeEGqIbvAM1V9OEJDjf08zx/SQHfIItQqHfge196Tw9AxmwTB/SZuuvkw7PMhwwjT7hyDYlN7wH4JiK0IIM7/zlapDERvI4bUALxZPEcQqcR++kdSZg/8o+B0mtCUiAYFJRRF2P/iIhiCJCmBJEEbNwJdqw9IMfJTqdAhz/HiSyJuZp4JWF2IWNmBDGrk6xNxU/iRqmggZp5DAVk0kXbB9hCHs6s0vMlZuYcr8SsXITNQ2j+r2ImoZRy5o8TVfzEd4oU1aiiUk1kur9QnjNl5VKTcQOynVWFF2o4P7XZsiEGyqKoiiKoiiKoiiKoihn8g8ITEwsG8b5AAAAAABJRU5ErkJggg=="
    //     }



    return (
        <div className="middleBar">
            <Navbar />
            <div className="FirstInfo col-md-12">
                <div className="row">
                    <div className="col-md-6">
                        <img className="middleImage" src={final} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div class="typewriter myName">
                            <h1>Hey,Chetan here!</h1>
                        </div>
                        <div className="det">
                            Enthusiastic Leaner and Coder,computer Science student,Web developer,Always ready for new challenges ☮︎
                        </div>
                    </div>
                </div>
            </div>
            <div id="middle1" className="ItemCards">
                <div className=" abc typewriter2 ">
                    <h2 id="abc"><span class="iconify" data-icon="eos-icons:project"></span> MyProjects</h2>
                </div>
                <div id="Django" className="title">#Django</div>
                <div className="row">

                    {data.django.map(element => {
                        // console.log(element);
                        return <div className="col-md-3 ele-col">
                            <div className="ele-img2">{element.img}</div>
                            <a target="_blank" href={element.link}><div className="ele-name btn">{element.Name}</div></a>
                            <div className="ele-details">{(element.details).slice(0, 60)}...</div>
                        </div>
                    })}

                </div>
                <div id="Flutter" className="title">#Flutter</div>
                <div className="row">

                    {data.flutter.map(element => {
                        // console.log(element);
                        return <div className="col-md-3 ele-col">
                            <div className="ele-img2">{element.img}</div>
                            <a target="_blank" href={element.link}><div className="ele-name btn">{element.Name}</div></a>
                            <div className="ele-details">{(element.details).slice(0, 60)}...</div>
                        </div>
                    })}

                </div>
                <div id="ReactJs" className="title">#ReactJs</div>
                <div className="row">

                    {data.Reactjs.map(element => {
                        // console.log(element);
                        return <div className="col-md-3 ele-col">
                            <div className="ele-img2">{element.img}</div>
                            <a target="_blank" href={element.link}><div className="ele-name btn">{element.Name}</div></a>
                            <div className="ele-details">{(element.details).slice(0, 60)}...</div>
                        </div>
                    })}

                </div>
                <div id="NodeJs" className="title">#NodeJs</div>
                <div className="row">

                    {data.nodejs.map(element => {
                        // console.log(element);
                        return <div className="col-md-3 ele-col">
                            <div className="ele-img2">{element.img}</div>
                            <div className="ele-name">{element.Name}</div>
                            <div className="ele-details">{(element.details).slice(0, 60)}...</div>
                        </div>
                    })}
                <hr />
                </div>
                <div id="cert" className=" abc typewriter2 ">
                    <h2 id="abc"><span class="iconify" data-icon="tabler:certificate"></span> Certificates</h2>
                </div>
               <div className="row" id="cr">
               <div className="col-md-3 ele-col">
                    <div className="ele-img2"><img className="ele-img"  src={cr1} alt="" /></div>
                    <div className="ele-name">Python DSA</div>
                    {/* <div className="ele-details">hello...</div> */}
                </div>
                <div className="col-md-3 ele-col">
                    <div className="ele-img2"><img className="ele-img" src={cr2} alt="" /></div>
                    <div className="ele-name">NPTEl</div>
                    {/* <div className="ele-details">hello...</div> */}
                </div>
                <div className="col-md-3 ele-col">
                    <div className="ele-img2"><img className="ele-img" src={cr3} alt="" /></div>
                    <div className="ele-name">AI For Everyone</div>
                    {/* <div className="ele-details">hello...</div> */}
                </div>
               </div>
               <div id="intern" className=" abc typewriter2 ">
                    <h2 id="abc"><span class="iconify" data-icon="fluent:contact-card-group-16-filled"></span> Internships</h2>
                </div>
               <div className="row">
               <div className="col-md-3 ele-col">
                    <div className="ele-img2"><img className="ele-img" src={di} alt="" /></div>
                    <div className="ele-name">Web Dev Internship </div>
                    <div className="ele-details">Three Month Internship in Digitalize India.</div>
                    <div className="ele-details">Created Food ordaring Website</div>
                    <div className="ele-details">#Django #HTML #JS #SCSS #Jquery</div>
                </div>
               </div>
            </div>
        </div>
    )
}

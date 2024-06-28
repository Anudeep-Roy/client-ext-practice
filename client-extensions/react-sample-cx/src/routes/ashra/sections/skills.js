import { useState, useEffect } from "react"
import Skill from "../components/skill"
import Loader from "../components/loader";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function Skills () {
    const [imgUrl, setImgUrl] = useState('');

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic dGVzdEBsaWZlcmF5LmNvbTp0ZXN0");
    myHeaders.append("Cookie", "JSESSIONID=1984804EDAE7CCBED3FEBAAA92012799");
        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    useEffect(()=>{
        fetch("http://localhost:8080/o/headless-delivery/v1.0/documents/35636", requestOptions)
        .then((response) => response.json())
        .then((result)=>result.contentUrl)
        .then((reply)=> setImgUrl(reply))
        .catch((error) => console.error(error));
    }, [imgUrl])
    
    return (
        <div className="skills" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-6 skill-left">
                        {imgUrl?
                            <img data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="200" data-aos-once="true" src={imgUrl} alt="skill"/>
                            :
                            <Loader theme={'success'}/>
                        }
                    </div>
                    <div className="col-6 skill-right" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="200" data-aos-once="true">
                        <h2>Voluptatem dignissimos provident quasi corporis voluptas</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<i class="bi bi-activity icon"></i></p>
                        <div className="skill-list">
                            <Skill skill={'html'} progress={100} delay={100}/>
                            <Skill skill={'css'} progress={90} delay={200}/>
                            <Skill skill={'javascript'} progress={75} delay={300}/>
                            <Skill skill={'photoshop'} progress={55} delay={400}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
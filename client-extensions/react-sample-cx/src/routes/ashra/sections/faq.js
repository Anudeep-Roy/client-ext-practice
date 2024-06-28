import { useState, useEffect } from "react";
import Loader from "../components/loader";
import Query from "../components/query";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function FAQ () {

    const [imgUrl, setImgUrl] = useState('');
    const [myData, setMyData] = useState({});
    const [questions, setQuestions] = useState([]);
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic dGVzdEBsaWZlcmF5LmNvbTp0ZXN0");
    myHeaders.append("Cookie", "JSESSIONID=1984804EDAE7CCBED3FEBAAA92012799");
        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    useEffect(()=>{
        fetch("http://localhost:8080/o/headless-delivery/v1.0/documents/35649", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            setMyData(JSON.parse(result));
            setImgUrl(myData.contentUrl);
        })
        .catch((error) => console.error(error));
    }, [imgUrl])

    useEffect(()=>{
        fetch("http://localhost:8080/o/headless-delivery/v1.0/structured-contents/36345", requestOptions)
        .then((response) => response.json())
        .then((result)=>result.contentFields)
        .then((reply)=>setQuestions(reply))
        .catch((error) => console.error(error));
    }, [])
    return (
        <div className="faq">
            <div className="container-fluid">
                <div className="faq-row">
                    <div className="faq-left" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
                        <h3>Eum ipsam laborum deleniti <b>velit pariatur architecto aut nihil</b></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
                        <div className="queries">
                            {questions.map((item, i)=>{
                                return (
                                    <Query index={i} question={item.nestedContentFields[0].contentFieldValue.data} answer={item.nestedContentFields[1].contentFieldValue.data}/>
                                )
                            })}
                        </div>
                    </div>
                    <div className="faq-right" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
                        {imgUrl? 
                            <img src={imgUrl} alt="faq-img"/>
                            :
                            <Loader theme={'dark'}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
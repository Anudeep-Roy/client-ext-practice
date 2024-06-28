import { useState, useEffect } from "react";
import Loader from "../components/loader";
import Button from "../components/button";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function CallToAction () {
    const [imgUrl, setImgUrl] = useState('');
    const [myData, setMyData] = useState({});
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic dGVzdEBsaWZlcmF5LmNvbTp0ZXN0");
    myHeaders.append("Cookie", "JSESSIONID=1984804EDAE7CCBED3FEBAAA92012799");
        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    useEffect(()=>{
        fetch("http://localhost:8080/o/headless-delivery/v1.0/documents/35594", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            setMyData(JSON.parse(result));
            setImgUrl(myData.contentUrl);
        })
        .catch((error) => console.error(error));
    }, [imgUrl])

    return (
        <div className="call-to-action">
            {imgUrl?
                <img src={imgUrl} alt="call-to-action"/>
                :
                <Loader/>
            }
            <div className="container">
                <div className="call-left" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200" data-aos-once="true">
                    <h3>call to action</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="call-right" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="200" data-aos-once="true">
                    <Button link={'#'} text={'call to action'}/>
                </div>
            </div>
            
        </div>
    )
}
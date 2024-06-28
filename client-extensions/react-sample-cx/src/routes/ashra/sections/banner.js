import { useState, useEffect } from "react";
import Button from "../components/button";
import Loader from "../components/loader";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Banner () {
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

AOS.init();

useEffect(()=>{
    fetch("http://localhost:8080/o/headless-delivery/v1.0/documents/35614", requestOptions)
    .then((response) => response.text())
    .then((result) => {
    setMyData(JSON.parse(result));
    setImgUrl(myData.contentUrl);
  })
  .catch((error) => console.error(error));
}, [imgUrl])

    return (
        <div className="banner" id="home">
            <div className="container">
                <div 
                data-aos="zoom-in"
                className="banner-left">
                    <h1>Better Solutions For Your Business</h1>
                    <p>We are team of talented designers making websites with Bootstrap</p>
                    <Button link={'#'} text={'get started'}/>
                </div>
                <div className="banner-right">
                    {imgUrl ? 
                        <img src={imgUrl} alt="banner"/>
                            :
                        <Loader theme={'light'}/>
                    }
                </div>
            </div>
        </div>
    )
}
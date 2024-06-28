import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Loader from "../components/loader";

import { Autoplay, Navigation } from 'swiper/modules';
export default function Clients () {
    const [imgUrls, setImgUrls] = useState([]);
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic dGVzdEBsaWZlcmF5LmNvbTp0ZXN0");
    myHeaders.append("Cookie", "JSESSIONID=1984804EDAE7CCBED3FEBAAA92012799");

    const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
    };
    useEffect(()=>{
        fetch("http://localhost:8080/o/headless-delivery/v1.0/document-folders/35684/documents", requestOptions)
        .then((response) => response.json())
        .then((result)=> result.items.map((item)=>item.contentUrl))
        .then((contentUrlArray) => (setImgUrls(contentUrlArray)))
        .catch((error) => console.error(error));
    }, [])
    return (
        <div className="clients">
            <div className="container">
                <div className="img-container">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            }
                        }}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                    >
                        {imgUrls.length ? 
                            imgUrls.map((image, k)=>{
                                return <SwiperSlide><img src={image} key={k} alt={`client-${k}`}/></SwiperSlide>
                            })
                            :
                            <Loader theme={'info'}/>
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
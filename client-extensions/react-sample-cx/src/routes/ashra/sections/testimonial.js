import { useState, useEffect } from "react";
import Heading from '../components/heading';
import Loader from '../components/loader';
import { Swiper, SwiperSlide } from 'swiper/react';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

export default function Testimonial () {
    const [teamDetails, setTeamDetails] = useState([]);
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic dGVzdEBsaWZlcmF5LmNvbTp0ZXN0");
    myHeaders.append("Cookie", "JSESSIONID=1984804EDAE7CCBED3FEBAAA92012799");
        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    
    useEffect(()=>{
        fetch("http://localhost:8080/o/headless-delivery/v1.0/structured-contents/36889", requestOptions)
        .then((response)=>response.json())
        .then((result)=> result.contentFields)
        .then((final)=>setTeamDetails(final))
        .catch((error)=>console.log(error))
    }, [])
    return (
        <div className="testimonial" id="testimonial">
            <Heading heading={'testimonial'} subHeading={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}/>
            <div className="container">
                <div className="testimonial-details" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-once="true">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {teamDetails.length?
                            teamDetails.map((info, a)=>{
                                return (
                                    <SwiperSlide>
                                        <div className="testimony">
                                            <img src={info.nestedContentFields[0].contentFieldValue.image.contentUrl} alt={`testimony-${a}`}/>
                                            <h3>{info.nestedContentFields[1].contentFieldValue.data}</h3>
                                            <h4>{info.nestedContentFields[2].contentFieldValue.data}</h4>
                                            <p>{info.nestedContentFields[3].contentFieldValue.data}</p>
                                        </div>
                                    </SwiperSlide>
                                )
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
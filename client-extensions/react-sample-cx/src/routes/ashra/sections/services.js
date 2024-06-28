import { useState, useEffect } from "react";
import Heading from "../components/heading";
import Loader from "../components/loader";
import Service from "../components/service";

export default function Services () {
    const [services, setServices] = useState([]);
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic dGVzdEBsaWZlcmF5LmNvbTp0ZXN0");
    myHeaders.append("Cookie", "JSESSIONID=1984804EDAE7CCBED3FEBAAA92012799");
        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    useEffect(()=>{
        fetch("http://localhost:8080/o/headless-delivery/v1.0/structured-contents/36522", requestOptions)
        .then((response) => response.json())
        .then((result)=>result.contentFields)
        .then((reply)=>setServices(reply))
        .catch((error) => console.error(error));
    }, [])
    
    return (
        <div className="services" id="services">
            <div className="container">
                <Heading heading={'services'} subHeading={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}/>
                <div className="service-list">
                    {services.length?
                        services.map((service, i)=>{
                            return <Service heading={service.nestedContentFields[0].contentFieldValue.data} description={service.nestedContentFields[1].contentFieldValue.data} delay={i}/>
                        })
                        :
                        <Loader theme={'danger'}/>
                    }
                </div>
            </div>
        </div>
    )
}
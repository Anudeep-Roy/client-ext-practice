import { useState, useEffect } from "react";
import Loader from "../components/loader";
import Heading from "../components/heading";
import PricingItem from "../components/pricingItem";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function Pricing () {
    const [pricing, setPricing] = useState([]);

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic dGVzdEBsaWZlcmF5LmNvbTp0ZXN0");
    myHeaders.append("Cookie", "JSESSIONID=1984804EDAE7CCBED3FEBAAA92012799");
        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    useEffect(()=>{
        fetch("http://localhost:8080/o/c/pricings/", requestOptions)
        .then((response) => response.json())
        .then((response) => response.items)
        .then((reply)=> setPricing(reply))
        .catch((error) => console.error(error));
    }, [])

    return (
        <div className="pricing" id="pricing">
            <Heading heading={'pricing'} subHeading={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}/>
            <div className="container">
                {pricing.length?
                    pricing.map((info, i)=> {
                        return (
                            <PricingItem featured={info.featured} delay={i} plan={info.plan} pricing={info.pricing} features={info.features}/>
                        )
                    })
                    :
                    <Loader theme={'success'}/>
                }
            </div>
        </div>
    )
}
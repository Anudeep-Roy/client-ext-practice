import { useState, useEffect } from "react";
import Heading from '../components/heading';
import Loader from '../components/loader';
import TeamDetails from "../components/teamDetails";

export default function Team () {
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
        fetch("http://localhost:8080/o/headless-delivery/v1.0/content-structures/36618/structured-contents", requestOptions)
        .then((response)=>response.text())
        .then((result)=>JSON.parse(result).items.map((item, i)=>item.contentFields))
        .then((reply)=> setTeamDetails(reply[0]))
        .catch((error)=>console.log(error))
    }, [])

    return (
        <div className="team" id="team">
            <Heading heading={'team'} subHeading={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}/>
            <div className="container">
                {teamDetails.length? 
                    teamDetails.map((data, a)=>{
                        return (
                            <TeamDetails image={data.nestedContentFields[0].contentFieldValue.image.contentUrl} name={data.nestedContentFields[1].contentFieldValue.data} title={data.nestedContentFields[2].contentFieldValue.data} description={data.nestedContentFields[3].contentFieldValue.data} delay={a}/>
                        )
                    })
                    :
                    <Loader theme={'warning'}/>
                }
            </div>
        </div>
    )
}
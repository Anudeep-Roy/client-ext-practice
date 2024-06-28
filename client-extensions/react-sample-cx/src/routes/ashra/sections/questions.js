import { useState, useEffect } from "react";
import Heading from "../components/heading";
import Query from "../components/query";

export default function Questions () {

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
        fetch("http://localhost:8080/o/headless-delivery/v1.0/structured-contents/36921", requestOptions)
        .then((response) => response.json())
        .then((result)=>result.contentFields)
        .then((reply)=>setQuestions(reply))
        .catch((error) => console.error(error));
    }, [])

    return (
        <div className="questions" id="faq">
            <div className="container">
            <Heading heading={'frequently asked questions'} subHeading={'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.'}/>
                {questions.map((item, i)=>{
                    return (
                        <Query index={i} question={item.nestedContentFields[0].contentFieldValue.data} answer={item.nestedContentFields[1].contentFieldValue.data}/>
                    )
                })}
            </div>
        </div>
    )
}
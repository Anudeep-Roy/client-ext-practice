import { useState } from "react";
import Button from "../components/button"

export default function Navbar () {
    let windowPosition;
    let [activeSection, setActiveSection] = useState(1);
    window.addEventListener('scroll', function () {
        windowPosition = window.scrollY;
        if(windowPosition > 50 ) {
            document.querySelector('.navbar').style.cssText = `
            background: rgba(40, 58, 90, 0.9);
        `} else {
            document.querySelector('.navbar').style.cssText = `
            background: var(--primary);
        `}
        let contentPosition, positionPercentage, currentId;
        let windowScrollPosition = window.scrollY;
        this.document.querySelectorAll('.ashra > div').forEach((item, el)=>{
            contentPosition = item.offsetTop
            if( Math.abs(windowScrollPosition - contentPosition) < 50) {
                
                currentId = el+1;
                setActiveSection(currentId);
                document.querySelector(`.navbar ul li:nth-child(${activeSection})`).classList.add('active');
            }
        })
    })
    return (
        <div className="navbar">
            <div className="container">
                <a className="logo" href="javascript:void(0)">ashra</a>
                <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#about-us">about</a></li>
                    <li><a href="#skills">skills</a></li>
                    <li><a href="#services">services</a></li>
                    <li><a href="#team">team</a></li>
                    <li><a href="#pricing">pricing</a></li>
                    <li><a href="#testimonial">testimonial</a></li>
                    <li><a href="#faq">faq</a></li>
                    <li>
                        <Button link={'#'} text={'get started'}/>
                    </li>
                </ul>
            </div>
        </div>
    )
}
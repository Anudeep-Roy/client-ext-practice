import Button from "../components/button";
import Heading from "../components/heading";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function AboutUS () {
    return (
        <div className="about-us" id="about-us">
            <div className="container">
                <Heading heading={'about us'}/>
                <div className="row">
                    <div className="col-6">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ul>
                            <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li>Ullamco laboris nisi ut aliquip ex ea commodo</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Button link={'#'} text={'read more'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
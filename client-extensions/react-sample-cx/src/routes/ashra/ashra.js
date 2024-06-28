import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./sections/navbar";
import Clients from "./sections/clients";
import Banner from "./sections/banner";
import AboutUS from "./sections/aboutUs";
import FAQ from "./sections/faq";
import Skills from './sections/skills';
import Services from './sections/services';
import CallToAction from './sections/callToAction';
import Team from './sections/team';
import Pricing from './sections/pricing';
import Testimonial from './sections/testimonial';
import Portfolio from './sections/portfolio';
import Questions from './sections/questions';
import Footer from './sections/footer';

export default function Ashra () {
    return (
        <div className="ashra">
            <Navbar/>
            <Banner/>
            <Clients/>
            <AboutUS/>
            <FAQ/>
            <Skills/>
            <Services/>
            <CallToAction/>
            <Team/>
            <Pricing/>
            <Testimonial/>
            <Questions/>
            <Footer/>
        </div>
    )
}
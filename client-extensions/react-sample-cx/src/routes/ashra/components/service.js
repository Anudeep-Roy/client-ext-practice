import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function Service ({heading, description, delay}) {
    return (
        <div data-aos="fade-up" data-aos-delay={`${delay}00`} data-aos-offset="300" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true" className="service">
            <h4>{heading}</h4>
            <p>{description}</p>
        </div>
    )
}
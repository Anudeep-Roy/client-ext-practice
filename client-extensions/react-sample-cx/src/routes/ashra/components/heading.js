import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function Heading ({heading, subHeading}) {
    return (
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="200" data-aos-once="true" className="custom-heading">
            <h2>{heading}</h2>
            <p className='sub-heading'>{subHeading}</p>
        </div>
    )
}
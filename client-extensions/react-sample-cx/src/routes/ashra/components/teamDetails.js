import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function TeamDetails ({image, name, title, description, delay}) {
    return (
        <div className="team-details" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true" data-aos-delay={`${delay}00`}>
            <div className="team-left">
                <img src={image}/>
            </div>
            <div className="team-right">
                <h3>{name}</h3>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}
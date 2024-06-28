import ProgressBar from 'react-bootstrap/ProgressBar';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function Skill ({skill, progress, delay}) {
    return (
        <div className="skill" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true" data-aos-delay={`${delay}00`}>
            <div className='info'>
                <p>{skill}</p>
                <p>{`${progress}%`}</p>
            </div>
            <ProgressBar animated variant="info" now={progress} />
        </div>
    )
}
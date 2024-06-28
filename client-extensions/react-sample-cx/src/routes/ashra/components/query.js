import Accordion from 'react-bootstrap/Accordion';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function Query ({index, question, answer}) {
    return (
        <div className='query' data-aos="fade-up" data-aos-delay={`${index}00`} data-aos-offset="100" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true" >
            <Accordion>
                <Accordion.Item eventKey={index}>
                    <Accordion.Header>{question}</Accordion.Header>
                    <Accordion.Body>{answer}</Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
        
    )
}
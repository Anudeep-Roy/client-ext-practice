import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function PricingItem ({featured, delay, plan, pricing, features}) {
    return (
        <div className={"pricing-item " + (featured && 'featured')} data-aos="fade-up" data-aos-delay={`${delay}00`} data-aos-offset="200" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
            <h3>{plan}</h3>
            <h4><sup>$</sup>{pricing}<span> / month</span></h4>
            <ul>
                {features.map((feature, a)=>{
                    return <li key={a}>{feature.name}</li>
                })}
            </ul>
        </div>
    )
}
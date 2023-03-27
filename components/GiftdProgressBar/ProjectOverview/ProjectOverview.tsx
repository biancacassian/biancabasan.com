import contentStyles from '../../ContentView/styles/content.styles.module.css';
import empathizeStyles from './styles/intro.styles.module.css';
import ImageView from '../../ImageView/ImageView'
import { ImageDisplay } from '../../ImageView/interfaces'
import intro from "../../../public/assets/images/giftd-progress-bar/intro.svg"
import profile from "../../../public/assets/images/giftd-progress-bar/profile.png"
import confetti from "../../../public/assets/images/giftd-progress-bar/confetti.gif"

const ProjectOverview = (): JSX.Element => {
    return (
        <>
            <h1 className={contentStyles['content__double-col-left']}>Context</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>Welcome to Giftd, a circular economy startup and app available on iOS and Android. The app allows you to gift your pre-loved clothes to your loved ones, family and neighbors. But there's a bigger issue at hand - <b>the growing problem of carbon footprint caused by clothing waste. That's where I come in.</b></p>
                <h1>Timeline</h1>
                <p>January - Shipped in March 2023</p>
                <h1>Team</h1>
                <p>1 UX/UI Designer - Me, 1 Founder, 1 Co Founder and CTO</p>
            </div>
            <h1 className={contentStyles['content__double-col-left']}>Problem</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>As a part of Giftd's road map, <b>I was tasked with designing a feature that would not only enhance user engagement but also make them invested in Giftd's mission.</b></p>
                <p>The problem we were trying to solve was how to connect users to their CO2e impact and make them aware of their contribution to the growing community of gifting.</p>
            </div>
            <h1 className={contentStyles['content__double-col-left']}>Impact</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>I got to work and collaborated closely with the founder, developer, and marketing team to design a reward experience that would benefit both primary users (a.k.a ambassadors) and secondary users.</p>
                <p>The solution is simple yet effective - <b>by tracking users' CO2e impact, we could make it easy for them to see how they're contributing to the growing community of gifting.</b></p>
            </div>
            <ImageView className={empathizeStyles['profile']} image={profile} imageAltText="Research" imageDisplay={ImageDisplay.maxLeft} />
            <ImageView className={empathizeStyles['confetti']} image={confetti} imageAltText="Research" imageDisplay={ImageDisplay.maxRight} />
        </>
    )
}

export default ProjectOverview
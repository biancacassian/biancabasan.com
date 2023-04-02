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
                <p>Welcome to Giftd, a circular economy Berlin based start-up and social network app available on iOS and Android. Gift your pre-loved clothes to loved ones and neighbors, be part of a close-knit community and receive high-value clothes for free. Combat the growing carbon footprint caused by clothing waste with Giftd.</p>
                <h1>Timeline</h1>
                <p>January - Shipped in March 2023</p>
                <h1>Team</h1>
                <p>1 UX/UI Designer - Me, 1 Founder, 1 Co Founder and CTO</p>
                <p>2 Marketing Team</p>
            </div>
            <h1 className={contentStyles['content__double-col-left']}>Problem</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>As a part of Giftd's roadmap, <b>I was tasked with designing a feature that would not only enhance user engagement but also make them invested and interested in Giftd's mission.</b></p>
                <p>The problem we were trying to solve was <b>how to connect users to Giftd mission while celebrating the top 3-4% of engaged users with the greatest impact?</b></p>
            </div>
            <h1 className={contentStyles['content__double-col-left']}>Impact</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>I got to work and collaborated closely with the founder, developer, and marketing team to design a reward experience that would benefit both primary users (a.k.a GIFTD ambassadors) and secondary users.</p>
                <p>The solution is simple yet effective - I designed an experience that shows users how through gifting clothes, they and their community are progressing towards CO2e neutrality.</p>
            </div>
            <ImageView className={empathizeStyles['profile']} image={profile} imageAltText="Research" imageDisplay={ImageDisplay.maxLeft} />
            <ImageView className={empathizeStyles['confetti']} image={confetti} imageAltText="Research" imageDisplay={ImageDisplay.maxRight} />
        </>
    )
}

export default ProjectOverview
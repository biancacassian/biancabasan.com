import contentStyles from '../../ContentView/styles/content.styles.module.css';
import empathizeStyles from './styles/intro.styles.module.css';
import ImageView from '../../ImageView/ImageView'
import { ImageDisplay } from '../../ImageView/interfaces'
import intro from '../../../public/assets/images/giftd/intro.jpg';

const Intro = (): JSX.Element => {
    return (
        <>
            <h1 className={contentStyles['content__double-col-left']}>Context</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>Giftd is an app, available on iOS and android, through which you can gift your pre-loved clothes to friends, family and neighbors. More than 3600 downloads and over 2000 gifts have been made since it started in November 2021.</p>
                <p>Take a look - <a href="https://www.giftd.app/" target="_blank" rel="noopener noreferrer">www.giftd.app</a></p>
                <h1>Timeline</h1>
                <p>Sept 2022 - ongoing</p>
                <h1>Team</h1>
                <p>1 UX/UI Designer - Me, 1 Founder, 1 Co Founder and CTO</p>
            </div>
            <h1 className={contentStyles['content__double-col-left']}>Responsibilities</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>My involvement with Giftd started in July and it is ongoing, since then I have been taking on a couple of challenges.</p>
                <p>As the sole UX/UI designer I am responsible for ​​improving existing flows, working on new features, initial discovery and iterate design solutions at all levels of fidelity. <b>In this case study I will talk about how I approached challenges such as:</b></p>
                <p><b>01.</b> Optimizing and iterating on the onboarding flow</p>
                <p><b>02.</b> Designing the first filtering option</p>
                <p><b>03.</b> Designing the delivery feature</p>
            </div>
            <h1 className={contentStyles['content__double-col-left']}>My mission & personal aims</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p><b>Improve the app experience and impact the number of people joining and making clothes transactions.</b></p>
                <p>It is a blast to contribute to the growth of the product as this is my first time working on a real product that people use and find value in it. Since joining Giftd, I have set for myself three key goals that I want to learn and improve on:</p>
                <div>
                    <ul>
                        <li><p>Be in an environment in which we will build and implement quickly</p></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><p>Put into practice what I have learned and learn how to articulate and inform my design decisions</p></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><p>Gaining experience working in a cross-functional team and learning to be adaptable with the workflow</p></li>
                    </ul>
                </div>
            </div>
            <ImageView className={empathizeStyles['giftd-intro-img']} image={intro} imageAltText="Research" imageDisplay={ImageDisplay.full} />
        </>
    )
}

export default Intro
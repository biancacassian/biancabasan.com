import { ImageDisplay } from '../../ImageView/interfaces'
import contentStyles from '../../ContentView/styles/content.styles.module.css';
import ImageView from '../../ImageView/ImageView'
import empathizeStyles from './styles/research.styles.module.css';
import competitiveAnalysis from '../../../public/assets/images/giftd/competitive-analysis.png';

const Research = (): JSX.Element => {
    return (
        <>
            <h1 className={contentStyles['content__double-col-left']}>Doing my personal research</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>I conducted a competitive analysis that helped me to look into strategic insights, flows and design solutions of competitor’s onboarding. <b>The main objective of the competitive analysis was to look into how users connect with friends and family during onboarding.</b></p>
                <p>When considering how to convey the value of Giftd, reading about best practices for onboarding as well as reading insights from marketing on how to communicate to the generation of our users, was very helpful.</p>
            </div>
            <ImageView className={empathizeStyles['competitive-analysis']} image={competitiveAnalysis} imageAltText="Research" imageDisplay={ImageDisplay.full} />
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>As I was doing the research, a survey was sent out to the users to identify pain points, motivations and overall experience. I then collected and identified the most common pain points, requests and areas of improvement. In regards to the onboarding flow, users didn’t express any pain points and the typical requirement is for it to be quick with a complete setup.</p>
            </div>
        </>
    )
}

export default Research
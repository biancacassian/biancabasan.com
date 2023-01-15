import { ImageDisplay } from '../../ImageView/interfaces'
import contentStyles from '../../ContentView/styles/content.styles.module.css';
import ImageView from '../../ImageView/ImageView'
import empathizeStyles from './styles/research.styles.module.css';
import competitiveAnalysis from '../../../public/assets/images/giftd/competitive-analysis.png';

const Research = (): JSX.Element => {
    return (
        <>
            <h1 className={contentStyles['content__double-col-left']}>Doing desk research and checking in with users</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>With the objections and goals clarified, I started by conducting a competitive analysis that helped me to look into strategic insights, flows and design solutions of competitor’s onboarding. <b>The main objective of the competitive analysis was to look into how users connect with friends and family during onboarding.</b></p>
                <p>As I was doing the research, a survey was sent out to the users to identify pain points, motivations and overall experience. I then collected and identified the most common pain points, requests and areas of improvement. In regards to the onboarding flow, users didn’t express any pain points and the typical requirement is for it to be quick with a complete setup.</p>
            </div>
            <ImageView className={empathizeStyles['competitive-analysis']} image={competitiveAnalysis} imageAltText="Research" imageDisplay={ImageDisplay.full} imageDescription={"Competitive analysis chart"} />
            <h1 className={contentStyles['content__double-col-left']}>People born during a specific time period have similar values, habits, and ways of thinking</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>When considering how to communicate the value of Giftd to users, I conducted desk research by reading articles and marketing blogs. I've learned from marketing strategy that if we want to understand how to communicate the value of Giftd to users, we must first identify the users' generations. Because the values, habits, and thinking styles of people born during a particular generation are similar.</p>
            </div>
        </>
    )
}

export default Research
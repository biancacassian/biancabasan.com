import contentStyles from '../../ContentView/styles/content.styles.module.css';
import empathizeStyles from './styles/onboarding.styles.module.css';
import ImageView from '../../ImageView/ImageView'
import { ImageDisplay } from '../../ImageView/interfaces'
import onboardingFlow from '../../../public/assets/images/giftd/onboarding-flow.svg';

const Onboarding = (): JSX.Element => {
    return (
        <>
            <h1 className={contentStyles['content__double-col-left']}>It all started with... Finding an opportunity for improving the onboarding experience</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>Giftd is a product that listens to its users feedback, and so for my first meeting with the founder I decided to bring my experience, as a user, as I was going through the onboarding flow.</p>
                <p>Based on the data collected on the current onboarding flow that the founder shared with me <b>90% of users succeed in the process with just 10% abandoning</b>, and users generally find it to be easy and fast. What the current onboarding is doing is the set up moment, creating an account, granting permission, asking for personal information, these actions are necessary however they don’t provide immediate benefits.</p>
                <p><b>What I noticed that was missing from the current onboarding was communicating the value that I get as a user from using Giftd.</b> Since the product is constantly evolving, together with the founder we examined the present flow to seek for opportunities and eliminate stages that are not essential.</p>
                <p>Here is what we found:</p>
                <p><b>01.</b> Opportunity: How can we communicate the value of the product?</p>
                <p><b>02.</b> Opportunity / Problem: Users don’t know exactly what they are supposed to upload</p>
                <p><b>03.</b> Problem: As a new user joining without invite vs. user joining via invite, the flow looks different and is confusing</p>
            </div>
            <ImageView className={empathizeStyles['competitive-analysis']} image={onboardingFlow} imageAltText="Research" imageDisplay={ImageDisplay.full} />
            <h1 className={contentStyles['content__double-col-left']}>Goals and Objectives</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <div className={empathizeStyles['square']}>
                    <p>How might we <b>allow users to easily connect with their friends and family</b></p>
                </div>
                <div className={empathizeStyles['square']}>
                    <p>How might we <b>communicate to users the value they get out of Giftd</b></p>
                </div>
                <div className={empathizeStyles['square']}>
                    <p>How might we <b>encourage users to post their first item during onboarding</b></p>
                </div>
            </div>
        </>
    )
}

export default Onboarding
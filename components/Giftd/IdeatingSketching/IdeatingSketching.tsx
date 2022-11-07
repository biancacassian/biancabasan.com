import contentStyles from '../../ContentView/styles/content.styles.module.css';
import empathizeStyles from './styles/ideating-sketching.styles.module.css';
import { ImageDisplay } from '../../ImageView/interfaces'
import ImageView from '../../ImageView/ImageView'
import syncContacts from '../../../public/assets/images/giftd/sync-contacts.png';

const IdeatingSketching = (): JSX.Element => {
    return (
        <>
            <h1 className={contentStyles['content__double-col-left']}>What would be the impact on the product if we don’t improve the onboarding?</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p><b>During the brainstorm session with the founder, I started the meeting with questions.</b> Having the questions answered will help us make better decisions, ensuring that we are aligned on what are the measurable key performance indicators and what are the business and user goals in regards to the new solution. In addition we have also reviewed the current flow.</p>
            </div>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['square-col']}`}>
                <div className={empathizeStyles['square']}>
                    <p><b>What are the users needs during onboarding?</b></p>
                </div>
                <div className={empathizeStyles['square']}>
                    <p><b>What is the main problem we’re trying to solve?</b></p>
                </div>
                <div className={empathizeStyles['square']}>
                    <p><b>How are we going to measure the solution?</b></p>
                </div>
            </div>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['custom-col-text']}`}>
                <p>After some initial ideas and mock-ups were created, <b>together with the founder and the developer, we decided for this MVP to concentrate on allowing users to easily add their contacts as we hope that this will maximize user generated user growth</b>.</p>
            </div>
            <ImageView className={empathizeStyles['sync-contacts']} image={syncContacts} imageAltText="Research" imageDisplay={ImageDisplay.full} />
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p><b>As a second priority for improving the onboarding, we will allow users to upload items within the onboarding flow.</b> The desired outcome for this solution is to increase conversion of uploads. Additionally we will also make the onboarding more friendly by adding photos and explaining the principles of Gifted in 4 easy steps. This flow is currently in progress.</p>
            </div>
            <h1 className={contentStyles['content__double-col-left']}>Potential future vision</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>Since the founder is already introducing product updates via video on Instagram, I proposed as a potential future solution for the onboarding to be a video.</p>
                <p>Users coming for Instagram feel continuity and familiarity. With video as a user you immediately land into an engaging experience, instead of a button as a CTA​​ after the user is given an overview of the app and its benefits at the end of the video, they may be asked to complete a task to encourage them to try the product by themselves.</p>
            </div>
            <h1 className={contentStyles['content__double-col-left']}>Impact</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>The syncing contacts have been available since August and it is too soon to have data on it, however we do see growth and engagement which is a good sign.</p>
            </div>
            <h1 className={contentStyles['content__double-col-left']}>Learnings</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>In terms of design suggestions it was important to make sure that I understood  the constraints and suggest solutions that are less time consuming and easy to implement.</p>
            </div>
        </>
    )
}

export default IdeatingSketching
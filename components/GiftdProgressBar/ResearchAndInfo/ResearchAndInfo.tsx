import contentStyles from '../../ContentView/styles/content.styles.module.css';
import empathizeStyles from './styles/intro.styles.module.css';
import ImageView from '../../ImageView/ImageView'
import { ImageDisplay } from '../../ImageView/interfaces'
import profile from "../../../public/assets/images/giftd-progress-bar/profile.png"
import confetti from "../../../public/assets/images/giftd-progress-bar/confetti.gif"

const ResearchAndInfo = (): JSX.Element => {
    return (
        <>
            <h1 className={contentStyles['content__double-col-left']}>How can we celebrate the top 3-4% of engaged users with the greatest impact?</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>As a first step I asked the founder clarifying questions: What are we trying to solve with this feature? What is the user goal? <b>What value are we providing to users and to the product by building this feature?</b></p>
                <p>From the conversation I’ve identified the desired outcome with the feature, which is to <b>enhance user engagement, for both primary and secondary users, while celebrating the top 3-4% engaged users with the greatest impact.</b></p>
            </div>
            <h1 className={contentStyles['content__double-col-left']}>I was really excited to have the opportunity to brainstorm the Hook Model</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>As a designer, I am fascinated by the intersection of psychology and design, and the potential it holds for creating truly engaging experiences. <b>My curiosity led me to dive deep into the psychology of motivation and engagement which led me to discover the Hook Model, a framework for creating habit-forming products that consists of four steps.</b></p>
                <p>I was thrilled to brainstorm ideas using the Hook Model framework with the founder and developer.</p>
                <p>As we explored the four steps, <b>we focused on understanding what rewards primary users desire and how we can design to meet those needs.</b> We also considered how the rewards are linked to the impact primary users want to see on GIFTD.</p>
                <p><b>From the brainstorm session we learned:</b></p>
            </div>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['square-col']}`}>
                <div className={empathizeStyles['square']}>
                    <p>01. Gamification elements can be used to enhance engagement</p>
                </div>
                <div className={empathizeStyles['square']}>
                    <p>02. For gamification to work we need to uncover the real motivation / goal of the user</p>
                </div>
                <div className={empathizeStyles['square']}>
                    <p>03. We must experiment with creating a loop of triggered actions and unpredictable rewards for users</p>
                </div>
            </div>
        </>
    )
}

export default ResearchAndInfo
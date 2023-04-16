import contentStyles from '../../ContentView/styles/content.styles.module.css';
import empathizeStyles from './styles/intro.styles.module.css';
import ImageView from '../../ImageView/ImageView'
import { ImageDisplay } from '../../ImageView/interfaces'
import confettiIntro from "../../../public/assets/images/giftd-progress-bar/confetti-intro.gif"
import confetti from "../../../public/assets/images/giftd-progress-bar/confetti.gif"
import progressBar from "../../../public/assets/images/giftd-progress-bar/progress-bar.gif"

const EnhanceEngagement = (): JSX.Element => {
    return (
        <>
            <h1 className={contentStyles['content__double-col-left']}>How can design and psychology be used in a progress bar?</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>In addition to visually representing top users with a badge, we also implemented a progress bar for users to track their own progress and that of their community. <b>The progress bar is linked to users' motivation to show and contribute towards reducing CO2e emissions, while also allowing them to see how their friends are contributing to the cause.</b></p>
            </div>
            <div className={`${contentStyles['content__double-col-left']}`}>
                <p><b>Short term rewards and Goal gradient effect</b></p>
                <p><b>By making use of the Goal Gradient Effect</b>, which suggests that breaking down tasks into smaller parts with incremental rewards can be more motivating than not having any visual cues or rewards, <b>I split the progress bar into milestones and celebrate users when each milestone has been passed.</b></p>
            </div>
            <ImageView className={empathizeStyles['gifs']} image={confettiIntro} imageAltText="Filters" imageDisplay={ImageDisplay.inline} />
            <div className={`${contentStyles['content__double-col-left']}`}>
                <p><b>Community Impact</b></p>
                <p>The Community Impact Screen is where users can track their own progress and that of their community towards CO2e reduction, while also offering invitations that grant one month of free reservations.</p>
                <p>The Community Impact screen may also serve as an entry-point for an action, such as “ Invite more people”.</p>
            </div>
            <ImageView className={empathizeStyles['gifs']} image={confetti} imageAltText="Filters" imageDisplay={ImageDisplay.inline} />
            <div className={`${contentStyles['content__double-col-left']}`}>
                <p><b>Metaphors vs. numbers or “People remember stories better than facts alone”</b></p>
                <p>We aimed to make the experience of observing and monitoring your impact enjoyable, so we came up with the idea to use an empty human icon that gradually fills up as you make progress</p>
            </div>
            <ImageView className={empathizeStyles['gifs']} image={progressBar} imageAltText="Filters" imageDisplay={ImageDisplay.inline} />
            <h1 className={contentStyles['content__double-col-left']}>With a progress bar, are we encouraging bad behavior? And if yes, how can we prevent it?</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p className={empathizeStyles['square-opening-paragraph']}>While designing the progress bar, I also considered its potential downsides and wondered how I could prevent negative emotions and unethical behavior.</p>
                <div className={empathizeStyles['square']}>
                    <p>01. Transparent: communicate what the bar represents and what it is measuring and how</p>
                </div>
                <div className={empathizeStyles['square']}>
                    <p>02. Fake progress bar: make sure that you’re tracking in real time</p>
                </div>
                <div className={empathizeStyles['square']}>
                    <p>03. Provide clear feedback to users when a process is complete or if there is an error </p>
                </div>
                <div className={empathizeStyles['square']}>
                    <p>04. Accessible: use high contrast colors to make it easier for users to see</p>
                </div>
            </div>
            <h1 className={contentStyles['content__double-col-left']}>Impact</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>Through close collaboration with the founder, developer, and marketing team, <b>I designed an experience that shows users how through gifting clothes, they and their community are progressing towards CO2e neutrality.</b></p>
            </div>
        </>
    )
}

export default EnhanceEngagement
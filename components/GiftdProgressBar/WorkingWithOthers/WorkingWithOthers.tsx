import contentStyles from '../../ContentView/styles/content.styles.module.css';
import ImageView from '../../ImageView/ImageView';
import { ImageDisplay } from '../../ImageView/interfaces';
import empathizeStyles from './styles/intro.styles.module.css';
import ideation from '../../../public/assets/images/giftd-progress-bar/ideation.svg'

const WorkingWithOthers = (): JSX.Element => {
    return (
        <>
            <h1 className={contentStyles['content__double-col-left']}>How through the user interface to emotionally connect users to their CO2e impact?</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>Ideation is one of my favorite parts as <b>I really enjoy brainstorming with my colleagues towards the same goal, it’s also very inspiring to hear other people’s thoughts and building on each others ideas.</b></p>
                <p> One of the questions that drove my designs during ideation was: how through the user interface to emotionally connect users to their CO2e impact?</p>
            </div>
            <ImageView className={empathizeStyles['ideate']} image={ideation} imageAltText="Filters" imageDisplay={ImageDisplay.full} />
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>During the brainstorm session we had an “aha” moment and thought to use metaphors and numbers to show the progress users have as they invite friends and gift items.</p>
            </div>
        </>
    )
}

export default WorkingWithOthers
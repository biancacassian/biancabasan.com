import contentStyles from '../../ContentView/styles/content.styles.module.css';
import empathizeStyles from './styles/discovery.styles.module.css';
import { ImageDisplay } from '../../ImageView/interfaces'
import ImageView from '../../ImageView/ImageView'
import userStories from '../../../public/assets/images/giftd/user-stories.svg';

const Filters = (): JSX.Element => {
    return (
        <>
            <h1 className={contentStyles['content__double-col-left']}>When paying for something online, the user will have two thoughts: is this safe and is this clear?</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>In order to understand how a successful shipping and online payment experience can be designed <b>I have looked at competitors and I have also read customers reviews which have been beneficial in order to understand what their pain points are.</b></p>
                <p>I have also conducted initial desk research through articles to learn about best practices for mobile payment experiences, as well as looking into UI considerations for a successful payment and delivery feature.</p>
            </div>
            <ImageView className={empathizeStyles['sync-contacts']} image={userStories} imageAltText="Filters" imageDisplay={ImageDisplay.full} imageDescription={"A glimpse at the user stories"} />
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>As a result of the initial research, I was able to build user stories and consider the user flow together with the founder.</p>
                <p>We brainstormed user stories from the perspectives of a gifter (the person giving away) and a receiver ( the user interested in the item).</p>
                <p>Some questions that came to mind:</p>
            </div>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['square-col']}`}>
                <div className={empathizeStyles['square']}>
                    <p>01.What is the user trying to accomplish at each step?</p>
                </div>
                <div className={empathizeStyles['square']}>
                    <p>02. How can we build trust when making a payment?</p>
                </div>
                <div className={empathizeStyles['square']}>
                    <p>03. How can we ensure that users understand that they are only paying for shipping and not the item?</p>
                </div>
            </div>
        </>
    )
}

export default Filters
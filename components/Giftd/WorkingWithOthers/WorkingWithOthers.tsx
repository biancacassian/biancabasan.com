import contentStyles from '../../ContentView/styles/content.styles.module.css';
import empathizeStyles from './styles/working-with-others.styles.module.css';
import { ImageDisplay } from '../../ImageView/interfaces'
import ImageView from '../../ImageView/ImageView'
import mockUps from '../../../public/assets/images/giftd/mock-ups-update.jpg';

const Filters = (): JSX.Element => {
    return (
        <>
            <h1 className={contentStyles['content__double-col-left']}>Iteration & Collaboration</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>With the user stories ready I couldn't move forward without mapping out the flow of both the gifter and the receiver. Seeing the complete flow, from both users, made it easier to identify tasks needed at each step of the process.</p>
                <p><b>The low-fidelity mock-ups were presented to the developer for feedback, and we later conducted user testing with two end users.</b> The goal of user testing was to ensure that everything is clear and that there are no barriers preventing users from accomplishing their goals of uploading an item, selecting an item for delivery, and making a payment.</p>
            </div>
            <ImageView className={empathizeStyles['sync-contacts']} image={mockUps} imageAltText="Filters" imageDisplay={ImageDisplay.full} imageDescription={"A sneak peek at the mock-up flow"} />
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>We moved on to the development phase after the testing was completed successfully.</p>
                <p>In terms of the UI, I was guided by the psychological principle of Social Norms in which people expect most online interactions to follow the same social rules as person-to-person interactions.</p>
            </div>
            <h1 className={contentStyles['content__double-col-left']}>Impact</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>The feature is currently in progress and is going to be live in the beginning of February.</p>
            </div>
        </>
    )
}

export default Filters
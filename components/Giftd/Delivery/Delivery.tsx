import contentStyles from '../../ContentView/styles/content.styles.module.css';
import empathizeStyles from './styles/delivery.styles.module.css';
import { ImageDisplay } from '../../ImageView/interfaces'
import ImageView from '../../ImageView/ImageView'
import filters from '../../../public/assets/images/giftd/filters.jpg';

const Filters = (): JSX.Element => {
    return (
        <>
            <h1 className={contentStyles['content__double-col-left']}>Expand beyond location</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>Up until now, Giftd users would schedule meetings via DMs with other users in order to receive the items. The goal of having a shipping option besides users meeting offline with each other is <b>to provide more options for transacting items and expand beyond our current location (Berlin).</b></p>
                <p>Designing the first delivery feature was an exciting and challenging experience that I approached first by returning to what I had learned from improving the onboarding flow and designing the filtering option.</p>
                <p>Here are some of the factors that I considered:</p>
            </div>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['square-col']}`}>
                <div className={empathizeStyles['square']}>
                    <p>01. Focus on user’s goal by making sure we have a detailed understanding of exactly what users need at each step of the task.</p>
                </div>
                <div className={empathizeStyles['square']}>
                    <p>02. Put users first through user stories.</p>
                </div>
                <div className={empathizeStyles['square']}>
                    <p>03. Talk with the developer to understand the technical limitations.</p>
                </div>
            </div>
        </>
    )
}

export default Filters
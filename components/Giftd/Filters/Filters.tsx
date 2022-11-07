import contentStyles from '../../ContentView/styles/content.styles.module.css';
import empathizeStyles from './styles/filters.styles.module.css';
import { ImageDisplay } from '../../ImageView/interfaces'
import ImageView from '../../ImageView/ImageView'
import filters from '../../../public/assets/images/giftd/filters.png';

const Filters = (): JSX.Element => {
    return (
        <>
            <h1 className={contentStyles['content__double-col-left']}>Implementing the first filters and running into problems</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>One of the main pain points I found when gathering the survey's data was that there was no filtering option, which made it difficult for users to find items that were available, local, or published by friends.</p>
                <p>Together with the founder and the developer, we decided to start by allowing users to filter by friends, reserved, public and gifted items and expand on the next MVP.</p>
                <p>I was excited to design the filtering options and have users use it, but <b>after only one week users began to contact us with concerns: "I think there is a bug since I can't see anything when I am filtering."</b></p>
                <p>When designing the mockups, I failed to take user journeys and flows into account. I didn't think about things like: what would the user see if they tried to filter just by friends but didn't have any? With the current solution users will be encountered by an empty screen with no visual guidance, which causes confusion.</p>
            </div>
            <ImageView className={empathizeStyles['sync-contacts']} image={filters} imageAltText="Filters" imageDisplay={ImageDisplay.full} />
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>As a potential solution I would have added text to the empty screen directing the user back to the filtering options. The text would be written in a friendly tone, indicating why the screen is blank and what to do next.</p>
            </div>
            <h1 className={contentStyles['content__double-col-left']}>Learnings</h1>
            <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
                <p>What this experience taught me is that when the design gets into the real world there will always be something to learn from that we won't know about until users start using it.</p>
            </div>
        </>
    )
}

export default Filters
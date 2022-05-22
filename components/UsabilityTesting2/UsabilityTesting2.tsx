import { ImageDisplay } from '../ImageView/interfaces'
import ImageView from '../ImageView/ImageView'
import contentStyles from '../ContentView/styles/content.styles.module.css';
import usabilityTesting1 from '../../public/assets/images/content/usability-testing-2/usability-testing-2-1.png';
import usabilityTesting2 from '../../public/assets/images/content/usability-testing-2/usability-testing-2-2.png';
import usabilityTesting3 from '../../public/assets/images/content/usability-testing-2/usability-testing-2-3.png';
import usabilityTesting4 from '../../public/assets/images/content/usability-testing-2/usability-testing-2-4.png';

const UsabilityTesting2 = (): JSX.Element => {
  return (
    <>
      <h1 className={contentStyles['content__double-col-left']}>“I like that there is the option for tour guides and that I get to learn about them. I can see myself using this app! - Alice, usability testing participant</h1>
      <div className={contentStyles['content__double-col-right']}>
        <p>After conducting the usability test, I created an affinity map with key insights, behaviors, and findings.</p>
        <p>All the participants completed all the tasks in under 5 minutes, and all participants commented on the design’s friendliness, concise presentation of information, the clean minimalist design and appreciated that it was pretty easy to accomplish their tasks.</p>
      </div>
      <h1 className={contentStyles['content__double-col-left']}>Insight 01.</h1>
      <p className={contentStyles['content__double-col-right']}>Users did not know how to change or update their preferences. A more intuitive way for easily updating preferences is needed.</p>
      <h1 className={contentStyles['content__double-col-left']}>Solution</h1>
      <p className={contentStyles['content__double-col-right']}>Pay attention to what icons users are already familiar with and use it properly.</p>
      <ImageView image={usabilityTesting1} imageAltText="Usability Testing" imageDisplay={ImageDisplay.right}/>
      <h1 className={contentStyles['content__double-col-left']}>Insight 02.</h1>
      <p className={contentStyles['content__double-col-right']}>During onboarding users would have liked not to decide at the beginning of the app how long their tour guide will last since they were not familiar with all the options.</p>
      <h1 className={contentStyles['content__double-col-left']}>Solution</h1>
      <p className={contentStyles['content__double-col-right']}>Eliminate decisions that can be done later in the app's flow.</p>
      <ImageView image={usabilityTesting2} imageAltText="Usability Testing" imageDisplay={ImageDisplay.right}/>
      <h1 className={contentStyles['content__double-col-left']}>Insight 03.</h1>
      <p className={contentStyles['content__double-col-right']}>A major inside was that the “Buy ticket” button was directing the user to the payment screen offering no option for choosing a guide before purchasing the ticket.</p>
      <h1 className={contentStyles['content__double-col-left']}>Solution</h1>
      <p className={contentStyles['content__double-col-right']}>Rethink the flow and what is the main action the user needs to take, keep the current task clear and in focus.</p>
      <ImageView image={usabilityTesting3} imageAltText="Usability Testing" imageDisplay={ImageDisplay.right}/>
      <h1 className={contentStyles['content__double-col-left']}>Ethical design, avoiding scarcity language or how I rethought a button to keep the current task clear and in focus</h1>
      <div className={contentStyles['content__double-col-right']}>
        <p>During the usability test I also did a A/B testing, asking participant which button they prefer and why.</p>
        <p>Does creating the feeling of urgency make the participants want to book the tour?</p>
        <p>I wanted to avoid using language that make the participant feel that they need to book before it’s “too late” and avoid language that could damage the long-term business goals.</p>
      </div>
      <ImageView image={usabilityTesting4} imageAltText="Usability Testing" imageDisplay={ImageDisplay.right}/>
      <p className={contentStyles['content__double-col-right']}>The majority liked the second option because: “It's friendlier and provides more information on what I need to know before booking.”</p>
    </>
  )
}

export default UsabilityTesting2;

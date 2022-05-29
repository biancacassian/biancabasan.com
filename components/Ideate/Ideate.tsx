import { ImageDisplay } from '../ImageView/interfaces'
import ImageView from '../ImageView/ImageView'
import contentStyles from '../ContentView/styles/content.styles.module.css';
import ideateStyles from './styles/ideate.styles.module.css';
import ideate1 from '../../public/assets/images/content/ideate/ideate-1.jpg';
import ideate2 from '../../public/assets/images/content/ideate/ideate-2.jpg';
import ideate3 from '../../public/assets/images/content/ideate/ideate-3.png';

const Ideate = (): JSX.Element => {
  return (
    <>
      <h1 className={contentStyles['content__double-col-left']}>Turning the user’s challenges into opportunities for design</h1>
      <div className={contentStyles['content__double-col-right']}>
        <p>I used <b>How might We</b> to reframe the insights and the problems identified by the people I am designing for into design opportunities.</p>
      </div>
      <div className={contentStyles['content__double-col-left']}>
        <div className={ideateStyles['ideate__question-box']}>
          <p>How might we <b>create an emotional and personal connections between museum goers and artifacts?</b></p>
        </div>
      </div>
      <div className={contentStyles['content__double-col-right']}>
        <div className={ideateStyles['ideate__question-box']}>
          <p>How might we <b>motivate the user to go and experience the art in their city?</b></p>
        </div>
      </div>
      <div className={contentStyles['content__double-col-left']}>
        <div className={ideateStyles['ideate__answer-box']}>
          <ul>
            <li>Connect visitors with a guide</li>
            <li>Create the feeling of a positive experience  for the user before attending by providing brief info on the guide and accessible reviews</li>
            <li>Communication about the exhibits and the artist should be clear and informative</li>
            <li>Option to sent a direct message to the guide</li>
            <li>Provide more info about the works in the exhibit / reading material, video, etc</li>
          </ul>
        </div>
      </div>
      <div className={contentStyles['content__double-col-right']}>
        <div className={ideateStyles['ideate__answer-box']}>
          <ul>
            <li>Marketing campaign around the city</li>
            <li>Adds on social media, posters, collaborations with museums</li>
            <li>Inform visitor about upcoming exhibitions within their interests</li>
            <li>Inform about free openings</li>
            <li>Remind users of exhibition that are about to end</li>
            <li>Option to share and invite others to join</li>
          </ul>
        </div>
      </div>
      <div className={contentStyles['content__double-col-left']}>
        <div className={ideateStyles['ideate__question-box']}>
          <p>How might we <b>give visitors a personalized, meaningful experience?</b></p>
        </div>
      </div>
      <div className={contentStyles['content__double-col-right']}>
        <div className={ideateStyles['ideate__question-box']}>
          <p>How might we <b>help the user feel that they have chosen an experience worthwhile?</b></p>
        </div>
      </div>
      <div className={contentStyles['content__double-col-left']}>
        <div className={ideateStyles['ideate__answer-box']}>
          <ul>
            <li>Personalized onboarding </li>
            <li>Give them the power to tailor their experience to their needs</li>
            <li>A space where they can go back and revisit past and upcoming museum visits/experiences and plan for new ones</li>
            <li>Make visitor aware of the mental health benefits of museum visits</li>
          </ul>
        </div>
      </div>
      <div className={contentStyles['content__double-col-right']}>
        <div className={ideateStyles['ideate__answer-box']}>
          <ul>
            <li>Friendly and efficient communication</li>
            <li>Easy to find reviews</li>
            <li>A clear agenda / provide informative details about the tour</li>
          </ul>
        </div>
      </div>
      <div className={contentStyles['content__double-col-left']}>
        <h1>Feature Prioritization</h1>
        <p>From insights to design decisions</p>
      </div>
      <div className={contentStyles['content__double-col-right']}>
        <p>As I evaluated the ideas generated, I referred back to my user research insights and findings to help prioritize features. Additionally, I have also returned to the opportunities identified in the competitive analysis. </p>
        <p>User research suggested that <b>the ability to have the option to personalize their museum visit “ to add more to the visit” and the need for human connection as top priorities</b>, so this is where I focused my efforts going into ideation and sketches.</p>
      </div>
      <h1 className={contentStyles['content__double-col-left']}>Providing many options can give user flexibility but it’s also overwhelming</h1>
      <p className={contentStyles['content__double-col-right']}>Using sketches I concentrated on providing possible solution for discovery and personalization that support the user's passions and interest. During this phase I have also pulled inspiration from competitors.</p>
      <ImageView imageDescription='Paper and pen explorations' image={ideate1} imageAltText="Ideate" imageDisplay={ImageDisplay.maxLeft}/>
      <ImageView image={ideate2} imageAltText="Ideate" imageDisplay={ImageDisplay.maxRight}/>
      <div className={contentStyles['content__double-col-right']}>
        <p><b>My main struggle was to think about flows that would accommodate for different discovery opportunities</b> and attract users from both groups, primary and secondary.</p>
        <p><b>I went back into the research findings and suggestions</b> and decided on two way for discovery and exploration that support users in different circumstances.</p>
      </div>
      <ImageView imageDescription='Low fidelity explorations' className={ideateStyles['ideate__image']} image={ideate3} imageAltText="Ideate" imageDisplay={ImageDisplay.full}/>
      <div className={contentStyles['content__double-col-right']}>
        <p>By implementing the best options generated with the help of the Crazy 8 technique and pulling inspiration from competitors I turned these sketches into clickable wireframes, using Figma.</p>
        <p>With the low fidelity prototype ready, <b>it was time to test the solution.</b></p>
      </div>
    </>
  )
}

export default Ideate;

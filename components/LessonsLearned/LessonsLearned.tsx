import { ImageDisplay } from '../ImageView/interfaces'
import ImageView from '../ImageView/ImageView'
import contentStyles from '../ContentView/styles/content.styles.module.css';
import feedback from '../../public/assets/images/content/lessons-learned/lessons-learned-feedback.svg';
import lessonsLearnedEnd from '../../public/assets/images/content/lessons-learned/lessons-learned-end.png';
import lessonsLearnedStyles from './lessons-learned.styles.module.css';

const LessonsLearned = (): JSX.Element => {
  return (
    <>
      <h1 className={contentStyles['content__double-col-left']}>Even though this is a course project I reached out to a developer and asked for feedback</h1>
      <div className={contentStyles['content__double-col-right']}>
        <p>Working closely with a developer will be a crucial part of implementing the app.</p>
        <p>I was curious to receive feedback on <b>how a developer would perceive having my designs handed over.</b></p>
        <p>Here is his response:</p>
        <div className={lessonsLearnedStyles['lessons-learned__quote-box']}>
          <p><b>"Bianca's mockups leaves few questions unanswered. All elements are clearly laid out and the prototype shows the expected behavior of each screen. For a developer it is just a matter of picking up the design and only worry about how to implement it in code!"</b> - Talel, Software Developer</p>
        </div>
        <p>Throughout the course, I appreciated the constructive feedback I received from my colleagues that helped me make better design decisions and think critically.</p>
      </div>
      <ImageView imageDescription='Feedback received from colleagues enrolled in the same course' image={feedback} imageAltText="Lessons Learned" imageDisplay={ImageDisplay.right}/>
      <h1 className={contentStyles['content__double-col-left']}>Next Steps</h1>
      <div className={contentStyles['content__double-col-right']}>
        <p>The next step would be to conduct another round of user testing around the main features: booking guides and the For You feature.</p>
        <p>Also think about edge cases.</p>
        <p>I would want to understand the needs and goals of the guides and how can the service benefit both sides, the visitor and the guide.</p>
      </div>
      <h1 className={contentStyles['content__double-col-left']}>Lessons learned</h1>
      <div className={contentStyles['content__double-col-right']}>
        <p>I realized that as much as I love the visual exploration, I learned the most during <b>the research phase, from learning how to ask open ended questions to how to collect, synthesize information and  how to write a usability report.</b></p>
        <p>I have really enjoyed <b>the moments where I got to speak to real people</b> and discovered insights that I would have never thought of. </p>
        <p><b>Taking the time to understand the problem and who I was solving it for</b> is one of the most important things I learned.</p>
        <p>Overall this is just the begging of my journey into UX, <b>I would have love for this project to be a collaborative one since I thrive the most being in a team.</b></p>
        <div className={lessonsLearnedStyles['lessons-learned__try-boki-button']}>
          <a href="https://www.figma.com/proto/U512Sor87AEv4LL91I1bsR/Untitled?page-id=0%3A1&node-id=1%3A7066&viewport=1235%2C618%2C0.15&scaling=scale-down&starting-point-node-id=1%3A10153" rel="noopener noreferrer" target="_blank">Try Boki</a>
        </div>
      </div>
      <ImageView image={lessonsLearnedEnd} imageAltText="Lessons Learned" imageDisplay={ImageDisplay.full}/>
    </>
  )
}

export default LessonsLearned;

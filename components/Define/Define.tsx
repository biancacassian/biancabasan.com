import { ImageDisplay } from '../ImageView/interfaces'
import ImageView from '../ImageView/ImageView'
import contentStyles from '../ContentView/styles/content.styles.module.css';
import define1 from '../../public/assets/images/content/define/define1.svg';
import define2 from '../../public/assets/images/content/define/define2.svg';

const Define = (): JSX.Element => {
  return (
    <>
      <h1 className={contentStyles['content__double-col-left']}>
        The AHA moment: I realized that the primary user might follow one thinking style in one circumstance and another in a different circumstances
      </h1>
      <div className={contentStyles['content__double-col-right']}>
        <p>For example, a frequent museum visitor might have one thinking style when they want to visit alone and a different need when visiting with a friend.</p>
        <p>Based on the research I gathered that identified my user's frustrations, I have narrowed down the primary and secondary personas to "new to the city" and "the art enthusiast".</p>
        <p>However, I have noticed that gathering demographics and narrowing down the personas into stereotypes doesn't help with design iterations and decisions. Furthermore, I found myself emphasizing more on one user group than another, something I tried to avoid.</p>
        <p><b>Moving forward I changed the user personas from stereotypes to archetypes and concentrated on psychographics: motivations, pain points and needs.</b></p>
      </div>
      <ImageView image={define1} imageAltText="Define" imageDisplay={ImageDisplay.right}/>
      <ImageView image={define2} imageAltText="Define" imageDisplay={ImageDisplay.right}/>
    </>
  )
}

export default Define;

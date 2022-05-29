import { ImageDisplay } from '../ImageView/interfaces'
import ImageView from '../ImageView/ImageView'
import contentStyles from '../ContentView/styles/content.styles.module.css';
import usabilityTesting from '../../public/assets/images/content/usability-testing/usability-testing.png';

const UsabilityTesting = (): JSX.Element => {
  return (
    <>
      <h1 className={contentStyles['content__double-col-left']}>Can booking a museum exhibit be made enjoyable, informative and easy?</h1>
      <div className={contentStyles['content__double-col-right']}>
        <p>I conducted 4 in person usability testing and 1 remote.</p>
        <p>Participants were asked to perform tasks in a low-fidelity prototype and with their permission I have recorded it. <b>For the in person test I have used Figma and for remote testing Usaberry.</b></p>
        <p>It was important that for the usability testing to have at least <b>2 of the participant that took part in the user interviews.</b></p>
        <p>All the participants are interested in art and culture and attend museums with tour guides multiple times per year.</p>
      </div>
      <ImageView imageDescription='Remote testing with participant Ana using Userberry' image={usabilityTesting} imageAltText="Usability Testing" imageDisplay={ImageDisplay.right}/>
    </>
  )
}

export default UsabilityTesting;
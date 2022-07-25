import { ImageDisplay } from '../ImageView/interfaces'
import ImageView from '../ImageView/ImageView'
import contentStyles from '../ContentView/styles/content.styles.module.css';
import projectOverview from '../../public/assets/images/content/project-overview/project-overview.png';

const ProjectOverview = (): JSX.Element => {
  return (
    <>
      <h1 className={contentStyles['content__double-col-left']}>What is a Good Museum Experience?</h1>
      <div className={contentStyles['content__double-col-right']}>
        <p>I wanted to approach my very first case study and journey into the world of UX by tackling a problem I have observed in my environment.</p>
        <p>Coming from an art background and working in cultural institutions such as museums as a tour guide I have noticed the following reactions after the end of a tour:</p>
        <p>“When is your next tour? Do you know where I can find other interesting exhibits? I felt like I have invested in myself today, I have learned a lot today!”</p>
      </div>
      <h1 className={contentStyles['content__double-col-left']}>The challenge</h1>
      <div className={contentStyles['content__double-col-right']}>
        <p>In a city like Berlin, booming with cultural opportunities, art museums don't have a concise and centralized place to share their events and exhibitions. Further, there is little to no information about the guides who facilitate the tours for the exhibits.</p>
        <p>My question is: <b>where can cultural enthusiasts like myself locate a list of all the upcoming exhibitions in Berlin, and how can we make our visit more memorable?</b></p>
      </div>
      <h1 className={contentStyles['content__double-col-left']}>The Solution</h1>
      <div className={contentStyles['content__double-col-right']}>
        <p><b>Boki -  personalized exhibit discovery</b></p>
        <p>Boki supports your passion for art and culture by providing personalized recommendations and all the relevant information. With Boki you can make your museum visit more meaningful by attending a tour guide and choosing the guide that speaks to you.</p>
      </div>
      <ImageView image={projectOverview} imageAltText="Project Overview" imageDisplay={ImageDisplay.full}/>
      <h1 className={contentStyles['content__double-col-left']}>Impact Opportunity</h1>
      <div className={contentStyles['content__double-col-right']}>
        <p><b>01.</b> Boki aims to be a centralized and frictionless platform for museum exhibits discovery</p>
        <p><b>02.</b> Boki aims to bridge the gap between museum visitors and guides</p>
        <p><b>03.</b> Boki aims is to give a meaningful experience that is tailored to your preferences</p>
        <p><b>04.</b> Boki aims to highlight the positive mental health benefits of museum visits</p>
      </div>
    </>
  )
}

export default ProjectOverview;

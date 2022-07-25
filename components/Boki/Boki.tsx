import contentStyles from '../ContentView/styles/content.styles.module.css';
import bokiStyles from './styles/boki.styles.module.css';

const Boki = () => {
  return (
    <>
      <div className={`${contentStyles['content__double-col-right']} ${bokiStyles['boki']}`}>
        <h1>Context</h1>
        <p>Boki is an iOS app providing art enthusiasts with <b>a centralized and frictionless platform for discovering museum exhibitions with a tour guide happening in Berlin based on their interests.</b></p>
        <h1>Timeline</h1>
        <p>5 months, Sept 2021 - Mar 2022</p>
        <h1>Responsibilities</h1>
        <p>Competitive Analysis</p>
        <p>User Research</p>
        <p>UX/UI Design</p>
        <p>Branding</p>
        <p>Prototyping</p>
        <p>Usability Testing</p>
        <div className={bokiStyles['boki__meet-button']}>
          <a href="#meetTheApp" rel="noopener noreferrer">Meet Boki</a>
        </div>
        <div className={bokiStyles['boki__developer-button']}>
          <a href="#devFeedback" rel="noopener noreferrer">Developers Feedback</a>
        </div>
      </div>
    </>
  )
}

export default Boki;

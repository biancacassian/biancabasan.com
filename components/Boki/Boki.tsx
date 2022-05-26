import contentStyles from '../ContentView/styles/content.styles.module.css';
import bokiStyles from './styles/boki.styles.module.css';

const Boki = () => {
  return (
    <>
      <div className={`${contentStyles['content__double-col-right']} ${bokiStyles['boki']}`}>
        <h1>Context</h1>
        <p>Personal passion project done while attending Google UX Design Professional course</p>
        <h1>Timeline</h1>
        <p>5 months, Sept 2022 - Mar 2022</p>
        <h1>Responsibilities</h1>
        <p>Competitive Analysis</p>
        <p>User Research</p>
        <p>UX/UI Design</p>
        <p>Branding</p>
        <p>Prototyping</p>
        <p>Usability Testing</p>
      </div>
    </>
  )
}

export default Boki;

import contentStyles from '../ContentView/styles/content.styles.module.css';
import empathizeStyles from './styles/empathize.styles.module.css';

const Empathize = (): JSX.Element => {
  return (
    <>
      <h1 className={contentStyles['content__double-col-left']}>How do you go about finding museum exhibits and how many are interested in tour guides?</h1>
      <div className={contentStyles['content__double-col-right']}>
        <p>I moved forward with empathizing and discovering the potential users. I wanted to find out how museum visitors feel about being in a museum post covid and how do they go about finding museum exhibits.</p>
        <p>In order to get a better understanding of their behaviors, motivations and pain points <b>I used two research techniques:</b></p>
      </div>
      <div className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}>
        <h1>QUANTITATIVE</h1>
        <p>To understand the existing user behaviors for museum exhibits discovery I conducted 30  online surveys to uncover <b>how people go about finding museum exhibits and how many are interested in tour guides.</b></p>
        <h1>QUALITATIVE</h1>
        <p>The aim of the 1 on 1 interviews <b>was to listen</b> and understand the motivations, needs and uncover areas for improvement for museum visitors.</p>
        <p>The participant age ranged between 29 to 35, based in Berlin or new to the city and one of them suffers from attention dificit disorder.</p>
        <p>Participants are also art enthusiasts who attend museum exhibits regularly and prefer to also attend tours.</p>
      </div>
    </>
  )
}

export default Empathize
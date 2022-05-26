import Link from 'next/link';
import ImageView from '../components/ImageView/ImageView';
import contentStyles from '../components/ContentView/styles/content.styles.module.css';
import indexStyles from './styles/index.styles.module.css';
import bianca from '../public/assets/images/content/index/bianca.png';
import caseStudyShapes from '../public/assets/images/content/index/case_study_shapes.svg';
import caseStudyPhone1 from '../public/assets/images/content/index/case_study_phone1.png';
import caseStudyPhone2 from '../public/assets/images/content/index/case_study_phone2.gif';
import Navigation from '../components/Navigation/Navigation';


const Index = (): JSX.Element => {
  return (
    <div className={indexStyles.index}>
      <Navigation/>
      <div className={indexStyles['index__content']}>
        <ImageView className={indexStyles['index__content__image']} image={bianca} imageAltText="Bianca Name"/>
        <div className={indexStyles['index__content__welcome-message']}>
          <p>Hi there! I'm a self thought, growth oriented UX/UI designer based in Berlin.</p>
          <p>As I spend my time on this planet, with the help of design and technology, I hope to improve people's lives and help them do things more enjoyable.</p>
        </div>
        <h1 className={indexStyles['index__content__case-studies-title']}>Case Studies</h1>
        <div className={indexStyles['index__content__folder-tab']}></div>
        <div className={indexStyles['index__content__folder-content']}>
          <div className={indexStyles['index__content__folder-content__details']}>
            <p>UX/UI, BRANDING | COURSE PROJECT | 10-MIN READ </p>
            <p>How might we create an emotional and personal connections between museum visitors and artifacts?</p>
            <div className={indexStyles['index__content__folder-content__details__button']}>
              <a href='case-study'>Read Case Study</a>
            </div>
          </div>
          <div className={indexStyles['index__content__folder-content__phone-still']}>
            <ImageView className={indexStyles['index__content__folder-content__phone-still__shape']} image={caseStudyShapes} imageAltText="Case Study Shape"/>
            <ImageView className={indexStyles['index__content__folder-content__phone__still']} image={caseStudyPhone1} imageAltText="Case Study Phone"/>
          </div>
          <div className={indexStyles['index__content__folder-content__phone-animated']}>
            <ImageView className={indexStyles['index__content__folder-content__phone__animated']} image={caseStudyPhone2} imageAltText="Case Study Phone"/>
          </div>
        </div>
        <div className={indexStyles['index__content__divider']}>
          <hr/>
        </div>
        <div className={contentStyles['content__double-col-left']}>
          <p>I'm glad you stopped by!</p>
          <p>We can talk about anything design, inclusion and psychology in design, personal development or review each others work.</p>
          <p>Send me an email at:</p>
          <p>I’d love to hear from you!</p>
      </div>
      </div>
    </div>
  )
}

export default Index;
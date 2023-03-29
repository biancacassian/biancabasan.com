import ImageView from '../components/ImageView/ImageView';
import contentStyles from '../components/ContentView/styles/content.styles.module.css';
import indexStyles from './styles/index.styles.module.css';
import bianca from '../public/assets/images/content/index/bianca.png';
import caseStudyShapes from '../public/assets/images/content/index/case_study_shapes.svg';
import caseStudyPhone1 from '../public/assets/images/content/index/case_study_phone1.png';
import caseStudyPhone2 from '../public/assets/images/content/index/case_study_phone2.gif';
import giftdPhone from '../public/assets/images/giftd/giftd-intro.gif';
import giftdPhoneMessages from '../public/assets/images/giftd/giftd-phone-messages.svg';
import Navigation from '../components/Navigation/Navigation';
import confettiIntro from '../public/assets/images/giftd-progress-bar/confetti-intro.gif';
import progressCard from '../public/assets/images/giftd-progress-bar/progress-card.png';

const Index = (): JSX.Element => {
  return (
    <div className={indexStyles.index}>
      <Navigation />
      <div className={indexStyles['index__content']}>
        <ImageView className={indexStyles['index__content__image']} image={bianca} imageAltText="Bianca Name" />
        <div className={indexStyles['index__content__welcome-message']}>
          <p>Hello, I'm a growth oriented UX/UI designer based in Berlin.</p>
          <p>As I spend my time on this planet, I use design and technology to create impactful digital experiences that benefit people, businesses and our planet.</p>
        </div>
        <h1 className={indexStyles['index__content__case-studies-title']}>Case Studies</h1>

        <div className={indexStyles['case-studies']}>
          <div className={indexStyles['folder-tab']}></div>
          <div className={indexStyles['index__content__folder-content']}>
            <div className={indexStyles['index__content__folder-content__details']}>
              <p>Giftd</p>
              <p>UX/UI | GREEN TECH I SHIPPED</p>
              <p>How might we create an emotional connection for users as they work towards reducing their CO2e footprint?</p>
              <div className={indexStyles['index__content__folder-content__details__button']}>
                <a href='/progress-bar'>Read Case Study</a>
              </div>
            </div>
            {/* <div className={indexStyles['index__content__folder-content__phone-still__giftd']}> */}
            <ImageView className={indexStyles['giftd-confetti']} image={confettiIntro} imageAltText="Case Study Phone" />
            <ImageView className={indexStyles['giftd-progress-bar']} image={progressCard} imageAltText="Case Study Phone" />
            {/* </div> */}
          </div>
        </div>

        <div className={indexStyles['case-studies']}>
          <div className={indexStyles['folder-tab']}></div>
          <div className={indexStyles['index__content__folder-content']}>
            <div className={indexStyles['index__content__folder-content__details']}>
              <p>Giftd</p>
              <p>UX/UI | GREEN TECH I SHIPPED</p>
              <p>How might we improve the app experience and impact the number of people joining and making clothes transactions?</p>
              <div className={indexStyles['index__content__folder-content__details__button']}>
                <a href='/giftd'>Read Case Study</a>
              </div>
            </div>
            {/* <div className={indexStyles['index__content__folder-content__phone-still__giftd']}> */}
            <ImageView className={indexStyles['giftd-phone-messages']} image={giftdPhoneMessages} imageAltText="Case Study Phone" />
            <ImageView className={indexStyles['giftd-phone']} image={giftdPhone} imageAltText="Case Study Phone" />
            {/* </div> */}
          </div>
        </div>

        <div className={indexStyles['case-studies']}>
          <div className={indexStyles['folder-tab']}></div>
          <div className={indexStyles['index__content__folder-content']}>
            <div className={indexStyles['index__content__folder-content__details']}>
              <p>BOKI</p>
              <p>UX/UI | BRANDING | COURSE PROJECT</p>
              <p>How might we create an emotional and personal connections between museum visitors and artifacts?</p>
              <div className={indexStyles['index__content__folder-content__details__button']}>
                <a href='/case-study'>Read Case Study</a>
              </div>
            </div>
            <div className={indexStyles['index__content__folder-content__phone-still']}>
              <ImageView className={indexStyles['index__content__folder-content__phone-still__shape']} image={caseStudyShapes} imageAltText="Case Study Shape" />
              <ImageView className={indexStyles['index__content__folder-content__phone__still']} image={caseStudyPhone1} imageAltText="Case Study Phone" />
            </div>
            <div className={indexStyles['index__content__folder-content__phone-animated']}>
              <ImageView className={indexStyles['index__content__folder-content__phone__animated']} image={caseStudyPhone2} imageAltText="Case Study Phone" />
            </div>
          </div>
        </div>


        <div className={indexStyles['index__content__divider']}>
          <hr />
        </div>
        <div className={`${contentStyles['content__double-col-left']} ${indexStyles["contact"]}`}>
          <p>Let's cross paths!</p>
          <p>We can talk about anything design, inclusion and psychology in design, personal development or review each others work.</p>
          <p>Send me an email at:</p>
          <a href='mailto:bianca.ioana.basan@gmail.com' className={indexStyles["e-mail"]} data-user="nasab.anaoi.acnaib" data-website="moc.liamg"></a>
          <p>I’d love to hear from you!</p>
        </div>
      </div>
    </div>
  )
}

export default Index;

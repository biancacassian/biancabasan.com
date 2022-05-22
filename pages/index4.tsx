import ImageView from '../components/ImageView/ImageView';
import biancaLarge from '../public/assets/images/content/about/bianca-large.jpg';
import biancaSmall from '../public/assets/images/content/about/bianca-small.jpg';
import ContentView from '../components/ContentView/ContentView';
import aboutStyles from './styles/about.styles.module.css';

const About = (): JSX.Element => {
  return (
    <div className={aboutStyles.about}>
      <ContentView>
        <ImageView className={aboutStyles['about__image-large']} image={biancaLarge} imageAltText="Bianca Large"/>
        <ImageView className={aboutStyles['about__image-small']} image={biancaSmall} imageAltText="Bianca Small"/>
        <div className={aboutStyles['about__col-right']}>
          <p>Stay Humble</p>
          <p>Hardwork and being able to help others</p>
          <p>As I spend my time on this planet, with the help of design and technology, I hope to improve people's lives and help them do things more enjoyable.</p>
          <p>Stay Humble</p>
          <p>Hardwork and being able to help others</p>
          <p>As I spend my time on this planet, with the help of design and technology, I hope to improve people's lives and help them do things more enjoyable.</p>
          <p>Stay Humble</p>
          <p>Hardwork and being able to help others</p>
          <p>As I spend my time on this planet, with the help of design and technology, I hope to improve people's lives and help them do things more enjoyable.</p>
          <p>Stay Humble</p>
          <p>Hardwork and being able to help others</p>
          <p>As I spend my time on this planet, with the help of design and technology, I hope to improve people's lives and help them do things more enjoyable.</p>
          <p>Stay Humble</p>
          <p>Hardwork and being able to help others</p>
          <p>As I spend my time on this planet, with the help of design and technology, I hope to improve people's lives and help them do things more enjoyable.</p>
        </div>
        <div className={aboutStyles['about__border']}/>
        <h1 className={aboutStyles['about__col-left']}>Hello</h1>
        <div className={aboutStyles['about__col-right']}>
          <p>Stay Humble</p>
          <p>Hardwork and being able to help others</p>
          <p>As I spend my time on this planet, with the help of design and technology, I hope to improve people's lives and help them do things more enjoyable.</p>
        </div>
        <div className={aboutStyles['about__border']}/>
        <h1 className={aboutStyles['about__col-left']}>Hello</h1>
        <div className={aboutStyles['about__col-right']}>
          <p>Stay Humble</p>
          <p>Hardwork and being able to help others</p>
          <p>As I spend my time on this planet, with the help of design and technology, I hope to improve people's lives and help them do things more enjoyable.</p>
        </div>
        <div className={aboutStyles['about__border']}/>
        <h1 className={aboutStyles['about__col-left']}>Hello</h1>
        <div className={aboutStyles['about__col-right']}>
          <p>Stay Humble</p>
          <p>Hardwork and being able to help others</p>
          <p>As I spend my time on this planet, with the help of design and technology, I hope to improve people's lives and help them do things more enjoyable.</p>
        </div>
      </ContentView>
    </div>
  )
}

export default About;
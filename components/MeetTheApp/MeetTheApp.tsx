import { ImageDisplay } from '../ImageView/interfaces'
import ImageView from '../ImageView/ImageView'
import contentStyles from '../ContentView/styles/content.styles.module.css';
import meetTheAppStyles from './styles/meet-the-app.styles.module.css';
import meetTheAppHero from '../../public/assets/images/content/meet-the-app/meet-the-app-hero.png';
import animated1 from '../../public/assets/images/content/meet-the-app/animated-1.gif';
import animated2 from '../../public/assets/images/content/meet-the-app/animated-2.gif';
import animated3 from '../../public/assets/images/content/meet-the-app/animated-3.gif';
import animated4 from '../../public/assets/images/content/meet-the-app/animated-4.gif';
import animated5 from '../../public/assets/images/content/meet-the-app/animated-5.gif';
import still1 from '../../public/assets/images/content/meet-the-app/still-1.png';
import still2 from '../../public/assets/images/content/meet-the-app/still-2.png';
import still3 from '../../public/assets/images/content/meet-the-app/still-3.png';
import still4 from '../../public/assets/images/content/meet-the-app/still-4.png';
import still5 from '../../public/assets/images/content/meet-the-app/still-5.png';

const MeetTheApp = (): JSX.Element => {
  return (
    <>
      <h1 className={meetTheAppStyles['meet-the-app__intro']}>I’m Boki, lets find you a meaningful experience!</h1>
      <ImageView 
        className={meetTheAppStyles['meet-the-app__hero']}
        image={meetTheAppHero} 
        imageAltText="Meet the App" 
        imageDisplay={ImageDisplay.full}
      />
      <div className={`${contentStyles['content__double-col-left']} ${meetTheAppStyles['meet-the-app__section-details']}`}>
        <h1>Personalize your discovery</h1>
        <p>As a first time user of the app, onboarding will help narrowing down the options available, offering recommendations that would feel like a personal recommendation from a friend who knows you well.</p>
      </div>
      <div className={meetTheAppStyles['meet-the-app__images-container']}>
        <ImageView className={meetTheAppStyles['meet-the-app__test']} image={animated1} imageAltText="Meet the App" imageDisplay={ImageDisplay.inline}/>
        <ImageView className={meetTheAppStyles['meet-the-app__test']} image={still1} imageAltText="Meet the App" imageDisplay={ImageDisplay.inline}/>
      </div>
      <p className={meetTheAppStyles['meet-the-app__images-description']}>Participants appreciated that <b>accessibility considerations were taken into account</b></p>
      <div className={`${contentStyles['content__double-col-left']} ${meetTheAppStyles['meet-the-app__section-details']}`}>
        <h1>For You</h1>
        <p>The For you space allows you to curate easily what matters to you.</p>
        <p>Easily edit topics already selected or use the in-depth filters to have more control over your discoverability.</p>
      </div>
      <div className={meetTheAppStyles['meet-the-app__images-container']}>
        <ImageView className={meetTheAppStyles['meet-the-app__test']} image={animated2} imageAltText="Meet the App" imageDisplay={ImageDisplay.inline}/>
        <ImageView className={meetTheAppStyles['meet-the-app__test']} image={still2} imageAltText="Meet the App" imageDisplay={ImageDisplay.inline}/>
      </div>
      <div className={`${contentStyles['content__double-col-left']} ${meetTheAppStyles['meet-the-app__section-details']}`}>
        <h1>Exhibition & Museum Info</h1>
        <p>The museum card gives you easy access to reviews of both the exhibition and the guide.</p> 
        <p>Check out the museum's ongoing exhibitions and have a sneak peek into who the exhibition guides are.</p>
      </div>
      <div className={meetTheAppStyles['meet-the-app__images-container']}>
        <ImageView className={meetTheAppStyles['meet-the-app__test']} image={animated3} imageAltText="Meet the App" imageDisplay={ImageDisplay.inline}/>
        <ImageView className={meetTheAppStyles['meet-the-app__test']} image={still3} imageAltText="Meet the App" imageDisplay={ImageDisplay.inline}/>
      </div>
      <div className={`${contentStyles['content__double-col-left']} ${meetTheAppStyles['meet-the-app__section-details']}`}>
        <h1>Make your museum visit more meaningful</h1>
        <p>Discover hidden stories about the art works, the artist and more with a guide that speaks to you.</p>
      </div>
      <div className={meetTheAppStyles['meet-the-app__images-container']}>
        <ImageView className={meetTheAppStyles['meet-the-app__test']} image={animated4} imageAltText="Meet the App" imageDisplay={ImageDisplay.inline}/>
        <ImageView className={meetTheAppStyles['meet-the-app__test']} image={still4} imageAltText="Meet the App" imageDisplay={ImageDisplay.inline}/>
      </div>
      <p className={meetTheAppStyles['meet-the-app__images-description']}><b>“The info about the guides is what makes the app different than other event apps!”</b> - Participant Alice</p>
      <div className={`${contentStyles['content__double-col-left']} ${meetTheAppStyles['meet-the-app__section-details']}`}>
        <h1>Easy and frictionless payments</h1>
        <p>Access your ticket offline, receive notifications two hours before your visit, and see what the weather will be like on your way to the museum.</p>
      </div>
      <div className={meetTheAppStyles['meet-the-app__images-container']}>
        <ImageView className={meetTheAppStyles['meet-the-app__test']} image={animated5} imageAltText="Meet the App" imageDisplay={ImageDisplay.inline}/>
        <ImageView className={meetTheAppStyles['meet-the-app__test']} image={still5} imageAltText="Meet the App" imageDisplay={ImageDisplay.inline}/>
      </div>
    </>
  )
}

export default MeetTheApp;
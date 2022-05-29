import { ImageDisplay } from '../ImageView/interfaces'
import ImageView from '../ImageView/ImageView'
import contentStyles from '../ContentView/styles/content.styles.module.css';
import statistics1 from '../../public/assets/images/content/quantitative/statistics1.svg';
import statistics2 from '../../public/assets/images/content/quantitative/statistics2.svg';
import statistics3 from '../../public/assets/images/content/quantitative/statistics3.svg';
import statistics4 from '../../public/assets/images/content/quantitative/statistics4.svg';

const Quantitative = () => {
  return (
    <>
      <h1 className={contentStyles['content__double-col-left']}>If you could choose between an in person tour guide and a virtual /audio tour, which one would you enjoy more? Why is that?</h1>
      <ImageView image={statistics1} imageAltText="Statistics" imageDisplay={ImageDisplay.inline}/>
      <h1 className={contentStyles['content__double-col-left']}>Would you be more open to book a tour guide if you knew a little bit about your guide?</h1>
      <ImageView image={statistics2} imageAltText="Statistics" imageDisplay={ImageDisplay.inline}/>
      <h1 className={contentStyles['content__double-col-left']}>When visiting an art gallery/museum, what made you want to visit? </h1>
      <ImageView image={statistics3} imageAltText="Statistics" imageDisplay={ImageDisplay.inline}/>
      <h1 className={contentStyles['content__double-col-left']}>How do you discover museum exhibits / cultural events?</h1>
      <ImageView image={statistics4} imageAltText="Statistics" imageDisplay={ImageDisplay.inline}/>
    </>
  )
}

export default Quantitative;
import { ImageDisplay } from '../ImageView/interfaces'
import ImageView from '../ImageView/ImageView'
import contentStyles from '../ContentView/styles/content.styles.module.css';
import successMetrics1 from '../../public/assets/images/content/success-metrics/success-metrics-1.png';
import successMetrics2 from '../../public/assets/images/content/success-metrics/success-metrics-2.png';
import successMetricsStyles from './styles/success-metrics.styles.module.css';

const SuccessMetrics = (): JSX.Element => {
  return (
    <>
      <h1 className={contentStyles['content__double-col-left']}>How might the solution affect business outcomes?</h1>
      <div className={contentStyles['content__double-col-right']}>
        <p>To measure the success of Boki we would look at the:</p>
        <p>01. Number of  downloads as an indicator of acquisition.</p>
        <p>02. Monthly active users as an indicator of usage and retention.</p>
        <p>03. How many save, book exhibits and read the blog section as an indicator of engagement.</p>
      </div>
      <h1 className={contentStyles['content__double-col-left']}>Value for the user?</h1>
      <div className={contentStyles['content__double-col-right']}>
        <p>Encourages offline human connection</p>
        <p>Personalized recommendations that supports your passion and interest</p>
        <p>Discover experiences efficiently and quickly</p>
      </div>
      <ImageView className={successMetricsStyles['success-metrics__image']} image={successMetrics1} imageAltText="Success Metrics" imageDisplay={ImageDisplay.inline}/>
      <h1 className={contentStyles['content__double-col-left']}>Required capabilities</h1>
      <div className={contentStyles['content__double-col-right']}>
        <p>Creat value by developing a product that is simple, accessible and enjoyable</p>
        <p>Increase Brand Perception</p>
        <p>Personalized experience increases user loyalty and affinity towards Boki as users encounter more relevant content and interactions and feel understood by the brand. Which will lead to customer retention.</p>
      </div>
      <ImageView className={successMetricsStyles['success-metrics__image']} image={successMetrics2} imageAltText="Success Metrics" imageDisplay={ImageDisplay.inline}/>
      <h1 className={contentStyles['content__double-col-left']}>How will Boki compete?</h1>
      <div className={contentStyles['content__double-col-right']}>
        <p>To maintain user engagement, send suggestion notifications that motivates the user to go out and explore</p>
        <p>Quickly respond to the market trend</p>
        <p>Ability to keep information updated</p>
      </div>
    </>
  )
}

export default SuccessMetrics;
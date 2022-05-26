import { ImageDisplay } from '../ImageView/interfaces'
import ImageView from '../ImageView/ImageView'
import contentStyles from '../ContentView/styles/content.styles.module.css';
import brandingVisualDesign1 from '../../public/assets/images/content/branding-visual-design/branding-visual-design-1.jpg';
import brandingVisualDesign2 from '../../public/assets/images/content/branding-visual-design/branding-visual-design-2.svg';
import brandingVisualDesign3 from '../../public/assets/images/content/branding-visual-design/branding-visual-design-3.svg';
import brandingVisualDesignStyles from './styles/branding-visual-design.styles.module.css';

const BrandingVisualDesign = (): JSX.Element => {
  return (
    <>
      <h1 className={contentStyles['content__double-col-left']}>"It's user friendly, information is easy to find, I know exactly where to go and make changes!"</h1>
      <div className={contentStyles['content__double-col-right']}>
        <p>During the usability test participants appreciated the <b>concise presentation of information, the clean minimalist design and the tone of the app as being friendly and warm.</b></p>
        <p>The style, voice, and personality of Boki was planned with their feedback in mind. <b>To make it pleasant, enjoyable, and successful, I kept their input in mind.</b></p>
      </div>
      <ImageView
        imageDescription="Boki's design system"
        className={brandingVisualDesignStyles['branding-visual-design__design-system']} 
        image={brandingVisualDesign1} 
        imageAltText="Branding and Visual Design" 
        imageDisplay={ImageDisplay.aligned}
      />
      <h1 className={contentStyles['content__double-col-left']}>Designing with a11y in mind & efficiency</h1>
      <div className={contentStyles['content__double-col-right']}>
        <p><b>Tone:</b> friendly and direct, use simple, basic English and avoid jargon</p>
        <p><b>Content easy to scan:</b> easy to recognize icons, good use of white space</p>
      </div>
      <div className={brandingVisualDesignStyles['branding-visual-design__graphic']}>
        <ImageView 
          image={brandingVisualDesign2} 
          imageAltText="Branding and Visual Design" 
          imageDisplay={ImageDisplay.right}
        />
      </div>
      <div className={contentStyles['content__double-col-right']}>
        <p>Combining text with images, <b>enabling easier and faster access across all literacy levels</b></p>
        <p>Labelling icons, avoid clutter and reduce cognitive load</p>
      </div>
      <div className={brandingVisualDesignStyles['branding-visual-design__graphic']}>
        <ImageView 
          image={brandingVisualDesign3} 
          imageAltText="Branding and Visual Design" 
          imageDisplay={ImageDisplay.right}
        />
      </div>
      <div className={contentStyles['content__double-col-right']}>
        <p>Correct color and contrast approved by WCAG</p>
        <p><b>Clear visual hierarchy</b> in the event detail page</p>
        <p><b>Keep the visual design, interactions and navigation familiar to the users</b></p>
      </div>
    </>
  )
}

export default BrandingVisualDesign;
import ideation from '../../../public/assets/images/giftd-progress-bar/ideation.svg';
import contentStyles from '../../ContentView/styles/content.styles.module.css';
import ImageView from '../../ImageView/ImageView';
import { ImageDisplay } from '../../ImageView/interfaces';
import empathizeStyles from './styles/intro.styles.module.css';

const WorkingWithOthers = (): JSX.Element => {
  return (
    <>
      <h1 className={contentStyles['content__double-col-left']}>
        "How can we emotionally connect users to their CO2e savings through the
        user interface?"
      </h1>
      <div
        className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}
      >
        <p>
          Through engaging with Giftd ambassadors, It became evident that
          integrating a referral option and emphasizing the users' environmental
          impact as they engage in the clothing gifting process would be a
          game-changer.
        </p>
        <p>
          During ideation our goal was to align with users' sustainability
          aspirations, transforming mere numbers into a compelling reflection of
          their impact, motivating and empowering them on their sustainability
          journey.
        </p>
      </div>
      <ImageView
        className={empathizeStyles['ideate']}
        image={ideation}
        imageAltText="Filters"
        imageDisplay={ImageDisplay.full}
        imageDescription={'Design explorations'}
      />
    </>
  );
};

export default WorkingWithOthers;

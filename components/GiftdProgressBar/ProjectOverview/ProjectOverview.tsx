import confetti from '../../../public/assets/images/giftd-progress-bar/confetti.gif';
import profile from '../../../public/assets/images/giftd-progress-bar/profile.png';
import contentStyles from '../../ContentView/styles/content.styles.module.css';
import ImageView from '../../ImageView/ImageView';
import { ImageDisplay } from '../../ImageView/interfaces';
import empathizeStyles from './styles/intro.styles.module.css';

const ProjectOverview = (): JSX.Element => {
  return (
    <>
      <h1 className={contentStyles['content__double-col-left']}>Context</h1>
      <div
        className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}
      >
        <p>
          Giftd is a Berlin-based start-up and social network app that aims to
          eradicate clothing waste by enabling users to gift their pre-loved
          clothes to loved ones and neighbors. This fosters a tight-knit
          community while promoting eco-friendly habits.
        </p>
        <p>
          As the excitement around Giftd continues to grow, we now face an
          exciting challenge:{' '}
          <b>
            How can we design a solution that seamlessly connects users with
            Giftd mission while recognizing and celebrating the top 3-4% of our
            most engaged users, the true champions driving change on the
            platform?
          </b>
        </p>
        <h1>Timeline</h1>
        <p>February - Shipped in March 2023</p>
        <h1>Team</h1>
        <p>1 UX/UI Designer - Me, 1 Founder, 1 Co Founder and CTO</p>
        <p>2 Marketing Team</p>
      </div>
      <h1 className={contentStyles['content__double-col-left']}>UX Goals</h1>
      <div
        className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}
      >
        <p>
          <b>1.</b> Connect Users to Giftd's Mission: Ensure that the feature
          establishes a strong connection between users and Giftd's mission,
          communicating the platform's purpose and users impact clearly and
          effectively.
        </p>
        <p>
          <b>2.</b> Recognize Top Engaged Users: Identify and celebrate the top
          engaged users who have made the most significant impact on Giftd's
          platform, providing them with special recognition for their
          contributions.
        </p>
        <p>
          <b>3.</b> Enhance User Engagement: Create a feature that encourages
          users to actively participate in Giftd's platform, fostering a sense
          of involvement and interaction.
        </p>
      </div>
      <h1 className={contentStyles['content__double-col-left']}>Role</h1>
      <div
        className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}
      >
        <p>
          As the sole designer, I took the lead in driving the entire project
          from its initial idea to the final hand-off. Working closely with the
          product owner, developer and marketing I facilitated alignment and
          feature discovery workshop using different methodologies. As well as
          staying closely connected with users through thorough research.
        </p>
      </div>
      <ImageView
        className={empathizeStyles['profile']}
        image={profile}
        imageAltText="Research"
        imageDisplay={ImageDisplay.maxLeft}
      />
      <ImageView
        className={empathizeStyles['confetti']}
        image={confetti}
        imageAltText="Research"
        imageDisplay={ImageDisplay.maxRight}
      />
    </>
  );
};

export default ProjectOverview;

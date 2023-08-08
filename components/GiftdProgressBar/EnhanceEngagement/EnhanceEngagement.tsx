import confettiIntro from '../../../public/assets/images/giftd-progress-bar/confetti-intro.gif';
import confetti from '../../../public/assets/images/giftd-progress-bar/confetti.gif';
import progressBar from '../../../public/assets/images/giftd-progress-bar/progress-bar.gif';
import contentStyles from '../../ContentView/styles/content.styles.module.css';
import ImageView from '../../ImageView/ImageView';
import { ImageDisplay } from '../../ImageView/interfaces';
import empathizeStyles from './styles/intro.styles.module.css';

const EnhanceEngagement = (): JSX.Element => {
  return (
    <>
      <h1 className={contentStyles['content__double-col-left']}>
        How can design and psychology be used in a progress bar?
      </h1>
      <div
        className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}
      >
        <p>
          The challenged that we faced was to design a solution that will
          enhance user engagement for both primary and secondary users while
          celebrating the top engaged users with the greatest impact. Let's dive
          into the outcomes:
        </p>
        <p>
          Beyond showcasing top users with badges, we introduced a progress bar.
          This bar not only lets users monitor their personal and community
          progress but also fuels their motivation to minimize CO2e emissions.
          It's a visual testament to their impactful journey and offers a
          glimpse into their friends' contributions through gifting.
        </p>
      </div>
      <div className={`${contentStyles['content__double-col-left']}`}>
        <p>
          <b>Short term rewards</b>
        </p>
        <p>
          Leveraging the Goal Gradient Effect, which emphasizes the power of
          small rewards, I divided the progress bar into milestones. This
          approach celebrates users as they conquer each milestone, adding an
          exciting sense of achievement to their journey.
        </p>
      </div>
      <ImageView
        className={empathizeStyles['gifs']}
        image={confettiIntro}
        imageAltText="Filters"
        imageDisplay={ImageDisplay.inline}
      />
      <div className={`${contentStyles['content__double-col-left']}`}>
        <p>
          <b>Community Impact</b>
        </p>
        <p>
          The Community Impact Screen is where users can track their own
          progress and that of their community towards CO2e reduction, while
          also offering invitations that grant one month of free reservations.
        </p>
        <p>
          The Community Impact screen also serve as an entry-point for an
          action, such as “ Invite more people”.
        </p>
      </div>
      <ImageView
        className={empathizeStyles['gifs']}
        image={confetti}
        imageAltText="Filters"
        imageDisplay={ImageDisplay.inline}
      />
      <div className={`${contentStyles['content__double-col-left']}`}>
        <p>
          <b>
            Metaphors vs. numbers or “People remember stories better than facts
            alone”
          </b>
        </p>
        <p>
          We aimed to make the experience of observing and monitoring your
          impact enjoyable, so we came up with the idea to use an empty human
          icon that gradually fills up as you make progress
        </p>
      </div>
      <ImageView
        className={empathizeStyles['gifs']}
        image={progressBar}
        imageAltText="Filters"
        imageDisplay={ImageDisplay.inline}
      />
      <h1 className={contentStyles['content__double-col-left']}>
        With a progress bar, are we encouraging bad behavior? And if yes, how
        can we prevent it?
      </h1>
      <div
        className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}
      >
        <p className={empathizeStyles['square-opening-paragraph']}>
          While designing the progress bar, I also considered its potential
          downsides and wondered how I could prevent negative emotions and
          unethical behavior.
        </p>
        <div className={empathizeStyles['square']}>
          <p>
            01. Transparent: communicate what the bar represents and what it is
            measuring and how
          </p>
        </div>
        <div className={empathizeStyles['square']}>
          <p>
            02. Fake progress bar: make sure that you’re tracking in real time
          </p>
        </div>
        <div className={empathizeStyles['square']}>
          <p>
            03. Provide clear feedback to users when a process is complete or if
            there is an error{' '}
          </p>
        </div>
        <div className={empathizeStyles['square']}>
          <p>
            04. Accessible: use high contrast colors to make it easier for users
            to see
          </p>
        </div>
      </div>
      <h1 className={contentStyles['content__double-col-left']}>Impact</h1>
      <div
        className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}
      >
        <p>
          <b>1.</b> My active role unfolded through cross-functional workshops,
          which united the team for collaborative brainstorming sessions and I
          have also enhanced the workflow between the developer and myself for
          more efficient collaboration.
        </p>
        <p>
          <b>2.</b> Users reach out expressing joy in seeing and having the
          feature / users started expressing their delight in the newly
          introduced feature. Their positive feedback underscored the success of
          our efforts in creating an engaging and meaningful user experience.
        </p>
      </div>
      <h1 className={contentStyles['content__double-col-left']}>Challenges</h1>
      <div
        className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}
      >
        <p>
          The main obstacle arose when addressing the user journey for
          individuals who were joining through referrals. Given the already
          comprehensive onboarding process, introducing an extra screen
          exclusively for the referral code raised concerns about potential user
          experience challenges and drop-offs. Post-launch, we recognized that
          our initial solution for the referral code lacked prominence,
          prompting us to reevaluate our approach.
        </p>
      </div>
    </>
  );
};

export default EnhanceEngagement;

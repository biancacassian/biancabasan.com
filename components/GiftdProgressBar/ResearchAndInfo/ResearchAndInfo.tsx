import contentStyles from '../../ContentView/styles/content.styles.module.css';
import empathizeStyles from './styles/intro.styles.module.css';

const ResearchAndInfo = (): JSX.Element => {
  return (
    <>
      <h1 className={contentStyles['content__double-col-left']}>
        How can we celebrate the top 3-4% of engaged users with the greatest
        impact?
      </h1>
      <div
        className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}
      >
        <p>
          To kick start the design process, I first looked into how other
          companies approach impact, particularly looking at how they
          communicate numbers and encourage engagement.
        </p>
        <p>
          Simultaneously, I discussed with the founder to define the feature's
          purpose and user value. The goal emerged: to boost engagement for
          primary and secondary users, celebrating the top 3-4% engaged users
          making the greatest impact.
        </p>
      </div>
      <h1 className={contentStyles['content__double-col-left']}>
        I was really excited to have the opportunity to brainstorm the Hook
        Model
      </h1>
      <div
        className={`${contentStyles['content__double-col-right']} ${empathizeStyles['empathize__col']}`}
      >
        <p>
          Excited about the framework, I led a brainstorming session with the
          founder and developer, using the Hook Model to generate feature ideas.
          We concentrated on identifying desired rewards for primary users and
          designing to fulfill those needs, all while ensuring these rewards
          foster user engagement and growth.
        </p>
        <p>From the brainstorming session we gained 3 valuable insights:</p>
      </div>
      <div
        className={`${contentStyles['content__double-col-right']} ${empathizeStyles['square-col']}`}
      >
        <div className={empathizeStyles['square']}>
          <p>01. Gamification elements can be used to enhance engagement</p>
        </div>
        <div className={empathizeStyles['square']}>
          <p>
            02. For gamification to work we need to uncover the real motivation
            / goal of the user
          </p>
        </div>
        <div className={empathizeStyles['square']}>
          <p>
            03. We must experiment with creating a loop of triggered actions and
            unpredictable rewards for users
          </p>
        </div>
      </div>
    </>
  );
};

export default ResearchAndInfo;

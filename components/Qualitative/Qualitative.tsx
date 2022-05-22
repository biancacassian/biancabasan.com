import contentStyles from '../ContentView/styles/content.styles.module.css';
import qualitativeStyles from './styles/qualitative.styles.module.css';

const Qualitative = (): JSX.Element => {
  return (
    <>
      <h1 className={contentStyles['content__double-col-left']}>
        Based on the 1 on 1 interviews and the survey, I discovered that none of the participants have a straightforward method of finding exhibitions
      </h1>
      <div className={contentStyles['content__double-col-right']}>
        <p>I moved forward with empathizing and discovering the potential users. I wanted to find out how museum visitors feel about being in a museum post covid and how do they go about finding museum exhibits.</p>
        <div className={qualitativeStyles['qualitative__quote-box']}>
          <p>“I think the simpler and the neater the process the better.Clean and easy to use interface, with simple and efficient communication and a secure method of payment will make the platform a success.”</p>
          <br/>
          <p>Maria, interviewee</p>
        </div>
        <div className={qualitativeStyles['qualitative__quote-box']}>
          <p>“I need information about the tour leader, his/her experience in the field, how long the tour is going to be, the price, tour rules and Covid updates... If I don't get all the information I need, I won't book the tour.”</p>
          <br/>
          <p>Vlad, interviewee</p>
        </div>
      </div>
      <h1 className={contentStyles['content__double-col-left']}>Priority problems to solve in this MVP based on interview insights</h1>
      <div className={contentStyles['content__double-col-right']}>
        <p>01. No option to discover exhibits that are tailored to visitors needs and interest. Museum visitors want to have agency over their choices before making a decision.</p>
        <p>02. The majority of participants spent some time reading reviews and planning before attending. However, reviews are not always available, leaving participants to wonder whether they made the right decision.</p>
        <p>03. Having a central platform for discovery, planning and booking, as well as a method of easy and secure payment, are features that all participants regard as desirable.</p>
        <p>04. The desire for booking on the go, easy and without any friction.</p>
      </div>
      <h1 className={contentStyles['content__double-col-left']}>Observation</h1>
      <div className={contentStyles['content__double-col-right']}>
        <p>It is important to mention that, even thought one of Boki's intent is to bridge the gap between museum visitors and guides, all the research conducted has been focusing primarily on the visitor.</p>
        <p>If I could continue iterating on the product, I would want to understand the needs and goals of the guides and how the service can benefit both sides.</p>
      </div>
    </>
  )
}

export default Qualitative;

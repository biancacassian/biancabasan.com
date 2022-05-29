import { ContentViewProps } from "../components/ContentView/interfaces";
// import SingleColContentView from "../components/ContentView/SingleColContentView";
// import DoubleColContentView from "../components/ContentView/DoubleColContentView";
import ContentView from "../components/ContentView/ContentView";
import { useRouter } from 'next/router';
// import { 
//   boki,
//   discovery,
//   projectOverview,
//   empathize,
//   empathize2,
//   quantitative
// } from '../content/boki/boki'
import Folder from "../components/Folder/Folder";
import Qualitative from "../components/Qualitative/Qualitative";
import Define from "../components/Define/Define";
import UsabilityTesting from "../components/UsabilityTesting/UsabilityTesting";
import UsabilityTesting2 from "../components/UsabilityTesting2/UsabilityTesting2";
import Discovery from "../components/Discovery/Discovery";
import Quantitative from "../components/Quantitative/Quantitative";
import SuccessMetrics from "../components/SuccessMetrics/SuccessMetrics";
import BrandingVisualDesign from "../components/BrandingVisualDesign/BrandingVisualDesign";
import MeetTheApp from "../components/MeetTheApp/MeetTheApp";
import folderStyles from '../components/Folder/styles/folder.styles.module.css';
import Ideate from "../components/Ideate/Ideate";
import ProjectOverview from "../components/ProjectOverview/ProjectOverview";
import Boki from "../components/Boki/Boki";
import caseStudiesStyles from './styles/case-studies.module.css';
import ImageView from '../components/ImageView/ImageView'
import hero from '../public/assets/images/content/case-studies/hero.jpg';
import Navigation from "../components/Navigation/Navigation";
import LessonsLearned from "../components/LessonsLearned/LessonsLearned";
import Empathize from "../components/Empahtize/Empathize";

const BokiCaseStudy = (): JSX.Element => {
  const router = useRouter()
  const { locale } = router;

  return <>
    <Navigation className={caseStudiesStyles['case-studies__navigation']}/>
    <div className={caseStudiesStyles['case-studies']}>
      <div className={caseStudiesStyles['case-studies__hero']}>
        <ImageView image={hero} imageAltText="Boki"/>
      </div>
    </div>
    <Folder bokiLogo>
      <ContentView>
        <Boki/>
      </ContentView>
      </Folder>

    <Folder header="Project Overview">
      <ContentView>
        <ProjectOverview/>
      </ContentView>
    </Folder>

    <Folder header="Discovery" subheader="Competitive Analysis and the Gap">
      <ContentView>
        <Discovery/>
      </ContentView>
    </Folder>

    <Folder header="Empathize" subheader="What is the Real User Need?">
      <ContentView>
        <Empathize/>
      </ContentView>
    </Folder>

    <Folder header="Quantitative" subheader="Findings and Insights">
      <ContentView>
        <Quantitative/>
      </ContentView>
    </Folder>

    <Folder header="Qualitative" subheader="Findings and Insights">
      <ContentView>
        <Qualitative/>
      </ContentView>
    </Folder>
  
    <Folder header="Define" subheader="User Personas">
      <ContentView>
        <Define/>
      </ContentView>
    </Folder>

    <Folder header="Ideate">
      <ContentView>
        <Ideate/>
      </ContentView>
    </Folder>

    <Folder header="Usability Testing" subheader="Planning">
      <ContentView>
        <UsabilityTesting/>
      </ContentView>
    </Folder>

    <Folder header="Usability Testing" subheader="Findings and Insights">
      <ContentView>
        <UsabilityTesting2/>
      </ContentView>
    </Folder>

    <Folder header="Meet the App">
      <ContentView>
        <MeetTheApp/>
      </ContentView>
    </Folder>

    <Folder header="Success Metrics">
      <ContentView>
        <SuccessMetrics/>
      </ContentView>
    </Folder>

    <Folder header="Branding and Visual Design">
      <ContentView>
        <BrandingVisualDesign/>
      </ContentView>
    </Folder>

    <Folder header="Lessons Learned and Next Steps">
      <ContentView>
        <LessonsLearned/>
      </ContentView>
    </Folder>
  </>
}

export default BokiCaseStudy;

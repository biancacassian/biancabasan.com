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

const BokiCaseStudy = (): JSX.Element => {
  const router = useRouter()
  const { locale } = router;

  return <>
    <ContentView>
      <Boki/>
    </ContentView>

    <Folder className={folderStyles['folder__first']} header="Project Overview">
      <ContentView>
        <ProjectOverview/>
      </ContentView>
    </Folder>

    <Folder header="Discovery" subheader="Competitive Analysis and the App">
      <ContentView>
        <Discovery/>
      </ContentView>
    </Folder>

    <Folder header="Empathize" subheader="What Is the Real User Need?">
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
  </>
}

export default BokiCaseStudy;

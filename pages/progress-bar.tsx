import ContentView from "../components/ContentView/ContentView";
import { useRouter } from 'next/router';
import Folder from "../components/Folder/Folder";
import caseStudiesStyles from './styles/case-studies.module.css';
import ImageView from '../components/ImageView/ImageView'
import Navigation from "../components/Navigation/Navigation";
import ProjectOverview from "../components/GiftdProgressBar/ProjectOverview/ProjectOverview";
import ResearchAndInfo from "../components/GiftdProgressBar/ResearchAndInfo/ResearchAndInfo";
import SuperUser from "../components/GiftdProgressBar/SuperUser/SuperUser";
import WorkingWithOthers from "../components/GiftdProgressBar/WorkingWithOthers/WorkingWithOthers";
import EnhanceEngagement from "../components/GiftdProgressBar/EnhanceEngagement/EnhanceEngagement";

import intro from "../public/assets/images/giftd-progress-bar/intro.svg"

const GiftdCaseStudy = (): JSX.Element => {
    const router = useRouter()
    const { locale } = router;

    return <>
        <Navigation className={caseStudiesStyles['case-studies__navigation']} />
        <div id="bokiStart" className={caseStudiesStyles['case-studies']}>
            <div className={caseStudiesStyles['case-studies__hero']}>
                <ImageView image={intro} imageAltText="Boki" />
            </div>
        </div>
        <Folder header="Project Overview">
            <ContentView>
                <ProjectOverview />
            </ContentView>
        </Folder>
        <Folder header="Discover the Issue">
            <ContentView>
                <ResearchAndInfo />
            </ContentView>
        </Folder>
        <Folder header="GIFTD Super Users">
            <ContentView>
                <SuperUser />
            </ContentView>
        </Folder>
        <Folder header="Joining Forces">
            <ContentView>
                <WorkingWithOthers />
            </ContentView>
        </Folder>
        <Folder header="Introducing Community Impact">
            <ContentView>
                <EnhanceEngagement />
            </ContentView>
        </Folder>

        <div className={caseStudiesStyles['case-studies__scroll-up-button']}>
            <a href="#bokiStart" rel="noopener noreferrer">&#11105;</a>
        </div>
    </>
}

export default GiftdCaseStudy;

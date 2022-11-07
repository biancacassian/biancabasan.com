import ContentView from "../components/ContentView/ContentView";
import { useRouter } from 'next/router';
import Folder from "../components/Folder/Folder";
import caseStudiesStyles from './styles/case-studies.module.css';
import ImageView from '../components/ImageView/ImageView'
import Navigation from "../components/Navigation/Navigation";
import Intro from "../components/Giftd/Intro/Intro";
import Onboarding from "../components/Giftd/Onboarding/Onboarding";
import Research from "../components/Giftd/Research/Research";
import IdeatingSketching from "../components/Giftd/IdeatingSketching/IdeatingSketching";
import Filters from "../components/Giftd/Filters/Filters";
import hero from '../public/assets/images/giftd/hero.jpg';

const GiftdCaseStudy = (): JSX.Element => {
    const router = useRouter()
    const { locale } = router;

    return <>
        <Navigation className={caseStudiesStyles['case-studies__navigation']} />
        <div id="bokiStart" className={caseStudiesStyles['case-studies']}>
            <div className={caseStudiesStyles['case-studies__hero']}>
                <ImageView image={hero} imageAltText="Boki" />
            </div>
        </div>
        <Folder header="Project Overview">
            <ContentView>
                <Intro />
            </ContentView>
        </Folder>

        <Folder header="Onboarding">
            <ContentView>
                <Onboarding />
            </ContentView>
        </Folder>

        <Folder header="Research">
            <ContentView>
                <Research />
            </ContentView>
        </Folder>

        <Folder header="Ideating & Sketching">
            <ContentView>
                <IdeatingSketching />
            </ContentView>
        </Folder>
        <Folder header="Filters">
            <ContentView>
                <Filters />
            </ContentView>
        </Folder>
        <div className={caseStudiesStyles['case-studies__scroll-up-button']}>
            <a href="#bokiStart" rel="noopener noreferrer">&#11105;</a>
        </div>
    </>
}

export default GiftdCaseStudy;

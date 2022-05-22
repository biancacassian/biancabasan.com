/* eslint-disable react/jsx-key */
import { ImageDisplay } from '../../components/ImageView/interfaces';
import ImageView from '../../components/ImageView/ImageView';
import projectOverview from '../../public/assets/images/content/project-overview/project-overview.png';
import discovery from '../../public/assets/images/content/discovery/discovery.png';
import quantitativeStatistics1 from '../../public/assets/images/content/quantitative/statistics1.jpg';
import quantitativeStatistics2 from '../../public/assets/images/content/quantitative/statistics2.jpg';
import quantitativeStatistics3 from '../../public/assets/images/content/quantitative/statistics3.jpg';
import quantitativeStatistics4 from '../../public/assets/images/content/quantitative/statistics4.jpg';

export const projectOverviewImages = [
  <ImageView image={projectOverview} imageDisplay={ImageDisplay.full} imageAltText="Project Overview"/>
]

export const discoveryImages = [
  <ImageView image={discovery} imageDisplay={ImageDisplay.center} imageAltText="Discovery"/>
]

export const quantitativeImages = [
  <ImageView image={quantitativeStatistics1} imageDisplay={ImageDisplay.right} imageAltText="Statistics 1"/>,
  <ImageView image={quantitativeStatistics2} imageDisplay={ImageDisplay.right} imageAltText="Statistics 2"/>,
  <ImageView image={quantitativeStatistics3} imageDisplay={ImageDisplay.right} imageAltText="Statistics 3"/>,
  <ImageView image={quantitativeStatistics4} imageDisplay={ImageDisplay.right} imageAltText="Statistics 4"/>
]
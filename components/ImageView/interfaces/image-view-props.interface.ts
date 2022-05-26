import { StaticImageData } from 'next/image';
import { ImageDisplay } from '../interfaces';

export interface ImageViewProps {
  className?: string;
  image: StaticImageData;
  imageDescription?: string;
  imageDescriptionUrl?: string;
  centerImageDescription?: boolean;
  imageDisplay?: ImageDisplay;
  imageAltText: string;

}

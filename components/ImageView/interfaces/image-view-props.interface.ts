import { StaticImageData } from 'next/image';
import { ImageDisplay } from '../interfaces';

export interface ImageViewProps {
  className?: string;
  image: any;
  imageDescription?: string;
  imageDescriptionUrl?: string;
  centerImageDescription?: boolean;
  imageDisplay?: ImageDisplay;
  imageAltText: string;

}

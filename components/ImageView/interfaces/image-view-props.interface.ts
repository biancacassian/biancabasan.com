import { StaticImageData } from 'next/image';
import { ImageDisplay } from '../interfaces';

export interface ImageViewProps {
  className?: string;
  image: StaticImageData;
  imageDescription?: string;
  imageDisplay?: ImageDisplay;
  imageAltText: string;
}

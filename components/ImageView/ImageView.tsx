import Image from 'next/image';
import { ImageViewProps } from './interfaces';
import imageStyles from './styles/image.styles.module.css';

const ImageView = ({className, image, imageDescription, imageDescriptionUrl, centerImageDescription, imageDisplay, imageAltText}: ImageViewProps): JSX.Element => {
  return (
    <div className={`${imageStyles[`image-styles__${imageDisplay}`]} ${className}`}>
      <Image src={image} alt={imageAltText}/>
      { imageDescription && !imageDescriptionUrl &&  <p className={`${imageStyles['image-styles__image-description']} ${centerImageDescription && imageStyles['image-styles__image-description__centered']}`}>{imageDescription}</p>}
      { imageDescription && imageDescriptionUrl && <a href={imageDescriptionUrl} rel="noopener noreferrer" target="_blank"><p className={`${imageStyles['image-styles__image-description']} ${centerImageDescription && imageStyles['image-styles__image-description__centered']}`}>{imageDescription}</p></a> }
    </div>
  )
}

export default ImageView;

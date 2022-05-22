import Image from 'next/image';
import { ImageViewProps } from './interfaces';
import imageStyles from './styles/image.styles.module.css';

const ImageView = ({className, image, imageDisplay, imageAltText}: ImageViewProps): JSX.Element => {
  return (
    <div className={`${imageStyles[`image-styles__${imageDisplay}`]} ${className}`}>
      <Image src={image} alt={imageAltText}/>
    </div>
  )
}

export default ImageView;

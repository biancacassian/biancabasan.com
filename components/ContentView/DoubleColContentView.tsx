import { Fragment } from 'react';
import { ContentViewProps } from './interfaces';
import doubleColStyles from './styles/double-col-styles.module.css';

const DoubleColContentView = ({ contents }: ContentViewProps): JSX.Element => {
  return (
    <div className={doubleColStyles['double-col']}>
      {contents.map((content, index) => {
        const images = content.images;

        return (
          <Fragment key={index}>
            {content.header}
            <div className={doubleColStyles['double-col__paragraphs']}>
              {content.body.map((paragraph, index) => (
                <Fragment key={index}>
                    {paragraph}
                </Fragment>
              ))}
            </div>
            {images && images.map((image, index) => (
              <Fragment key={index}>
                {image}
              </Fragment>
            ))}
          </Fragment>
        )
      })}
    </div>
  )
}

export default DoubleColContentView;

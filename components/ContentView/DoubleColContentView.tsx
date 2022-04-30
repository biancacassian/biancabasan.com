import { ContentViewProps } from './interfaces';
import { Fragment } from 'react';
import doubleColStyles from './styles/double-col-styles.module.css';

const DoubleColContentView = ({ contents }: ContentViewProps): JSX.Element => {
  return (
    <div className={doubleColStyles['double-col']}>
      {contents.map((content, index) => (
        <Fragment key={index}>
          {content.header}
          <div className={doubleColStyles['double-col__paragraphs']}>
            {content.body.map((paragraph, index) => (
              <Fragment key={index}>
                  {paragraph}
              </Fragment>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default DoubleColContentView;

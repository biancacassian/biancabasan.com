import { ContentViewProps } from './interfaces';
import contentStyles from './styles/content.styles.module.css';

const ContentView = ({ children }: ContentViewProps): JSX.Element => {
  return (
    <div className={contentStyles.content}>
      {children}
    </div>
  )
}

export default ContentView;

import { FolderProps } from './interfaces';
import folderStyles from './styles/folder.styles.module.css';

const Folder = ({ className, children, header, subheader }: FolderProps): JSX.Element => {
  return (
    <div className={`${folderStyles['folder']} ${className}`}>
      <div className={folderStyles['folder__tab-area']}>
        <div className={folderStyles['folder__tab-area__tab']}>
          <h1>{header}</h1>
          <p>{subheader}</p>
        </div>
      </div>
      <div className={folderStyles['folder__case-study']}>
        { children }
      </div>
    </div>
  )
}

export default Folder;

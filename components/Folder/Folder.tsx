import { FolderProps } from './interfaces';
import ImageView from '../ImageView/ImageView'
import folderStyles from './styles/folder.styles.module.css';
import boki from '../../public/assets/images/content/boki/boki.svg';

const Folder = ({ className, children, header, subheader, bokiLogo, id }: FolderProps): JSX.Element => {
  return (
    <div className={`${folderStyles['folder']} ${className}`}>
      <div className={folderStyles['folder__tab-area']}>
        <div id={ id ? id : undefined }className={folderStyles['folder__tab-area__tab']}>
          { bokiLogo ? <ImageView image={boki} imageAltText="Boki"/> : <><h1>{header}</h1><p>{subheader}</p></>}
        </div>
      </div>
      <div className={folderStyles['folder__case-study']}>
        { children }
      </div>
    </div>
  )
}

export default Folder;

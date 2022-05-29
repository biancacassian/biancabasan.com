import Link from 'next/link';
import navigationStyles from './styles/navigation.styles.module.css';
import { NavigationProps } from './interfaces';

const Navigation = ({className}: NavigationProps): JSX.Element => {
  return (
    <div className={`${navigationStyles['navigation']} ${className}`}>
      <div className={navigationStyles['navigation__item']}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className={navigationStyles['navigation__item']}>
        <Link href="case-study">
          <a>Case Studies</a>
        </Link>
      </div>
      <div className={navigationStyles['navigation__item']}>
        <Link href="about">
          <a>About</a>
        </Link>
      </div>
    </div>
  )
}

export default Navigation;
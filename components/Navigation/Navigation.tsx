import Link from 'next/link';
import { NavigationProps } from './interfaces';
import navigationStyles from './styles/navigation.styles.module.css';

const Navigation = ({ className }: NavigationProps): JSX.Element => {
  return (
    <div className={navigationStyles['navigation__wrapper']}>
      <div className={`${navigationStyles['navigation']} ${className}`}>
        <span className={navigationStyles['navigation__bianca']}>Bianca</span>
        <div className={navigationStyles['navigation__item']}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        {/* <div className={navigationStyles['navigation__item']}>
          <Link href="/case-study">
            <a>Case Studies</a>
          </Link>
        </div>
        <div className={navigationStyles['navigation__item']}>
          <Link href="/giftd">
            <a>Case Studies</a>
          </Link>
        </div> */}
        <div className={navigationStyles['navigation__item']}>
          <Link href="https://substack.com/profile/8410069-bianca-basan">
            <a target="_blank">Writings</a>
          </Link>
        </div>
        <div className={navigationStyles['navigation__item']}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

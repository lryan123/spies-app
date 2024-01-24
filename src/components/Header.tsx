import spiesLogo from '../assets/SPIES_Full_Logo.png';
import './Header.css';

type Props = {
  title: string;
  para: JSX.Element[];
};

function Header({ title, para }: Props): JSX.Element {
  return (
    <section className="header-section-container">
      <img className='spies-logo-header' src={spiesLogo} alt="SPIES Logo" />
      <div className='text-container'>
        <h2 className='header'>{title}</h2>
        <div className='text-para'>{para}</div>
      </div>
    </section>
  );
}

export default Header;

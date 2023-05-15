import Link from 'next/link';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>Movies App</Link>
        </div>
        {/* <div className='links'>
          <Link href='/about'></Link>
          <Link href='/about/team'></Link>
        </div> */}
      </div>
    </header>
  );
};
export default Header;
import { HeaderContainer } from './Styles';



const Header = ({ data }: any) => {

    const { title, logo, links } = data;

    return (
        <HeaderContainer>
            <div className='flex'>
                <img className='header-logo' src={logo} alt="logo" />
                <h2 className='header-title'>{title}</h2>
            </div>

            <nav className='header-nav'>
                {links?.map((link: string) => (
                    <a key={link} className='header-link' href="#">{link}</a>
                ))}
            </nav>
        </HeaderContainer>
    );
}

export default Header;
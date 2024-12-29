import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
const Nav = () => {
    return (
        <header className='padding-x py-8 z-10 absolute w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img src={headerLogo} alt=" logo" width={260} height={49} />
                </a>

                <ul className="flex-1 flex justify-center items-center gap-10 max-lg:hidden">
                    {navLinks.map((link) => (
                        <li key={link.label} className="group">
                            <a href={link.href} className="font-montserrat text-lg text-slate-gray group-hover:text-green-900 transition duration-300">{link.label}</a>
                            <div className="h-0.5 bg-green-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                        </li>
                    ))}
                </ul>

                
                <div className='hidden max-lg:block'><img src={hamburger} alt="Hamburger" width={25} height={25} /></div>
            </nav>
        </header>
    )
}

export default Nav
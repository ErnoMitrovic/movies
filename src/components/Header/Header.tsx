import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/constants';
import { ReactComponent as HamburgerIcon } from '../../assets/svg/Hamburguer.svg';
import { ReactComponent as CloseIcon } from '../../assets/svg/Close.svg';
import React from 'react';

const Header = () => {
    const location = useLocation();
    const path = location.pathname;
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className='bg-white text-[#46515e] hover:text-[#2a3038] p-6 container hover:cursor-pointer flex justify-between items-center border-b border-gray-800'>
            <h1 className='text-3xl font-bold' onClick={() => navigate('/')}>Movie DB</h1>
            <div className='lg:hidden'>
                <button onClick={toggleMenu} type='button'>
                    {isOpen ? <CloseIcon className='h-6 w-6' /> : <HamburgerIcon className='h-6 w-6' />}
                </button>
            </div>
            <ul className={`lg:flex ${isOpen ? 'block' : 'hidden'} flex-col lg:flex-row lg:space-x-4`}>
                {
                    Object.entries(ROUTES).map(([key, value]) => {
                        // If the route is not included in the menu, return null
                        if (value.notIncludeInMenu) return null;

                        return (
                            <li key={key} className='p-2'>
                                <Link to={value.path} className={(path === value.path ? 'text-red-500' : 'text-inherit hover:text-[#f9a826]')}>
                                    {value.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Header;

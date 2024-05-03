import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/constants';

const Header = () => {

    const location = useLocation();
    const path = location.pathname;
    const navigate = useNavigate();

    return (
        <nav className='text-[#46515e] hover:text-[#2a3038] p-6 container hover:cursor-pointer flex justify-between items-center border-b border-gray-800'>
            <h1 className='text-3xl font-bold' onClick={() => navigate('/')}>Movie DB</h1>
            <ul className='flex space-x-4'>
                {
                    Object.entries(ROUTES).map(([key, value]) => {
                        // If the route is not included in the menu, return null
                        if (value.notIncludeInMenu) return null;
                        
                        return (
                            <li key={key}>
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
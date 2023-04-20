import { Link } from 'react-router-dom';

import Search from '../Search/Search';

const Header = () => {
	return (
		<header>
			<div className='container px-4 py-6 text-dark dark:text-light flex justify-between lg:text-xl text-lg'>
				<ul className='flex flex-wrap gap-x-4 items-center'>
					<li>
						<Link to={'/'}>Главная</Link>
					</li>
					<li>
						<Link to={'catalog'}>Каталог</Link>
					</li>
					<li>
						<Link to={'new'}>Что нового</Link>
					</li>
					<li>Что посмотреть</li>
				</ul>
				<ul className='flex flex-wrap gap-x-4 items-center'>
					<li>
						<Search />
					</li>
					<li>Войти</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;

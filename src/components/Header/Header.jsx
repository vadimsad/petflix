import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<div className='container px-4 text-dark dark:text-light flex justify-between'>
				<ul className='flex flex-wrap gap-2'>
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
				<ul className='flex flex-wrap gap-2'>
					<li>Поиск</li>
					<li>Войти</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;

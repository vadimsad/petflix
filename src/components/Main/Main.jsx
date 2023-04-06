import { Outlet } from 'react-router';

const Main = () => {
	return (
		<main className='flex-1'>
			<div className='container px-4 text-dark dark:text-light'>
				<Outlet />
			</div>
		</main>
	);
};

export default Main;

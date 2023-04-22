import { Outlet } from 'react-router';

const Main = () => {
	return (
		<main className='flex-1'>
			<div className='xl:container px-4 mt-6 text-dark dark:text-light'>
				<Outlet />
			</div>
		</main>
	);
};

export default Main;

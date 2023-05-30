import React, { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className='wrapper min-h-full flex flex-row'>
			<Sidebar />
			<div className='w-full xl:pl-[20rem] md:pl-[15rem] pl-0 flex flex-col flex-1 bg-light dark:bg-dark transition-colors'>
				<Header />
				<Main>{children}</Main>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;

import { useState } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import Layout from './components/Layout/Layout';

import { context } from './context/context';

const App = () => {
	const [searchText, setSearchText] = useState('');
	const [searchQuery, setSearchQuery] = useState('');

	return (
		<Layout>
			<Sidebar />
			<div className='w-full xl:pl-[20rem] md:pl-[15rem] pl-0 flex flex-col flex-1 bg-light dark:bg-dark transition-colors'>
				<context.Provider
					value={{ searchText, setSearchText, searchQuery, setSearchQuery }}
				>
					<Header />
					<Main />
					<Footer />
				</context.Provider>
			</div>
		</Layout>
	);
};

export default App;

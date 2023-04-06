import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
	return (
		<div className='wrapper min-h-full flex flex-row'>
			<Sidebar />
			<div className='xl:pl-[20rem] md:pl-[15rem] pl-0 flex flex-col flex-1 bg-light dark:bg-dark transition-colors'>
				<Header />
				<Main />
				<Footer />
			</div>
		</div>
	);
};

export default App;

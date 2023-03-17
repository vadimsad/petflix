import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
	return (
		<div className='wrapper flex flex-row h-full'>
			<Sidebar />
			<div className='content-wrapper flex flex-col flex-1 bg-light dark:bg-dark transition-colors'>
				<Header />
				<Main />
				<Footer />
			</div>
		</div>
	);
};

export default App;

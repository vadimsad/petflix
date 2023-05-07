import Layout from './components/Layout/Layout';
import { Outlet } from 'react-router';

const App = () => {
	return (
		<Layout>
			<Outlet />
		</Layout>
	);
};

export default App;

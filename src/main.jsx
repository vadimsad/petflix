import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'normalize.css';
import './index.scss';

import App from './App';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import New from './pages/New';

import { store } from './redux/store';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'catalog',
				element: <Catalog />,
			},
			{
				path: 'new',
				element: <New />,
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);

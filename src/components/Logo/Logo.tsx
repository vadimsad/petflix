import React from 'react';
import { Link } from 'react-router-dom';

type LogoProps = {};

const Logo: React.FC<LogoProps> = (props) => {
	return (
		<Link to={'/'} className='inline-block pr-3'>
			<div className='inline-block'>
				<h1 className='text-4xl font-serif'>PETFLIX</h1>
				<span className='block text-sm opacity-75 text-center'>Почти как Netflix</span>
			</div>
		</Link>
	);
};

export default Logo;

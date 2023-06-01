import React from 'react';

const ExternalLink: React.FC = () => {
	return (
		<a
			href='https://github.com/vadimsad/petflix'
			target='_blank'
			className='inline-block p-3 border-2 dark:border-dark border-light rounded-xl dark:hover:bg-blue hover:bg-blue dark:focus-within:bg-blue focus-within:bg-blue group transition-colors'
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='dark:group-hover:text-light'
			>
				<path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
				<polyline points='15 3 21 3 21 9'></polyline>
				<line x1='10' y1='14' x2='21' y2='3'></line>
			</svg>
		</a>
	);
};

export default ExternalLink;

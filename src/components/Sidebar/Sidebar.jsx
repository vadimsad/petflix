import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
	const [showSidebar, setShowSidebar] = useState(false);

	const onShowSidebar = () => {
		setShowSidebar(() => !showSidebar);
	};

	return (
		<aside
			className={`${
				showSidebar ? 'xl:w-[20rem] lg:w-[16rem] w-[13rem]' : 'w-0'
			} md:relative fixed h-full rounded-tr-[20px] bg-dark dark:bg-light text-light dark:text-dark transition-colors transition-[width]`}
		>
			<div
				className={`sidebar-content overflow-hidden ${
					showSidebar ? 'p-5' : 'p-0'
				} transition-[padding]`}
			>
				<ul>
					<li>Menu 1</li>
					<li>Menu 2</li>
					<li>Menu 3</li>
					<li>Menu 4</li>
					<li>Menu 5</li>
				</ul>
			</div>
			<button
				type='button'
				className='absolute top-1/2 right-0 translate-x-full -translate-y-1/2 text-dark dark:text-light'
				onClick={onShowSidebar}
			>
				<span className={`${styles.vertical}`}>Toggle sidebar</span>
			</button>
		</aside>
	);
};

export default Sidebar;

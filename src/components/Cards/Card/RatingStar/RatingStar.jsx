import React from 'react';

const RatingStar = ({ fill }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			version='1.0'
			x='0px'
			y='0px'
			viewBox='0 0 50 50'
			fill={fill}
			stroke='#0D1B2A'
		>
			<path d='M 25 2.2734375 L 18.609375 18.480469 L 0.81054688 19.417969 L 14.648438 30.412109 L 10.070312 47.222656 L 25 37.771484 L 39.929688 47.222656 L 35.351562 30.412109 L 49.189453 19.417969 L 31.390625 18.480469 L 25 2.2734375 z' />
		</svg>
	);
};

export default RatingStar;

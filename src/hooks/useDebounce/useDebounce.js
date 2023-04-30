import { useState, useEffect } from 'react';

const useDebounce = (fn, delay) => {
	const [timerId, setTimerId] = useState(null);

	useEffect(() => {
		return () => {
			clearTimeout(timerId);
		};
	}, [timerId]);

	const debouncedFn = (...args) => {
		clearTimeout(timerId);
		setTimerId(
			setTimeout(() => {
				fn(...args);
			}, delay),
		);
	};

	return debouncedFn;
};

export default useDebounce;

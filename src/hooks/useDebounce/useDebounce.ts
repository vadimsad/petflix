import { useState, useEffect } from 'react';

const useDebounce = <T extends any[]>(
	fn: (...args: T) => void,
	delay: number,
): ((...args: T) => void) => {
	const [timerId, setTimerId] = useState<NodeJS.Timeout>();

	useEffect(() => {
		return () => {
			clearTimeout(timerId);
		};
	}, [timerId]);

	const debouncedFn = (...args: T) => {
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

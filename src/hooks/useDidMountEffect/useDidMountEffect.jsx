import React, { useEffect, useRef } from 'react';

const useDidMountEffect = (func, deps) => {
	const didMount = useRef(false);

	useEffect(() => {
		if (didMount.current) {
			return func();
		}
		didMount.current = true;
	}, deps);
};

export default useDidMountEffect;

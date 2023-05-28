import React, { useEffect, useRef, DependencyList, EffectCallback } from 'react';

const useDidMountEffect = (func: EffectCallback, deps: DependencyList) => {
	const didMount = useRef(false);

	useEffect(() => {
		if (didMount.current) {
			return func();
		}
		didMount.current = true;
	}, deps);
};

export default useDidMountEffect;

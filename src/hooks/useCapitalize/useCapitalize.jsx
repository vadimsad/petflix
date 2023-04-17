import React from 'react';

const useCapitalize = (string) => {
	if (typeof string !== 'string') return;

	return string.charAt(0).toUpperCase() + string.slice(1);
};

export default useCapitalize;

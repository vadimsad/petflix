import React from 'react';
import { DataObject } from '../../redux/types';
import Fact from '../SingleFilm/Facts/Fact/Fact';

type FactsProps = {
	facts: DataObject[];
};

const Facts: React.FC<FactsProps> = ({ facts }) => {
	if (facts.length === 0) {
		return null;
	}

	return (
		<>
			<h2 className='font-serif lg:text-2xl text-xl lg:mb-3 mb-1'>Факты из жизни</h2>
			<div className='lg:mb-3 mb-1 lg:text-base text-sm'>
				<ul className='flex flex-col gap-3'>
					{(facts as []).map((fact, index) => {
						if (index <= 3) {
							return (
								<li key={index}>
									<Fact>{fact}</Fact>
								</li>
							);
						}
					})}
				</ul>
			</div>
		</>
	);
};

export default Facts;

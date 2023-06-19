import React, { Key } from 'react';
import { DataObject } from '../../redux/types';
import { Link } from 'react-router-dom';

type MainInfoProps = {
	name: string;
	profession: string;
	age?: number;
	growth?: number;
	birthplace?: string;
	spouses: DataObject[];
};

const MainInfo: React.FC<MainInfoProps> = ({
	name,
	profession,
	age,
	growth,
	birthplace,
	spouses,
}) => {
	return (
		<>
			<div className='mb-3'>
				<h1 className='text-3xl font-serif'>{name}</h1>
				<span className='opacity-70'>{profession}</span>
			</div>
			<ul className='mb-5'>
				<li>Возраст: {age}</li>
				<li>Рост: {growth}</li>
				<li>Место рождения: {birthplace}</li>
				<li>
					Супруги:{' '}
					{spouses.map((spouse: DataObject, index) => (
						<span key={spouse.personId as Key}>
							<Link to={`/person/${spouse.personId}`} className='underline'>
								{spouse.name}
							</Link>
							{index < spouses.length - 1 && ', '}
						</span>
					))}
				</li>
			</ul>
		</>
	);
};

export default MainInfo;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPersonData, selectPerson } from '../redux/slices/singlePersonSlice';
import { AppThunkDispatch } from '../redux/store';

const SinglePerson = () => {
	const { id } = useParams();
	const { status, content: personData } = useSelector(selectPerson);
	const dispatch: AppThunkDispatch = useDispatch();

	useEffect(() => {
		if (!id) return;
		dispatch(fetchPersonData(Number(id)));
	}, [id]);

	console.log(personData);

	// birthday, birthplace?, growth, nameRu, nameEn, profession, sex, spouse, posterUrl, facts, films

	return (
		<div className='mt-5 p-5 bg-notsolight dark:bg-notsodark rounded-xl'>
			<div className='xl:h-[400px] lg:h-[350px] h-auto flex'>
				<img
					className='w-100 h-auto rounded-xl'
					src={personData.posterUrl as string}
					alt={(personData.nameRu || personData.nameEn) as string}
				/>
				<div className='grow'>
					<h1>{personData.nameRu || personData.nameEn}</h1>
				</div>
			</div>
		</div>
	);
};

export default SinglePerson;

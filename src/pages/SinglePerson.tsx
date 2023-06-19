import React, { Key, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchPersonData, selectPerson } from '../redux/slices/singlePersonSlice';
import { AppThunkDispatch } from '../redux/store';
import { DataObject, FetchStatus } from '../redux/types';
import Fact from '../components/SingleFilm/Facts/Fact/Fact';
import SwiperBlock from '../components/FilmSlider/SwiperBlock/SwiperBlock';
import MainInfo from '../components/SinglePerson/MainInfo';
import Facts from '../components/SinglePerson/Facts';

const SinglePerson = () => {
	const { id } = useParams();
	const { status, content: personData } = useSelector(selectPerson);
	const dispatch: AppThunkDispatch = useDispatch();

	useEffect(() => {
		if (!id) return;
		dispatch(fetchPersonData(Number(id)));
	}, [id]);

	if (status === FetchStatus.loading) {
		return <h2>Загрузка...</h2>;
	}

	const films = (personData.films as []).slice(0, 20);

	// birthday, birthplace?, growth, nameRu, nameEn, profession, sex, spouse, posterUrl, facts, films

	return (
		<>
			<div className='mt-5 p-5 bg-notsolight dark:bg-notsodark rounded-xl'>
				<div className='flex gap-5'>
					<div className='flex-[0_0_20%]'>
						<img
							className='w-100 h-auto rounded-xl'
							src={personData.posterUrl as string}
							alt={(personData.nameRu || personData.nameEn) as string}
						/>
					</div>
					<div className='grow'>
						<MainInfo
							name={(personData.nameRu || personData.nameEn) as string}
							profession={personData.profession as string}
							age={personData.age as number}
							growth={personData.growth as number}
							birthplace={personData.birthplace as string}
							spouses={personData.spouses as DataObject[]}
						/>
						<Facts facts={personData.facts as DataObject[]} />
					</div>
				</div>
			</div>
			<div className='mt-7'>
				<h2 className='font-serif lg:text-2xl text-xl lg:mb-3 mb-1'>Фильмы</h2>
				<SwiperBlock films={films} />
			</div>
		</>
	);
};

export default SinglePerson;

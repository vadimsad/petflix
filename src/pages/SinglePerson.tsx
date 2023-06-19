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
			<section className='mt-5'>
				<div className='relative z-20 grid p-5 grid-rows-1 md:grid-cols-[18%_1fr] xsm:grid-cols-[25%_1fr] grid-cols-[35%_1fr] lg:gap-5 gap-3 bg-notsolight dark:bg-notsodark rounded-xl'>
					<div>
						<img
							className='w-full h-auto object-cover rounded-xl'
							src={personData.posterUrl as string}
							alt={(personData.nameRu || personData.nameEn) as string}
						/>
					</div>
					<div>
						<MainInfo
							name={(personData.nameRu || personData.nameEn) as string}
							profession={personData.profession as string}
							age={personData.age as number}
							growth={personData.growth as number}
							birthplace={personData.birthplace as string}
							spouses={personData.spouses as DataObject[]}
						/>
					</div>
					<div className='col-span-2'>
						<Facts facts={personData.facts as DataObject[]} />
					</div>
				</div>
			</section>
			<section className='mt-7 relative z-10 lg:mb-10 mb-8'>
				<h2 className='relative z-10 font-serif lg:text-3xl text-2xl lg:mb-3 mb-1 px-5'>Фильмы</h2>
				<SwiperBlock films={films} />
				<div className='absolute z-0 top-0 right-0 shadow-none dark:shadow-[0_0_500px_200px_rgba(18,38,59,1)] w-[100px] rounded-full'></div>
				<div className='absolute z-0 top-0 right-0 shadow-none dark:shadow-[0_0_500px_20px_rgba(220,234,240,1)] w-0 rounded-full'></div>
			</section>
		</>
	);
};

export default SinglePerson;

'use client'
import { FilterMovieQuery, IMovie, IMovieResponse, MovieAPI } from '@/utils/api/movie.api'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Pagination from '../Common/pagination'
import { AiFillEdit } from 'react-icons/ai'

const MovieList = () => {
    const [state, setState] = useState<IMovieResponse>({
        count: 0,
        movies: [],
    })
    const [isLoading, setIsLoading] = useState(true); // Loading state

    const fetchMovies = async (query?: FilterMovieQuery) => {
        try {
            const res = await MovieAPI.getAll({ ...query });
            if (res.status) {
                setState(res.result);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false); // Set loading to false once data is fetched
        }
    }

    React.useEffect(() => {
        fetchMovies();
    }, []);

    // Skeleton loading component for movie cards
    const LoadingSkeleton = () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(index => (
                <div key={index} className="p-4 bg-white shadow-md rounded-lg animate-pulse">
                    <div className="h-60 bg-gray-300 rounded w-full mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="p-4">
            {isLoading ? (
                <LoadingSkeleton />
            ) : state?.movies?.length === 0 ? (
                <div className="text-center">
                    <p>Your movie list is empty.</p>
                    <Link href={'/movie/create'}>
                    <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg">
                        Add a new movie
                    </button>
                    </Link>
                </div>
            ) : (
                <div className="">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {state?.movies?.map(movie => (
                            <SingleMovieItem movie={movie} key={movie._id} />
                        ))}
                    </div>
                    <Pagination total={state.count} getRequestData={fetchMovies} />
                </div>
            )}
        </div>
    )
}

const SingleMovieItem: React.FC<{ movie: IMovie }> = ({ movie }) => {
    return (
        <div
            key={movie._id}
            className="flex flex-col gap-2 p-4 w-full shadow-md rounded-lg"
        >
            <div className="relative w-full pt-[150%] mb-2">
                {movie?.poster && <Image
                    src={movie.poster}
                    alt={movie.title}
                    fill
                    className="object-cover rounded-lg"
                />}
            </div>
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold truncate capitalize">{movie.title}</h3>
                <Link href={`/movie/edit/${movie._id}`}>
                    <AiFillEdit />
                </Link>
            </div>
            <p className="text-sm text-gray-300">{movie.publishing_year}</p>
        </div>
    )
}

export default MovieList

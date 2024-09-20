"use client"
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { MovieFormData } from '../../create/page'
import { toast } from 'react-toastify'
import { MovieAPI } from '@/utils/api/movie.api'
import { IoArrowDownCircleOutline } from 'react-icons/io5'
import Link from 'next/link'

const page = () => {
    const params = useParams();
    const router = useRouter();
    const movieId = params.id as string;

    const [movie, setMovie] = useState<MovieFormData | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [uploading, setUploading] = useState<boolean>(false);

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<MovieFormData>();

    // Handle image selection
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            // setValue('poster', e.target.files); // Update poster field in form state
        }
    };

    // Form submission handler
    const onSubmit = async (data: MovieFormData) => {

        console.log('data', data);
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("publishing_year", data.publishing_year.toString());
        formData.append("isActive", "true");

        if (data.poster && data.poster.length > 0) {
            formData.append("poster", data.poster[0]);
        }

        setUploading(true);
        try {
            const res = await MovieAPI.updateById(movieId, formData);
            if (res.status) {
                toast.success("Movie created successfully");
                  router.push("/");
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to create movie");
        } finally {
            setUploading(false);
        }
    };

    // Fetch movie details and set form values
    const getMovieDetails = async () => {
        try {
            const res = await MovieAPI.getOne(movieId);
            if (res.status) {
                const fetchedMovie = res.result;
                setMovie(fetchedMovie);

                // Update form values after fetching movie
                setValue('title', fetchedMovie.title);
                setValue('publishing_year', fetchedMovie.publishing_year);
                setSelectedImage(fetchedMovie.poster); // Assuming poster is a URL, adjust accordingly
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (movieId) {
            getMovieDetails();
        }
    }, [movieId]);

    useEffect(() => {
        if (movie) {
            reset({
                title: movie.title,
                publishing_year: movie.publishing_year,
                poster: undefined,
            });
        }
    }, [movie, reset]);

    return (
        <div className="min-h-screen p-4">
            <div className="container mx-auto">
                <Link href='/' className='underline'>Go to home</Link>
                <h1 className="text-3xl font-bold text-white py-28">Edit</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-wrap gap-20">
                    {/* Image Upload */}
                    <div className="border-2 border-dashed border-gray-400 rounded-lg p-4 text-center relative">
                        {selectedImage ? (
                            // Show selected image if available
                            <img src={selectedImage} alt="Selected" className="h-96 w-96 object-contain rounded-lg" />
                        ) : (
                            // Show default upload UI if no image is selected
                            <div className="flex flex-col items-center justify-center h-96 w-96">
                                <IoArrowDownCircleOutline className="h-10 w-10 text-gray-400 mb-4" />
                                <p className="text-gray-400">Drop an image here</p>
                            </div>
                        )}
                        <input
                            type="file"
                            {...register("poster", { required: false, })}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={handleImageChange} // Handle image file change
                        />
                        {errors.poster && <p className="text-red-500 mt-2">{errors.poster.message}</p>}
                    </div>

                    {/* Movie Details */}
                    <div className="max-w-lg flex flex-col gap-4 w-full">
                        {/* Title Field */}
                        <div className="w-full">
                            <input
                                type="text"
                                {...register("title", { required: "Title is required" })}
                                className="bg-[#224957] w-full rounded-md focus:border-[#224957] outline-[#224957] p-3 text-white placeholder-gray-400"
                                placeholder="Title"
                            />
                            {errors.title && <p className="text-red-500 mt-2">{errors.title.message}</p>}
                        </div>

                        {/* Publishing Year */}
                        <div>
                            <input
                                type="number"
                                {...register("publishing_year", {
                                    required: "Publishing year is required",
                                    valueAsNumber: true,
                                    min: { value: 1000, message: "Year must be 4 digit" },
                                    max: { value: 9999, message: "Year must be 4 digit" },
                                })}
                                className="bg-[#224957] rounded-md focus:border-[#224957] outline-[#224957] p-3 text-white placeholder-gray-400 w-40"
                                placeholder="Publishing year"
                            />
                            {errors.publishing_year && <p className="text-red-500 mt-2">{errors.publishing_year.message}</p>}
                        </div>

                        {/* Buttons */}
                        <div className="flex space-x-4 mt-12">
                            <button
                                type="button"
                                onClick={() => {
                                    reset();
                                    setSelectedImage(null); // Reset image when form is reset
                                }}
                                className="flex-1 border-teal-100 text-white rounded-md hover:bg-teal-800 p-2 border"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="flex-1 bg-emerald-400 text-white rounded-md hover:bg-emerald-500 p-2"
                            >
                                {uploading ? "Submitting" : "Submit"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default page
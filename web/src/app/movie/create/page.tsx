"use client"
import { MovieAPI } from '@/utils/api/movie.api';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import React, { useState } from 'react'
import { Form, useForm } from 'react-hook-form'
import { IoArrowDownCircleOutline } from 'react-icons/io5'
import { toast } from 'react-toastify';

export interface MovieFormData {
    title: string;
    publishing_year: number;
    poster?: FileList;
}

const CreateMovie = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<MovieFormData>();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [uploading, setUploading] = useState<boolean>(false);

    // Handle image selection
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        // setValue('poster', file)

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const onSubmit = async (data: MovieFormData) => {
        // Create a new FormData object
        const formData = new FormData();

        // Append the form data fields
        formData.append("title", data.title);
        formData.append("publishing_year", data.publishing_year.toString());
        formData.append("isActive", "true");

        // Append the image file if it's selected
        if (data.poster && data.poster.length > 0) {
            formData.append("poster", data.poster[0]);
        }
        setUploading(true)
        try {
            const res = await MovieAPI.addNew(formData)
            console.log('res', res)
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

    return (
        <div className="min-h-[88vh] p-4">
            <div className="container mx-auto">
                <Link href='/' className='underline'>Go to home</Link>
                <h1 className="text-3xl md:text-5xl font-bold text-white py-28">Create a new movie</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-wrap gap-20">
                    {/* Image Upload */}
                    <div className="border-2 border-dashed border-gray-400 rounded-lg p-4 text-center relative">
                        {selectedImage ? (
                            // Show selected image if available
                            <img src={selectedImage} alt="Selected" className="h-96 lg:w-96 w-72 object-contain rounded-lg" />
                        ) : (
                            // Show default upload UI if no image is selected
                            <div className="flex flex-col items-center justify-center h-96 lg:w-96 w-72">
                                <IoArrowDownCircleOutline className="h-10 w-10 text-gray-400 mb-4" />
                                <p className="text-gray-400">Drop an image here</p>
                            </div>
                        )}
                        <input
                            type="file"
                            {...register("poster", { required: "Image is required" })}
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
                                className="flex-1 border-white text-white rounded-[10px] hover:bg-green-500 p-4 border font-semibold"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="flex-1 bg-green-500 text-white rounded-md hover:bg-emerald-500 p-4 font-semibold"
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

export default CreateMovie

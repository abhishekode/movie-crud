'use client'
import React from 'react'
import { Metadata } from 'next'
import { commonMetaData } from '@/utils/helper'
import MovieList from '@/components/movie';
import { FaPlus } from 'react-icons/fa6';
import { MdLogout } from 'react-icons/md';
import Link from 'next/link';
import { setCookie,deleteCookie } from "cookies-next";
import { useRouter } from 'next/navigation';


export const generateMetadata = async () => {
  const metaData = commonMetaData({
    title: 'Home',
    description: 'This is description of home page!',
    image: 'https://website.com/images/main.png',
    url: '/',
    keywords: ['blog', 'hello'],
  });
  return {
    ...metaData,
  };
};



const Home = async () => {

  const router = useRouter()

  const handleLogout = () => {
    deleteCookie("user");
    setCookie("user", null);
    router.push("/auth");


  }
  return (
    <div className=''>
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-14">
          <Link href='/movie/create'>
          <div className="text-2xl flex items-center gap-2">
            <p>My movies</p>
            <FaPlus className='border rounded-full p-1 font-bold' />
          </div>
          </Link>
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogout}>
            <p className='font-semibold capitalize'>logout</p>
            <MdLogout className='text-3xl' />
          </div>
        </div>
        <MovieList />
      </div>
      {/* <Blogs /> */}
    </div>
  )
}

export default Home
import React from 'react'
import { Metadata } from 'next'
import { commonMetaData } from '@/utils/helper'

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
  return (
    <div className='bg-gray-50 text-gray-900'>
     <h1>hello home</h1>
      {/* <Blogs /> */}
    </div>
  )
}

export default Home
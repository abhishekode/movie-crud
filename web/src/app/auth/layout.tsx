import { commonMetaData } from '@/utils/helper';
import React from 'react';

export const generateMetadata = async () => {
    const metaData = commonMetaData({
      title: 'auth',
      description: 'Crystal Pathshala is a leading institute for Spoken English, Public Speaking, Personality Development, Professional English, and Corporate Training in Noida, Delhi NCR.',
      image: 'https://crystalpathshala.com/images/rahul-p-dev.png',
      url: '/auth',
      keywords: [],
    });
    return {
      ...metaData,
    };
  };

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default RootLayout;

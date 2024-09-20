import { commonMetaData } from '@/utils/helper';
import React from 'react';

export const generateMetadata = async () => {
    const metaData = commonMetaData({
      title: 'Auth',
      description: 'movie.',
      image: 'https://website.com/images/main.png',
      url: '/auths',
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

import Link from 'next/link';
import React from 'react';

interface UnderConstructionProps {
  title: string;
}
const UnderConstruction: React.FC<UnderConstructionProps> = ({ title }) => {
  return (
    <div className="h-screen bg-white text-gray-900 text-center flex justify-center items-center flex-col gap-16">
      <div className="lg:text-7xl text-4xl font-bold -mb-10 p-0">Welcome To</div>
      <div className="lg:text-7xl text-4xl font-bold">{`${title} Page`}</div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-9xl mb-4">🚧</div>
        <h1 className="text-2xl font-semibold mb-2">This Page Under Construction</h1>
        <p className="text-gray-600">
          We&apos;re working hard to bring you an amazing experience. Please check back
          later!
        </p>
        <Link href="/" className='bg-blue-600 text-gray-100 px-10 py-2 mt-10 rounded'>Home</Link>
      </div>
    </div>
  );
};

export default UnderConstruction;

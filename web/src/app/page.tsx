import React from 'react'
import MovieList from '@/components/movie';

const Home = async () => {

  return (
    <div className=''>
      <div className="container mx-auto">
       
        <MovieList />
      </div>
      {/* <Blogs /> */}
    </div>
  )
}

export default Home
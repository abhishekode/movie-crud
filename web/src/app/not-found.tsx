import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
      <div className="flex h-screen py-20 flex-col justify-center items-center bg-white">
        <Image
          src="/assets/error.gif"
          alt="error"
          className="h-full object-cover"
          height={700}
          width={700}
        />

        <div className="flex flex-1 items-center justify-center">
          <div className="mx-auto max-w-xl px-4 py-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We can&apos;t find that page.
            </h1>

            <p className="mt-4 text-gray-500">
              Try searching again, or return home to start from the beginning.
            </p>

            <Link
              href="/"
              className="mt-6 inline-block rounded bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
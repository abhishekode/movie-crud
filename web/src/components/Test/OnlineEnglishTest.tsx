import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OnlineEnglishTest = () => {
    return (
        <div className="container mx-auto">
            <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 items-center">
            <Image src="/assets/otest.png" alt="online-test" width={600} height={600} />
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-left ">
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                            Free online English test
                        </h2>

                        <p className="text-gray-500 mt-4">
                            Want to know what your English language level is? Take our 20 minute test to discover your level and find the course that best suits you.
                        </p>
                        <p className="text-gray-500 mt-4">
                            This test is great to find out your level of General English, Business English or a combination of both.
                        </p>


                        <div className="mt-8">
                            <Link
                                href="/online-test"
                                className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400"
                            >
                                Take our English Test
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OnlineEnglishTest
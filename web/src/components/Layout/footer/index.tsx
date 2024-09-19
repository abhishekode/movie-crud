"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { ourCoursedData } from "@/components/Common/Jsondata";
import SocialLinks from "./SocialLinks";
import { useBasicInfo } from "@/context/basicInfoContext";
import { verifyAndFormatOpeningHours } from "@/utils/helper";

const Footer = () => {
  const { basicInfo } = useBasicInfo()

  const dataOpeningHours = basicInfo?.openingHours as any
  let formattedOpeningHours;
  if (dataOpeningHours) {
    formattedOpeningHours = verifyAndFormatOpeningHours(dataOpeningHours);
  }


  return (
    <footer className="bg-white lg:grid lg:grid-cols-5 relative">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <Image
          src="/assets/library.jpg"
          alt="footer"
          className="absolute inset-0 h-full w-full object-cover"
          fill
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8 text-gray-700">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-3xl font-medium uppercase">{basicInfo?.instituteName || 'Crystal Pathshalas'}</h2>
            <address>
              <a target="_blank"
                href={`http://maps.google.com/?q=${basicInfo?.contact.address[0]}`}
                rel="noopener noreferrer"
                referrerPolicy='no-referrer'
              >
                {basicInfo?.contact.address[0]}
              </a>
            </address>
            <div className="mt-5 ">
              <span className="text-xs uppercase tracking-wide text-gray-500"> Call us </span>
              <div className="flex items-center gap-4">
                {basicInfo?.contact && basicInfo?.contact?.phone?.length > 0 && basicInfo?.contact.phone.map((phone) => (
                  <a href={`tel:+91${phone}`} className="block font-medium text-gray-900 hover:opacity-75" key={phone}>+91 {phone}</a>
                ))}
              </div>
            </div>


            <ul className="mt-8 space-y-1 text-sm text-gray-700">
              <li><span className="font-bold">Monday:</span> {formattedOpeningHours?.monday?.start || 0} -- {formattedOpeningHours?.monday?.end || 0}</li>
              <li><span className="font-bold">Tuesday:</span> {formattedOpeningHours?.tuesday?.start || 0} -- {formattedOpeningHours?.tuesday?.end || 0}</li>
              <li><span className="font-bold">Wednesday:</span> {formattedOpeningHours?.wednesday?.start || 0} -- {formattedOpeningHours?.wednesday?.end || 0}</li>
              <li><span className="font-bold">Thursday:</span> {formattedOpeningHours?.thursday?.start || 0} -- {formattedOpeningHours?.thursday?.end || 0}</li>
              <li><span className="font-bold">Friday:</span> {formattedOpeningHours?.friday?.start || 0} -- {formattedOpeningHours?.friday?.end || 0}</li>
              <li><span className="font-bold">Saturday:</span> {formattedOpeningHours?.saturday?.start || 0}-- {formattedOpeningHours?.saturday?.end || 0}</li>
              <li><span className="font-bold">Sunday:</span> {formattedOpeningHours?.sunday?.start || 0} -- {formattedOpeningHours?.sunday?.end || 0}</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-medium text-gray-900">Our courses</p>

              <ul className="mt-6 space-y-4 text-sm">
                {ourCoursedData.map((course) => (
                  <li key={course.id}>
                    <Link href={course.link} className="text-gray-700 transition hover:opacity-75"> {course.title} </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="/" className="text-gray-700 transition hover:opacity-75"> About </a>
                </li>

                <li>
                  <a href="/" className="text-gray-700 transition hover:opacity-75"> Meet the Team </a>
                </li>

                <li>
                  <a href="/" className="text-gray-700 transition hover:opacity-75"> Accounts Review </a>
                </li>
                <li>
                  {/* <ToggleTheme /> */}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <a href="/" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
              </li>

              <li>
                <a href="/" className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
              </li>

              <li>
                <a href="/" className="text-gray-500 transition hover:opacity-75"> Cookies </a>
              </li>
            </ul>

            <p className="mt-8 text-xs text-gray-500 sm:mt-0">
              &copy; {new Date().getFullYear()}. Crystal Pathshala. All rights reserved.
            </p>
          </div>
        </div>
        <div className="fixed right-4 bottom-4 lg:bottom-10 lg:right-10 z-50">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=+917503846834&text=Hello%2C%20Sir!%20I%20hope%20you%20are%20doing%20well.%20I%20have%20a%20question%20regarding%20our%20Spoken%20English%20and%20Professional%20Skills%20training%20programs.%20Could%20you%20please%20provide%20more%20information%20about%20them?"
            rel="noopener noreferrer"
            referrerPolicy='no-referrer'
          >
            <FaWhatsapp className="text-5xl text-[#22CC66]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

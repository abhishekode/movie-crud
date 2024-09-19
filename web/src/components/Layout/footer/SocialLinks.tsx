import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <ul className="flex gap-3">
    <li>
      <a
        href="/"
        rel="noreferrer"
        target="_blank"
        className="text-gray-700 transition hover:opacity-75"
      >
        <span className="sr-only">Facebook</span>

        <FaFacebook className="text-xl text-teal-100" />
      </a>
    </li>

    <li>
      <a
        href="/"
        rel="noreferrer"
        target="_blank"
        className="text-gray-700 transition hover:opacity-75"
      >
        <span className="sr-only">Instagram</span>

        <FaInstagram className="text-xl text-teal-100" />
      </a>
    </li>

    <li>
      <a
        href="/"
        rel="noreferrer"
        target="_blank"
        className="text-gray-700 transition hover:opacity-75"
      >
        <span className="sr-only">Twitter</span>

        <FaXTwitter className="text-xl text-teal-100" />
      </a>
    </li>

    <li>
      <a
        href="/"
        rel="noreferrer"
        target="_blank"
        className="text-gray-700 transition hover:opacity-75"
      >
        <span className="sr-only">GitHub</span>

        <FaYoutube className="text-xl text-teal-100" />
      </a>
    </li>
  </ul>
  )
}

export default SocialLinks
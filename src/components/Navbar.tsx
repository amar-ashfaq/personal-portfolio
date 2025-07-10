import Link from "next/link";

function Navbar() {
  return (
    <nav className="w-full bg-[#ffffff] py-8 px-4">
      <div className="max-w-7xl mx-auto flex justify-end items-center">
        <ul className="flex space-x-6 items-center">
          <li>
            <Link
              href="/"
              className="text-[#343434] hover:text-gray-300 block px-3 py-2 rounded-md font-sans text-lg font-normal"
            >
              Home
            </Link>
          </li>
          <li className="text-gray-500">|</li>
          <li>
            <Link
              href="/about"
              className="text-[#343434] hover:text-gray-300 block px-3 py-2 rounded-md font-sans text-lg font-normal"
            >
              About
            </Link>
          </li>
          <li className="text-gray-500">|</li>
          <li>
            <Link
              href="/projects"
              className="text-[#343434] hover:text-gray-300 block px-3 py-2 rounded-md font-sans text-lg font-normal"
            >
              Projects
            </Link>
          </li>
          <li className="text-gray-500">|</li>
          <li>
            <Link
              href="/contact"
              className="text-[#343434] hover:text-gray-300 block px-3 py-2 rounded-md font-sans text-lg font-normal"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

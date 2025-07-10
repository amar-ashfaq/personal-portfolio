function Footer() {
  return (
    <footer className="w-full bg-[#ffffff] py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
        <div className="text-left">
          <p className="font-medium font-sans text-gray-800 mb-2 text-xl">
            Quick Links
          </p>
          <ul>
            <li className="mb-2">
              <a
                href="#about"
                className="text-gray-800 text-lg font-sans hover:underline"
              >
                About
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#projects"
                className="text-gray-800 text-lg font-sans hover:underline"
              >
                Projects
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#contact"
                className="text-gray-800 text-lg font-sans hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Empty middle column */}
        <div></div>

        <div className="md:text-right">
          <p className="font-medium font-sans text-gray-800 mb-2 text-xl">
            Social Media
          </p>
          <ul>
            <li className="mb-2">
              <a
                href="https://linkedin.com/in/yourprofile"
                className="text-gray-800 text-lg font-sans hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://github.com/yourprofile"
                className="text-gray-800 text-lg font-sans hover:underline"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center mt-8">
        <p className="text-gray-800 font-sans text-lg">
          &copy; {new Date().getFullYear()} Amar AA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div
          style={{
            background:
              "linear-gradient(to bottom, #D9E3E8 0%, rgba(144, 255, 198, 0.2) 50%)",
          }}
          className="w-full bg-[#c1d9ea] py-40 px-8 text-center items-center justify-center"
        >
          <h1 className="text-[#343434] text-8xl font-medium font-sans mb-12">
            <span className="text-[#5D7A86]">A</span>
            <span className="text-[#343434]">m</span>
            <span className="text-[#5D7A86]">a</span>
            <span className="text-[#343434]">r</span>
          </h1>
          <p className="text-[#343434] text-4xl font-sans mb-6">
            Full Stack Developer
          </p>
          <p className="text-[#343434] text-4xl font-sans mb-20">
            based in the United Kingdom
          </p>
          <p className="text-[#343434] text-3xl font-sans">
            Passionate about building scalable web applications and
            <br />
            learning new technologies.
          </p>

          <div className="mt-28">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 max-w-5xl mx-auto">
              <h2 className="text-[#343434] text-3xl font-sans">
                5+ years development experience
              </h2>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 max-w-5xl mx-auto">
              <h2 className="text-[#343434] text-3xl font-sans">
                Specialising in .NET, React, Node.js & Next.js
              </h2>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 max-w-5xl mx-auto">
              <h2 className="text-[#343434] text-3xl font-sans">
                Currently learning: TypeScript, MERN Stack
              </h2>
            </div>
          </div>

          <div className="mt-28">
            <button
              className="bg-[#ffffff] text-[#343434] px-18 py-8 rounded-lg shadow-lg text-3xl font-medium font-sans hover:bg-gray-800 hover:text-white transition-colors mr-4 cursor-pointer hover:opacity-80"
              onClick={() => {
                router.push("/projects");
              }}
            >
              View My Work
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

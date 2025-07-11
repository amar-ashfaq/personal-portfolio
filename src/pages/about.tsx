import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function About() {
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
            About Me
          </h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default About;

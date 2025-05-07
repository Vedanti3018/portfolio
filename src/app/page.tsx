import Image from "next/image";
import { Roboto_Mono, Pacifico } from "next/font/google";
import { FaPython, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiFastapi, SiStreamlit, SiNumpy, SiPandas, SiPytorch } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { MdGraphicEq } from "react-icons/md"; // Or any other placeholder


const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: "400" });
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
          {/* LEFT SIDE TEXT */}
          <div className={`text-left ${robotoMono.className}`}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              HI – I’M VEDANTI
            </h1>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-8">
              I’M AN AI ENGINEER
            </h2>
          </div>

          {/* RIGHT SIDE IMAGE + CAPTION */}
          <div className="flex flex-col items-center -ml-4"> {/* Adjust ml as needed */}
            <Image
              src="/vedanti-avatar.png"
              alt="Vedanti"
              width={220}
              height={220}
              className="rounded-full border border-gray-700"
            />
            <p className={`mt-2 text-lg text-gray-400 ${pacifico.className}`}>
              This is me!
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section className="min-h-screen bg-black text-white px-6 py-12">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* LEFT SIDE IMAGE */}
          <div className="flex justify-center md:w-1/3">
            <Image
              src="/vedanti-avatar.png"
              alt="Vedanti"
              width={220}
              height={220}
              className="rounded-full border border-gray-700"
            />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="md:w-2/3">
          <h2 className={`text-4xl font-extrabold tracking-tight mb-4 ${robotoMono.className}`}>
            A Little About Me
           </h2>
            <p className="text-lg leading-relaxed text-gray-400">
              Hello! I'm Vedanti, an AI Engineer passionate about building innovative solutions
              to solve complex problems using Artificial Intelligence. I specialize in deep learning,
              natural language processing, and machine learning techniques. My journey started with a
              fascination for data and algorithms, and over the years, I’ve honed my skills to create
              tools that help improve productivity and enhance the user experience. I believe in
              decentralizing knowledge and making AI accessible to everyone.
            </p>
            <p className="mt-4 text-lg text-gray-400">
              When I’m not working on AI projects, you’ll find me exploring new technologies,
              reading about the latest in AI research, or experimenting with creative coding projects.
              I’m constantly learning, and I enjoy collaborating with others to bring ideas to life.
            </p>
          </div>

        </div>
      </section>

      {/* TOOLS BANNER SECTION */}
<section className="bg-gray-100 text-black py-12 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold mb-6">Tools I Work With</h2>

    <div className="flex space-x-10 overflow-x-auto py-4 scrollbar-hide">
      {/* Tool 1 */}
      <div className="flex flex-col items-center min-w-[100px]">
        <FaPython className="text-5xl text-blue-500" />
        <p className="mt-2 text-sm font-medium">Python</p>
      </div>
      {/* Tool 2 */}
      <div className="flex flex-col items-center min-w-[125px]">
        <FaDocker className="text-5xl text-blue-400" />
        <p className="mt-2 text-sm font-medium">Docker</p>
      </div>
      {/* Tool 3 */}
      <div className="flex flex-col items-center min-w-[125px]">
        <FaGitAlt className="text-5xl text-red-600" />
        <p className="mt-2 text-sm font-medium">Git</p>
      </div>
      {/* Tool 4 */}
      <div className="flex flex-col items-center min-w-[125px]">
        <SiFastapi className="text-5xl text-green-600" />
        <p className="mt-2 text-sm font-medium">FastAPI</p>
      </div>
      {/* Tool 5 */}
      <div className="flex flex-col items-center min-w-[125px]">
        <SiStreamlit className="text-5xl text-pink-600" />
        <p className="mt-2 text-sm font-medium">Streamlit</p>
      </div>
      {/* Tool 6 */}
      <div className="flex flex-col items-center min-w-[125px]">
      <MdGraphicEq className="text-5xl text-yellow-500" />
        <p className="mt-2 text-sm font-medium">Gradio</p>
      </div>
    </div>
  </div>
</section>

{/* SHowcase  SECTION */}
<section className="bg-black text-white py-16 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold mb-12">Things I've Built</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((_, i) => (
        <div
          key={i}
          className="bg-white text-black p-4 rounded-xl shadow-xl transform hover:-rotate-2 transition-all"
        >
          <img
            src={`/projects/project${i + 1}.jpg`} // Replace with actual paths like /projects/gradio-dashboard.jpg
            alt={`Project ${i + 1}`}
            className="rounded-md mb-4 w-full h-48 object-cover"
          />
          <h3 className="font-bold text-lg mb-1">Project Title {i + 1}</h3>
          <p className="text-sm text-gray-600">Short description or stack tag</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/*Contact Sction*/}
<section className="bg-black text-white py-16 px-6">
  <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
  <form className="space-y-4">
    <input
      type="text"
      placeholder="Your Name"
      className="w-full p-3 bg-gray-800 text-white rounded-lg"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="w-full p-3 bg-gray-800 text-white rounded-lg"
    />
    <textarea
      placeholder="Your Message"
      rows="5"
      className="w-full p-3 bg-gray-800 text-white rounded-lg"
    ></textarea>
    <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-lg">
      Send Message
    </button>
  </form>
</section>


</>
  );
}

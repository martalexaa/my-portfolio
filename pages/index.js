import Head from 'next/head';
import Image from 'next/image';
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaMedium,
} from "react-icons/fa";
import marta from "../public/marta-foto.jpg";
import web1 from "../public/web-1.jpg";
import web2 from "../public/web-2.jpg";
import web3 from "../public/web-3.png";
import web4 from "../public/chatapp.jpg";
import web5 from "../public/movieapi.png";
import web6 from "../public/portfolio.png";
import web7 from "../public/movies angular.png";
import clipart from "../public/clipart401921.png";
import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from "./navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Marta Karaba Web Developer Portfolio</title>
        <meta name="description" content="Portfolio website of Marta Karaba web developer focused on frontend." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="web,developer,webdevelopment,portfolio,webdeveloper,frontend,javascript,react,next,tailwind" />
        <meta property="og:title" content="Marta Karaba Web Developer Portfolio" />
        <meta property="og:description" content="Portfolio website of Marta Karaba web developer focused on frontend." />
        <meta charset="UTF-8"></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar />
      <main className="max-w-screen">
        <section className="pt-40 md:pt-52 lg:pl-56 bg-gradient-to-r from-cyan-600 to-blue-600 text-white min-h-screen " id="home">
          <div>
            <p className="text-xl">My name is</p>
            <p className="text-6xl md:text-7xl md:text-12xl tracking-widest myname">Marta Karaba.</p>
            <p className="text-xl">I'm a web developer based in Berlin.</p>
            <div className="mt-10">
              <Link to="contact" smooth={true} duration={500}
                className="text-white text-center cursor-pointer border-2 border-solid border-white hover:text-gray-300 hover:border-gray-300 px-1 text-xl mr-10">HIRE ME</Link>
              <Link to="work" smooth={true} duration={500}

                className="text-white text-center cursor-pointer border-2 border-solid border-white hover:text-gray-300 hover:border-gray-300 px-1 text-xl mr-10">SEE MY WORKS</Link>
            </div>
            <div className="text-4xl flex gap-10 pt-10 text-white">
              <a href="https://github.com/martalexaa"
                target="blank"
                className="hover:animate-pulse"><FaGithubSquare /></a>
              <a href="https://www.linkedin.com/in/marta-karaba-a3610b240/"
                target="blank"
                className="hover:animate-pulse"><FaLinkedin /></a>
              <a href="https://twitter.com/MartaKaraba"
                target="blank"
                className="hover:animate-pulse"><FaTwitterSquare /></a>
              <a href="https://medium.com/@martaalexandramcsaikaraba"
                target="blank"
                className="hover:animate-pulse"><FaMedium /></a>
            </div>
          </div>
          <div className="">
            <Image src={clipart} alt="clipart" className="absolute right-2 -z-1 float-right p-5 hidden lg:block" />
          </div>
        </section>

        <section id="about" className="pt-40 min-h-screen">
          <div className="lg:flex gap-2 md:px-20 lg:px-52 ">
            <div className="">
              <Image src={marta}
                alt="a photo of me"
                className="flex-1 w-60 h-60 mx-auto rounded-full relative overflow-hidden md:w-64 md:h-64 lg:w-80 lg:h-80" />
            </div>
            <div className="text-center flex-1 bg-white mt-10 mx-2 text-lg">
              <p className="text-justify text-gray-600 ">
                Becoming a web developer has been on my bucket list for a long time.
                Finally, about eight months ago, I was able to devote all my time to studying web development with Careerfoundry's full-stack program.
              </p>
              <p className="text-justify text-gray-600 py-2">
                Learning something new each day was so much fun, and it is ever since!
                This field is so dynamic, there's always something new to discover.
                That's what I like most about this! Another thing I love is the satisfaction I get when I manage to fix an error on my own after long hours of struggling and searching.
                There's no better feeling than this. That's why I like to work independently. But the advice of an encouraging mentor, and a great team - like our amazing study group - is also very much needed.
              </p>
              <p className="py-2 text-justify text-gray-600 ">
                I finished the course, but I'm still learning every day.
                Coding, reading tech articles, and watching tutorial videos have become a part of my daily life. I'm so thrilled to deal with web development, which is why I want to start working on real-life projects within a team as soon as possible!
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-center flex flex-row flex-wrap justify-start mt-10 md:mt-20 lg:w-11/12">
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">html</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">css</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">javascript</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">typescript</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">jquery</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">react</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">next.js</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">react native</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">tailwind</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">bootstrap</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">sass</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">aws</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">serverless</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">node</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">NPM</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">rest api</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">MERN</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">express</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">mongodb</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">sql</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">firestore</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">git</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">postman</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">jest</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">cucumber</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">pwa</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">spa</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-black text-white uppercase text-xl">angular</div>
            </div>
          </div>
        </section>

        <section id="work" className="text-center py-32 bg-black min-h-screen">
          <div className="">
          </div>
          <div className="flex flex-col gap-5 py-2 lg:flex-row lg:flex-wrap text-gray-600 lg:px-20 pb-10 ">
            <div className="basis-1/3 flex-1 p-4 bg-black relative">
              <div className="relative">
                <Image src={web2}
                  className="bg-cover overflow-hidden"
                  width={"100%"}
                  height={"100%"}
                  alt="a screenshot of my project" />
                <div className="absolute bottom-0 left-0 right-0 top-0 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  <p className="py-5 text-justify text-2xl md:text-4xl">MERN Movie App</p>
                  <div className="flex justify-between gap-4 absolute bottom-3">
                    <a href="https://martalexaa-movie-app.netlify.app/signup" target="blank"
                      className="text-white text-center cursor-pointer border-2 border-solid border-white px-1 text-xl">DEMO</a>
                    <a href="https://github.com/martalexaa/myFlix-client"
                      target="blank"
                      className="text-white text-center cursor-pointer border-2 border-solid border-white px-1 text-xl ">CODE</a>

                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1 p-4 bg-black relative">
              <div className="relative">
                <Image src={web7}
                  className="bg-cover overflow-hidden"
                  width={"100%"}
                  height={"100%"}
                  alt="a screenshot of my project" />
                <div className="absolute bottom-0 left-0 right-0 top-0 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  <p className="py-5 text-justify text-2xl md:text-4xl">Angular Movie App</p>
                  <div className="flex justify-between gap-4 absolute bottom-3">
                    <a href="https://martalexaa.github.io/myFlix-Angular-client/welcome" target="blank"
                      className="text-white text-center cursor-pointer border-2 border-solid border-white px-1 text-xl">DEMO</a>
                    <a href="https://github.com/martalexaa/myFlix-Angular-client"
                      target="blank"
                      className="text-white text-center cursor-pointer border-2 border-solid border-white px-1 text-xl ">CODE</a>

                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1 p-4 bg-black relative">
              <div className="relative">
                <Image src={web1}
                  className="bg-cover overflow-hidden"
                  width={"100%"}
                  height={"100%"}
                  alt="a screenshot of my project" />
                <div className="absolute bottom-0 left-0 right-0 top-0 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  <p className="py-5 text-justify text-2xl md:text-4xl">Meet App | PWA | Serverless </p>
                  <div className="flex justify-between gap-4 absolute bottom-3">
                    <a href="https://martalexaa.github.io/meet/" target="blank"
                      className="text-white text-center cursor-pointer border-2 border-solid border-white px-1 text-xl">DEMO</a>
                    <a href="https://github.com/martalexaa/meet"
                      target="blank"
                      className="text-white text-center cursor-pointer border-2 border-solid border-white px-1 text-xl ">CODE</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1 p-4 bg-black relative">
              <div className="relative">
                <Image src={web3}
                  className="bg-cover overflow-hidden"
                  width={"100%"}
                  height={"100%"}
                  alt="a screenshot of my project" />
                <div className="absolute bottom-0 left-0 right-0 top-0 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  <p className="py-5 text-justify text-2xl md:text-4xl">Pokedex App | HTML | CSS | JS | Bootstrap</p>
                  <div className="flex justify-between gap-4 absolute bottom-3">
                    <a href="https://martalexaa.github.io/pokedex-app/" target="blank"
                      className="text-white text-center cursor-pointer border-2 border-solid border-white px-1 text-xl">DEMO</a>
                    <a href="https://github.com/martalexaa/pokedex-app"
                      target="blank"
                      className="text-white text-center cursor-pointer border-2 border-solid border-white px-1 text-xl ">CODE</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1 p-4 bg-black relative">
              <div className="relative">
                <Image src={web4}
                  className="bg-cover overflow-hidden"
                  width={"100%"}
                  height={"100%"}
                  alt="a screenshot of my project" />
                <div className="absolute bottom-0 left-0 right-0 top-0 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  <p className="py-5 text-justify text-2xl md:text-4xl">Chat App | React Native</p>
                  <div className="flex justify-between gap-4 absolute bottom-3">
                    <a href="https://github.com/martalexaa/chat-app" target="blank"
                      className="text-white text-center cursor-pointer border-2 border-solid border-white px-1 text-xl">CODE</a>

                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1 p-4 bg-black relative">
              <div className="relative">
                <Image src={web5}
                  className="bg-cover overflow-hidden"
                  width={"100%"}
                  height={"100%"}
                  alt="a screenshot of my project" />
                <div className="absolute bottom-0 left-0 right-0 top-0 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  <p className="py-5 text-justify text-2xl md:text-4xl">Movie API | Node.js | Express | MongoDB | RESTful</p>
                  <div className="flex justify-between gap-4 absolute bottom-3">
                    <a href="https://martalexa-myflix.onrender.com/" target="blank"
                      className="text-white text-center cursor-pointer border-2 border-solid border-white px-1 text-xl">DEMO</a>
                    <a href="https://github.com/martalexaa/movie_api"
                      target="blank"
                      className="text-white text-center cursor-pointer border-2 border-solid border-white px-1 text-xl ">CODE</a>
                    <a href="/myflix_case_study"
                      target="blank"
                      className="text-white text-center cursor-pointer border-2 border-solid border-white px-1 text-xl">CASE STUDY</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="pt-20 min-h-screen text-white bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="p-30 text-center py-10">
            <h3 className="text-3xl md:text-4xl pt-10 mt-10 pb-5 px-2">Are you interested in working with me? Let's get in touch.</h3>
            <ul className="pt-20 mt-10 pb-10 text-lg md:text-xl ">
              <li className="pb-4">martalexa@gmail.com</li>
              <li className="pb-4">Skype: live:martalexa_2</li>
              <li className="pb-4">+49 1773271140</li>
            </ul>
          </div>
          <div className="text-4xl flex justify-center gap-10 pt-10 mb-10">
            <a href="https://github.com/martalexaa"
              target="blank"
              className="hover:animate-pulse"><FaGithubSquare /></a>
            <a href="https://www.linkedin.com/in/marta-karaba-a3610b240/"
              target="blank"
              className="hover:animate-pulse"><FaLinkedin /></a>
            <a href="https://twitter.com/MartaKaraba"
              target="blank"
              className="hover:animate-pulse"><FaTwitterSquare /></a>
            <a href="https://medium.com/@martaalexandramcsaikaraba"
              target="blank"
              className="hover:animate-pulse"><FaMedium /></a>
          </div>
        </section>

        <section>
          <div className="text-center text-white bg-black">
            <p className="text-xs">Created with Next.js and Tailwind CSS by Marta Karaba.</p>
            <a href="/impressum" className="underline cursor-pointer">Impressum</a>
          </div>
        </section>
      </main >
    </>
  )
}

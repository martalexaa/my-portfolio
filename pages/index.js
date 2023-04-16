import Head from 'next/head';
import Image from 'next/image';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { MdDeveloperMode, MdWork, MdMenuBook } from 'react-icons/md';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaConnectdevelop } from 'react-icons/fa';
import marta from "../public/marta-foto.jpg";
import web1 from "../public/web-1.jpg";
import web2 from "../public/web-2.jpg";
import web3 from "../public/web-3.png";
import Link from 'next/link'

import Navbar from "./navbar";
import Impressum from "./impressum"

export default function Home() {
  return (
    <>
      <Head>
        <title>Marta Karaba Web Developer Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="bg-white px-2 md:px-20 lg:px-40">
        <section className="min-h-screen text-center p-5 md:p-4 pt:p-10" id="home">
          <div className="text-center p-10">
            <h2 className="text-4xl py-5 md:py-7 lg:py-10 md:text-5xl text-red-500 font-bold">Hello World!</h2>
            <h3 className="text-xl md:text-2xl">I'm a web developer. I love to create beautiful and functional apps and websites!</h3>
          </div>
          <div >
            <Image src={marta} alt="a photo of me" className="w-52 h-52 mx-auto rounded-full relative overflow-hidden md:w-60 md:h-60 lg:w-80 lg:h-80" />
          </div>
          <div className="text-4xl flex justify-center gap-16 pt-7 text-gray-600">
            <a href="https://github.com/martalexaa" target="blank"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/marta-karaba-a3610b240/" target="blank"><AiFillLinkedin /></a>
            <a href="https://twitter.com/MartaKaraba" target="blank"><AiFillTwitterCircle /></a>
          </div>
        </section>

        <section id="about">
          <div className="lg:px-40 text-center pt-6">
            <h3 className="text-4xl md:text-5xl pt-20 pb-10 text-center text-red-500 font-bold">About me</h3>
            <h3 className="text-3xl lg:text-4xl px-5 py-10 text-sky-800 font-medium">My name is Marta. Nice to meet you.</h3>
            <p className="text-md py-2 leading-8 pb-10 lg:text-xl">
              I am currently seeking a hybrid full-time position in Berlin or remote work from anywhere.</p>
            <p className="text-md py-2 leading-8 pb-10 lg:text-xl">
              I am a certified front-end developer with a background in customer service and freelance translation, proficient in HTML, CSS, JavaScript, and TypeScript.
              My experience includes building beautiful and functional apps using the MERN stack.
              I am eager to work further to improve my skills and make a positive impact in the world as part of a collaborative team.
              Curious to learn more about me? <a href="#" className="text-red-500 cursor-pointer underline">Download my resume</a> or keep scrolling.

            </p>
          </div>
        </section>

        <section id="dev-skills">
          <h3 className="text-3xl md:text-4xl py-20 pt-10 text-center text-sky-800 font-bold">My Toolbox</h3>
          <div className="flex justify-center p-30">
            <div className="text-center flex flex-row flex-wrap justify-start mb-8 lg:w-2/5">
              <div className="m-1 p-2 flex-grow bg-gray-700 text-white uppercase text-xl">html</div>
              <div className="m-1 p-2 flex-grow bg-gray-700 text-white uppercase text-xl">css</div>
              <div className="m-1 p-2 flex-grow bg-gray-700 text-white uppercase text-xl">javascript</div>
              <div className="m-1 p-2 flex-grow bg-gray-700 text-white uppercase text-xl">typescript</div>
              <div className="m-1 p-2 flex-grow bg-gray-700 text-white uppercase text-xl">jquery</div>
              <div className="m-1 p-2 flex-grow bg-gray-700 text-white uppercase text-xl">react</div>
              <div className="m-1 p-2 flex-grow bg-gray-700 text-white uppercase text-xl">next.js</div>
              <div className="m-1 p-2 flex-grow bg-gray-700 text-white uppercase text-xl">react native</div>
              <div className="m-1 p-2 flex-grow bg-gray-700 text-white uppercase text-xl">tailwind</div>
              <div className="m-1 p-2 flex-grow bg-gray-700 text-white uppercase text-xl">bootstrap</div>
              <div className="m-1 p-2 flex-grow bg-gray-700 text-white uppercase text-xl">sass</div>
              <div className="m-1 p-2 flex-grow bg-gray-700 text-white uppercase text-xl">aws</div>
              <div className="m-1 p-2 flex-grow bg-gray-700 text-white uppercase text-xl">serverless</div>
              <div className="m-1 p-2 flex-grow bg-gray-700 text-white uppercase text-xl">node</div>
              <div className="m-1 p-2 flex-grow bg-gray-700 text-white uppercase text-xl">MERN</div>
              <div className="m-1 p-2 flex-grow bg-gray-700 text-white uppercase text-xl">express</div>
              <div className="m-1 p-2 flex-grow bg-gray-700 text-white uppercase text-xl">mongodb</div>
              <div className="m-1 p-2 flex-grow bg-gray-700 text-white uppercase text-xl">sql</div>
              <div className="m-1 p-2 flex-grow bg-gray-700 text-white uppercase text-xl">firestore</div>
              <div className="m-1 p-2 flex-grow bg-gray-700 text-white uppercase text-xl">git</div>
              <div className="m-1 p-2 flex-grow bg-gray-700 text-white uppercase text-xl">jest</div>
              <div className="m-1 p-2 flex-grow bg-gray-700 text-white uppercase text-xl">cucumber</div>
              <div className="m-1 p-2 flex-grow bg-gray-700 text-white uppercase text-xl">angular</div>
            </div>
          </div>
        </section>

        <section>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <div className="flex-1 m-auto w-fit text-4xl text-red-500"><MdDeveloperMode /></div>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                I am a certified developer
              </h3>
              <p className="py-2">
                I completed a six-month full-stack web development course, with the guidance of a tutor and mentor,
                and gained a strong foundation in HTML, CSS, and JavaScript, as well as experience with some more advanced tools.
                Becoming a web developer was the journey of my life which I truly enjoyed!
              </p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <div className="flex-1 m-auto w-fit text-4xl text-red-500"><MdWork /></div>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                I have experience
              </h3>
              <p className="py-2">
                I worked as a freelance translator for several years, which taught me skills such as effective communication with clients,
                meeting deadlines, and the ability to work independently.
                I also worked as a customer service agent in e-commerce at a multinational company where I had the chance to be part of a bigger team.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <div className="flex-1 m-auto w-fit text-4xl text-red-500"><MdMenuBook /></div>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                I have a university degree
              </h3>
              <p className="py-2">
                My academic background helps me to independently search and critically evaluate information.
                It also brings me in a good position to think outside the box when facing technical challenges.
                Studying and learning new skills was always a priority in my life.
              </p>
            </div>
          </div>
        </section>
        <section id="work">
          <div>
            <h3 className="text-4xl md:text-5xl pt-20 pb-10 text-center text-red-500 font-bold">My Works</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap text-white">

            <div className="basis-1/3 flex-1 border-solid border-2 p-2 rounded-xl bg-gray-700">
              <Image src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                alt="a screenshot of my project" />
              <p className="pt-2 pb-2">The Meet App is a serverless, progressive web application (PWA) with React using a
                test-driven development (TDD) technique.
                The application uses the Google Calendar API to fetch upcoming events
                and allows users to search for a city and get a list of events hosted in that city.</p>
              <div className="flex justify-between px-20">
                <a href="https://martalexaa.github.io/meet/" target="blank"
                  className="text-center cursor-pointer  border-2 border-solid border-white px-1">DEMO</a>
                <a href="https://github.com/martalexaa/meet" target="blank"
                  className="text-center cursor-pointer border-2 border-solid border-white px-1">CODE</a>
              </div>
            </div>
            <div className="basis-1/3 flex-1 border-solid border-2 p-2 rounded-xl bg-gray-700">
              <Image src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                alt="a screenshot of my project" />
              <p className="pt-2 pb-2">The Movie App allows users to log in and read information about movies,
                and add some of them to their favorites.
                It uses a REST API to handle data and is built using MERN stack technologies, which include MongoDB, Express, React, and Node.js.</p>
              <div className="flex justify-between px-20">
                <a href="https://martalexaa-movie-app.netlify.app/signup" target="blank"
                  className="text-center cursor-pointer border-2 border-solid border-white px-1">DEMO</a>
                <a href="https://github.com/martalexaa/myFlix-client"
                  target="blank"
                  className="text-center cursor-pointer border-2 border-solid border-white px-1">CODE</a>
              </div>
            </div>
            <div className="basis-1/3 flex-1 border-solid border-2 p-2 rounded-xl bg-gray-700">
              <Image src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                alt="a screenshot of my project" />
              <p className="pt-2 pb-2">The Pokedex is a small web application created as part of CareerFoundry's Full-Stack Web Development
                course with HTML, CSS, JavaScript, Bootstrap and jQuery that loads data from an external API and enables the viewing of data points in detail.
              </p>
              <div className="flex justify-between px-20">
                <a href="https://martalexaa.github.io/pokedex-app" target="blank"
                  className="text-center cursor-pointer border-2 border-solid border-white px-1">DEMO</a>
                <a href="https://github.com/martalexaa/pokedex-app" target="blank"
                  className="text-center cursor-pointer border-2 border-solid border-white px-1">CODE</a>
              </div>
            </div>
            <div className="basis-1/3 flex-1 border-solid border-2 p-2 rounded-xl bg-gray-700">
              <Image src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                alt="a screenshot of my project" />
              <p className="pt-2 pb-2 ">A serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique.
                The application uses the Google Calendar API to fetch upcoming events.
                This Meet App will allow users to search for a city and get a list of events hosted in that city.</p>
              <div className="flex justify-between px-20">
                <p className="text-center cursor-pointer  underline">DEMO</p>
                <p className="text-center cursor-pointer  underline">CODE</p>
              </div>
            </div>

          </div>
        </section>

        <section id="contact">
          <div className="">
            <h3 className="text-4xl md:text-5xl pt-20 pb-10 text-center text-red-500 font-bold">Contact</h3>
            <div className="p-30 text-center my-20 h-96">
              <h3 className="text-xl md:text-3xl p-5  text-sky-800 font-medium">Are you interested in working with me? Let's get in touch!</h3>
              <ul className="py-20 text-xl">
                <li className="pb-4">martalexa@gmail.com</li>
                <li className="pb-4">Skype: live:martalexa_2</li>
                <li className="pb-4">+49 1773271140</li>
              </ul>
              <div className="text-4xl py-5 flex justify-center gap-10 md:gap-16 text-gray-600">
                <a href="https://github.com/martalexaa" target="blank"><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/marta-karaba-a3610b240/" target="blank"><AiFillLinkedin /></a>
                <a href="https://twitter.com/MartaKaraba" target="blank"><AiFillTwitterCircle /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="text-center text-gray-600">
            <p className="text-xs">Created with Next.js and Tailwind CSS by Marta Karaba.</p>
            <Link href="/impressum" className="underline cursor-pointer">Impressum</Link>
          </div>
        </section>
      </main>
    </>
  )
}

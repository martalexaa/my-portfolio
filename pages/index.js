import Head from 'next/head';
import Image from 'next/image';
import { MdLaptopChromebook, MdOutlineWorkOutline, MdOutlineMenuBook } from 'react-icons/md';
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaMedium,
} from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io"
import { BsBook } from "react-icons/bs"
import marta from "../public/marta-foto.jpg";
import web1 from "../public/web-1.jpg";
import web2 from "../public/web-2.jpg";
import web3 from "../public/web-3.png";
import web4 from "../public/chatapp.jpg";
import web5 from "../public/movieapi.png";
import web6 from "../public/portfolio.png";
import Link from 'next/link'
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
      </Head>
      <Navbar />
      <main className="mx-2 md:mx-5 lg:mx-30">

        <section className="text-center w-full h-full pt-2" id="home">
          <div className="text-center py-10 my-10 mt-20">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl pt-5 text-center text-gray-600 tracking-wide text-shadow">Hello World</h3>
              <h3 className="text-xl py-10 text-gray-600 md:px-56 px-5">My name is <strong>Marta Karaba</strong>, I'm a web developer
                who loves to create beautiful and functional things, and am ready to put my skills to the test, learn and grow. <br />
                <a href="/files/Marta_Karaba_WebDev_CV.pdf" alt="Click here to download my CV in pdf format" target="_blank"
                  rel="noopener noreferrer" download className="text-sky-700 cursor-pointer underline">Download my resume</a></h3>
            </div>
            <div >
              <Image src={marta}
                alt="a photo of me"
                className="w-60 h-60 mx-auto rounded-full relative overflow-hidden md:w-64 md:h-64 lg:w-80 lg:h-80" />
            </div>

            <div className="text-4xl flex justify-center gap-10 pt-10 text-sky-700">
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
        </section>

        <section id="about" className="">
          <div className="md:px-20 lg:px-72">
            <h3 className="text-4xl md:text-5xl pb-5 pt-20 md:pb-10 text-center text-gray-600 tracking-wide text-shadow">
              About</h3>
            <div className="text-gray-600 hidden">
              <p className="text-lg py-2 leading-8 text-justify">
                I'm a curious and open-minded Polish-Hungarian person living in Berlin. I have diverse interests, ranging from languages, poetry, photography, art, natural sciences, politics, and tech.
                I enjoy learning new things and creating visually appealing and functional products.</p>
              <p className="text-lg py-2 leading-8 text-justify">
                With a major in Slavic languages and literature, I also studied various subjects at the Faculty of Humanities. However,
                I realized that job opportunities directly related to my studies were limited, especially as a Polish-Hungarian translator in Germany.
              </p>
              <p className="text-lg py-2 leading-8 text-justify">
                I discovered my passion for front-end development during high school when I built my first website.
                Since then, I have been considering a professional career in the field.
                Recently, I completed a comprehensive full-stack web development program at Careerfoundry.
              </p>
              <p className="text-lg py-2 leading-8 text-justify">I love front-end development because it allows me to be creative, continuously learn, and solve problems.
                Collaborating with a team to build websites and web applications that have a direct impact on people's lives is rewarding, and the flexibility to work remotely provides a good work-life balance.
                Overall, it is a fulfilling career that I am passionate about.
              </p>
              <p className="text-lg py-2 leading-8 text-justify">
                Now, I'm a certified web development enthusiast seeking a full-time junior position in Berlin or remote work. <a href="/files/Marta_Karaba_WebDev_CV.pdf"
                  alt="Click here to download my CV in pdf format" target="_blank"
                  rel="noopener noreferrer" download className="text-gray-600 cursor-pointer underline">Download my resume</a>
              </p>
            </div>
          </div>
          <div className="lg:flex gap-2 lg:px-20 ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 bg-white">
              <div className="flex-1 m-auto w-fit text-4xl text-gray-600"><MdLaptopChromebook /></div>
              <h3 className="text-lg font-medium pt-8 pb-2  text-gray-600">
                Certified in Full-Stack
              </h3>
              <p className="py-2 text-justify text-gray-600 ">
                I completed a six-month full-stack web development course with the help of a tutor and mentor.
                This experience gave me a solid foundation in essential web technologies like HTML, CSS, and JavaScript, as well as the understanding of advanced tools like the MERN stack.
                I also learned about agile methodology and practiced soft and technical skills during the course like problem solving and debugging.
                Becoming a web developer has been an exciting journey that I truly enjoyed.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 bg-white">
              <div className="flex-1 m-auto w-fit text-4xl text-gray-600"><MdOutlineWorkOutline /></div>
              <h3 className="text-lg font-medium pt-8 pb-2 text-gray-600">
                Transferable Skills
              </h3>
              <p className="py-2 text-justify text-gray-600 bg-white">
                As a freelance translator, I have honed my ability to meet deadlines and work independently, ensuring timely delivery of projects.
                I have also gained valuable experience in customer service within the e-commerce industry, where I was part of a multinational team.
                These roles have equipped me with skills such as communication, being accountable for my work,
                paying attention to detail, exhibiting patience, and adopting a user-centric mindset.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 bg-white">
              <div className="flex-1 m-auto w-fit text-4xl text-gray-600"><BsBook /></div>
              <h3 className="text-lg font-medium pt-8 pb-2 text-gray-600">
                Life-Long Learning
              </h3>
              <p className="py-2 text-justify text-gray-600">
                I've always made learning a priority by studying and acquiring new skills throughout my life.
                My experience with various spoken languages has provided me with a strong foundation in comprehending the structure and syntax of programming languages more effectively.
                Additionally, my academic background has equipped me with the ability to do research on my own and evaluate information critically.
                It also nurtures my creativity in finding innovative solutions to complex technical problems.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 bg-white">
              <div className="flex-1 m-auto w-fit text-4xl text-gray-600"><IoMdHeartEmpty /></div>
              <h3 className="text-lg font-medium pt-8 pb-2 text-gray-600">
                Passion for Front-End
              </h3>
              <p className="py-2 text-justify text-gray-600">
                Although I have gained skills in both front-end and back-end development, I have a personal preference for the front-end aspect of web development.
                This is because I enjoy the visual and creative aspects of designing the user interface (UI) and user experience (UX) of a website.
                To further improve my skills in this area, I have taken the initiative to educate myself on UI principles and other design-related topics.
                I find learning about these topics fascinating and fulfilling.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-center flex flex-row flex-wrap justify-start mb-20 mt-8 lg:w-11/12">
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">html</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">css</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">javascript</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">typescript</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">jquery</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">react</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">next.js</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">react native</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">tailwind</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">bootstrap</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">sass</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">aws</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">serverless</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">node</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">NPM</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">rest api</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">MERN</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">express</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">mongodb</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">sql</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">firestore</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">git</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">postman</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">jest</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">cucumber</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">pwa</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">spa</div>
              <div className="hover:animate-bounce m-1 p-2 flex-grow bg-gray-600 text-white uppercase text-xl">angular</div>
            </div>
          </div>
        </section>

        <section id="work" className="">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl pt-20 pb-5 md:pb-20 text-center text-gray-600 tracking-wide text-shadow">Projects</h3>
          </div>
          <div className="flex flex-col gap-2 py-2 lg:flex-row lg:flex-wrap text-gray-600 lg:px-20 pb-10 ">

            <div className="basis-1/3 flex-1 p-4 rounded-xl shadow-lg bg-white">
              <Image src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                alt="a screenshot of my project" />
              <p className="py-5 text-justify ">The Meet App is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) approach.
                It utilizes the Google Calendar API to fetch upcoming events and allows users to search for events in a specific city.
                With a focus on user experience, the Meet App includes features such as filtering events by city, expanding and collapsing event details,
                specifying the number of events to display, and offline functionality that allows users to access cached data when there is no internet connection.</p>
              <div className="flex justify-between px-20">
                <a href="https://martalexaa.github.io/meet/" target="blank"
                  className="text-gray-600 text-center cursor-pointer border-2 border-solid border-gray-500 px-1 text-xl hover:bg-sky-700 hover:text-white hover:border-white rounded-md">DEMO</a>
                <a href="https://github.com/martalexaa/meet" target="blank"
                  className="text-gray-600 text-center cursor-pointer border-2 border-solid border-gray-500 px-1 text-xl hover:bg-sky-700 hover:text-white hover:border-white rounded-md">CODE</a>
              </div>
            </div>
            <div className="basis-1/3 flex-1 p-4 rounded-xl shadow-lg bg-white">
              <Image src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                alt="a screenshot of my project" />
              <p className="py-5 text-justify ">The Movie App is a MERN stack web application that lets users access and save movie information. It includes multiple views for displaying movies, adding them to favorites, and managing user profile.
                Built with React, Bootstrap, and Redux, the app offers a responsive UI, state routing for navigation, and is hosted on Netlify for easy access.
                Designed to provide a user-friendly experience, the Movie App is a single-page, responsive web app for movie enthusiasts to easily access and manage their favorite movies.</p>
              <div className="flex justify-between gap-4">
                <a href="https://martalexaa-movie-app.netlify.app/signup" target="blank"
                  className="text-gray-600 text-center cursor-pointer border-2 border-solid border-gray-500 px-1 text-xl hover:bg-sky-700 hover:text-white hover:border-white rounded-md">DEMO</a>
                <a href="https://github.com/martalexaa/myFlix-client"
                  target="blank"
                  className="text-gray-600 text-center cursor-pointer border-2 border-solid border-gray-500 px-1 text-xl hover:bg-sky-700 hover:text-white hover:border-white rounded-md">CODE</a>
                <Link href="/myflix_case_study"
                  target="blank"
                  className="text-gray-600 text-center cursor-pointer border-2 border-solid border-gray-500 px-1 text-xl hover:bg-sky-700 hover:text-white hover:border-white rounded-md">CASE STUDY</Link>
              </div>
            </div>
            <div className="basis-1/3 flex-1 p-4 rounded-xl shadow-lg bg-white">
              <Image src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                alt="a screenshot of my project" />
              <p className="py-5 text-justify md:text-lg">The Pokedex-App is a small web application developed using HTML, CSS, JavaScript, Bootstrap, and jQuery.
                It loads data from an external API, allowing users to view a list of items, click on a list item to view more details, search for items, and use additional UI patterns such as modals. The app is formatted according to ESLint rules and is hosted on GitHub Pages,
                compatible with popular web browsers.
              </p>
              <div className="flex justify-between px-20">
                <a href="https://martalexaa.github.io/pokedex-app" target="blank"
                  className="text-gray-600 text-center cursor-pointer border-2 border-solid border-gray-500 px-1 text-xl hover:bg-sky-700 hover:text-white hover:border-white rounded-md">DEMO</a>
                <a href="https://github.com/martalexaa/pokedex-app" target="blank"
                  className="text-gray-600 text-center cursor-pointer border-2 border-solid border-gray-500 px-1 text-xl hover:bg-sky-700 hover:text-white hover:border-white rounded-md">CODE</a>
              </div>
            </div>
            <div className="basis-1/3 flex-1 p-4 rounded-xl shadow-lg bg-white">
              <Image src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                alt="a screenshot of my project" />
              <p className="py-5 text-justify md:text-lg">The Chat App is a mobile chat application developed using React Native that allows users to easily send messages, share images, and share their location with friends and family.
                It also provides offline messaging capability, allowing users to read their messages even when they are offline.
                The app is built with React Native and can be run on Android smartphones or device emulators in Android Studio, with all dependencies outlined in the package.json file.</p>
              <div className="flex justify-between px-20">
                <div className="flex justify-between px-20">
                  <a href="https://github.com/martalexaa/chat-app" target="blank"
                    className="text-gray-600 text-center cursor-pointer border-2 border-solid border-gray-500 px-1 text-xl hover:bg-sky-700 hover:text-white hover:border-white rounded-md hidden">CODE</a>
                </div>
                <a href="https://github.com/martalexaa/chat-app" target="blank"
                  className="text-gray-600 text-center cursor-pointer border-2 border-solid border-gray-500 px-1 text-xl hover:bg-sky-700 hover:text-white hover:border-white rounded-md">CODE</a>
              </div>
            </div>
            <div className="basis-1/3 flex-1 p-4 rounded-xl shadow-lg bg-white">
              <Image src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                alt="a screenshot of my project" />
              <p className="py-5 text-justify md:text-lg">The myFlix Backend API is a secure Node.js and Express application that provides movie information to users. It follows REST architecture, includes user authentication and authorization with JWT, data validation, and data security features.
                The API allows users to view and manage movies, directors, and genres. Tested with Postman, the API is hosted on GitHub and deployed to Render for easy access.
              </p>
              <div className="flex justify-between px-20">
                <div className="flex justify-between px-20">
                  <a href="https://github.com/martalexaa/chat-app" target="blank"
                    className="text-gray-600 text-center cursor-pointer border-2 border-solid border-gray-500 px-1 text-xl hover:bg-sky-700 hover:text-white hover:border-white rounded-md hidden">CODE</a>
                </div>
                <a href="https://github.com/martalexaa/movie_api" target="blank"
                  className="text-gray-600 text-center cursor-pointer border-2 border-solid border-gray-500 px-1 text-xl hover:bg-sky-700 hover:text-white hover:border-white rounded-md">CODE</a>
              </div>
            </div>
            <div className="basis-1/3 flex-1 p-4 rounded-xl shadow-lg bg-white">
              <Image src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                alt="a screenshot of my project" />
              <p className="py-5 text-justify md:text-lg">I built this portfolio website with Next.js and Tailwind, offering benefits such as server-side rendering, static site generation, easy deployment, and seamless client-side routing.
                Tailwind's pre-designed components and responsive layout classes speed up development.
                The combination of Next.js and Tailwind creates a fast, responsive, and visually appealing portfolio website that showcases my skills and projects efficiently.</p>
              <div className="flex justify-between px-20">
                <div className="flex justify-between px-20">
                  <a href="https://github.com/martalexaa/chat-app" target="blank"
                    className="text-gray-600 text-center cursor-pointer border-2 border-solid border-gray-500 px-1 text-xl hover:bg-sky-700 hover:text-white hover:border-white rounded-md hidden">CODE</a>
                </div>
                <a href="https://github.com/martalexaa/my-portfolio" target="blank"
                  className="text-gray-600 text-center cursor-pointer border-2 border-solid border-gray-500 px-1 text-xl hover:bg-sky-700 hover:text-white hover:border-white rounded-md">CODE</a>
              </div>
            </div>

          </div>
        </section>

        <section id="contact">
          <h3 className="text-4xl md:text-5xl pt-20 text-center text-gray-600 tracking-wide text-shadow">Contact</h3>
          <div className="p-30 text-center py-10">
            <h3 className="text-xl md:text-2xl pt-10 mt-10 pb-5  text-gray-600">Are you interested in working with me? Let's get in touch.</h3>
            <ul className="pt-20 mt-10 pb-10 md:text-xl text-gray-600">
              <li className="pb-4">martalexa@gmail.com</li>
              <li className="pb-4">Skype: live:martalexa_2</li>
              <li className="pb-4">+49 1773271140</li>
            </ul>
          </div>
          <div className="text-4xl flex justify-center gap-10 pt-10 text-sky-700 mb-10">
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
          <div className="text-center text-gray-600">
            <p className="text-xs">Created with Next.js and Tailwind CSS by Marta Karaba.</p>
            <Link href="/impressum" className="underline cursor-pointer">Impressum</Link>
          </div>
        </section>
      </main >
    </>
  )
}

import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import mainview from "../public/movie_app_screenshots/mainview.png";
import movies from "../public/movie_app_screenshots/movies.png";
import updatedata from "../public/movie_app_screenshots/updatedata.png"
import movieview from "../public/movie_app_screenshots/movieview.png"
import mern from "../public/movie_app_screenshots/mern-stack-01.png"

const MyflixCase = () => {
    return (
        <>
            <nav className="py-3 lg:mb-12 flex justify-end lg:mr-5 bg-gray-600 opacity-80 fixed top-0 w-full z-10" >
                <ul className="lg:flex text-white drop-shadow-lg opacity-100">
                    <li>
                        <Link href="/"
                            className="text-white drop-shadow-lg opacity-100 text-xl mr-6">BACK
                        </Link>
                    </li>
                </ul>
            </nav>
            <main className="mt-10 lg:mx-56">
                <h1 className="text-4xl pt-20 pb-6 md:py-9 lg:py-10 md:text-5xl text-red-500 tracking-wide text-center">Case Study:
                    <br />
                    Movie App
                </h1>
                <div className="text-gray-600 px-2 lg:px-20">
                    <Image
                        src={movies}
                        width={"100%"}
                        height={"100%"}
                        alt="screenshot of the movie app" />
                    <h2 className="text-xl md:text-2xl pb-2 pt-10 font-semibold">Overview:
                    </h2>
                    <p className="pb-10">The Movie App is a web application built using MERN technologies that allow movie enthusiasts to access information about top-rated movies of all time. Users can sign up, log in, manage their accounts, and choose their favorite movies.
                    </p>
                    <h2 className="text-xl md:text-2xl pb-2 font-semibold">Objective:
                    </h2>
                    <p className="pb-10">The app was created as part of my full-stack web development program at CareerFoundry to demonstrate mastery of the MERN stack.
                        The aim of the project was to build a full-stack application from scratch so that I can practice my newly acquired skills and add the final product to my portfolio.
                    </p>
                    <div className="lg:flex">
                        <div className="flex-1/4 flex-col">
                            <h2 className="text-xl md:text-2xl pb-5 lg:pt-20 font-semibold">Duration:
                            </h2>
                            <p className="pb-10 ">Approx. 2 months. It took a long time, because it was my first MERN application. Next time it'll take half as long.
                            </p>
                            <h2 className="text-xl md:text-2xl pb-5 font-semibold">Primary Stakeholder:
                            </h2>
                            <p className="pb-10">Careerfoundry Full-Stack Web Development Program
                            </p>
                            <h2 className="text-xl md:text-2xl pb-2 font-semibold">Credits:
                            </h2>
                            <ul className="pb-10">
                                <li>Role: Full-Stack Web Developer</li>
                                <li>Mentor: Aheebwa Ramadhan</li>
                                <li>Tutor: Tonny Ntambaazi</li>
                            </ul>
                        </div>

                        <div className="flex-3/4">
                            <Image src={mainview}
                                className="m-2"
                                width={"100%"}
                                height={"100%"}
                                alt="screenshot of the movie app" />
                        </div>
                    </div>

                    <h2 className="text-xl md:text-2xl pb-2 pt-5 lg:pt-20 font-semibold">Tech Stack:</h2>
                    <p className="">The Movie App is built using the following technologies:</p>
                    <ul className="pb-10 list-disc pl-10">
                        <li>Front-end: React library for building user interfaces, Redux for state management, Parcel as the build tool, and Bootstrap as the UI library for styling and responsiveness.
                        </li>
                        <li>Back-end: Node.js and Express for building the server-side API, and MongoDB as the database for storing movie data and user profiles.
                        </li>
                    </ul>

                    <Image
                        src={mern}
                        width={"auto"}
                        height={"50%"}
                        alt="MERN stack logos" />

                    <h2 className="text-xl md:text-2xl pb-2 pt-10 font-semibold">Development Process:
                    </h2>
                    <p className="pb-10">First, I needed to get familiar with the project requirements outlined by Careerfoundry, including the user stories, features, and technical requirements. I started with the server side by setting up the database.</p>
                    <div className="pl-10">
                        <h2 className="text-lg md:text-xl pb-2">Database
                        </h2>
                        <p className="pb-10"> I used MongoDB as the database for storing user and movie data. I choose a NoSQL data model because it provides more flexibility than relational databases.</p>

                        <h2 className="text-lg md:text-xl pb-2">Backend:
                        </h2>
                        <p className="pb-2">For the backend development, I used Node.js and Express to create a RESTful API that interacts with the database. The API can be accessed via HTTP methods like GET or POST. To retrieve and store data in the database, CRUD operations are used. The API provides movie information in JSON format. For testing the endpoints, I used Postman. I implemented a JWT token-based authorization for security reasons. I also added CORS, password hashing, and data validation.
                        </p>
                        <Link href="https://github.com/martalexaa/movie_api"
                            className="text-red-500 cursor-pointer underline">
                            View the server-side code
                        </Link>
                        <h2 className="text-lg md:text-xl pb-2 pt-10">Frontend:
                        </h2>
                        <p className="pb-10">After completing the API, I built the interface to interact with the server side. It is a single-page application (SPA), developed with React library, Redux for state management, and Bootstrap for styling and responsiveness. The views, such as the main view (displays all movies), movie view (shows information about one movie), login, signup, and profile view (includes a form to update user data), were implemented with the ability to interact with the API endpoints for fetching and saving data, user authentication, and profile management.
                        </p>
                        <h2 className="text-lg md:text-xl pb-2">Deployment:
                        </h2>
                        <p className="pb-10">The Movie App was deployed on Netlify, a popular hosting service for web applications, making it accessible online for users.
                        </p>
                    </div>
                    <div div className="lg:flex">
                        <div className="flex-3/4">
                            <Image src={movieview}
                                className="p-2"
                                width={"100%"}
                                height={"100%"}
                                alt="screenshot of the movie app" />
                        </div>
                        <div className="flex-3/4">
                            <Image src={updatedata}
                                className="p-2"
                                width={"100%"}
                                height={"100%"}
                                alt="screenshot of the movie app" />
                        </div>
                    </div>

                    <h2 className="text-xl md:text-2xl pb-8 pt-5 lg:pt-10 font-semibold">Challenges:
                    </h2>
                    <p className="pb-10">The main challenge was gaining a solid understanding of how React works and managing the interaction between components. The component-based architecture requires a different approach compared to traditional HTML-based web development. I struggled with structuring the components correctly, passing data between them, and managing the state effectively.
                        Careerfoundry provided step-by-step instructions for creating the first components, and I felt like I understood React well. However, when I had to build the profile view from scratch, I suddenly felt lost. Fortunately, my tutor and mentor were there to provide support, and as a result, I successfully completed the achievement.
                    </p>

                    <h2 className="text-xl md:text-2xl pb-8 font-semibold">Conclusion
                    </h2>
                    <p className="pb-10">Looking back, I am proud of how I overcame the challenges and was able to deliver my first MERN app. While thinking in React was not easy initially, diving into it and gaining a better understanding made it a fun and rewarding experience.
                    </p>
                </div>

                <div className="flex justify-between gap-4 px-10 lg:px-56 pb-20 pt-10 text-gray-600">
                    <a href="https://martalexaa-movie-app.netlify.app/signup" target="blank"
                        className="text-center cursor-pointer border-2 border-solid border-gray-600 px-1 text-xl hover:bg-sky-700 hover:text-white rounded-md lg:ml-20">DEMO
                    </a>
                    <a href="https://github.com/martalexaa/myFlix-client"
                        target="blank"
                        className="text-center cursor-pointer border-2 border-solid border-gray-600 px-1 text-xl hover:bg-sky-700 hover:text-white rounded-md">CODE
                    </a>
                    <Link href="/"
                        className="text-center cursor-pointer border-2 border-solid border-gray-600 px-1 text-xl hover:bg-sky-700 hover:text-white rounded-md lg:mr-20">BACK
                    </Link>
                </div>

                <section>
                    <div className="text-center text-gray-600">
                        <p className="text-xs">Created with Next.js and Tailwind CSS by Marta Karaba.
                        </p>
                        <Link href="/impressum" className="underline cursor-pointer">Impressum
                        </Link>
                    </div>
                </section>

            </main >
        </>
    )
}

export default MyflixCase;
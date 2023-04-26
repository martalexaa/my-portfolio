import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import mainview from "../public/movie_app_screenshots/mainview.png";
import movies from "../public/movie_app_screenshots/movies.png";
import updatedata from "../public/movie_app_screenshots/updatedata.png";
import movieview from "../public/movie_app_screenshots/movieview.png";
import models from "../public/movie_app_screenshots/models.png";
import backend from "../public/movie_app_screenshots/backend.png";
import card from "../public/movie_app_screenshots/card.png";

const MyflixCase = () => (
    <>
        <nav className="py-3 lg:mb-12 flex justify-end lg:mr-5 bg-gray-600 opacity-80 fixed top-0 w-full z-10">
            <ul className="lg:flex text-white drop-shadow-lg opacity-100">
                <li>
                    <Link href="/"
                        className="text-white drop-shadow-lg opacity-100 text-xl mr-6">BACK
                    </Link>
                </li>
            </ul>
        </nav>
        <main className="mt-10 mx-5 lg:mx-56 leading-8">
            <h1 className="text-4xl pt-20 pb-10 lg:py-20 md:text-5xl text-red-500 tracking-wide text-center">Case Study:
                <br />
                Movie App
            </h1>
            <div>
                <figure className="text-gray-600 px-5 lg:px-20">
                    <Image
                        src={movies}
                        width={"100%"}
                        height={"100%"}
                        alt="screenshot of the movie app"
                        className="drop-shadow-md" />
                    <figcaption className="text-center mt-2">Figure 1. Users can add movies to their favorites by clicking the heart icons</figcaption>
                </figure>
                <h2 className="text-xl md:text-2xl pb-2 pt-20 font-semibold">Overview:
                </h2>
                <p className="pb-10 lg:text-lg">The Movie App is a MERN web application that allows movie enthusiasts to access information about top-rated movies of all time.
                    Users can sign up, log in, update their data, delete their accounts, and choose their favorite movies which will be displayed in the profile view.
                </p>
                <h2 className="text-xl md:text-2xl pb-2 font-semibold">Purpose and Context:
                </h2>
                <p className="pb-10 lg:text-lg">The app was created as part of my full-stack web development program at CareerFoundry.
                </p>
                <h2 className="text-xl md:text-2xl pb-2 font-semibold">Objective:
                </h2>
                <p className="pb-10 lg:text-lg">
                    The aim of the project was to build a full-stack application from scratch so that I can practice my newly acquired skills and add the final product to my portfolio.
                </p>
                <div className="lg:flex">
                    <div className="flex-1/4 flex-col">
                        <h2 className="text-xl md:text-2xl pb-5 font-semibold">Duration:
                        </h2>
                        <p className="pb-10 lg:text-lg">Approx. 2 months. It took long, because this was my first MERN application.
                            I'm sure that next time it'll take half as long.
                        </p>
                        <h2 className="text-xl md:text-2xl pb-5 font-semibold">Primary Stakeholder:
                        </h2>
                        <p className="pb-10 lg:text-lg">Careerfoundry Full-Stack Web Development Program
                        </p>
                        <h2 className="text-xl md:text-2xl pb-2 font-semibold">Credits:
                        </h2>
                        <ul className="pb-10 lg:text-lg">
                            <li>Role: Full-Stack Web Developer</li>
                            <li>Mentor: Aheebwa Ramadhan</li>
                            <li>Tutor: Tonny Ntambaazi</li>
                        </ul>
                    </div>

                    <figure className="flex-3/4">
                        <Image src={mainview}
                            className="m-2 drop-shadow-md"
                            width={"100%"}
                            height={"100%"}
                            alt="screenshot of the movie app" />
                        <figcaption className="text-center mt-2">Figure 2. The main view</figcaption>
                    </figure>
                </div>

                <h2 className="text-xl md:text-2xl pb-2 pt-20 lg:pt-10 font-semibold">Tech Stack:</h2>
                <p className="lg:text-lg">The Movie App is built using the following technologies:</p>
                <ul className="pb-10 list-disc pl-10 lg:text-lg">
                    <li>
                        Database: MongoDB, a noSQL (or non-relational) database.

                    </li>
                    <li>
                        Front-end: React library for building user interfaces, Redux for state management, Parcel as the build tool, and Bootstrap as the UI library for styling and responsiveness.
                    </li>
                    <li className="lg:text-lg">
                        Back-end: Node.js and Express for building the server-side API, and MongoDB as the database for storing movie data and user profiles.
                    </li>
                </ul>
                <h2 className="text-xl md:text-2xl pb-2 pt-5 font-semibold">Development Process:
                </h2>
                <p className="pb-10 lg:text-lg">First, I needed to get familiar with the project requirements outlined by Careerfoundry, including the user stories, features, and technical requirements. I started with the server side by setting up the database.</p>
                <div className="lg:flex">
                    <figure className="flex-1 p-2">
                        <Image
                            src={card}
                            width={"100%"}
                            height={"100%"}
                            alt="screenshot of the movie app"
                            className="drop-shadow-md" />
                        <figcaption className="text-center mt-2">Figure 3. A single movie card</figcaption>
                    </figure>
                    <div className="flex-1">
                        <h2 className="text-lg md:text-xl pb-2 pt-10">Database
                        </h2>
                        <p className="pb-10 lg:text-lg"> I used MongoDB as the database for storing user and movie data. I choose a NoSQL data model because it provides more flexibility than relational databases.</p>

                        <h2 className="text-lg md:text-xl pb-2">Backend
                        </h2>
                        <p className="pb-2 lg:text-lg">For the backend development, I used Node.js and Express to create a RESTful API that interacts with the database. The API can be accessed via HTTP methods like GET or POST. To retrieve and store data in the database, CRUD operations are used. The API provides movie information in JSON format. For testing the endpoints, I used Postman.
                            To provide security, I implemented a JWT token-based authorization, and also added CORS, password hashing, and data validation.
                        </p>
                        <Link href="https://github.com/martalexaa/movie_api"
                            className="text-red-500 cursor-pointer underline">
                            View the server-side code
                        </Link>
                        <h2 className="text-lg md:text-xl pb-2 pt-10">Frontend
                        </h2>
                        <p className="pb-10 lg:text-lg">After completing the API, I built the interface to interact with the server side. It is a single-page application (SPA), developed with React library, Redux for state management, and Bootstrap for styling and responsiveness. The views, such as the main view (displays all movies), movie view (shows information about one movie), login, signup, and profile view (includes a form to update user data), were implemented with the ability to interact with the API endpoints for fetching and saving data, user authentication, and profile management.
                        </p>
                    </div>
                </div>
                <h2 className="text-lg md:text-xl pb-2 lg:pt-10">Deployment:
                </h2>
                <p className="pb-5 lg:pb-20 lg:text-lg">The Movie App was deployed on Netlify, a popular hosting service for web applications, making it accessible online for users.
                </p>

                <div div className="lg:flex">
                    <figure className="flex-2/4">
                        <Image src={models}
                            className="p-2 drop-shadow-md"
                            width={"100%"}
                            height={"100%"}
                            alt="screenshot of the movie app" />
                        <figcaption className="text-center mt-2">Figure 4. Movie and user models</figcaption>
                    </figure>
                    <figure className="flex-2/4">
                        <Image src={backend}
                            className="p-2 drop-shadow-md"
                            width={"100%"}
                            height={"100%"}
                            alt="screenshot of the movie app" />
                        <figcaption className="text-center mt-2">Figure 5. Code snippet from the backend</figcaption>
                    </figure>
                </div>

                <h2 className="text-xl md:text-2xl pb-8 pt-20 font-semibold">Challenges:
                </h2>
                <p className="pb-2 lg:text-lg">The main challenge was gaining a solid understanding of how React works and managing the interaction between components. The component-based architecture requires a different approach compared to traditional HTML-based web development. I struggled with structuring the components correctly, passing data between them, and managing the state effectively.
                    Careerfoundry provided step-by-step instructions for creating the first components, and I felt like I understood React well. However, when I had to build the profile view from scratch, I suddenly felt lost.
                </p>
                <p className="pb-2 lg:text-lg">
                    I had to push myself to step out of my comfort zone and dive deep into understanding React concepts and syntax. With determination and the support of my mentor and, I gradually gained confidence in my abilities. I learned to break down complex problems into smaller, manageable tasks and approached them systematically.
                </p>
                <p className="pb-5 lg:pb-20 lg:text-lg">
                    As a result, I successfully implemented all the views and completed the achievement.
                </p>

                <div div className="lg:flex">
                    <figure className="flex-2/4">
                        <Image src={movieview}
                            className="p-2 drop-shadow-md"
                            width={"100%"}
                            height={"100%"}
                            alt="screenshot of the movie app" />
                        <figcaption className="text-center mt-2">Figure 6. Users can read about a movie in the movie view</figcaption>
                    </figure>
                    <figure className="flex-2/4">
                        <Image src={updatedata}
                            className="p-2 drop-shadow-md"
                            width={"100%"}
                            height={"100%"}
                            alt="screenshot of the movie app" />
                        <figcaption className="text-center mt-2">Figure 7. Update data in the profile view</figcaption>
                    </figure>
                </div>

                <h2 className="text-xl md:text-2xl pb-8 pt-20 font-semibold">Conclusion
                </h2>
                <p className="pb-10 lg:text-lg lg:pb-20">Looking back, I am proud of how I overcame the challenges so that I was able to deliver my first MERN app. While thinking in React was not easy initially, diving into it and gaining a better understanding made it a fun and rewarding experience.
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

        </main>
    </>
)

export default MyflixCase;
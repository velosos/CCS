/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Crypto Compliance System
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                We specialize in ensuring the security, transparency, and regulatory adherence of cryptocurrency transactions and businesses. Explore our comprehensive solutions to navigate the evolving landscape of digital assets with confidence.              </p>

            </div>
          </div>
        </div>
        <div className="lg:hidden mt-9">
          <img
            src="/img/coins2.png"
            alt="..."
          />
        </div>
        <div className="hidden sm:block absolute top-4 b-auto right-0 h-4 w-3 max-h-860-px">
          <img
            src="/img/coins2.png"
            alt="..."
          />
        </div>
      </section>

      <section className="mt-48 md:mt-4 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{transform: "translateZ(0)"}}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto mb-10">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    We harness technology to prevent fraud and mitigate risky business dealings.                 </h4>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-window-restore"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Web Scraping
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Automated process of extracting data from websites. It involves fetching and parsing web content to gather information for various purposes, such as analysis or data collection.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-brain"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Artificial Intelligence (AI)
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-database"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Big Data</h6>
                      <p className="mb-4 text-blueGray-500">
                        To extremely large and complex datasets that traditional data processing tools are inadequate to handle. It involves the collection, storage, and analysis of vast amounts of data to extract valuable insights.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-cloud"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Cloud Computing
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        A technology that allows users to access and use computing resources (e.g., servers, storage, databases, software) over the internet. It offers scalability, flexibility, and cost-efficiency for hosting and managing digital services and applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">What our solution will help predict...</h2>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden ">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">

                  <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                    <div className="text-blueGray-500 text-center inline-flex items-center justify-center w-16 h-16 shadow-lg rounded-full bg-white">
                      <i className="fas fa-users text-2xl"></i>
                    </div>

                    <p className="text-lg text-white mt-4 font-semibold">
                      How many active users
                    </p>
                  </div>


                  <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8 mt-8">
                    <div className="text-blueGray-500 text-center inline-flex items-center justify-center w-16 h-16 shadow-lg rounded-full bg-white">
                      <i className="fas fa-globe text-2xl"></i>
                    </div>
                    <p className="text-lg text-white mt-4 font-semibold">
                      Country of origin
                    </p>
                  </div>


                  <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8 mt-8">
                    <div className="text-blueGray-500 text-center inline-flex items-center justify-center w-16 h-16 shadow-lg rounded-full bg-white">
                      <i className="fas fa-handshake text-xl"></i>
                    </div>
                    <p className="text-lg text-white mt-4 font-semibold">
                      Level of reliability
                    </p>
                  </div>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                    <div className="text-blueGray-500 text-center inline-flex items-center justify-center w-16 h-16 shadow-lg rounded-full bg-white">
                      <i className="fas fa-signal text-2xl"></i>
                    </div>
                    <p className="text-lg text-white mt-4 font-semibold">
                      Real profitability
                    </p>
                  </div>
                  <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8 mt-8">
                    <div className="text-blueGray-500 text-center inline-flex items-center justify-center w-16 h-16 shadow-lg rounded-full bg-white">
                      <i className="fas fa-bullhorn text-xl"></i>
                    </div>
                    <p className="text-lg text-white mt-4 font-semibold">
                      Complaints
                    </p>
                  </div>
                  <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8 mt-8">
                    <div className="text-blueGray-500 text-center inline-flex items-center justify-center w-16 h-16 shadow-lg rounded-full bg-white">
                      <i className="fas fa-money-bill text-xl"></i>
                    </div>
                    <p className="text-lg text-white mt-4 font-semibold">
                      Accredited banks and brokers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Our team</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              Our technology team is dedicated and innovative professionals who are passionate about pushing the boundaries of what's possible.
            </p>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src="https://media.licdn.com/dms/image/C5603AQEEIMentZfnCw/profile-displayphoto-shrink_800_800/0/1559670749448?e=1701907200&v=beta&t=_NDzDQUsW_qGG7jFnhbJTes45pqm_XZ0Sys6gEzzVKo"
                    />
                  </div>
                  <h5 className="text-white text-3xl font-semibold pb-4 text-center">
                    Natali Seabra
                  </h5>

                  <h3 className="text-white text-xl font-semibold pb-4 text-center">
                    CEO and Software specialist
                  </h3>
                  <div className="flex flex-wrap text-center lg:text-center">
                    <div className="w-full lg:w-4/10 px-4">
                      <div className="mt-6 lg:mb-0 mb-6">
                        <a href="https://www.linkedin.com/in/natali-seabra/" target="_blank">
                          <button
                            className="bg-white text-blueGray-800 shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                            type="button"
                          >
                            <i className="fab fa-linkedin text-2xl"></i>
                          </button>
                        </a>
                        <a href="https://github.com/nataliseabra" target="_blank">
                          <button
                            className="bg-white text-blueGray-800 shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                            type="button"
                          >
                            <i className="fab fa-github text-2xl"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-4/12 px-4">

                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src="https://avatars.githubusercontent.com/u/4336605?v=4"
                    />
                  </div>
                  <h5 className="text-white text-3xl font-semibold pb-4 text-center">
                    Thiago Veloso
                  </h5>
                  <h3 className="text-white text-xl font-semibold pb-4 text-center">
                    Sofware developer
                  </h3>

                  <div className="flex flex-wrap text-center lg:text-center">
                    <div className="w-full lg:w-4/10 px-4">
                      <div className="mt-6 lg:mb-0 mb-6">
                        <a href="https://www.linkedin.com/in/othiagonascimento/" target="_blank">
                          <button
                            className="bg-white text-blueGray-800 shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                            type="button"
                            href="https://google.com"
                          >
                            <i className="fab fa-linkedin text-2xl"></i>
                          </button>
                        </a>
                        <a href="https://github.com/velosos" target="_blank">
                          <button
                            className="bg-white text-blueGray-800 shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                            type="button"
                          >
                            <i className="fab fa-github text-2xl"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">

        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{transform: "translateZ(0)"}}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center mb-5">
                <span role="img" aria-label="cripto">
                  <i className="text-blueGray  fa-coins text-4xl leading-lg mr-2" />{" "}
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                Let's keep in touch!
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Connect with us and learn more about our services.
                Share your thoughts, ask questions, or offer your expertise.

              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  className="sm:ml-1 text-orange-500 font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <span>cryptocompliancesystem@gmail.com</span>
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

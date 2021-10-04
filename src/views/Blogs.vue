<template>
  <main>
    <!-- Intro Youtube -->
    <section class="max-w-7xl pt-14 mx-auto px-4">
      <div class="flex flex-col-reverse items-center py-4 sm:py-20 sm:gap-0 xl:gap-20 sm:justify-evenly sm:flex-row">
        <div class="max-w-xl px-3.5 sm:w-1/2 sm:mr-8 md:w-3/4 md:max-w-sm lg:max-w-md">
          <h1 class="font-bold text-2xl mb-2 lg:text-3xl lg:mb-4">Vue Resources for All Developers</h1>
          <p class="text-justify text-md">
            Find tutorials, videos, and resources that will teach you everything from the basic fundamentals of Vue to advanced Vue
            techniques.
          </p>
          <p>Join <strong>thousands of developers</strong> in the LearnVue community and start leveling up your Vue skills!</p>
        </div>
        <div class="w-full h-full py-8 sm:p-0 sm:w-1/2 md:w-5/12">
          <iframe
            class="w-full h-96 rounded-md sm:h-56 md:h-72"
            src="https://www.youtube.com/embed/orGcdmCRCc0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Recent Blogs -->
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="relative max-w-7xl mx-auto ">
        <div>
          <h2 class="text-4xl leading-10 tracking-tight font-extrabold text-gray-900 text-center">Recent Blogs</h2>
        </div>
        <div class="mt-12 grid gap-8 sm:gap-16 mx-auto px-3.5 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-12">
          <div class="flex flex-col pb-5 border-b-2 border-gray-100">
            <div class="flex-1">
              <p class="text-sm leading-5 text-gray-500">
              <time datetime="Oct 02, 2021">Oct 02, 2021</time>
              </p>
              <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">Build Simple Node Js API: no external package</h3>
              <div class="flex mt-1">
                <p class="text-xs leading-5 text-gray-500 border bg-gray-50 rounded-sm px-0.5 mr-1">Node</p>
                <p class="text-xs leading-5 text-gray-500 border bg-gray-50 rounded-sm px-0.5 mr-1">Express</p>
              </div>
              <p class="mt-2 text-base leading-6 text-gray-500">Frameworks like Express Js or Kao Js have made writing APIs a lot easier. Nonetheless, it is expedient that a developer knows how to write code from the ground up using the in-built module like os, fs, and so on.</p>
            </div>
            <div class="text-base mt-2 leading-6 font-semibold text-indigo-600 hover:text-indogo-500 focus:underline focus:outline-none transition ease-in-out duration-150">
              <a href="#">Read full blog</a>
            </div>
          </div>
          <div class="flex flex-col pb-5 border-b-2 border-gray-100">
            <div class="flex-1">
              <p class="text-sm leading-5 text-gray-500">
              <time datetime="Oct 02, 2021">Oct 02, 2021</time>
              </p>
              <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">How to use async/await inside loops in JavaScript</h3>
              <div class="flex mt-1">
                <p class="text-xs leading-5 text-gray-500 border bg-gray-50 rounded-sm px-0.5 mr-1">JavaScript</p>
                <p class="text-xs leading-5 text-gray-500 border bg-gray-50 rounded-sm px-0.5 mr-1">Webdev</p>
                <p class="text-xs leading-5 text-gray-500 border bg-gray-50 rounded-sm px-0.5 mr-1">Tutorial</p>
              </div>
              <p class="mt-2 text-base leading-6 text-gray-500">Notice that we are requiring our app.js file. We will be writing all our app logic in app.js. It will be our main entry point for the app. Let’s take a quick look at the code.</p>
            </div>
            <div class="text-base mt-2 leading-6 font-semibold text-indigo-600 hover:text-indogo-500 focus:underline focus:outline-none transition ease-in-out duration-150">
              <a href="#">Read full blog</a>
            </div>
          </div>
          <div class="flex flex-col pb-5 border-b-2 border-gray-100">
            <div class="flex-1">
              <p class="text-sm leading-5 text-gray-500">
              <time datetime="Oct 02, 2021">Oct 02, 2021</time>
              </p>
              <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">Top animation libraries for React</h3>
              <div class="flex mt-1">
                <p class="text-xs leading-5 text-gray-500 border bg-gray-50 rounded-sm px-0.5 mr-1">React</p>
              </div>
              <p class="mt-2 text-base leading-6 text-gray-500">Iterating through items and dealing with asynchronous logic (i.e. API calls) are probably two of the most common tasks we have to perform as JavaScript devs.</p>
            </div>
            <div class="text-base mt-2 leading-6 font-semibold text-indigo-600 hover:text-indogo-500 focus:underline focus:outline-none transition ease-in-out duration-150">
              <a href="#">Read full blog</a>
            </div>
          </div>
          <div class="flex flex-col pb-5 border-b-2 border-gray-100">
            <div class="flex-1">
              <p class="text-sm leading-5 text-gray-500">
              <time datetime="Oct 02, 2021">Oct 02, 2021</time>
              </p>
              <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">Top 5 state management libraries for React</h3>
              <div class="flex mt-1">
                <p class="text-xs leading-5 text-gray-500 border bg-gray-50 rounded-sm px-0.5 mr-1">React</p>
                <p class="text-xs leading-5 text-gray-500 border bg-gray-50 rounded-sm px-0.5 mr-1">Redux</p>
                <p class="text-xs leading-5 text-gray-500 border bg-gray-50 rounded-sm px-0.5 mr-1">JavaScript</p>
              </div>
              <p class="mt-2 text-base leading-6 text-gray-500">There are a lot of state management libraries available for Reactjs. Here you will learn about the 5 most popular state management libraries.In case if you don't know, simply State management libraries are used for passing the props to children components without prop drilling.</p>
            </div>
            <div class="text-base mt-2 leading-6 font-semibold text-indigo-600 hover:text-indogo-500 focus:underline focus:outline-none transition ease-in-out duration-150">
              <a href="#">Read full blog</a>
            </div>
          </div>
          <div class="flex flex-col pb-5 border-b-2 border-gray-100">
            <div class="flex-1">
              <p class="text-sm leading-5 text-gray-500">
              <time datetime="Oct 02, 2021">Oct 02, 2021</time>
              </p>
              <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">What is Client Side Rendering?</h3>
              <div class="flex mt-1">
                <p class="text-xs leading-5 text-gray-500 border bg-gray-50 rounded-sm px-0.5 mr-1">CSR</p>
                <p class="text-xs leading-5 text-gray-500 border bg-gray-50 rounded-sm px-0.5 mr-1">JavaScript</p>
              </div>
              <p class="mt-2 text-base leading-6 text-gray-500">Client-side rendering (CSR) means rendering pages directly in the browser using JavaScript. All logic, data fetching, templating and routing are handled on the client rather than the server.</p>
            </div>
            <div class="text-base mt-2 leading-6 font-semibold text-indigo-600 hover:text-indogo-500 focus:underline focus:outline-none transition ease-in-out duration-150">
              <a href="#">Read full blog</a>
            </div>
          </div>
          <div class="flex flex-col pb-5 border-b-2 border-gray-100">
            <div class="flex-1">
              <p class="text-sm leading-5 text-gray-500">
              <time datetime="Oct 02, 2021">Oct 02, 2021</time>
              </p>
              <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">Working on Different Branches in Parallel</h3>
              <div class="flex mt-1">
                <p class="text-xs leading-5 text-gray-500 border bg-gray-50 rounded-sm px-0.5 mr-1">Github</p>
                <p class="text-xs leading-5 text-gray-500 border bg-gray-50 rounded-sm px-0.5 mr-1">Git</p>
                <p class="text-xs leading-5 text-gray-500 border bg-gray-50 rounded-sm px-0.5 mr-1">OpenSource</p>
              </div>
              <p class="mt-2 text-base leading-6 text-gray-500">It was super cool to see how we can work on same branches at the same time. The process of it was effortless, just type in one command and you are good to go😋😎</p>
            </div>
            <div class="text-base mt-2 leading-6 font-semibold text-indigo-600 hover:text-indogo-500 focus:underline focus:outline-none transition ease-in-out duration-150">
              <a href="#">Read full blog</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Most Popular Blogs  -->
    <section class="relative bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div class="absolute inset-0">
        <div class="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-3.5">
        <h2 class="text-4xl leading-10 tracking-tight font-extrabold text-gray-900 text-center">Most Popular Blogs</h2>
        <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          <!-- Card 1 -->
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <img
                class="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <div class="flex">
                  <p class="text-xs leading-5 font-medium text-gray-600 border bg-gray-100 rounded-sm px-1 mr-1">MongoDB</p>
                  <p class="text-xs leading-5 font-medium text-gray-600 border bg-gray-100 rounded-sm px-1 mr-1">Storage</p>
                </div>
                <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  How to write tests for applications that use MongoDB as a storage
                </h3>
                <p class="mt-3 text-base leading-6 text-gray-500">
                  MongoDB is one of the most popular databases right now and many people use it as primary storage on their applications in
                  their pet projects
                </p>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="h-10 w-10 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="text-sm leading-5 font-medium text-gray-900">Paul York</p>
                  <div class="flex text-sm leading-5 text-gray-500">
                    <time datetime="2021-10-01">Oct 01, 2021</time>
                    <span class="mx-1"> &middot; </span>
                    <span>6 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 2 -->
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <img
                class="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <div class="flex">
                  <p class="text-xs leading-5 font-medium text-gray-600 border bg-gray-100 rounded-sm px-1 mr-1">AWS</p>
                  <p class="text-xs leading-5 font-medium text-gray-600 border bg-gray-100 rounded-sm px-1 mr-1">Database</p>
                  <p class="text-xs leading-5 font-medium text-gray-600 border bg-gray-100 rounded-sm px-1 mr-1">Cloud</p>
                </div>
                <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">AWS Database Services Fundamentals</h3>
                <p class="mt-3 text-base leading-6 text-gray-500">
                  A database is a collection of information that is organized in a way that can be easily accessed, managed, and updated.
                  Computer databases often contain record sets or data files, which contain information about sales
                </p>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="h-10 w-10 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="text-sm leading-5 font-medium text-gray-900">Madza</p>
                  <div class="flex text-sm leading-5 text-gray-500">
                    <time datetime="2021-10-01">Oct 01, 2021</time>
                    <span class="mx-1"> &middot; </span>
                    <span>6 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 3 -->
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shink-0">
              <img
                class="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1025&q=80"
                alt=""
              />
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <div class="flex">
                  <p class="text-xs leading-5 font-medium text-gray-600 border bg-gray-100 rounded-sm px-1 mr-1">Git</p>
                </div>
                <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">Git Cheat Sheet</h3>
                <p class="mt-3 text-base leading-6 text-gray-500">
                  Git is an open source version control system that works locally to help developers work together.
                </p>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="h-10 w-10 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="text-sm leading-5 font-medium text-gray-900">Sriram Rajamani</p>
                  <div class="flex text-sm leading-5 text-gray-500">
                    <time datetime="2021-10-01">Oct 01, 2021</time>
                    <span class="mx-1"> &middot; </span>
                    <span>6 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
  </main>
</template>

<script setup></script>

<template>
  <main>
    <!-- Intro Youtube -->
    <section class="max-w-7xl pt-14 mx-auto px-4">
      <div class="flex flex-col-reverse items-center py-4 sm:py-20 sm:gap-0 xl:gap-20 sm:justify-evenly sm:flex-row">
        <div class="max-w-xl sm:px-3.5 sm:w-1/2 sm:mr-8 md:w-3/4 md:max-w-sm lg:max-w-md">
          <h1 class="font-bold text-2xl mb-2 lg:text-3xl lg:mb-4">Vue Resources for All Developers</h1>
          <p class="text-justify text-md">
            Find tutorials, videos, and resources that will teach you everything from the basic fundamentals of Vue to advanced Vue
            techniques.
          </p>
          <p>Join <strong>thousands of developers</strong> in the iBrong Community and start leveling up your Vue skills!</p>
        </div>
        <div class="w-full h-full py-8 sm:p-0 sm:w-1/2 md:w-5/12">
          <div class="aspect-w-2 aspect-h-1">
            <iframe
              class="rounded-md "
              src="https://www.youtube.com/embed/orGcdmCRCc0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Blogs -->
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="relative max-w-5xl lg:max-w-7xl mx-auto ">
        <div>
          <h2 class="text-4xl leading-10 tracking-tight font-extrabold text-gray-900 text-center">Recent Blogs</h2>
        </div>
        <div class="mt-12 grid gap-8 sm:gap-16 mx-auto sm:px-3.5 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-12">
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
              <router-link :to="{name: 'BlogDetail', params: {id: '19203'}}">Read full blog</router-link>
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
              <!-- <a href="#">Read full blog</a> -->
              <router-link :to="{name: 'BlogDetail', params: {id: '19203'}}">Read full blog</router-link>
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
              <!-- <a href="#">Read full blog</a> -->
              <router-link :to="{name: 'BlogDetail', params: {id: '19203'}}">Read full blog</router-link>
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
              <!-- <a href="#">Read full blog</a> -->
              <router-link :to="{name: 'BlogDetail', params: {id: '19203'}}">Read full blog</router-link>
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
              <!-- <a href="#">Read full blog</a> -->
              <router-link :to="{name: 'BlogDetail', params: {id: '19203'}}">Read full blog</router-link>
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
              <!-- <a href="#">Read full blog</a> -->
              <router-link :to="{name: 'BlogDetail', params: {id: '19203'}}">Read full blog</router-link>
            </div>
          </div> 
        </div>
      </div>
    </section>

    <!-- Footer -->
    <app-footer />    
  </main>
</template>

<script setup>
import AppFooter from '/src/components/Footer.vue'

</script>

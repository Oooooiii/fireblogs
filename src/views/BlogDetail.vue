<template>
  <main>
    <!-- Blog Content -->
    <section class="max-w-7xl mx-auto pt-14 px-4">
      <div class="max-w-5xl mx-auto text-center py-4">
        <p>Publish <time datetime="Oct 02, 2021">Oct 02, 2021</time></p>
        <h3 class="text-2xl font-semibold">Build Simple Node Js API: no external package</h3>
        <div class="flex mt-1 justify-center">
          <p class="text-xs leading-5 text-gray-500 border bg-gray-50 rounded-sm px-0.5 mr-1">JavaScript</p>
          <p class="text-xs leading-5 text-gray-500 border bg-gray-50 rounded-sm px-0.5 mr-1">Webdev</p>
          <p class="text-xs leading-5 text-gray-500 border bg-gray-50 rounded-sm px-0.5 mr-1">Tutorial</p>
        </div>
        <div class="mt-4 max-w-3xl mx-auto">
          <img
            class="rounded"
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80"
            alt=""
          />
        </div>
        <div class="flex flex-col sm:flex-row max-w-3xl mx-auto">
          <div class="mt-4 text-justify max-w-2xl mx-auto">
            <h3 class="font-semibold text-base">
              Learn how to use TypeScript to build a feature-complete Express API. Tutorial on how to use TypeScript with Express to create,
              read, update, and delete data.
            </h3>
            <br />
            <p>
              This tutorial shows you how to build a feature-complete API using Node.js, Express, and TypeScript that lets clients perform
              data operations on resources that describe a restaurant menu. Using TypeScript with Node.js gives you access to optional
              static type-checking along with robust tooling for large apps and the latest ECMAScript features.Learn also how to define data
              models, create a data service, and quickly build modular endpoints. As an option, you can also learn how to secure the API
              using Auth0.
            </p>
            <br />
            <p>
              With Auth0, you can manage the authorization requirements of an application stack easily. To start, you need to create a free
              Auth0 account if you don't have one yet. Auth0 is a flexible, drop-in solution to add authentication and authorization
              services to your applications. Your team and organization can avoid the cost, time, and risk that comes with building your own
              solution to authenticate and authorize users. We offer tons of guidance and SDKs for you to get started and integrate Auth0 in
              your stack easily.
            </p>
            <br />
            <p>
              After you create your account, you'll create an Auth0 Tenant, which is a container that Auth0 uses to store your identity
              service configuration and your users in isolation — no other Auth0 customer can peek into or access your tenant. It's similar
              to you being a tenant in an apartment building. Auth0 looks after the building while the apartment is all yours to live in and
              customize. However, each apartment is fully isolated (no windows, soundproof walls, etc.) so that neighbors can't intrude on
              your privacy. After creating your tenant, you need to create an API register with Auth0, which is an API that you define
              within your Auth0 tenant and that you can consume from your applications to process authentication and authorization requests.
              After creating your account, head to the APIs section in the Auth0 Dashboard and hit the Create API button.
            </p>
            <br />
            <p>
              You'll rely on a middleware function to protect an Express API endpoint. Express will execute an authorization middleware
              function before it executes the callback function of the controller that handles the request. You can use two patterns to
              integrate your endpoints with the authorization middleware function.
            </p>
          </div>
          <div class="flex gap-2 justify-center pt-4 sm:flex-col sm:justify-start sm:ml-2 md:ml-0 md:mr-2 sm:gap-1.5">
            <a href="#"><i class="border rounded-full p-2 border-gray-300 fab fa-twitter-square"></i></a>
            <a href="#"><i class="border rounded-full p-2 border-gray-300 fab fa-facebook-square"></i></a>
            <a href="#"><i class="border rounded-full p-2 border-gray-300 fab fa-linkedin"></i></a>
            <a href="#"><i class="border rounded-full p-2 border-gray-300 fab fa-pinterest-square"></i></a>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Blogs  -->
    <section class="relative bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div class="absolute inset-0">
        <div class="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div class="relative sm:max-w-7xl mx-auto sm:px-3.5">
        <h2 class="text-4xl leading-10 tracking-tight font-extrabold text-gray-900 text-center">Related Blogs</h2>
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

    <!-- Footer -->
    <app-footer />
  </main>
</template>

<script setup>
import AppFooter from '/src/components/Footer.vue'
</script>

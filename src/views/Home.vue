<template>
  <main class="flex flex-col justify-between min-h-screen my-auto">
    <!-- Introduction -->
    <section class="pt-14 px-4 lg:px-8 ">
      <div class="w-full max-w-lg sm:max-w-6xl lg:max-w-7xl mx-auto flex flex-col gap-x-2 sm:flex-row items-center justify-evenly py-8 sm:pt-28">
        <div>
          <!-- <img
            class="rounded-xl max-w-xs max-h-xs mx-auto sm:max-w-xs sm:mx-4 lg:max-w-sm lg:ml-10"
            src="../assets/imgs/iBrong-KiT.jpg"
            alt=""
          /> -->
          <img
            class="rounded-xl max-w-xs mx-auto sm:max-w-xs sm:mx-4 lg:max-w-sm lg:ml-10"
            src="../assets/imgs/iBrong-Nakineko.jpg"
            alt=""
          />
        </div>
        <div class="max-w-md lg:max-w-lg mt-6 sm:mt-0 text-justify">
          <h1 class="font-bold text-2xl mb-2 lg:mb-4">
            It's me Bunrong😜
            <span class="text-sm underline text-blue-900">(aka iBrong)</span>
          </h1>
          <p>
            I am passionate about business analysis, have knowledge of the most popular programming languages, skills in
            business process modeling, and demonstrated experience as a team leader. Besides, I used to be in roles
            designer, developer, and tester.
          </p>
          <p >
            A <strong>perfectionist</strong> who ensures that every task is completed with the utmost
            attention to detail.
          </p>
          <div class="mt-2">
            <h1 class="text-md underline">Skils / Passionate</h1>
            <ul class="ml-4 list-disc">
              <li>JavaScript/TypeScript, HTML/CSS, SQL, GIT</li>
              <li>Agile Methodology, Data Structure, Algorithms</li>
            </ul>
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

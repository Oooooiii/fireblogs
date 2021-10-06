<template>
  <main class="flex flex-col justify-between min-h-screen my-auto">
    <!-- Introduction -->
    <section class="pt-14 px-4 lg:px-8 ">
      <div class="w-full py-8 sm:pt-32 flex flex-col gap-x-4 md:gap-8 lg:gap-20 max-w-lg mx-auto sm:flex-row sm:max-w-7xl sm:items-center justify-evenly">
        <div class="flex-1">
          <div class="sm:max-w-md mx-auto">
            <div class="aspect-w-4 aspect-h-3">
              <img
                class="rounded-lg"
                src="../assets/imgs/iBrong-Nakineko.jpg"
                alt=""
              />
              <!-- <img
                class="rounded-lg"
                src="../assets/imgs/iBrong-KiT.jpg"
                alt=""
              /> -->
            </div>
          </div>
        </div>
        <div class="flex-1 mt-6 sm:mt-0 text-justify">
          <div class="sm:max-w-lg mx-auto">
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
                <li>JavaScript/TypeScript, HTML/CSS, Python, SQL, GIT</li>
                <li>Agile Methodology, Data Structure, Algorithms</li>
              </ul>
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

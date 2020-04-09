<script>
  import UdemyCourses from "./data/udemyCourses";
  import UdemyCard from "./components/UdemyCard.svelte";
</script>

<style>  
</style>

<main class="flex justify-center mt-4 lg:mt-8">
  <div class="w-11/12 lg:w-2/3 bg-indigo-800 p-5 shadow-lg rounded-lg">
    <header class="flex">
      <img
        class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
        src="images/profile.jpg"
        alt="profile picture" />

      <h1 class="text-gray-300 text-3xl font-semibold mt-4 ml-5">
        Ryan Bonial
      </h1>
    </header>

    <p class="text-white" />

    <section class="mb-4">
      <h2 class="text-gray-300 text-2xl py-2">Links</h2>
      <ul class="text-white">
        <li class="mb-1">
          <a
            href="https://www.linkedin.com/in/ryan-bonial"
            target="_blank"
            rel="noreferrer noopener">
            <i class="fa fa-fw fa-linkedin-square" aria-hidden="true" />
            Linkedin
          </a>
        </li>
        <li class="mb-1">
          <a
            href="https://github.com/ryanbonial"
            target="_blank"
            rel="noreferrer noopener">
            <i class="fa fa-fw fa-github-square" aria-hidden="true" />
            GitHub
          </a>
        </li>
        <li class="mb-1">
          <a
            href="https://www.codewars.com/users/ryanbonial/stats"
            target="_blank"
            rel="noreferrer noopener">
            <i class="fa fa-fw fa-code" aria-hidden="true" />
            Codewars
          </a>
        </li>
        <li class="mb-1">
          <a
            href="https://www.hackthebox.eu/profile/211837"
            target="_blank"
            rel="noreferrer noopener">
            <i class="fa fa-fw fa-cube" aria-hidden="true" />
            Hack The Box
          </a>
        </li>
      </ul>     
    </section>

    <!-- <section  class="mb-4">
      <h2 class=" text-white text-xl">Experience Chart</h2>
    </section> -->

    <section class="mb-4">
      <h2 class="text-gray-300 text-2xl py-2">Completed Courses</h2>
      <div
        class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6
        gap-2">
        {#each UdemyCourses as course, i}
          <UdemyCard {...course} />
        {/each}
      </div>
    </section>

    <!-- <section class="mb-4">
      <h2 class="text-white text-xl">Hobbies</h2>
    </section> -->
  </div>
</main>

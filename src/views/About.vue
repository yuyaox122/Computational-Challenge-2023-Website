<template>
  <section class="bg-center h-screen bg-cover bg-fixed bg-[url('/src/assets/Sus.jpg')]">
    <div class="flex items-center justify-center h-screen relative group">
      <div
          class="absolute w-[83%] h-[69%] m-auto -inset-0.5 bg-gradient-to-r from-sky-700 to-blue-800 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
      </div>
      <img src="/src/assets/computational_challenge.png"
           class="relative overflow-hidden leading-none rounded-lg m-auto py-10 w-[80%] opacity-90">
    </div>
  </section>
  <section class="bg-center bg-cover bg-fixed bg-[url('/src/assets/Sus.jpg')]">
    <p class="flex justify-center items-center font-['montserrat'] text-5xl text-white font-bold">BPhO 2023 - Solar System Orbits</p>
  </section>
  <section
      class="flex items-center justify-center m-auto bg-fixed bg-center bg-cover bg-[url('/src/assets/Sus.jpg')] py-[3%]">
    <iframe class = "max-w-[100%]" width="960" height="540" src="https://www.youtube.com/embed/yo_z0qslFwQ" title="Solar System"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
  </section>

  <section class="bg-center bg-cover bg-fixed bg-[url('/src/assets/Sus.jpg')]">
    <p class="flex justify-center items-center font-['montserrat'] text-5xl text-white font-bold py-[3%]">Previous entries</p>
    <p class="flex justify-center items-center font-['montserrat'] text-3xl text-white font-bold">BPhO 2022 - A Standard Atmosphere </p>
  </section>
  <section
      class="flex items-center justify-center m-auto bg-fixed bg-center bg-cover bg-[url('/src/assets/Sus.jpg')] py-[3%]">
    <iframe class = "max-w-[100%]" width="720" height="405" src="https://www.youtube.com/embed/B8ggyEylWQc" title="Α Standard Atmosphere"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
  </section>
  
</template>

<script>

export default {
  name: 'Task1',
  components: {
  }
}
</script> 
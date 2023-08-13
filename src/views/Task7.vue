<template>
  <header class="relative flex items-center justify-center h-screen overflow-hidden">
    <video class="absolute z-10 w-auto min-w-full min-h-full max-w-none" style="pointer-events: none;" loop="true"
           autoplay="autoplay" controls muted>
      <source src="/src/assets/SpaceBackground.mp4" type="video/mp4" />
    </video>
    <h1
        class="animate-fade-down animate-once animate-ease-in z-30 text-white underline decoration-sky-500/[.33] font-['montserrat'] text-[150px]">
      Task 7</h1>
  </header>
  <section class="bg-center h-max bg-repeat-y bg-cover bg-fixed bg-[url('/src/assets/EvilEye.jpg')]">
    <section class="bg-gradient-to-b from-[#000308] to-[#061b40] text-white pt-[4%]">
      <p class="flex justify-center items-center font-['montserrat'] text-5xl font-bold">Task 7 - Relative orbits</p>
      <p class="flex justify-center items-center font-['montserrat'] text-xl px-[5%] pt-[3%]">
        To plot these non-heliocentric orbits, we first simulated the normal solar system orbits, recording the relative position of each relevant planet to the centre planet in an array.
        Then, we defined a new coordinate system with the desired planet at the centre, and we plotted a set of 5000 points representing the position of each other planet in their orbits.
        Finally, by joining these points up, we were able to obtain approximations of the orbits relative to a given planet.
      </p>
    </section>
    <section class="flex items-center justify-center h-screen bg-gradient-to-b from-[#061b40] to-transparent to-100% pt-[5%]">
      <section
          class="h-screen grid grid-rows-2 grid-cols-1 gap-60 mx-[2%] my-[2%]">
        <section>
          <p class="flex justify-center items-center font-['montserrat'] text-2xl text-white pb-[1%]">Earth-centric orbits</p>
          <video class="row-span-1 row-start-1 max-h-[170%] rounded-lg m-auto" title="vimeo-player"
                 src="/src/assets/Task72013.mp4" loop="true"
                 frameborder="0" allowfullscreen controls></video>
        </section>
        <section>
          <p class="flex justify-center items-center font-['montserrat'] text-2xl text-white pt-[4%] pb-[1%]">Pluto-centric orbits</p>
          <video class="row-span-1 row-start-2 max-h-[170%] rounded-lg m-auto" title="vimeo-player"
                 src="/src/assets/Task78567.mp4" loop="true"
                 frameborder="0" allowfullscreen controls></video>
        </section>
      </section>
    </section>
    <section class="bg-center h-max bg-repeat-y bg-cover bg-fixed bg-[url('/src/assets/EvilEye.jpg')] pt-[23%]">
      <img src="/src/assets/Task7.png" class="rounded-lg m-auto py-10 max-w-[80%] opacity-75">
    </section>
  </section>
</template>

<script>

export default {
  name: 'Task7',
  components: {
  }
}
</script> 
<template>
  <header class="relative flex items-center justify-center h-screen overflow-hidden">
    <video class="absolute z-10 w-auto min-w-full min-h-full max-w-none" style="pointer-events: none;" loop="true"
           autoplay="autoplay" controls muted>
      <source src="/src/assets/SpaceBackground.mp4" type="video/mp4" />
    </video>
    <h1
        class="animate-fade-down animate-once animate-ease-in z-30 text-white underline decoration-sky-500/[.33] font-['montserrat'] text-[150px]">
      Task 5</h1>
  </header>
  <section class="bg-center h-max bg-repeat-y bg-cover bg-fixed bg-[url('/src/assets/OrionNebula.jpg')]">
    <section class="bg-gradient-to-b from-[#000308] to-[#061b40] text-white pt-[4%]">
      <p class="flex justify-center items-center font-['montserrat'] text-5xl font-bold">Task 5 - Eccentric orbits</p>
      <p class="flex justify-left items-center font-['montserrat'] text-xl px-[5%] pt-[3%]">
        In order to make individual modifications more easily, we defined separate functions for the integrand, integral loop, and orbit time.
        To calculate the values to plot, we first defined a numpy linspace for the angle, then used get_t() to calculate the values of orbit time.
        Finally, we set up a new linspace and interpolated the values from the previous arrays to get time on the x-axis and angle on the y-axis.
      </p>
    </section>
    <section class="flex items-center justify-center h-screen bg-gradient-to-b from-[#061b40] to-transparent to-100% pt-[5%]">
      <section
          class="h-screen grid grid-cols-2 gap-6 grid-rows-2 mx-[2%] my-[2%]">
        <video class="col-span-1 row-span-1 rounded-lg m-auto" title="vimeo-player"
               src="/src/assets/Task5Mercury.mp4" loop="true"
               frameborder="0" allowfullscreen controls></video>
        <video class="col-span-1 row-span-1 rounded-lg m-auto" title="vimeo-player"
               src="/src/assets/Task5Mars.mp4" loop="true"
               frameborder="0" allowfullscreen controls></video>
        <video class="col-span-1 row-span-1 rounded-lg m-auto" title="vimeo-player"
               src="/src/assets/Task5Saturn.mp4" loop="true"
               frameborder="0" allowfullscreen controls></video>
        <video class="col-span-1 row-span-1 rounded-lg m-auto" title="vimeo-player"
               src="/src/assets/Task5Pluto.mp4" loop="true"
               frameborder="0" allowfullscreen controls></video>
      </section>
    </section>
    <section class="bg-center h-max bg-repeat-y bg-cover bg-fixed bg-[url('/src/assets/OrionNebula.jpg')] pt-[2%]">
      <img src="/src/assets/Task5.png" class="rounded-lg m-auto py-10 max-w-[80%] opacity-75">
    </section>
  </section>
</template>

<script>

export default {
  name: 'Task5',
  components: {
  }
}
</script> 
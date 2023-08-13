<template>
  <header class="relative flex items-center justify-center h-screen overflow-hidden">
    <video class="absolute z-10 w-auto min-w-full min-h-full max-w-none" style="pointer-events: none;" loop="true"
           autoplay="autoplay" controls muted>
      <source src="/src/assets/SpaceBackground.mp4" type="video/mp4" />
    </video>
    <h1
        class="animate-fade-down animate-once animate-ease-in z-30 text-white underline decoration-sky-500/[.33] font-['montserrat'] text-[150px]">
      Task 3</h1>
  </header>
  <section class="bg-center h-max bg-repeat-y bg-cover bg-fixed bg-[url('/src/assets/StellarForge.jpg')]">
    <section class="bg-gradient-to-b from-[#000308] to-[#061b40] text-white pt-[4%]">
      <p class="flex justify-center items-center font-['montserrat'] text-5xl font-bold">Task 3 - 2D animations</p>
      <p class="flex justify-left items-center font-['montserrat'] text-xl px-[5%] pt-[3%]">
        Similar to Task 4, taking the orbital parametric functions previously calculated in Task 2, we used manim's built in function MoveAlongPath() to display the planets orbiting the sun.
        By scaling the number of full completed orbits by Earth's or Jupiter's orbital period, we were able to set each target planet's full orbit to take one second,
        and evaluate the other planets' orbital times proportionally.
      </p>
    </section>
    <section class="flex items-center justify-center h-screen bg-gradient-to-b from-[#061b40] to-transparent to-100%">
      <video class="rounded-lg max-w-[100%] p-[5%]" title="vimeo-player" src="/src/assets/Task3.mp4" loop="true"
             autoplay="autoplay" muted frameborder="0" allowfullscreen controls></video>
    </section>

    <section class="bg-center h-max bg-repeat-y bg-cover bg-fixed bg-[url('/src/assets/StellarForge.jpg')]">
      <img src="/src/assets/Task3.png" class="rounded-lg m-auto py-10 max-w-[80%] opacity-75">
    </section>
  </section>
</template>

<script>

export default {
  name: 'Task3',
  components: {
  }
}
</script> 
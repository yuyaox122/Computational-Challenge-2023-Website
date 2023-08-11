<template>
    <header class="relative flex items-center justify-center h-screen overflow-hidden">
        <video class="absolute z-10 w-auto min-w-full min-h-full max-w-none" style="pointer-events: none;" loop="true"
            autoplay="autoplay" controls muted>
            <source src="/src/assets/SpaceBackground.mp4" type="video/mp4" />
        </video>
        <h1
            class="animate-fade-down animate-once animate-ease-in z-30 text-white underline decoration-sky-500/[.33] font-['montserrat'] text-[150px]">
            Task 1</h1>
    </header>
  
    <section class="bg-[#000308] text-white pt-[4%]">
      <p class="flex justify-center items-center font-['montserrat'] text-5xl font-bold">Task 1 - Kepler's Third Law</p>
      <p class="flex justify-center items-center font-['montserrat'] text-xl px-[5%] pt-[3%]">
        We took the values given to us in our pandas dataframe and plotted period against semi-major axis raised to the 3/2 power. From the graph, we can see a strong positive linear correlation, demonstrating that T is directly proportional to R.
      </p>
    </section>
    <section class="flex items-center justify-center h-screen bg-[#000712]">
        <video class="rounded-lg max-w-[100%] p-[10%]" title="vimeo-player" src="/src/assets/Task1.mp4" loop="true"
            autoplay="autoplay" muted frameborder="0" allowfullscreen controls></video>
    </section>

    <section class="bg-center h-max bg-repeat-y bg-cover bg-fixed bg-[url('/src/assets/SombreroGalaxy.jpg')]">
        <img src="/src/assets/Task1.png" class="rounded-lg m-auto py-10 max-w-[80%] opacity-75">
    </section>
</template>

<script>

export default {
    name: 'Task1',
    components: {
    }
}
</script> 
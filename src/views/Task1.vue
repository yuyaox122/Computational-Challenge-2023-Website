<template>
  <div id="script-placeholder" />
    <header class="relative flex items-center justify-center h-screen overflow-hidden">
        <video class="absolute z-10 w-auto min-w-full min-h-full max-w-none" style="pointer-events: none;" loop="true"
            autoplay="autoplay" controls muted>
            <source src="/src/assets/SpaceBackground.mp4" type="video/mp4" />
        </video>
        <h1
            class="animate-fade-down animate-once animate-ease-in z-30 text-white underline decoration-sky-500/[.33] font-['montserrat'] text-[150px]">
            Task 1</h1>
    </header>
    <section class="bg-center h-max bg-repeat-y bg-cover bg-fixed bg-[url('/src/assets/SombreroGalaxy.jpg')]">
      <section class="bg-gradient-to-b from-[#000308] to-[#061b40] text-white pt-[4%]">
        <p class="flex justify-center items-center font-['montserrat'] text-5xl font-bold">Task 1 - Kepler's Third Law</p>
        <p class="flex justify-left items-center font-['montserrat'] text-xl px-[5%] pt-[3%]">
          We took the values given to us in our pandas dataframe and plotted period $\ T\ $ against $\sqrt{a^3}$. From the graph, we can see a
        </p>
        <p class="flex justify-left items-center font-['montserrat'] text-xl px-[5%]">
          positive linear correlation, implying that $\ T\ $ is proportional to $\sqrt{a^3}$.
        </p>
      </section>
      <section class="flex items-center justify-center h-screen bg-gradient-to-b from-[#061b40] to-transparent to-100%">
          <video class="rounded-lg max-w-[100%] p-[5%]" title="vimeo-player" src="/src/assets/Task1.mp4" loop="true"
              autoplay="autoplay" muted frameborder="0" allowfullscreen controls></video>
      </section>
  
      <section class="bg-center h-max bg-repeat-y bg-cover bg-fixed bg-[url('/src/assets/SombreroGalaxy.jpg')]">
          <img src="/src/assets/Task1.png" class="rounded-lg m-auto py-10 max-w-[80%] opacity-75">
      </section>
    </section>
</template>

<script>

import postscribe from "postscribe";

export default {
    name: 'Task1',
    components: {
    },
    mounted() {
      postscribe('#script-placeholder', '<script type="text/x-mathjax-config"> MathJax.Hub.Config({   tex2jax: {inlineMath: [[\'$\',\'$\'], [\'\\\\(\',\'\\\\)\']]} }); <\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML"><\/script>')
    },
}
</script> 
<template>
  <div id="script-placeholder" />
  <header class="relative flex items-center justify-center h-screen overflow-hidden">
    <video class="absolute z-10 w-auto min-w-full min-h-full max-w-none" style="pointer-events: none;" loop="true"
           autoplay="autoplay" controls muted>
      <source src="/src/assets/SpaceBackground.mp4" type="video/mp4" />
    </video>
    <h1
        class="animate-fade-down animate-once animate-ease-in z-30 text-white underline decoration-sky-500/[.33] font-['montserrat'] text-[150px]">
      Task 2</h1>
  </header>
  <section class="bg-center h-max bg-repeat-y bg-cover bg-fixed bg-[url('/src/assets/EagleNebula.jpg')]">
    <section class="bg-gradient-to-b from-[#000308] to-[#061b40] text-white pt-[4%]">
      <p class="flex justify-center items-center font-['montserrat'] text-5xl font-bold">Task 2 - Elliptical orbits</p>
      <p class="flex justify-left items-center font-['montserrat'] text-xl px-[5%] pt-[3%]">
        Using the formula for $\ r$, we defined an array parametric functions $\ (r\cos{\theta},\ r\sin{\theta},\ 0)\ $ that described the loci for each
      </p>
      <p class="flex justify-left items-center font-['montserrat'] text-xl px-[5%]">
        planetary orbit for 1000 steps in the given range $\ 0\leq\theta\leq 2\pi$. This allowed us to directly plot each orbit on each set of
      </p>
      <p class="flex justify-left items-center font-['montserrat'] text-xl px-[5%]">
        inner and outer axes.
      </p>
      <p class="flex justify-center items-center font-['montserrat'] text-xl px-[5%]">
      \[r=\dfrac{a(1-\varepsilon^2)}{1-\varepsilon\cos{\theta}}\]
      </p>
      
      
    </section>
    <section class="flex items-center justify-center h-screen bg-gradient-to-b from-[#061b40] to-transparent to-100%">
      <video class="rounded-lg max-w-[100%] p-[5%]" title="vimeo-player" src="/src/assets/Task2.mp4" loop="true"
             autoplay="autoplay" muted frameborder="0" allowfullscreen controls></video>
    </section>
  
    <section class="bg-center h-max bg-repeat-y bg-cover bg-fixed bg-[url('/src/assets/EagleNebula.jpg')]">
      <img src="/src/assets/Task2.png" class="rounded-lg m-auto py-10 max-w-[80%] opacity-75">
    </section>
  </section>
</template>

<script>
import postscribe from 'postscribe'
export default {
  name: "Task2",
  components: {},
  mounted() {
    postscribe('#script-placeholder', '<script type="text/x-mathjax-config"> MathJax.Hub.Config({   tex2jax: {inlineMath: [[\'$\',\'$\'], [\'\\\\(\',\'\\\\)\']]} }); <\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML"><\/script>')
  },
}
</script> 
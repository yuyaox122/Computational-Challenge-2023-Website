<template>
  <div id="script-placeholder" />
    <header class="relative flex items-center justify-center h-screen overflow-hidden">
        <video class="absolute z-10 w-auto min-w-full min-h-full max-w-none" style="pointer-events: none;" loop="true"
            autoplay="autoplay" controls muted>
            <source src="/src/assets/SpaceBackground.mp4" type="video/mp4" />
        </video>
        <h1
            class="animate-fade-down animate-once animate-ease-in z-30 text-white underline decoration-sky-500/[.33] font-['montserrat'] text-[150px]">
            Unity Project</h1>
    </header>
    <section class="bg-center h-max bg-repeat-y bg-cover bg-fixed bg-[url('/src/assets/SombreroGalaxy.jpg')]">
      <iframe class="absolute z-10 w-auto min-w-full min-h-full max-w-none" src="/src/assets/Computational_Challenge_Build/index.html">
    </iframe>
    </section>
</template>

<script>

import postscribe from "postscribe";

export default {
    name: 'Unity',
    components: {
    },
    mounted() {
      
    },
}
</script> 
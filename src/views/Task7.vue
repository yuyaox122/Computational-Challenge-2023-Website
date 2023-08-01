<template>
    <header class="relative flex items-center justify-center h-screen overflow-hidden">
        <video class="absolute z-10 w-auto min-w-full min-h-full max-w-none" style="pointer-events: none;" loop="true"
            autoplay="autoplay" controls muted>
            <source src="/src/assets/SpaceBackground.mp4" type="video/mp4" />
        </video>
        <h1 class="animate-fade-down animate-once animate-ease-in z-30 text-white underline decoration-sky-500/[.33] font-['montserrat'] text-5xl">Task 7</h1>
    </header>
    
    <section
        class="h-screen grid grid-rows-2 grid-cols-1 gap-4 mx-[2%] my-[2%]">
        <video class="row-span-1 row-start-1 max-h-[90%] rounded-lg m-auto" title="vimeo-player"
            src="/src/assets/Task72013.mp4" loop="true"
            autoplay="autoplay" muted
            frameborder="0" allowfullscreen controls></video>
        <video class="row-span-1 row-start-2 max-h-[90%] rounded-lg m-auto" title="vimeo-player"
            src="/src/assets/Task78567.mp4" loop="true"
            autoplay="autoplay" muted
            frameborder="0" allowfullscreen controls></video>
    </section>  

    <section
        class="h-screen">
        <p class="flex justify-center items-center font-['montserrat'] text-5xl font-bold my-16">Task 7 - Eccentric Orbits</p>
        <p class="flex justify-center items-center font-['montserrat'] text-xl my-4">Lorem ipsum</p>
    </section>
    
    <section class="bg-center h-max bg-repeat-y bg-cover bg-fixed bg-[url('/src/assets/EvilEye.jpg')]">
        <img src="/src/assets/Task7.png" class="rounded-lg m-auto py-10 max-w-[80%] opacity-75">
    </section> 
</template>

<script>

export default {
    name: 'Task7',
    components: {
    }
}
</script> 
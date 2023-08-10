<template>
    <header class="relative flex items-center justify-center h-screen overflow-hidden">
        <video class="absolute z-10 w-auto min-w-full min-h-full max-w-none" style="pointer-events: none;" loop="true"
            autoplay="autoplay" controls muted>
            <source src="/src/assets/SpaceBackground.mp4" type="video/mp4" />
        </video>
        <h1 class="animate-fade-down animate-once animate-ease-in z-30 text-white underline decoration-sky-500/[.33] font-['montserrat'] text-5xl">Task 3</h1>
    </header>
    <section class="flex items-center justify-center h-screen mx-[2%] my-[2%]">
        <video class="rounded-lg max-w-[75%]" title="vimeo-player" src="/src/assets/Task3.mp4" loop="true"
            autoplay="autoplay" muted frameborder="0" allowfullscreen controls></video>
    </section>
    <section
        class="h-screen">
        <p class="flex justify-center items-center font-['montserrat'] text-5xl font-bold">Task 3 - 2D animation</p>
        <p class="flex justify-center items-center font-['montserrat'] text-xl my-10">Lorem ipsum</p>
    </section>

    <section class="bg-center h-max bg-repeat-y bg-cover bg-fixed bg-[url('/src/assets/StellarForge.jpg')]">
        <img src="/src/assets/Task3.png" class="rounded-lg m-auto py-10 max-w-[80%] opacity-75">
    </section> 
</template>

<script>

export default {
    name: 'Task3',
    components: {
    }
}
</script> 
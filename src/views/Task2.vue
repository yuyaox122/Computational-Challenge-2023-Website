<template>
    <div class="overflow-y-scroll scroll-smooth">
        <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
            <video class="absolute z-10 w-auto min-w-full min-h-full max-w-none" style="pointer-events: none;" loop="true"
                autoplay="autoplay" controls muted>
                <source src="src\assets\SpaceBackground.mp4" type="video/mp4" />
            </video>
            <h1 class="z-30 text-white underline decoration-sky-500/[.33] font-['montserrat'] text-5xl">Task 2</h1>
        </header>
        <section
            class="overflow-hidden container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img">
            <video class="z-30 rounded-lg m-auto max-w-[65%]" title="vimeo-player"
                src="src\assets\Task1.mp4" loop="true"
                autoplay="autoplay" muted
                frameborder="0" allowfullscreen controls></video>
        </section>
        <section class="overflow-hidden container flex items-center justify-center m-auto mb-12 h-screen bg-fixed bg-cover bg-[url('src/assets/SombreroGalaxy.jpg')]">
            <img src="src\assets\task_2_code.png" class="rounded-lg mx-auto max-w-[80%]">
        </section> 
        <section
            class="overflow-hidden container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img">
            <p class="font-['montserrat'] text-xl">How did we do this?</p>
        </section>
    </div>
</template>

<script>

export default {
    name: 'Task1',
    components: {
    }
}
</script> 
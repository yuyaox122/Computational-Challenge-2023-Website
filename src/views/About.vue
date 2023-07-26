<template>
    <div class="overflow-y-scroll scroll-smooth">
        <section
            class="overflow-hidden container flex items-center justify-center h-screen m-auto bg-fixed bg-center bg-cover bg-[url('src/assets/GalaxiesGalore.jpg')]">
            <div class="relative group">
                <div
                    class="absolute max-w-[82%] max-h-[90%] m-auto -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
                </div>
                <img src="src\assets\computational_challenge.png"
                    class="relative overflow-hidden leading-none rounded-lg m-auto py-10 max-w-[80%] opacity-90">
            </div>
        </section>
        <!-- <header class="relative flex items-center justify-center h-screen overflow-hidden">
            <video class="absolute z-10 w-auto min-w-full min-h-full max-w-none" style="pointer-events: none;" loop="true"
                autoplay="autoplay" controls muted>
                <source src="src\assets\SpaceBackground.mp4" type="video/mp4" />
            </video>
            <h1 class="z-30 text-white underline decoration-sky-500/[.33] font-['montserrat'] text-5xl">Task 1</h1>
        </header> -->
        <section
            class="overflow-hidden container flex items-center justify-center h-screen m-auto bg-fixed bg-center bg-cover custom-img">
            <iframe width="853" height="480" src="https://www.youtube.com/embed/B8ggyEylWQc" title="Α Standard Atmosphere" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
        <section
            class="overflow-hidden container flex items-center justify-center h-screen m-auto bg-fixed bg-center bg-cover custom-img">
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
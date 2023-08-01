<template>
    <section class="bg-center h-screen bg-cover bg-fixed bg-[url('/src/assets/Sus.jpg')]">
        <div class="flex items-center justify-center h-screen relative group">
            <div
                class="absolute w-[83%] h-[69%] m-auto -inset-0.5 bg-gradient-to-r from-sky-700 to-blue-800 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
            </div>
            <img src="/src/assets/computational_challenge.png"
                class="relative overflow-hidden leading-none rounded-lg m-auto py-10 w-[80%] opacity-90">
        </div>
    </section>
    <section
        class="overflow-hidden container flex items-center justify-center h-screen m-auto bg-fixed bg-center bg-cover">
        <iframe class = "max-w-[80%]" width="853" height="480" src="https://www.youtube.com/embed/B8ggyEylWQc" title="Α Standard Atmosphere"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
    </section>

    <section class="h-screen">
        <p class="flex justify-center items-center font-['montserrat'] text-5xl font-bold">BPhO 2023 - Solar System Orbits</p>
        <p class="flex justify-center items-center font-['montserrat'] text-xl my-10">Lorem ipsum</p>
    </section>
</template>

<script>

export default {
    name: 'Task1',
    components: {
    }
}
</script> 
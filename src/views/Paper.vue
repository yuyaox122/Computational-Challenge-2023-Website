<template>
    <header class="relative flex items-center justify-center h-screen overflow-hidden">
        <video class="absolute z-10 w-auto min-w-full min-h-full max-w-none" style="pointer-events: none;" loop="true"
            autoplay="autoplay" controls muted>
            <source src="/src/assets/SpaceBackground.mp4" type="video/mp4" />
        </video>
        <h1
            class="animate-fade-down animate-once animate-ease-in z-30 text-white underline decoration-sky-500/[.33] font-['montserrat'] text-5xl">
            Paper</h1>
    </header>
    
    <section class="h-screen">
        <p class="flex justify-center items-center font-['montserrat'] text-5xl font-bold">Paper</p>
        <p class="flex justify-center items-center font-['montserrat'] text-xl my-10">Lorem ipsum</p>
    </section>

    <section class="flex items-center justify-center h-screen">
        <embed style="width:100%; height: 100%; border: none" src="src\assets\ComputationalChallengePaper.pdf"/>
    </section> 

</template>

<script>

export default {
    name: 'Paper',
    components: {
    }
}
</script> 
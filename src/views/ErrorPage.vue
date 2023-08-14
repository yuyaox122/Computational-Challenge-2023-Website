<template>
  <header className="relative flex items-center justify-center h-screen overflow-hidden">
<!--    <video className="absolute z-10 w-auto min-w-full min-h-full max-w-none" style="pointer-events: none;" loop="true"-->
<!--           autoPlay="autoplay" controls muted>-->
<!--      <source src="/src/assets/BlackHole.png" type="image/png"/>-->
<!--    </video>-->
    <img className="absolute" src="/src/assets/BlackHole.png" alt="Image of a black hole">
    <h1
        className="animate-fade-down animate-once animate-ease-in z-30 text-white underline decoration-sky-500/[.33] font-['montserrat'] text-5xl">
      This page has been spaghettified.</h1>
  </header>
</template>

<script>

export default {
  name: 'ErrorPage',
  components: {}
}
</script> 
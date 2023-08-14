<template>
   <header class="relative flex items-center justify-center h-screen overflow-hidden">
     <video class="absolute z-10 w-auto min-w-full min-h-full max-w-none" style="pointer-events: none;" loop="true"
            autoplay="autoplay" controls muted>
       <source src="/src/assets/SpaceBackground.mp4" type="video/mp4" />
     </video>
     <h1
         class="animate-fade-down animate-once animate-ease-in z-30 text-white underline decoration-sky-500/[.33] font-['montserrat'] text-[150px]">
       Task 6</h1>
   </header>
   <section class="bg-center h-max bg-repeat-y bg-cover bg-fixed bg-[url('/src/assets/CarinaNebulaStarBirth.jpg')]">
     <section class="bg-gradient-to-b from-[#000308] to-[#061b40] text-white pt-[4%]">
       <p class="flex justify-center items-center font-['montserrat'] text-5xl font-bold">Task 6 - Spirographs</p>
       <p class="flex justify-left items-center font-['montserrat'] text-xl px-[5%] pt-[3%]">
         For this task, after initialising the elliptical orbits for each planet, we defined a spirograph() function that allowed us to generate the plot for any two planets.
         Assuming constant orbital speed, by evaluating the position of each planet at a given time, we were able to generate an array of start and end points that determined
         a set of Line objects. Finally, we plotted these Lines to get the spirographs below.
       </p>
     </section>
     <section class="flex items-center justify-center h-screen bg-gradient-to-b from-[#061b40] to-transparent to-100% pt-[5%]">
       <section
           class="h-screen grid grid-cols-2 gap-6 grid-rows-2 mx-[2%] my-[2%]">
         <section>
           <p class="flex justify-center items-center font-['montserrat'] text-xl text-white pb-[1%]">Mercury and Venus</p>
           <video class="col-span-1 row-span-1 rounded-lg m-auto" title="vimeo-player"
                  src="/src/assets/Task6MercuryVenus.mp4" loop="true"
                  frameborder="0" allowfullscreen controls></video>
         </section>
         <section>
           <p class="flex justify-center items-center font-['montserrat'] text-xl text-white pb-[1%]">Venus and Earth</p>
           <video class="col-span-1 row-span-1 rounded-lg m-auto" title="vimeo-player"
                src="/src/assets/Task6VenusEarth.mp4" loop="true"
                frameborder="0" allowfullscreen controls></video>
         </section>
         <section>
           <p class="flex justify-center items-center font-['montserrat'] text-xl text-white pt-[4%] pb-[1%]">Saturn and Uranus</p>
           <video class="col-span-1 row-span-1 rounded-lg m-auto" title="vimeo-player"
                src="/src/assets/Task6SaturnUranus.mp4" loop="true"
                frameborder="0" allowfullscreen controls></video>
         </section>
         <section>
           <p class="flex justify-center items-center font-['montserrat'] text-xl text-white pt-[4%] pb-[1%]">Uranus and Pluto</p>
           <video class="col-span-1 row-span-1 rounded-lg m-auto" title="vimeo-player"
                src="/src/assets/Task6UranusPluto.mp4" loop="true"
                frameborder="0" allowfullscreen controls></video>
         </section>
       </section>
       
     </section>
     <section class="bg-center h-max bg-repeat-y bg-cover bg-fixed bg-[url('/src/assets/CarinaNebulaStarBirth.jpg')] pt-[6%]">
       <img src="/src/assets/Task6.png" class="rounded-lg m-auto py-10 max-w-[80%] opacity-75">
     </section>
   </section>
</template>

<script>

 export default {
   name: 'Task6',
   components: {
   }
 }
</script> 
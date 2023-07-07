<template>
    <div class="max-w-7xl mx-auto grid grid-cols-4 gap-4">
        <div class="main-left col-span-1">
            <div class="p-4 bg-white border border-gray-200 text-center rounded-lg">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyoNipuLHTsJiGMY3J8JXdSRlEulM_g7xwMi7O94aNSUv3F8CcIJvJQeeTgmbqG0aB2M&usqp=CAU"
                    class="mb-6 rounded-full">

                <p><strong>Yuyao</strong></p>

                <div class="mt-6 flex space-x-8 justify-around">
                    <p class="text-xs text-gray-500">182 friends</p>
                    <p class="text-xs text-gray-500">120 posts</p>
                </div>
            </div>

            <div class="bg-white border border-gray-200 rounded-lg">
                <div class="p-4">
                    <textarea class="p-4 w-full bg-gray-100 rounded-lg"
                        placeholder="What are you thinking about?"></textarea>
                </div>

                <div class="p-4 border-t border-gray-100 flex justify-between">
                    <a href="#" class="inline-block py-4 px-6 bg-gray-600 text-white rounded-lg">Attach image</a>

                    <a href="#" class="inline-block py-4 px-6 bg-purple-600 text-white rounded-lg">Post</a>
                </div>
            </div>
        </div>



        <div class="main-center col-span-2 space-y-4">
            <div class="p-4 bg-white border border-gray-200 rounded-lg">
                <div class="mb-6 flex items-center justify-between">
                    <div class="flex items-center space-x-6">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyoNipuLHTsJiGMY3J8JXdSRlEulM_g7xwMi7O94aNSUv3F8CcIJvJQeeTgmbqG0aB2M&usqp=CAU"
                            class="w-[40px] rounded-full">

                        <p><strong>Yuyao</strong></p>
                    </div>

                    <p class="text-gray-600">18 minutes ago</p>
                </div>

                <img src="https://uc50b59b7bcc2cf6e9af84cc46ff.previews.dropboxusercontent.com/p/pdf_img/AB9JJOiFqimu9iJXNWBpF60lYRGih8GfhVI1eWijZ3PHGm51u6v6fN5vWZEjiUhM5hA7roaZuhRtoFDK7vl4NWSi_UVwS58L1EEYwiVp7B1NFTlZ1nZ0xQvUqkf36oXR96ThWfBpoex13C_FYdUvzwFZZwg-uETl327UF4EUOORjBrzXsskMFS7W_ti4EhpAbHZkC_yw7WxGuVON5q3eR2xoZ3B6eRP_sO1qUoZQhCXgdvU-bX4I_69PeDQcnvBL0lzQCwToSvdck63ENrhBEQuQB2A75EiarrSwPhQrMf3pPs38zJ7LBZYXSVLgmxNYCNLkcO9E5HfC0QpXsAZ8GHwjqn0bymegWAQBplF4wyN8gagSt3xqdV1nFyHd6Gdkfm4URkhwGqe4q1hpPy6l1RaD5Oz1Kg82bKYwLHngxznypRu5drIv2MEOFy6T92hCNrLmo9dD52zsMYAITWW45W_Ux3YJ2--ya6jUL7Yi1RbWZw/p.png?page=0&amp;auto=format&amp;fit=crop&amp;w=2670&amp;q=80"
                    class="w-full rounded-lg">

                <div class="my-6 flex justify-between">
                    <div class="flex space-x-6">
                        <div class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">
                                </path>
                            </svg>

                            <span class="text-gray-500 text-xs">82 likes</span>
                        </div>

                        <div class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z">
                                </path>
                            </svg>

                            <span class="text-gray-500 text-xs">0 comments</span>
                        </div>
                    </div>

                    <div class="p-4 border-t border-gray-100 flex justify-between">
                        <router-link :to="{ path: '/computational_challenge' }"><button
                                class="inline-block py-1 px-6 bg-purple-600 text-white rounded-lg">View</button></router-link>
                    </div>
                </div>
            </div>


            <div class="p-4 bg-white border border-gray-200 rounded-lg">
                <div class="mb-6 flex items-center justify-between">
                    <div class="flex items-center space-x-6">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyoNipuLHTsJiGMY3J8JXdSRlEulM_g7xwMi7O94aNSUv3F8CcIJvJQeeTgmbqG0aB2M&usqp=CAU"
                            class="w-[40px] rounded-full">

                        <p><strong>Yuyao</strong></p>
                    </div>

                    <p class="text-gray-600">18 minutes ago</p>
                </div>

                <img src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2670&amp;q=80"
                    class="w-full rounded-lg">

                <div class="my-6 flex justify-between">
                    <div class="flex space-x-6">
                        <div class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">
                                </path>
                            </svg>

                            <span class="text-gray-500 text-xs">82 likes</span>
                        </div>

                        <div class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z">
                                </path>
                            </svg>

                            <span class="text-gray-500 text-xs">0 comments</span>
                        </div>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="p-4 bg-white border border-gray-200 rounded-lg">
                <div class="mb-6 flex items-center justify-between">
                    <div class="flex items-center space-x-6">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyoNipuLHTsJiGMY3J8JXdSRlEulM_g7xwMi7O94aNSUv3F8CcIJvJQeeTgmbqG0aB2M&usqp=CAU"
                            class="w-[40px] rounded-full">

                        <p><strong>Yuyao</strong></p>
                    </div>

                    <p class="text-gray-600">18 minutes ago</p>
                </div>

                <p>Lorem ipsum bla bla lbalkjasldkfj aslkjdf lkasjdfkljaslkfjalksjf</p>

                <div class="my-6 flex justify-between">
                    <div class="flex space-x-6">
                        <div class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">
                                </path>
                            </svg>

                            <span class="text-gray-500 text-xs">82 likes</span>
                        </div>

                        <div class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z">
                                </path>
                            </svg>

                            <span class="text-gray-500 text-xs">0 comments</span>
                        </div>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z">
                        </path>
                    </svg>
                </div>
            </div>
        </div>
    </div>

    <div class="main-right col-span-1 space-y-4">
        <PeopleYouMayKnow />
        <Trends />
        <FindFactors />

    </div>

</div></template>

<script>
import PeopleYouMayKnow from '../components/PeopleYouMayKnow.vue'
import Trends from '../components/Trends.vue'
import FindFactors from "@/components/FindFactors.vue";

export default {
    name: 'FeedView',
    components: {
        PeopleYouMayKnow,
        Trends,
        FindFactors,
    }
}
</script>
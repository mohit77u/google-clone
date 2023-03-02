<template>
    <div class="min-h-screen bg-primary-dark py-4">
        <!-- top right links -->
        <div class="top-right flex flex-wrap items-center px-10 md:pl-24 sticky top-0 left-0 py-3">
            <div class="lg:w-1/12 w-4/12">
                <img src="/images/logo-light.png" alt="logo" class="max-w-[100px]">
            </div>
            <div class="lg:w-5/12 w-7/12">
                <form action="/search" method="GET">
                <!-- search bar -->
                    <div class="search-bar bg-white/5 rounded-full px-4 w-full flex items-center">

                        <svg class="w-6 h-6 fill-gray-400" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>

                        <input name="query" type="text" class="py-[10px] px-3 bg-transparent rounded-full w-full focus:outline-none focus:ring-0 text-gray-100" placeholder="Search" v-model="searchText" autocomplete="off">

                        <div class="close pr-2 border-r border-gray-600 cursor-pointer" v-if="searchText.length > 0" @click="ResetSearch()">
                        <svg class="w-6 h-6 fill-gray-400" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                        </div>

                        <svg class="h-7 w-7 cursor-pointer mx-3" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc04" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>

                        <svg class="h-7 w-7 cursor-pointer" focusable="false" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="192" width="192"></rect><g><circle fill="#4285f4" cx="96" cy="104.15" r="28"></circle><path fill="#ea4335" d="M160,72v40.15V136c0,1.69-0.34,3.29-0.82,4.82v0v0c-1.57,4.92-5.43,8.78-10.35,10.35h0v0 c-1.53,0.49-3.13,0.82-4.82,0.82H66l16,16h50h12c4.42,0,8.63-0.9,12.46-2.51c3.83-1.62,7.28-3.96,10.17-6.86 c1.45-1.45,2.76-3.03,3.91-4.74c2.3-3.4,3.96-7.28,4.81-11.44c0.43-2.08,0.65-4.24,0.65-6.45v-12V96.15V84l-6-19l-10.82,2.18 C159.66,68.71,160,70.31,160,72z"></path><path fill="#4285f4" d="M32,72c0-1.69,0.34-3.29,0.82-4.82c1.57-4.92,5.43-8.78,10.35-10.35C44.71,56.34,46.31,56,48,56 h96c1.69,0,3.29,0.34,4.82,0.82c0,0,0,0,0,0L149,45l-17-5l-16-16h-13.44H96h-6.56H76L60,40H48c-17.67,0-32,14.33-32,32v12v20l16,16 V72z"></path><path fill="#34a853" d="M144,40h-12l16.83,16.83c1.23,0.39,2.39,0.93,3.47,1.59c2.16,1.32,3.97,3.13,5.29,5.29 c0.66,1.08,1.2,2.24,1.59,3.47v0L176,84V72C176,54.33,161.67,40,144,40z"></path><path fill="#fbbc04" d="M48,168h39.89l-16-16H48c-8.82,0-16-7.18-16-16v-23.89l-16-16V136C16,153.67,30.33,168,48,168z"></path></g></svg>

                        <button type="submit" class="ml-3 cursor-pointer" :disabled="searchText.length > 0 ? false : true">
                            <svg class="w-6 h-6 fill-blue-300" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                        </button>
                    </div>

                </form>
            </div>
            <div class="lg:w-6/12 w-1/12 flex justify-end items-center gap-3">
                <div class="flex items-center gap-3">
                    <button class="p-2 rounded-full hover:bg-gray-700 inline-block mr-[-5px]">
                        <svg class="fill-gray-100 w-6 h-6" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path><circle cx="12" cy="12" r="3.5"></circle></svg>
                    </button>
                    <button class="p-2 rounded-full hover:bg-gray-700 inline-block">
                        <svg class="fill-gray-100 w-6 h-6" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
                    </button>
                    <button class="w-8 h-8 rounded-full text-white bg-gray-600 font-medium px-1 text-center mx-auto">M</button>
                </div>
            </div>
        </div>

        <!-- main content top -->
        <div class="top-right flex flex-wrap items-center px-10 md:pl-24 border-b border-gray-700 mb-5 mt-2">
            <div class="lg:w-1/12 w-4/12"></div>
            <!-- main centered content buttons -->
            <div class="lg:w-5/12 w-7/12">
                <!-- top buttons -->
                <div class="flex items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                        <button class="py-3 text-gray-300 text-sm border-b-2 border-blue-300 px-2 flex gap-2 items-center">
                            <svg class="w-5 h-5" focusable="false" viewBox="0 0 24 24"><path fill="#34a853" d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"></path><path fill="#ea4335" d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"></path><path fill="#fbbc04" d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"></path><path fill="#4285f4" d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"></path></svg>
                            <span>All</span>
                        </button>

                        <button class="py-3 text-gray-400 text-sm px-2 flex gap-2 items-center">
                            <svg class="w-5 h-5 fill-gray-400" focusable="false" viewBox="0 0 24 24"><path d="M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.25-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.64 0 3 1.25 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12zM12 9h6V7h-6v2"></path></svg>
                            <span>News</span>
                        </button>

                        <button class="py-3 text-gray-400 text-sm px-2 flex gap-2 items-center">
                            <svg class="w-5 h-5 fill-gray-400" focusable="false" viewBox="0 0 24 24"><path d="M21.11 2.89A3.02 3.02 0 0 0 18.95 2h-5.8c-.81 0-1.58.31-2.16.89L7.25 6.63 2.9 10.98a3.06 3.06 0 0 0 0 4.32l5.79 5.8a3.05 3.05 0 0 0 4.32.01l8.09-8.1c.58-.58.9-1.34.9-2.16v-5.8c0-.81-.32-1.59-.89-2.16zM20 10.85c0 .28-.12.54-.32.74l-3.73 3.74-4.36 4.36c-.41.41-1.08.41-1.49 0l-2.89-2.9-2.9-2.9a1.06 1.06 0 0 1 0-1.49l8.1-8.1c.2-.2.46-.3.74-.3l5.8-.01A1.05 1.05 0 0 1 20 5.05v5.8zM16 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2"></path></svg>
                            <span>Shopping</span>
                        </button>

                        <button class="py-3 text-gray-400 text-sm px-2 flex gap-2 items-center">
                            <svg class="w-5 h-5 fill-gray-400" focusable="false" viewBox="0 0 24 24"><path d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5"></path></svg>
                            <span>Images</span>
                        </button>

                        <button class="py-3 text-gray-400 text-sm px-2 flex gap-2 items-center">
                            <svg class="w-5 h-5 fill-gray-400" focusable="false" viewBox="0 0 24 24"><path d="M10 16.5l6-4.5-6-4.5v9zM5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm14.5 2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2h15.2A2.4 2.4 0 0 1 22 4.4v15.1a2.5 2.5 0 0 1-2.5 2.5"></path></svg>
                            <span>Videos</span>
                        </button>

                        
                    </div>

                    <div>
                        <button class="py-3 text-gray-400 text-sm px-2 flex gap-2 items-center">
                            <span>Tools</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="lg:w-6/12 w-1/12 flex justify-end items-center gap-3"></div>
        </div>

         <!-- main content search results -->
         <div class="top-right flex flex-wrap items-center px-10 md:pl-24 my-5">
            <div class="lg:w-1/12 w-4/12"></div>

            <!-- main centered content -->
            <div class="lg:w-5/12 w-7/12">
                
                <!-- search content -->
                <div class="main-search">
                    <p class="text-gray-400 text-sm">About {{ searchData?.searchInformation?.formattedTotalResults }} results ({{ searchData?.searchInformation?.formattedSearchTime }} seconds)</p>
                    <div class="search-content mt-7">
                        <div class="single-search mb-12" v-for="(search, index) in searchData.items" :key="index">
                            <!-- top search -->
                            <div class="top">
                                <div class="flex gap-3 items-start">
                                    <div class="left">
                                        <button class="w-10 h-10 rounded-full text-white bg-gray-600 font-medium px-1 text-center mx-auto">A</button>
                                    </div> 
                                    <div class="right">
                                        <h5 class="text-gray-300 text-sm mb-1">{{search.title}}</h5>
                                        <h6 class="text-xs text-gray-300">{{search.formattedUrl}}</h6>
                                    </div>
                                </div>
                            </div>

                            <!-- main search -->
                            <div class="search-data mt-5">
                                <h2 class="text-blue-300 text-xl hover:underline underline-offset-4 mb-1.5 cursor-pointer">{{search.title}}</h2>
                                <p class="text-gray-300 text-sm leading-[25px]">{{search.snippet}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:w-6/12 w-1/12 flex justify-end items-center gap-3">
                
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SearchPage',
    data(){
        return {
            searchText: this.$route.query.query,
            searchData: '',
        }
    },
    methods: {
        // reset search bar
        ResetSearch(){
            this.searchText = ''
        },
        // get search content call api
        GetContent(){
            axios.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyCME34vDu8JSPNQzO06_EYLiSGf5eChTCI&cx=35226380b99af4ef4&q=' + this.$route.query.query)
                .then((response) => {
                    this.searchData = response.data
                }).catch((err) => {
                    console.log(err)
                })
        },
    },
    mounted() {
        console.log(this.searchText)
        this.GetContent();
    }
}
</script>
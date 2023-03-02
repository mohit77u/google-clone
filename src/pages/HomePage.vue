<template>
   <div class="home min-h-screen bg-primary-dark py-3">
    <!-- top right links -->
    <div class="top-right flex justify-end items-center px-5">
      <div class="flex items-center gap-3">
        <a href="#" class="text-gray-100 text-sm hover:underline underline-offset-2">Gmail</a>
        <a href="#" class="text-gray-100 text-sm hover:underline underline-offset-2">Images</a>
        <button class="p-2 rounded-full hover:bg-gray-700 inline-block ml-3 mr-1">
          <svg class="fill-gray-100 w-6 h-6" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
        </button>
        <button class="w-8 h-8 rounded-full text-white bg-gray-600 font-medium px-1 text-center mx-auto">M</button>
      </div>
    </div>
    <!-- main centered content -->
    <div class="main flex justify-center items-center py-10 min-h-[80vh]">
      <div class="lg:min-w-[600px] md:min-w-[500px] sm:min-w-[400px] min-w-[300px] px-4">
        <form action="/search" method="GET">
          <img src="/images/logo-light.png" alt="logo" class="mx-auto mb-7">
          <!-- search bar -->
          <div class="search-bar border border-gray-600 hover:border-transparent hover:bg-white/5 rounded-full px-4 w-full flex items-center">

            <svg class="w-6 h-6 fill-gray-400" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>

            <input name="query" type="text" class="py-[10px] px-3 bg-transparent rounded-full w-full focus:outline-none focus:ring-0 text-gray-100" placeholder="Search" v-model="searchText" autocomplete="off">

            <div class="close pr-2 border-r border-gray-600 cursor-pointer" v-if="searchText.length > 0" @click="ResetSearch()">
              <svg class="w-6 h-6 fill-gray-400" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
            </div>

            <svg class="h-7 w-7 cursor-pointer mx-3" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc04" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>

            <svg class="h-7 w-7 cursor-pointer" focusable="false" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="192" width="192"></rect><g><circle fill="#4285f4" cx="96" cy="104.15" r="28"></circle><path fill="#ea4335" d="M160,72v40.15V136c0,1.69-0.34,3.29-0.82,4.82v0v0c-1.57,4.92-5.43,8.78-10.35,10.35h0v0 c-1.53,0.49-3.13,0.82-4.82,0.82H66l16,16h50h12c4.42,0,8.63-0.9,12.46-2.51c3.83-1.62,7.28-3.96,10.17-6.86 c1.45-1.45,2.76-3.03,3.91-4.74c2.3-3.4,3.96-7.28,4.81-11.44c0.43-2.08,0.65-4.24,0.65-6.45v-12V96.15V84l-6-19l-10.82,2.18 C159.66,68.71,160,70.31,160,72z"></path><path fill="#4285f4" d="M32,72c0-1.69,0.34-3.29,0.82-4.82c1.57-4.92,5.43-8.78,10.35-10.35C44.71,56.34,46.31,56,48,56 h96c1.69,0,3.29,0.34,4.82,0.82c0,0,0,0,0,0L149,45l-17-5l-16-16h-13.44H96h-6.56H76L60,40H48c-17.67,0-32,14.33-32,32v12v20l16,16 V72z"></path><path fill="#34a853" d="M144,40h-12l16.83,16.83c1.23,0.39,2.39,0.93,3.47,1.59c2.16,1.32,3.97,3.13,5.29,5.29 c0.66,1.08,1.2,2.24,1.59,3.47v0L176,84V72C176,54.33,161.67,40,144,40z"></path><path fill="#fbbc04" d="M48,168h39.89l-16-16H48c-8.82,0-16-7.18-16-16v-23.89l-16-16V136C16,153.67,30.33,168,48,168z"></path></g></svg>
          </div>

          <!-- bottom buttons -->
          <div class="text-center flex justify-center gap-3 my-7">
            <button :disabled="searchText.length > 0 ? false : true" type="submit" class="bg-white/5 cursor-pointer text-gray-200 border border-transparent hover:border-gray-600 text-[14px] px-5 py-2 rounded">Google Search</button>
            <button type="button" class="bg-white/5 text-gray-200 border border-transparent hover:border-gray-600 text-[14px] px-5 py-2 rounded">I'm Feeling Lucky</button>
          </div>

        </form>

        <!-- bottom languages -->
        <div class="text-center flex justify-center gap-3">
          <span class="text-gray-300 text-[13px]">Google offered in:</span>
          <span class="text-blue-400 text-[13px] hover:underline underline-offset-2 cursor-pointer">हिन्दी</span>
          <span class="text-blue-400 text-[13px] hover:underline underline-offset-2 cursor-pointer">বাংলা</span>
          <span class="text-blue-400 text-[13px] hover:underline underline-offset-2 cursor-pointer">తెలుగు</span>
          <span class="text-blue-400 text-[13px] hover:underline underline-offset-2 cursor-pointer">मराठी</span>
          <span class="text-blue-400 text-[13px] hover:underline underline-offset-2 cursor-pointer">தமிழ்</span>
          <span class="text-blue-400 text-[13px] hover:underline underline-offset-2 cursor-pointer">ગુજરાતી</span>
          <span class="text-blue-400 text-[13px] hover:underline underline-offset-2 cursor-pointer">ಕನ್ನಡ</span>
          <span class="text-blue-400 text-[13px] hover:underline underline-offset-2 cursor-pointer">മലയാളം</span>
          <span class="text-blue-400 text-[13px] hover:underline underline-offset-2 cursor-pointer">ਪੰਜਾਬੀ</span>
        </div>
      </div>
    </div>

    <!-- bottom bar -->
    <div class="bottom-bar bg-secondary-dark w-full absolute bottom-0 left-0 z-20">
      <p class="text-gray-400 text-[15px] px-10 py-3 border-b border-gray-700">India</p>

      <!-- left links -->
      <div class="flex justify-between px-10 py-3">
        <div class="flex gap-6">
          <p class="text-gray-400 text-[15px] cursor-pointer hover:underline underline-offset-2">About</p>
          <p class="text-gray-400 text-[15px] cursor-pointer hover:underline underline-offset-2">Advertising</p>
          <p class="text-gray-400 text-[15px] cursor-pointer hover:underline underline-offset-2">Business</p>
          <p class="text-gray-400 text-[15px] cursor-pointer hover:underline underline-offset-2"> How Search works </p>
        </div>

        <!-- right links -->
        <div class="flex gap-7">
          <p class="text-gray-400 text-[15px] cursor-pointer hover:underline underline-offset-2">Privacy</p>
          <p class="text-gray-400 text-[15px] cursor-pointer hover:underline underline-offset-2">Terms</p>
          <p class="text-gray-400 text-[15px] cursor-pointer hover:underline underline-offset-2">Settings</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            searchText: '',
        }
    },
    methods: {
        ResetSearch(){
            this.searchText = ''
        },
    }
}
</script>
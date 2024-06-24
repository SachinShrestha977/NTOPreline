<template>
    <footer class="bg-gray-100 shadow-2xl">
      <transition name="slide-up">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed bottom-5 right-5 z-50 h-9 w-9 rounded-full bg-blue-500 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg cursor-pointer transition-all"
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0"
        y="0"
        viewBox="0 0 466.205 466.205"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
        class="p-3"
      >
        <g>
          <path
            d="m416.193 170.894-.158-.158-162.986-163.2a25.37 25.37 0 0 0-4.267-3.413l-4.693-2.56-3.2-1.067h-2.347a30.095 30.095 0 0 0-10.88 0h-4.693l-3.627 1.92a25.827 25.827 0 0 0-5.547 4.053L50.169 170.736c-10.957 10.87-11.028 28.565-.158 39.522l.158.158c11.045 10.538 28.421 10.538 39.467 0l97.493-97.28c4.206-4.124 10.96-4.058 15.084.149a10.662 10.662 0 0 1 3.049 7.318v317.653c-.001 15.435 12.51 27.948 27.945 27.949 15.435.001 27.947-12.51 27.949-27.945V120.603c.083-5.89 4.925-10.599 10.815-10.516 2.74.039 5.361 1.13 7.318 3.049l97.067 97.28c11.073 10.674 28.607 10.674 39.68 0 10.957-10.87 11.028-28.565.157-39.522z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
            class=""
          ></path>
        </g>
      </svg>
    </button>
  </transition>
      <div
        class="container flex flex-col lg:flex-row justify-between w-full min-w-full"
      >
        <!-- First column -->
        <div
          class="w-full md:w-full lg:w-1/3 bg-[#607d8b] text-gray-50 py-4 px-6"
        >
          <div class="ml-0">
            <div class="flex">
              <div class="w-1/2">
                <p class="text-2xl text-center">Sitemap</p>
                <div class="grid grid-cols-2 gap-3 mt-4">
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-home-2 h-5 w-5 rotate-straight hover:cursor-pointer hover:text-red-500"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#00abfb"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                      <path d="M10 12h4v4h-4z" />
                    </svg>
                    <p
                      class="ml-2 text-sm transition-colors duration-300 hover:text-orange-400 hover:cursor-pointer"
                    >
                      <router-link to="/">Home</router-link>
                    </p>
                  </div>
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-article h-5 w-5 rotate-straight hover:cursor-pointer"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#00abfb"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
                      />
                      <path d="M7 8h10" />
                      <path d="M7 12h10" />
                      <path d="M7 16h10" />
                    </svg>
                    <p
                      class="ml-2 text-sm transition-colors duration-300 hover:text-orange-400 hover:cursor-pointer"
                    >
                      <router-link to="/blogs">Blog</router-link>
                    </p>
                  </div>
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-brand-teams h-5 w-5 rotate-straight hover:cursor-pointer"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#00abfb"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 7h10v10h-10z" />
                      <path d="M6 10h4" />
                      <path d="M8 10v4" />
                      <path
                        d="M8.104 17c.47 2.274 2.483 4 4.896 4a5 5 0 0 0 5 -5v-7h-5"
                      />
                      <path d="M18 18a4 4 0 0 0 4 -4v-5h-4" />
                      <path d="M13.003 8.83a3 3 0 1 0 -1.833 -1.833" />
                      <path d="M15.83 8.36a2.5 2.5 0 1 0 .594 -4.117" />
                    </svg>
                    <p
                      class="ml-2 text-sm transition-colors duration-300 hover:text-orange-400 hover:cursor-pointer"
                    >
                      <router-link to="/team">Teams</router-link>
                    </p>
                  </div>
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-24-hours h-5 w-5 rotate-straight hover:cursor-pointer"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#00abfb"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 13c.325 2.532 1.881 4.781 4 6" />
                      <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2" />
                      <path d="M4 5v4h4" />
                      <path
                        d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2"
                      />
                      <path d="M18 15v2a1 1 0 0 0 1 1h1" />
                      <path d="M21 15v6" />
                    </svg>
                    <p
                      class="ml-2 text-sm transition-colors duration-300 hover:text-orange-400 hover:cursor-pointer"
                    >
                      Services
                    </p>
                  </div>
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-help-octagon h-5 w-5 rotate-straight hover:cursor-pointer"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#00abfb"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M12.802 2.165l5.575 2.389c.48 .206 .863 .589 1.07 1.07l2.388 5.574c.22 .512 .22 1.092 0 1.604l-2.389 5.575c-.206 .48 -.589 .863 -1.07 1.07l-5.574 2.388c-.512 .22 -1.092 .22 -1.604 0l-5.575 -2.389a2.036 2.036 0 0 1 -1.07 -1.07l-2.388 -5.574a2.036 2.036 0 0 1 0 -1.604l2.389 -5.575c.206 -.48 .589 -.863 1.07 -1.07l5.574 -2.388a2.036 2.036 0 0 1 1.604 0z"
                      />
                      <path d="M12 16v.01" />
                      <path
                        d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"
                      />
                    </svg>
                    <p
                      class="ml-2 text-sm transition-colors duration-300 hover:text-orange-400 hover:cursor-pointer"
                    >
                      <router-link to="/FAQ">FAQ</router-link>
                    </p>
                  </div>
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0"
                      y="0"
                      viewBox="0 0 32 32"
                      style="enable-background: new 0 0 512 512"
                      xml:space="preserve"
                      class="h-5 w-5 rotate-straight hover:cursor-pointer"
                    >
                      <g>
                        <path
                          d="M21.817 15.475A7.964 7.964 0 0 0 24 10c0-4.411-3.589-8-8-8s-8 3.589-8 8c0 2.119.834 4.042 2.183 5.475C6.185 17.706 4 22.432 4 29a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1c0-6.569-2.185-11.294-6.183-13.525zM16 4c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zM6.018 28c.157-4.234 1.388-9.193 5.883-11.143 1.2.721 2.6 1.143 4.099 1.143s2.899-.422 4.099-1.143c4.494 1.949 5.726 6.909 5.882 11.143z"
                          fill="#00abfb"
                          opacity="1"
                          data-original="#000000"
                          class=""
                        ></path>
                      </g>
                    </svg>
                    <p
                      class="ml-2 text-sm transition-colors duration-300 hover:text-orange-400 hover:cursor-pointer"
                    >
                      <router-link to="/signin">Login</router-link>
                    </p>
                  </div>
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0"
                      y="0"
                      viewBox="0 0 20 20"
                      style="enable-background: new 0 0 512 512"
                      xml:space="preserve"
                      class="hovered-paths h-5 w-5 rotate-straight hover:cursor-pointer"
                    >
                      <g>
                        <path
                          d="M7 10.5c-3.9 0-7 3.1-7 7v1h14v-1c0-3.9-3.1-7-7-7zm-4.9 6c.5-2.3 2.5-4 4.9-4s4.4 1.7 4.9 4zM7 9.5c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM18.6 6l-3.3 3.3-1.6-1.5-1.4 1.4 3 3L20 7.4z"
                          fill="#00abfb"
                          opacity="1"
                          data-original="#000000"
                          class="hovered-path"
                        ></path>
                      </g>
                    </svg>
                    <p
                      class="ml-2 text-sm transition-colors duration-300 hover:text-orange-400 hover:cursor-pointer"
                    >
                      <router-link to="/signup">Register</router-link>
                    </p>
                  </div>
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-address-book h-6 w-6 rotate-straight hover:cursor-pointer"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#00abfb"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z"
                      />
                      <path d="M10 16h6" />
                      <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M4 8h3" />
                      <path d="M4 12h3" />
                      <path d="M4 16h3" />
                    </svg>
                    <p
                      class="ml-2 text-sm transition-colors duration-300 hover:text-orange-400 hover:cursor-pointer"
                    >
                      <router-link to="/contact">Contact</router-link>
                    </p>
                  </div>
                </div>
              </div>
  
              <div class="h-1000 flex items-center ml-4">
                <div class="h-full"></div>
              </div>
              <div class="w-1/2">
                <p class="text-xl">Subscribe for newsletter and updates</p>
                <p class="text-sm mt-3 text-gray-200">
                  Thank you for subscription. You will be receiving our newsletter
                  and updates
                </p>
                <div class="relative mt-6">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-mail-filled h-5 w-5"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"
                        stroke-width="0"
                        fill="currentColor"
                      />
                      <path
                        d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
                        stroke-width="0"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Email Address"
                    class="pl-10 block w-full px-2 border-b border-gray-100 border-t-0 border-r-0 border-l-0 bg-[#607d8b] outline-none placeholder-gray-100 py-2 focus:outline-none"
                  />
                </div>
                <button
                  class="mt-3 w-full bg-gray-600 hover:cursor-pointer transition-colors duration-300 hover:bg-gray-700 text-gray-100 font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline flex items-center justify-center"
                >
                  SUBSCRIBE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-mail-filled h-5 w-5 ml-2"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"
                      stroke-width="0"
                      fill="currentColor"
                    />
                    <path
                      d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
                      stroke-width="0"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Middle column -->
        <div class="w-full lg:w-1/3 bg-[#455a64] py-4 px-6">
          <div>
            <p class="text-2xl text-gray-50 text-center">Last Blog Posts</p>
            <div>
              <p
                class="text-gray-50 text-sm mt-3 transition-colors duration-300 hover:text-orange-400 hover:cursor-pointer"
              >
                लाभकरको ३६५ दिनः भन्न सजिलो गन्न गाह्रो
              </p>
              <div class="flex items-center">
                <div class="flex items-center mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-calendar h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#00abfb"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"
                    />
                    <path d="M16 3v4" />
                    <path d="M8 3v4" />
                    <path d="M4 11h16" />
                    <path d="M11 15h1" />
                    <path d="M12 15v3" />
                  </svg>
                  <p class="text-gray-50 text-[12px] ml-1">March 31, 2024</p>
                </div>
                <div class="flex items-center mt-2 ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-folder-open h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ff9300"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2"
                    />
                  </svg>
                  <p
                    class="text-gray-50 text-[12px] ml-1 transition-colors duration-300 hover:text-orange-400 hover:cursor-pointer"
                  >
                    Legal Practice in Nepal
                  </p>
                </div>
                <div class="flex items-center mt-2 ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-folder-open h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ff9300"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2"
                    />
                  </svg>
                  <p
                    class="text-gray-50 text-[12px] ml-1 transition-colors duration-300 hover:text-orange-400 hover:cursor-pointer"
                  >
                    Nepal Tax
                  </p>
                </div>
                <div class="flex items-center mt-2 ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-folder-open h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ff9300"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2"
                    />
                  </svg>
                  <p
                    class="text-gray-50 text-[12px] ml-1 transition-colors duration-300 hover:text-orange-400 hover:cursor-pointer"
                  >
                    कर कथा
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-10">
              <p
                class="text-gray-50 text-sm mt-3 transition-colors duration-300 hover:text-orange-400 hover:cursor-pointer"
              >
                थपिएको आयभन्दा त्यही आयका कारण थपिएको कर बढी हुनु हुदैन
              </p>
              <div class="flex items-center">
                <div class="flex items-center mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-calendar h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#00abfb"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"
                    />
                    <path d="M16 3v4" />
                    <path d="M8 3v4" />
                    <path d="M4 11h16" />
                    <path d="M11 15h1" />
                    <path d="M12 15v3" />
                  </svg>
                  <p class="text-gray-50 text-[12px] ml-1">May 02, 2023</p>
                </div>
                <div class="flex items-center mt-2 ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-folder-open h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ff9300"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2"
                    />
                  </svg>
                  <p
                    class="text-gray-50 text-[12px] ml-1 transition-colors duration-300 hover:text-orange-400 hover:cursor-pointer"
                  >
                    TDS Provisions
                  </p>
                </div>
                <div class="flex items-center mt-2 ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-folder-open h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ff9300"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2"
                    />
                  </svg>
                  <p
                    class="text-gray-50 text-[12px] ml-1 transition-colors duration-300 hover:text-orange-400 hover:cursor-pointer"
                  >
                    Legal Practice in Nepal
                  </p>
                </div>
                <div class="flex items-center mt-2 ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-folder-open h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ff9300"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2"
                    />
                  </svg>
                  <p
                    class="text-gray-50 text-[12px] ml-1 transition-colors duration-300 hover:text-orange-400 hover:cursor-pointer"
                  >
                    कर कथा
                  </p>
                </div>
              </div>
            </div>
  
            <div class="mt-10 mb-5">
              <p
                class="text-gray-50 text-sm mt-3 transition-colors duration-300 hover:text-orange-400 hover:cursor-pointer"
              >
                आयकरका अङ्कको तुलना
              </p>
              <div class="flex items-center">
                <div class="flex items-center mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-calendar h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#00abfb"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"
                    />
                    <path d="M16 3v4" />
                    <path d="M8 3v4" />
                    <path d="M4 11h16" />
                    <path d="M11 15h1" />
                    <path d="M12 15v3" />
                  </svg>
                  <p class="text-gray-50 text-[12px] ml-1">June 23, 2023</p>
                </div>
                <div class="flex items-center mt-2 ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-folder-open h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ff9300"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2"
                    />
                  </svg>
                  <p
                    class="text-gray-50 text-[12px] ml-1 transition-colors duration-300 hover:text-orange-400 hover:cursor-pointer"
                  >
                    Legal Practice in Nepal
                  </p>
                </div>
  
                <div class="flex items-center mt-2 ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-folder-open h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ff9300"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2"
                    />
                  </svg>
                  <p
                    class="text-gray-50 text-[12px] ml-1 transition-colors duration-300 hover:text-orange-400 hover:cursor-pointer"
                  >
                    कर कथा
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Third column -->
        <div class="w-full lg:w-1/3 bg-[#607d8b] text-gray-50 py-4 px-6">
          <div class="ml-0 lg:ml-10">
            <h1 class="text-2xl">Nepal Tax Online Pvt. Ltd.</h1>
  
            <div class="flex items-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-map-pin-filled h-5 w-5 text-red-400 mr-2"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                  stroke-width="0"
                  fill="currentColor"
                />
              </svg>
              <p class="text-gray-50 text-sm">Naya Baneshwar-31</p>
            </div>
            <div class="flex items-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-location-filled h-5 w-5 text-red-400 mr-2"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M20.891 2.006l.106 -.006l.13 .008l.09 .016l.123 .035l.107 .046l.1 .057l.09 .067l.082 .075l.052 .059l.082 .116l.052 .096c.047 .1 .077 .206 .09 .316l.005 .106c0 .075 -.008 .149 -.024 .22l-.035 .123l-6.532 18.077a1.55 1.55 0 0 1 -1.409 .903a1.547 1.547 0 0 1 -1.329 -.747l-.065 -.127l-3.352 -6.702l-6.67 -3.336a1.55 1.55 0 0 1 -.898 -1.259l-.006 -.149c0 -.56 .301 -1.072 .841 -1.37l.14 -.07l18.017 -6.506l.106 -.03l.108 -.018z"
                  stroke-width="0"
                  fill="currentColor"
                />
              </svg>
              <p class="text-gray-50 text-sm">Kathmandu, Nepal</p>
            </div>
            <div class="flex items-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-mail-filled h-5 w-5 text-red-400 mr-2"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"
                  stroke-width="0"
                  fill="currentColor"
                />
                <path
                  d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
                  stroke-width="0"
                  fill="currentColor"
                />
              </svg>
              <p
                class="text-gray-50 text-sm hover:cursor-pointer transition-colors duration-300 hover:text-orange-400"
              >
                nepaltaxonline@gmail.com
              </p>
            </div>
            <div class="flex items-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-phone-filled h-5 w-5 text-red-400 mr-2"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z"
                  stroke-width="0"
                  fill="currentColor"
                />
              </svg>
              <p class="text-gray-50 text-sm">977-9860308500</p>
            </div>
  
            <p class="text-lg mt-5">Social Media</p>
            <div class="flex">
              <div
                class="bg-gray-700 rounded-full h-12 w-12 flex items-center justify-center mt-3 hover:bg-[#3b5998]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-facebook-filled h-7 w-7 rotate-hover"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z"
                    stroke-width="0"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                class="bg-gray-700 rounded-full h-12 w-12 flex items-center justify-center mt-3 ml-3 hover:bg-[#1da1f2]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-twitter-filled h-7 w-7 rotate-hover"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z"
                    stroke-width="0"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                class="bg-gray-700 rounded-full h-12 w-12 flex items-center justify-center mt-3 ml-3 hover:bg-red-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-mail-filled h-7 w-7 rotate-hover"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"
                    stroke-width="0"
                    fill="currentColor"
                  />
                  <path
                    d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
                    stroke-width="0"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      
     
    </footer>
  </template>
  <style>
  .rotate-hover:hover {
    transition: transform 0.2s ease-in-out;
    transform: rotate(1800deg);
  }
  .rotate-straight:hover {
    transition: transform 1s ease-in-out;
    transform: rotateY(720deg);
  }
  </style>
  
  <script>
  export default {
    name: "Footer",
    data() {
      return {
        isVisible: false,
      };
    },
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // This makes the scroll smooth
        });
      },
      handleScroll() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
  
        // Check if the scroll position is more than half of the document height
        if (scrollPosition > documentHeight / 2) {
          this.isVisible = true;
        } else {
          this.isVisible = false;
        }
      },
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  };
  </script>
  
  <style scoped>
  /* Define the animation */
  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: transform 1s ease-in-out, opacity 1s ease-in-out;
  }
  
  .slide-up-enter, .slide-up-leave-to /* Start and end state for the leave transition */ {
    transform: translateY(20px); /* Start from below its final position */
    opacity: 0;
  }
  </style>
  
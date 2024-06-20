<template>
    <div
      v-if="hasUserText()"
      class="flex md:flex-row flex-col py-8 p-4 dark:bg-gray-600 h-full overflow-y-auto scroll-hidden"
    >
      <div class="">
        <button
          @click="toggleDropdown"
          type="button"
          data-dropdown-toggle="tab-dropdown"
          class="md:hidden flex items-center space-x-3 p-2 ml-2 w-full text-gray-900 dark:text-gray-300 hover:bg-gray-200 font-medium rounded-lg text-sm px-2 dark:hover:bg-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0"
            y="0"
            viewBox="0 0 45.532 45.532"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
            class="h-6 w-6 dark:fill-white"
          >
            <g>
              <path
                d="M22.766.001C10.194.001 0 10.193 0 22.766s10.193 22.765 22.766 22.765c12.574 0 22.766-10.192 22.766-22.765S35.34.001 22.766.001zm0 6.807a7.53 7.53 0 1 1 .001 15.06 7.53 7.53 0 0 1-.001-15.06zm-.005 32.771a16.708 16.708 0 0 1-10.88-4.012 3.209 3.209 0 0 1-1.126-2.439c0-4.217 3.413-7.592 7.631-7.592h8.762c4.219 0 7.619 3.375 7.619 7.592a3.2 3.2 0 0 1-1.125 2.438 16.702 16.702 0 0 1-10.881 4.013z"
                fill="#000000"
                opacity="1"
                data-original="#000000"
                class="dark:fill-white"
              ></path>
            </g>
          </svg>
          <span class="mr-2 text-[16px] dark:text-white">{{
            activeTab === "general" ? "Profile" : "Security"
          }}</span>
          <svg
            class="w-4 h-4 md:inline"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <!-- Dropdown -->
        <div
          v-if="showDropdown"
          class="hidden z-50 my-4 w-full text-base list-none bg-white rounded divide-y divide-gray-100 shadow-xl dark:bg-gray-800"
          id="tab-dropdown"
        >
          <ul class="py-1" role="none">
            <li
              @click="handleTab('general')"
              :class="{ 'font-bold': activeTab === 'general' }"
            >
              <a
                href="#"
                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div class="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0"
                    y="0"
                    viewBox="0 0 45.532 45.532"
                    style="enable-background: new 0 0 512 512"
                    xml:space="preserve"
                    class="h-6 w-6 dark:fill-white"
                  >
                    <g>
                      <path
                        d="M22.766.001C10.194.001 0 10.193 0 22.766s10.193 22.765 22.766 22.765c12.574 0 22.766-10.192 22.766-22.765S35.34.001 22.766.001zm0 6.807a7.53 7.53 0 1 1 .001 15.06 7.53 7.53 0 0 1-.001-15.06zm-.005 32.771a16.708 16.708 0 0 1-10.88-4.012 3.209 3.209 0 0 1-1.126-2.439c0-4.217 3.413-7.592 7.631-7.592h8.762c4.219 0 7.619 3.375 7.619 7.592a3.2 3.2 0 0 1-1.125 2.438 16.702 16.702 0 0 1-10.881 4.013z"
                        fill="#000000"
                        opacity="1"
                        data-original="#000000"
                        class="dark:fill-white"
                      ></path>
                    </g>
                  </svg>
                  <p class="text-[16px]">Profile</p>
                </div>
              </a>
            </li>
            <li
              @click="handleTab('security')"
              :class="{ 'font-bold': activeTab === 'security' }"
            >
              <a
                href="#"
                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div class="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0"
                    y="0"
                    viewBox="0 0 426.667 426.667"
                    style="enable-background: new 0 0 512 512"
                    xml:space="preserve"
                    class="h-6 w-6 dark:fill-white"
                  >
                    <g>
                      <path
                        d="M133.529 352.213c-12.907-23.147-19.733-51.52-19.733-82.24 0-51.627 44.693-93.653 99.52-93.653 54.933 0 99.52 42.027 99.52 93.653 0 5.867 4.8 10.667 10.667 10.667s10.667-4.8 10.667-10.667c0-63.467-54.187-114.987-120.853-114.987S92.462 206.613 92.462 269.973c0 34.347 7.787 66.453 22.507 92.693 14.4 25.707 24.427 37.547 42.88 56.213 2.133 2.133 4.8 3.2 7.573 3.2 2.667 0 5.44-.96 7.36-3.2 4.267-4.053 4.267-10.88.107-15.04-16.427-16.532-25.6-27.092-39.36-51.626zM94.702 51.413c36.587-19.947 76.48-30.08 118.827-30.08 42.453 0 77.973 9.067 118.827 30.187 1.6.747 3.2 1.173 4.907 1.173 3.84 0 7.573-2.133 9.493-5.76 2.667-5.227.64-11.733-4.587-14.4C298.649 10.027 258.969 0 213.529 0c-45.867 0-89.28 10.987-129.067 32.64-5.227 2.88-7.04 9.28-4.267 14.507 2.88 5.226 9.28 7.04 14.507 4.266z"
                        fill="#000000"
                        opacity="1"
                        data-original="#000000"
                        class="dark:fill-white"
                      ></path>
                      <path
                        d="M212.569 103.04c-68.8 0-131.733 38.507-160.213 98.027-9.707 20.16-14.613 43.413-14.613 69.013 0 28.8 5.12 56.32 15.573 84.373 2.133 5.547 8.213 8.32 13.76 6.293 5.547-2.133 8.32-8.213 6.293-13.76-12.694-34.026-14.187-60.266-14.187-76.906 0-22.4 4.16-42.56 12.48-59.84 24.96-52.267 80.32-85.973 141.013-85.973 85.227 0 154.56 65.387 154.56 145.813 0 22.933-19.947 41.493-44.373 41.493s-44.373-18.667-44.373-41.493c0-34.667-29.44-62.827-65.707-62.827s-65.707 28.16-65.707 62.827c0 42.133 16.427 81.707 46.187 111.36 23.04 22.933 45.227 35.52 79.253 44.8.853.32 1.813.427 2.773.427 4.693 0 8.96-3.093 10.24-7.787 1.6-5.653-1.813-11.52-7.467-13.12-30.08-8.213-49.707-19.307-69.867-39.36-25.707-25.6-39.893-59.84-39.893-96.213 0-22.933 19.947-41.493 44.373-41.493s44.373 18.667 44.373 41.493c0 34.667 29.547 62.827 65.707 62.827s65.707-28.16 65.707-62.827c.001-92.16-78.932-167.147-175.892-167.147z"
                        fill="#000000"
                        opacity="1"
                        data-original="#000000"
                        class="dark:fill-white"
                      ></path>
                      <path
                        d="M403.395 147.2c-21.227-29.653-48.107-52.907-80-69.333-67.2-34.56-152.96-34.453-220.053.213-32 16.533-58.987 40-80.107 69.867-3.413 4.8-2.24 11.413 2.56 14.827 1.92 1.28 4.053 1.92 6.187 1.92 3.307 0 6.613-1.493 8.747-4.373 19.093-27.093 43.52-48.32 72.427-63.253 61.12-31.573 139.307-31.68 200.533-.213 28.8 14.72 53.12 35.84 72.32 62.72 3.413 4.8 10.133 5.867 14.933 2.453 4.8-3.415 5.867-10.028 2.453-14.828zM340.569 359.253c-8.533 1.493-17.173 2.027-22.293 2.027-21.333 0-39.04-5.013-54.08-15.253-25.92-17.6-41.387-45.973-41.387-75.947 0-5.867-4.8-10.667-10.667-10.667s-10.667 4.8-10.667 10.667c0 37.12 18.987 72.107 50.667 93.653 18.453 12.48 40.747 18.88 66.133 18.88 2.987 0 13.547-.107 26.027-2.347 5.76-1.067 9.707-6.613 8.64-12.373s-6.613-9.706-12.373-8.64z"
                        fill="#000000"
                        opacity="1"
                        data-original="#000000"
                        class="dark:fill-white"
                      ></path>
                    </g>
                  </svg>
                  <p class="text-[16px]">Security</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Sidebar -->
      <div class="md:w-1/5 w-full md:p-4 p-2 md:border-r ">
        <ul class="flex flex-col items-center">
          <div
            class="md:flex hidden items-center space-x-2 cursor-pointer rounded-md hover:bg-gray-200 dark:hover:bg-gray-500 p-2 transition-colors duration-300"
            @click="activeTab = 'general'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0"
              y="0"
              viewBox="0 0 45.532 45.532"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              class="h-6 w-6 dark:fill-white"
            >
              <g>
                <path
                  d="M22.766.001C10.194.001 0 10.193 0 22.766s10.193 22.765 22.766 22.765c12.574 0 22.766-10.192 22.766-22.765S35.34.001 22.766.001zm0 6.807a7.53 7.53 0 1 1 .001 15.06 7.53 7.53 0 0 1-.001-15.06zm-.005 32.771a16.708 16.708 0 0 1-10.88-4.012 3.209 3.209 0 0 1-1.126-2.439c0-4.217 3.413-7.592 7.631-7.592h8.762c4.219 0 7.619 3.375 7.619 7.592a3.2 3.2 0 0 1-1.125 2.438 16.702 16.702 0 0 1-10.881 4.013z"
                  fill="#000000"
                  opacity="1"
                  data-original="#000000"
                  class="dark:fill-white"
                ></path>
              </g>
            </svg>
            <li
              class="cursor-pointer dark:text-gray-100"
              :class="{ 'font-bold': activeTab === 'general' }"
            >
              General
            </li>
          </div>
  
          <div
            class="md:flex hidden items-center space-x-2 cursor-pointer rounded-md hover:bg-gray-200 dark:hover:bg-gray-500 p-2 transition-colors duration-300"
            @click="activeTab = 'security'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0"
              y="0"
              viewBox="0 0 426.667 426.667"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              class="h-6 w-6 dark:fill-white"
            >
              <g>
                <path
                  d="M133.529 352.213c-12.907-23.147-19.733-51.52-19.733-82.24 0-51.627 44.693-93.653 99.52-93.653 54.933 0 99.52 42.027 99.52 93.653 0 5.867 4.8 10.667 10.667 10.667s10.667-4.8 10.667-10.667c0-63.467-54.187-114.987-120.853-114.987S92.462 206.613 92.462 269.973c0 34.347 7.787 66.453 22.507 92.693 14.4 25.707 24.427 37.547 42.88 56.213 2.133 2.133 4.8 3.2 7.573 3.2 2.667 0 5.44-.96 7.36-3.2 4.267-4.053 4.267-10.88.107-15.04-16.427-16.532-25.6-27.092-39.36-51.626zM94.702 51.413c36.587-19.947 76.48-30.08 118.827-30.08 42.453 0 77.973 9.067 118.827 30.187 1.6.747 3.2 1.173 4.907 1.173 3.84 0 7.573-2.133 9.493-5.76 2.667-5.227.64-11.733-4.587-14.4C298.649 10.027 258.969 0 213.529 0c-45.867 0-89.28 10.987-129.067 32.64-5.227 2.88-7.04 9.28-4.267 14.507 2.88 5.226 9.28 7.04 14.507 4.266z"
                  fill="#000000"
                  opacity="1"
                  data-original="#000000"
                  class="dark:fill-white"
                ></path>
                <path
                  d="M212.569 103.04c-68.8 0-131.733 38.507-160.213 98.027-9.707 20.16-14.613 43.413-14.613 69.013 0 28.8 5.12 56.32 15.573 84.373 2.133 5.547 8.213 8.32 13.76 6.293 5.547-2.133 8.32-8.213 6.293-13.76-12.694-34.026-14.187-60.266-14.187-76.906 0-22.4 4.16-42.56 12.48-59.84 24.96-52.267 80.32-85.973 141.013-85.973 85.227 0 154.56 65.387 154.56 145.813 0 22.933-19.947 41.493-44.373 41.493s-44.373-18.667-44.373-41.493c0-34.667-29.44-62.827-65.707-62.827s-65.707 28.16-65.707 62.827c0 42.133 16.427 81.707 46.187 111.36 23.04 22.933 45.227 35.52 79.253 44.8.853.32 1.813.427 2.773.427 4.693 0 8.96-3.093 10.24-7.787 1.6-5.653-1.813-11.52-7.467-13.12-30.08-8.213-49.707-19.307-69.867-39.36-25.707-25.6-39.893-59.84-39.893-96.213 0-22.933 19.947-41.493 44.373-41.493s44.373 18.667 44.373 41.493c0 34.667 29.547 62.827 65.707 62.827s65.707-28.16 65.707-62.827c.001-92.16-78.932-167.147-175.892-167.147z"
                  fill="#000000"
                  opacity="1"
                  data-original="#000000"
                  class="dark:fill-white"
                ></path>
                <path
                  d="M403.395 147.2c-21.227-29.653-48.107-52.907-80-69.333-67.2-34.56-152.96-34.453-220.053.213-32 16.533-58.987 40-80.107 69.867-3.413 4.8-2.24 11.413 2.56 14.827 1.92 1.28 4.053 1.92 6.187 1.92 3.307 0 6.613-1.493 8.747-4.373 19.093-27.093 43.52-48.32 72.427-63.253 61.12-31.573 139.307-31.68 200.533-.213 28.8 14.72 53.12 35.84 72.32 62.72 3.413 4.8 10.133 5.867 14.933 2.453 4.8-3.415 5.867-10.028 2.453-14.828zM340.569 359.253c-8.533 1.493-17.173 2.027-22.293 2.027-21.333 0-39.04-5.013-54.08-15.253-25.92-17.6-41.387-45.973-41.387-75.947 0-5.867-4.8-10.667-10.667-10.667s-10.667 4.8-10.667 10.667c0 37.12 18.987 72.107 50.667 93.653 18.453 12.48 40.747 18.88 66.133 18.88 2.987 0 13.547-.107 26.027-2.347 5.76-1.067 9.707-6.613 8.64-12.373s-6.613-9.706-12.373-8.64z"
                  fill="#000000"
                  opacity="1"
                  data-original="#000000"
                  class="dark:fill-white"
                ></path>
              </g>
            </svg>
            <li
              class="dark:text-gray-100"
              :class="{ 'font-bold': activeTab === 'security' }"
            >
              Security
            </li>
          </div>
        </ul>
      </div>
      <!-- Main Content -->
      <div class="md:w-4/5 w-full p-4">
        <component :is="activeTabComponent"></component>
      </div>
    </div>
    <div v-else class="dark:bg-gray-600">
      <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
    <div class="bg-white dark:bg-gray-900 p-10 rounded-lg shadow-lg text-center max-w-md">
      <p class="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-4">
        Please Login First!!
      </p>
      <p class="text-gray-700 dark:text-gray-50 mb-4">
        You will automatically be redirected to the login page in <span class="font-bold">{{ countdown }}</span> seconds.
      </p>
      <p class="text-gray-700 dark:text-gray-50">
        Click 
        <span
          @click="goToSignIn"
          class="text-blue-700 underline hover:cursor-pointer dark:text-blue-500 dark:hover:text-blue-600"
        >Here</span>
        to Login....
      </p>
    </div>
    </div>
    </div>
  </template>
  
  <script>
 import General from "./General.vue";
 import Security from "./Security.vue";
  
  export default {
    data() {
      return {
        countdown: 5,
        activeTab: "general",
        showDropdown: true,
      };
    },
    computed: {
      activeTabComponent() {
        return this.activeTab === "general" ? General : Security;
      },
    },
    methods: {
      hasUserText() {
        return localStorage.getItem("userText");
      },
      goToSignIn() {
        this.$router.push("/signIn");
      },
  
      handleTab(tab) {
        this.activeTab = tab;
      },
      startCountdown() {
      const interval = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown -= 1;
        } else {
          clearInterval(interval);
          this.goToSignIn();
        }
      }, 1000);
    },
    
    },
    components: {
      General,
      Security,
    },
    mounted() {
      if(!this.hasUserText()) {
    this.startCountdown();
  }
}
  };
  </script>
  
  <style>
  .scroll-hidden {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  
  .scroll-hidden::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  </style>
  
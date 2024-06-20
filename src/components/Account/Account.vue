<template>
  <div
    v-if="hasUserText()"
    class="flex flex-col md:flex-row py-8 p-4 dark:bg-gray-600 h-screen overflow-y-auto scroll-hidden"
  >
    <!-- Sidebar -->
    <div class="md:w-1/5 w-full p-3 border-b md:border-b-0 md:border-r">
      <ul class="flex md:flex-col justify-between">
        <div
          class="flex items-center space-x-2 cursor-pointer rounded-md hover:bg-gray-200 dark:hover:bg-gray-500 w-full md:w-auto p-2 transition-colors duration-300"
          @click="activeTab = 'article'"
        >
          <!-- SVG for Bookmarked Article -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0"
            y="0"
            viewBox="0 0 24 24"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
            fill-rule="evenodd"
            class="h-6 w-6"
          >
            <g>
              <path
                d="M21.75 5v14A3.75 3.75 0 0 1 18 22.75H6A3.75 3.75 0 0 1 2.25 19V5A3.75 3.75 0 0 1 6 1.25h12A3.75 3.75 0 0 1 21.75 5zm-1.5 0A2.25 2.25 0 0 0 18 2.75H6A2.25 2.25 0 0 0 3.75 5v14A2.25 2.25 0 0 0 6 21.25h12A2.25 2.25 0 0 0 20.25 19z"
                fill="#000000"
                opacity="1"
                data-original="#000000"
                class="dark:fill-white"
              ></path>
              <path
                d="M12 5.25a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5zM17 9.25a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5zM17 13.25a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5zM17 17.25a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5z"
                fill="#000000"
                opacity="1"
                data-original="#000000"
                class="dark:fill-white"
              ></path>
            </g>
          </svg>
          <li
            class="cursor-pointer dark:text-gray-100"
            :class="{ 'font-bold': activeTab === 'article' }"
          >
            Bookmarked Article
          </li>
        </div>

        <div
          class="flex items-center space-x-2 cursor-pointer rounded-md hover:bg-gray-200 dark:hover:bg-gray-500 w-full md:w-auto p-2 transition-colors duration-300"
          @click="activeTab = 'highlights'"
        >
          <!-- SVG for Highlights -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0"
            y="0"
            viewBox="0 0 682.667 682.667"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
            class="h-6 w-6"
          >
            <g>
              <defs>
                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                  <path
                    d="M0 512h512V0H0Z"
                    fill="#000000"
                    opacity="1"
                    data-original="#000000"
                    class="dark:fill-white"
                  ></path>
                </clipPath>
              </defs>
              <g
                clip-path="url(#a)"
                transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
              >
                <path
                  d="m0 0 43.212-46.814c14.433-15.634 14.49-39.716.133-55.419l-230.61-252.23-128 128L-57.309 2.832C-40.625 17.661-15.14 16.402 0 0Z"
                  style="
                    stroke-width: 30;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 10;
                    stroke-dasharray: none;
                    stroke-opacity: 1;
                  "
                  transform="translate(443.265 458.822)"
                  fill="none"
                  stroke="#000000"
                  stroke-width="30"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-dasharray="none"
                  stroke-opacity=""
                  data-original="#000000"
                  class="dark:fill-white"
                ></path>
                <path
                  d="m0 0-73-72h97l24 24z"
                  style="
                    stroke-width: 30;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 10;
                    stroke-dasharray: none;
                    stroke-opacity: 1;
                  "
                  transform="translate(88 112.36)"
                  fill="none"
                  stroke="#000000"
                  stroke-width="30"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-dasharray="none"
                  stroke-opacity=""
                  data-original="#000000"
                  class="dark:fill-white"
                ></path>
                <path
                  d="M0 0c14.662 14.662 36.189 20.953 56.928 15.768 18.982-4.746 39.456.616 53.719 14.88L120 40-8 168l-9.353-9.352a56.57 56.57 0 0 1-14.879-53.72C-27.203 84.812-32.884 63.116-48 48c-.1-.1-1.36 1.36 48-48Z"
                  style="
                    stroke-width: 30;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 10;
                    stroke-dasharray: none;
                    stroke-opacity: 1;
                  "
                  transform="translate(136 64.36)"
                  fill="none"
                  stroke="#000000"
                  stroke-width="30"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-dasharray="none"
                  stroke-opacity=""
                  data-original="#000000"
                  class="dark:fill-white"
                ></path>
                <path
                  d="M0 0h144"
                  style="
                    stroke-width: 30;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 10;
                    stroke-dasharray: none;
                    stroke-opacity: 1;
                  "
                  transform="translate(272 40.36)"
                  fill="none"
                  stroke="#000000"
                  stroke-width="30"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-dasharray="none"
                  stroke-opacity=""
                  data-original="#000000"
                  class="dark:fill-white"
                ></path>
              </g>
            </g>
          </svg>
          <li
            class="dark:text-gray-100"
            :class="{ 'font-bold': activeTab === 'highlights' }"
          >
            Highlights
          </li>
        </div>
      </ul>
    </div>
    <!-- Main Content -->
    <div class="md:w-4/5 w-full md:p-4 md:pt-0 pt-5">
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

import Article from "./Article.vue";
import Highlights from "./Highlights.vue";

export default {
  data() {
    return {
      countdown: 5,

      activeTab: "article",
    };
  },
  computed: {
    activeTabComponent() {
      return this.activeTab === "article" ? Article : Highlights;
    },
  },
  methods: {
    hasUserText() {
      return localStorage.getItem("userText");
    },
    goToSignIn() {
      this.$router.push("/signIn");
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
    Article,
    Highlights,
  },
  mounted() {
    if (!this.hasUserText()) {
      this.startCountdown();
    }  },
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

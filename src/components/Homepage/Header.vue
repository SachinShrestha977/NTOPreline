<template>
    <!-- <Head title="Welcome" /> -->
  
    <header class="from-theme-1 to-theme-2 group/mainmenu">
      <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-6 px-4 py-2.5">
          <a href="https://nepaltaxonline.com/" class="flex items-center">
            <img
              src="https://nepaltaxonline.com/themes/nepaltaxonline/img/logo-header.png"
              class="mr-3 h-9"
              alt="Nepal Tax Logo"
            />
            <!--                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>-->
          </a>
          <div class="flex items-center">
            <button
              type="button"
              data-dropdown-toggle="language-dropdown"
              class="md:inline-flex hidden items-center text-gray-900 dark:text-gray-300 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 lg:px-4 py-2 lg:py-2.5 mr-2 md:mr-3 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              <svg
                class="w-5 h-5 md:mr-2 rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 3900 3900"
              >
                <circle cx="12" cy="12" r="11" />
                <path fill="#b22234" d="M0 0h7410v3900H0z" />
                <path
                  d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                  stroke="#fff"
                  stroke-width="300"
                />
                <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                <g fill="#fff">
                  <g id="d">
                    <g id="c">
                      <g id="e">
                        <g id="b">
                          <path
                            id="a"
                            d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                          />
                          <use xlink:href="#a" y="420" />
                          <use xlink:href="#a" y="840" />
                          <use xlink:href="#a" y="1260" />
                        </g>
                        <use xlink:href="#a" y="1680" />
                      </g>
                      <use xlink:href="#b" x="247" y="210" />
                    </g>
                    <use xlink:href="#c" x="494" />
                  </g>
                  <use xlink:href="#d" x="988" />
                  <use xlink:href="#c" x="1976" />
                  <use xlink:href="#e" x="2470" />
                </g>
              </svg>
              <span class="mr-2 md:inline dark:text-white">English</span>
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
              class="hidden z-50 my-4 w-48 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-800"
              id="language-dropdown"
            >
              <ul class="py-1" role="none">
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div class="inline-flex items-center">
                      <svg
                        class="h-2 w-rounded-full mr-2"
                        xmlns="http:/ /www.w3.org/2000/svg"
                        id="flag-icon-css-us"
                        viewBox="0 0 512 512"
                      >
                        <g fill-rule="evenodd">
                          <g stroke-width="1pt">
                            <path
                              fill="#bd3d44"
                              d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                              transform="scale(3.9385)"
                            />
                            <path
                              fill="#fff"
                              d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                              transform="scale(3.9385)"
                            />
                          </g>
                          <path
                            fill="#192f5d"
                            d="M0 0h98.8v70H0z"
                            transform="scale(3.9385)"
                          />
                          <path
                            fill="#fff"
                            d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                            transform="scale(3.9385)"
                          />
                        </g>
                      </svg>
                      English (US)
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div class="inline-flex items-center">
                      <svg
                        class="h-3.5 w-3.5 rounded-full mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-de"
                        viewBox="0 0 512 512"
                      >
                        <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                        <path d="M0 0h512v170.7H0z" />
                        <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                      </svg>
                      Deutsch
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div class="inline-flex items-center">
                      <svg
                        class="h-3.5 w-3.5 rounded-full mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-it"
                        viewBox="0 0 512 512"
                      >
                        <g fill-rule="evenodd" stroke-width="1pt">
                          <path fill="#fff" d="M0 0h512v512H0z" />
                          <path fill="#009246" d="M0 0h170.7v512H0z" />
                          <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                        </g>
                      </svg>
                      Italiano
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div class="inline-flex items-center">
                      <svg
                        class="h-3.5 w-3.5 rounded-full mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        id="flag-icon-css-cn"
                        viewBox="0 0 512 512"
                      >
                        <defs>
                          <path
                            id="a"
                            fill="#ffde00"
                            d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                          />
                        </defs>
                        <path fill="#de2910" d="M0 0h512v512H0z" />
                        <use
                          width="30"
                          height="20"
                          transform="matrix(76.8 0 0 76.8 128 128)"
                          xlink:href="#a"
                        />
                        <use
                          width="30"
                          height="20"
                          transform="rotate(-121 142.6 -47) scale(25.5827)"
                          xlink:href="#a"
                        />
                        <use
                          width="30"
                          height="20"
                          transform="rotate(-98.1 198 -82) scale(25.6)"
                          xlink:href="#a"
                        />
                        <use
                          width="30"
                          height="20"
                          transform="rotate(-74 272.4 -114) scale(25.6137)"
                          xlink:href="#a"
                        />
                        <use
                          width="30"
                          height="20"
                          transform="matrix(16 -19.968 19.968 16 256 230.4)"
                          xlink:href="#a"
                        />
                      </svg>
                      中文 (繁體)
                    </div>
                  </a>
                </li>
              </ul>
            </div>
  
            <div class="md:flex hidden">
              <ThemeSwitcher />
            </div>
            <a
              class="md:flex hidden text-sm font-medium text-primary-600 ml-5 dark:text-white hover:underline"
            >
              <router-link to="/signUp">Sign Up</router-link>
            </a>
  
            <span
              class="md:flex hidden mr-0 ml-2 w-px h-5 bg-gray-200 dark:bg-gray-600 lg:inline lg:mr-3 lg:ml-5"
            ></span>
            <a
              href="#"
              class="md:inline-flex hidden items-center p-2 text-sm font-medium text-gray-500 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <svg
                class="w-4 h-4"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="md:inline-flex hidden items-center p-2 text-sm font-medium text-gray-500 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <svg
                class="w-4 h-4"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="md:inline-flex hidden items-center p-2 text-sm font-medium text-gray-500 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <svg
                class="w-4 h-4"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="md:inline-flex hidden items-center p-2 text-sm font-medium text-gray-500 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <svg
                class="w-4 h-4"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                />
              </svg>
            </a>
            <span
              class="md:flex hidden mr-0 ml-2 w-px h-5 bg-gray-200 dark:bg-gray-600 lg:inline lg:mr-3 lg:ml-5"
            ></span>
            <div class="flex items-center">
              <button
                type="button"
                data-dropdown-toggle="profile-dropdown"
                class="inline-flex items-center text-gray-900 dark:text-gray-300 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 lg:px-4 py-2 lg:py-2.5 mr-2 md:mr-3 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                <img
                  src="https://cdn-icons-png.freepik.com/256/6530/6530946.png?semt=ais_hybrid"
                  class="rounded-full h-6 w-6"
                />
  
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
              <div
                class="hidden z-50 my-4 w-48 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-800"
                id="profile-dropdown"
              >
                <ul class="py-1" role="none">
                  <router-link to="/myProfile">
                    <li>
                      <a
                        href="#"
                        class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <div class="inline-flex items-center space-x-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0"
                            y="0"
                            viewBox="0 0 45.532 45.532"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            class="h-5 w-5"
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
  
                          <p>My Profile</p>
                        </div>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/account">
                    <li>
                      <a
                        href="#"
                        class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <div class="inline-flex items-center space-x-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0"
                            y="0"
                            viewBox="0 0 32 32"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            class="w-5 h-5"
                          >
                            <g>
                              <path
                                d="M29.21 11.84a3.92 3.92 0 0 1-3.09-5.3 1.84 1.84 0 0 0-.55-2.07 14.75 14.75 0 0 0-4.4-2.55 1.85 1.85 0 0 0-2.09.58 3.91 3.91 0 0 1-6.16 0 1.85 1.85 0 0 0-2.09-.58 14.82 14.82 0 0 0-4.1 2.3 1.86 1.86 0 0 0-.58 2.13 3.9 3.9 0 0 1-3.25 5.36 1.85 1.85 0 0 0-1.62 1.49A14.14 14.14 0 0 0 1 16a14.32 14.32 0 0 0 .19 2.35 1.85 1.85 0 0 0 1.63 1.55A3.9 3.9 0 0 1 6 25.41a1.82 1.82 0 0 0 .51 2.18 14.86 14.86 0 0 0 4.36 2.51 2 2 0 0 0 .63.11 1.84 1.84 0 0 0 1.5-.78 3.87 3.87 0 0 1 3.2-1.68 3.92 3.92 0 0 1 3.14 1.58 1.84 1.84 0 0 0 2.16.61 15 15 0 0 0 4-2.39 1.85 1.85 0 0 0 .54-2.11 3.9 3.9 0 0 1 3.13-5.39 1.85 1.85 0 0 0 1.57-1.52A14.5 14.5 0 0 0 31 16a14.35 14.35 0 0 0-.25-2.67 1.83 1.83 0 0 0-1.54-1.49zM21 16a5 5 0 1 1-5-5 5 5 0 0 1 5 5z"
                                data-name="Layer 2"
                                fill="#000000"
                                opacity="1"
                                data-original="#000000"
                                class="dark:fill-white"
                              ></path>
                            </g>
                          </svg>
                          <p>Account</p>
                        </div>
                      </a>
                    </li>
                  </router-link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
  
      <nav
        class="bg-white border-gray-200 dark:bg-gray-700 dark:border-gray-600 border-y"
      >


      <div class="sm:hidden">
        <button
          type="button"
          class="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
          data-hs-collapse="#navbar-collapse-with-animation"
          aria-controls="navbar-collapse-with-animation"
          aria-label="Toggle navigation"
        >
          <svg
            class="hs-collapse-open:hidden flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
          <svg
            class="hs-collapse-open:block hidden flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
        


      <div
      id="navbar-collapse-with-animation"
      class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block mx-20 mt-4 md:flex justify-between"
    >
      <div
        class="flex flex-col sm:flex-row sm:items-center py-2 md:py-0 sm:ps-7"
      >

        <a
          class="py-3 ps-px sm:px-3 font-medium text-[16px] hover:text-base-blue dark:text-gray-100 dark:hover"
          href="#"
          aria-current="page"
        >
        <router-link to="/">

          <p class="custom-underline">
           Home
          </p>
        </router-link>

        </a>

        <a
        
          class="py-3 ps-px sm:px-3 font-medium text-[16px] hover:text-base-blue dark:text-gray-100 dark:hover"
          href="#"
          aria-current="page"
        >
        <router-link to="/article">

          <p class="custom-underline">
           Article
          </p>
        </router-link>

        </a>

        <div
          class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] py-3 ps-px sm:px-3"
        >
          <button
            type="button"
            class="flex items-center w-full hover:text-base-blue font-medium text-[16px] dark:text-gray-100 dark:hover"
          >
            <p class="custom-underline">
              Company
            </p>

            <svg
              class="flex-shrink-0 ms-2 size-4 text-gray-500 dark:text-gray-100 dark:hover"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div
            class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-[1000px] hidden z-50 bg-white sm:shadow-md rounded-lg p-2 dark:bg-neutral-900 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5"
          >
          <div
                      class="grid py-2 px-4 rounded-2xl mx-auto max-w-screen-xl text-gray-900 dark:text-white md:grid-cols-2 lg:grid-cols-3 md:px-6"
                    >
                      <ul class="col-span-2 md:col-span-1">
                        <li>
                          <a
                            href="#"
                            class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <svg
                              class="mr-2 w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <div>
                              <div class="font-semibold">Online Stores</div>
                              <span
                                class="text-sm font-light text-gray-500 dark:text-gray-400"
                                >Connect with third-party tools that you're
                                already using.</span
                              >
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <svg
                              class="mr-2 w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <div>
                              <div class="font-semibold">Segmentation</div>
                              <span
                                class="text-sm font-light text-gray-500 dark:text-gray-400"
                                >Connect with third-party tools that you're
                                already using.</span
                              >
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <svg
                              class="mr-2 w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <div>
                              <div class="font-semibold">Marketing CRM</div>
                              <span
                                class="text-sm font-light text-gray-500 dark:text-gray-400"
                                >Connect with third-party tools that you're
                                already using.</span
                              >
                            </div>
                          </a>
                        </li>
                      </ul>
                      <ul class="col-span-2 md:col-span-1">
                        <li>
                          <a
                            href="#"
                            class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <svg
                              class="mr-2 w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <div>
                              <div class="font-semibold">
                                Audience Management
                              </div>
                              <span
                                class="text-sm font-light text-gray-500 dark:text-gray-400"
                                >Connect with third-party tools that you're
                                already using.</span
                              >
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <svg
                              class="mr-2 w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <div>
                              <div class="font-semibold">Creative Tools</div>
                              <span
                                class="text-sm font-light text-gray-500 dark:text-gray-400"
                                >Connect with third-party tools that you're
                                already using.</span
                              >
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <svg
                              class="mr-2 w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <div>
                              <div class="font-semibold">
                                Marketing Automation
                              </div>
                              <span
                                class="text-sm font-light text-gray-500 dark:text-gray-400"
                                >Connect with third-party tools that you're
                                already using.</span
                              >
                            </div>
                          </a>
                        </li>
                      </ul>
                      <ul class="hidden lg:block">
                        <li>
                          <a
                            href="#"
                            class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <svg
                              class="mr-2 w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <div>
                              <div class="font-semibold">Dynamic Content</div>
                              <span
                                class="text-sm font-light text-gray-500 dark:text-gray-400"
                                >Connect with third-party tools that you're
                                already using.</span
                              >
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <svg
                              class="mr-2 w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <div>
                              <div class="font-semibold">Integrations</div>
                              <span
                                class="text-sm font-light text-gray-500 dark:text-gray-400"
                                >Connect with third-party tools that you're
                                already using.</span
                              >
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <svg
                              class="mr-2 w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <div>
                              <div class="font-semibold">Careers</div>
                              <span
                                class="text-sm font-light text-gray-500 dark:text-gray-400"
                                >Connect with third-party tools that you're
                                already using.</span
                              >
                            </div>
                          </a>
                        </li>
                      </ul>
                      <div
                        class="col-span-2 p-4 lg:col-span-3 bg-gray-100 dark:bg-gray-700"
                      >
                        <h2
                          class="mb-2 font-semibold text-gray-900 dark:text-white"
                        >
                          Our brands
                        </h2>
                        <p
                          class="mb-2 font-light text-gray-500 dark:text-gray-300"
                        >
                          At JBS Foods, we pride ourselves on a portfolio of
                          brands that cater to a variety of preferences.
                        </p>
                        <a
                          href="#"
                          class="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-400"
                        >
                          Explore our brands
                          <svg
                            class="ml-1 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
          </div>
        </div>
        

       

       

        

      
        <!-- Services -->

        <div
          class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] py-3 ps-px sm:px-3"
        >
          <button
            type="button"
            class="flex items-center w-full hover:text-base-blue font-medium text-[16px] dark:text-gray-100 dark:hover"
          >
            <p class="custom-underline">
Services            </p>

            <svg
              class="flex-shrink-0 ms-2 size-4 text-gray-500 dark:text-gray-100 dark:hover"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div
            class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-[1000px] hidden z-50 bg-white sm:shadow-md rounded-lg p-2 dark:bg-neutral-900 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5"
          >


          <div
                      class="grid py-4 px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-6"
                    >
                      <ul class="col-span-2 md:col-span-1">
                        <li>
                          <a
                            href="#"
                            class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <svg
                              class="mr-2 w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <div>
                              <div class="font-semibold">
                                Tax Preparation Services
                              </div>
                              <span
                                class="text-sm font-light text-gray-500 dark:text-gray-400"
                                >Connect users with professionals who specialize
                                in domestic and international tax
                                preparation.</span
                              >
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <svg
                              class="mr-2 w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <div>
                              <div class="font-semibold">
                                Tax Software Solutions
                              </div>
                              <span
                                class="text-sm font-light text-gray-500 dark:text-gray-400"
                                >Offer access to or sell software that
                                simplifies tax calculations, tax return
                                preparations, and filings.</span
                              >
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <svg
                              class="mr-2 w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <div>
                              <div class="font-semibold">
                                Legal and Financial Consultation
                              </div>
                              <span
                                class="text-sm font-light text-gray-500 dark:text-gray-400"
                              >
                                Create a platform for booking consultations with
                                tax lawyers and financial advisors.</span
                              >
                            </div>
                          </a>
                        </li>
                      </ul>
                      <ul class="col-span-2 md:col-span-1">
                        <li>
                          <a
                            href="#"
                            class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <svg
                              class="mr-2 w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <div>
                              <div class="font-semibold">
                                Educational Resources
                              </div>
                              <span
                                class="text-sm font-light text-gray-500 dark:text-gray-400"
                                >Sell or provide access to webinars, online
                                courses, eBooks, and workshops.</span
                              >
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <svg
                              class="mr-2 w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <div>
                              <div class="font-semibold">
                                Document Templates and Toolkits
                              </div>
                              <span
                                class="text-sm font-light text-gray-500 dark:text-gray-400"
                                >Offer a variety of document templates tailored
                                to specific countries' requirements..</span
                              >
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <svg
                              class="mr-2 w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <div>
                              <div class="font-semibold">
                                Accounting and Bookkeeping Services
                              </div>
                              <span
                                class="text-sm font-light text-gray-500 dark:text-gray-400"
                              >
                                List services from professionals who can assist
                                with relevant tax laws.</span
                              >
                            </div>
                          </a>
                        </li>
                      </ul>
                      <ul class="hidden lg:block">
                        <li>
                          <a
                            href="#"
                            class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <svg
                              class="mr-2 w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <div>
                              <div class="font-semibold">
                                Tax Updates Subscription Service
                              </div>
                              <span
                                class="text-sm font-light text-gray-500 dark:text-gray-400"
                                >Provide a subscription service that offers
                                regular updates on tax laws.</span
                              >
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <svg
                              class="mr-2 w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <div>
                              <div class="font-semibold">
                                Forum or Community Access
                              </div>
                              <span
                                class="text-sm font-light text-gray-500 dark:text-gray-400"
                                >Charge a membership fee for access to a
                                community or forum where users can share
                                experiences.</span
                              >
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <svg
                              class="mr-2 w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <div>
                              <div class="font-semibold">Tax Health Checks</div>
                              <span
                                class="text-sm font-light text-gray-500 dark:text-gray-400"
                              >
                                Offer services where professionals review a
                                company’s or individual's tax situation to
                                identify potential issues.
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>

            
          </div>
        </div>


        <!-- Resources -->

        <div
          class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] py-3 ps-px sm:px-3"
        >
          <button
            type="button"
            class="flex items-center w-full hover:text-base-blue font-medium text-[16px] dark:text-gray-100 dark:hover"
          >
            <p class="custom-underline">
Resources            </p>

            <svg
              class="flex-shrink-0 ms-2 size-4 text-gray-500 dark:text-gray-100 dark:hover"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div
            class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-96 hidden z-50 bg-white sm:shadow-md rounded-lg p-2 dark:bg-neutral-900 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5"
          >
          <div
                    class="grid rounded-2xl mx-auto max-w-screen-xl text-gray-900 dark:text-white"
                  >
                    <div class="mb-4">
                      <ul class="col-span-2 md:col-span-1">
                        <li class="px-2">
                          <a
                            href="#"
                            class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              x="0"
                              y="0"
                              viewBox="0 0 512 512"
                              style="
                                enable-background: new 0 0 512 512;
                                display: block;
                              "
                              xml:space="preserve"
                              class="h-6 w-6 mr-6"
                            >
                              <g>
                                <path
                                  d="M256 0C114.509 0 0 114.496 0 256c0 141.489 114.496 256 256 256 141.491 0 256-114.496 256-256C512 114.509 397.504 0 256 0zm0 476.279c-121.462 0-220.279-98.816-220.279-220.279S134.538 35.721 256 35.721c121.463 0 220.279 98.816 220.279 220.279S377.463 476.279 256 476.279z"
                                  fill="#000000"
                                  opacity="1"
                                  data-original="#000000"
                                  class="dark:fill-white"
                                ></path>
                                <path
                                  d="M248.425 323.924c-14.153 0-25.61 11.794-25.61 25.946 0 13.817 11.12 25.948 25.61 25.948s25.946-12.131 25.946-25.948c0-14.152-11.794-25.946-25.946-25.946zM252.805 127.469c-45.492 0-66.384 26.959-66.384 45.155 0 13.142 11.12 19.208 20.218 19.208 18.197 0 10.784-25.948 45.155-25.948 16.848 0 30.328 7.414 30.328 22.915 0 18.196-18.871 28.642-29.991 38.077-9.773 8.423-22.577 22.24-22.577 51.22 0 17.522 4.718 22.577 18.533 22.577 16.511 0 19.881-7.413 19.881-13.817 0-17.522.337-27.631 18.871-42.121 9.098-7.076 37.74-29.991 37.74-61.666s-28.642-55.6-71.774-55.6z"
                                  fill="#000000"
                                  opacity="1"
                                  data-original="#000000"
                                  class="dark:fill-white"
                                ></path>
                              </g>
                            </svg>

                            <div>
                              <div class="font-semibold">Help Center</div>
                              <div
                                class="text-gray-600 dark:text-gray-300 mt-2"
                              >
                                Get help for all your questions
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="px-2">
                          <a
                            href="#"
                            class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              x="0"
                              y="0"
                              viewBox="0 0 64 64"
                              style="enable-background: new 0 0 512 512"
                              xml:space="preserve"
                              class="h-6 w-6 mr-6"
                            >
                              <g>
                                <path
                                  d="M57 8h-5V6a4 4 0 0 0-8 0v2h-8V6a4 4 0 0 0-8 0v2h-8V6a4 4 0 0 0-8 0v2H7a5 5 0 0 0-5 5v40a5 5 0 0 0 5 5h28a1 1 0 0 0 0-2H7a3.009 3.009 0 0 1-3-3V22h56v17a1 1 0 0 0 2 0V13a5 5 0 0 0-5-5ZM46 6a2 2 0 0 1 4 0v6a2 2 0 0 1-4 0ZM30 6a2 2 0 0 1 4 0v6a2 2 0 0 1-4 0ZM14 6a2 2 0 0 1 4 0v6a2 2 0 0 1-4 0Zm46 14H4v-7a3.009 3.009 0 0 1 3-3h5v2a4 4 0 0 0 8 0v-2h8v2a4 4 0 0 0 8 0v-2h8v2a4 4 0 0 0 8 0v-2h5a3.009 3.009 0 0 1 3 3Z"
                                  fill="#000000"
                                  opacity="1"
                                  data-original="#000000"
                                  class="dark:fill-white"
                                ></path>
                                <path
                                  d="M30 29a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Zm-6 3v-3h4v3ZM18 29a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Zm-6 3v-3h4v3ZM52 34a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2Zm-4-5h4v3h-4ZM30 38a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Zm-6 3v-3h4v3ZM18 38a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Zm-6 3v-3h4v3ZM28 45h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2Zm-4 5v-3h4v3ZM36 34h4a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2Zm0-5h4v3h-4ZM34 41a2 2 0 0 0 2 2 1 1 0 0 0 0-2v-3h4a1 1 0 0 0 0-2h-4a2 2 0 0 0-2 2ZM16 45h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2Zm-4 5v-3h4v3Z"
                                  fill="#000000"
                                  opacity="1"
                                  data-original="#000000"
                                  class="dark:fill-white"
                                ></path>
                                <path
                                  d="M49 36a13 13 0 1 0 13 13 13.015 13.015 0 0 0-13-13Zm0 24a11 11 0 1 1 11-11 11.013 11.013 0 0 1-11 11Z"
                                  fill="#000000"
                                  opacity="1"
                                  data-original="#000000"
                                  class="dark:fill-white"
                                ></path>
                                <path
                                  d="M54.778 44.808 47 52.586l-3.535-3.536a1 1 0 0 0-1.414 1.414l4.242 4.243a1 1 0 0 0 1.414 0l8.485-8.485a1 1 0 0 0-1.414-1.414Z"
                                  fill="#000000"
                                  opacity="1"
                                  data-original="#000000"
                                  class="dark:fill-white"
                                ></path>
                              </g>
                            </svg>
                            <div>
                              <div class="font-semibold">Events</div>
                              <div
                                class="text-gray-600 dark:text-gray-300 mt-2"
                              >
                                Get to know about events near you
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="px-2">
                          <a
                            href="#"
                            class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              x="0"
                              y="0"
                              viewBox="0 0 511 511.999"
                              style="enable-background: new 0 0 512 512"
                              xml:space="preserve"
                              class="h-6 w-6 mr-6"
                            >
                              <g>
                                <path
                                  d="M357.207 371.574V18.664C357.207 8.375 348.832 0 338.539 0H49.383C22.43 0 .5 21.93.5 48.883v372.754c0 26.953 21.926 48.879 48.883 48.879h.11v33.972a7.518 7.518 0 0 0 4.109 6.7 7.526 7.526 0 0 0 7.835-.637l20.59-15.059 20.594 15.059a7.494 7.494 0 0 0 4.434 1.449 7.515 7.515 0 0 0 7.512-7.512v-33.972h223.972c10.293 0 18.664-8.371 18.664-18.664v-43.887a7.512 7.512 0 0 0-15.023 0v43.887a3.646 3.646 0 0 1-3.645 3.644H114.566v-18.805h193.817a7.511 7.511 0 0 0 7.512-7.507 7.512 7.512 0 0 0-7.512-7.512H36.953a7.512 7.512 0 0 0-7.512 7.512 7.511 7.511 0 0 0 7.512 7.507h12.54v18.805h-.11c-18.672 0-33.863-15.191-33.863-33.86v-8.69c0-18.673 15.19-33.86 33.863-33.86h300.312a7.512 7.512 0 0 0 7.512-7.512zm-257.66 65.117v53l-13.082-9.566a7.51 7.51 0 0 0-8.871 0l-13.082 9.566v-53zm-84.024-58.949V48.882c0-18.671 15.188-33.862 33.86-33.862h289.156a3.648 3.648 0 0 1 3.645 3.644v345.399H49.383c-13.137 0-25.07 5.218-33.86 13.68zm0 0"
                                  fill="#000000"
                                  opacity="1"
                                  data-original="#000000"
                                  class="dark:fill-white"
                                ></path>
                                <path
                                  d="M57.988 392.406a7.512 7.512 0 0 0 0 15.024h156.29a7.512 7.512 0 0 0 0-15.024zM249.566 392.406a7.512 7.512 0 0 0 0 15.024h58.817a7.512 7.512 0 0 0 0-15.024zM100 252.063H86.68c-2.903 0-3.75 2.625-3.75 5.25s.75 5.343 3.75 5.343h7.222c2.157 0 2.72.75 2.625 3.094-.187 4.504-1.593 12.754-12.375 12.754-12.004 0-13.32-14.629-13.32-22.883 0-9.844 1.598-22.785 13.32-22.785 6.282 0 9.094 3 10.5 8.344.657 2.437 2.25 3.472 7.504 3.472 4.781 0 6-2.629 5.438-5.629-2.16-11.062-10.317-17.16-23.446-17.16-19.128 1.032-26.16 14.63-26.16 33.758 0 18.758 7.407 33.856 26.63 33.856 18.284 0 24.757-13.223 24.1-29.356-.187-5.058-1.874-8.058-8.718-8.058zM160.29 222.52c-3.095 0-6.188.94-6.188 4.316v39.195c0 7.13-4.036 12.285-11.348 12.285S131.5 273.16 131.5 266.031v-39.195c0-3.375-3.094-4.316-6.191-4.316-3.094 0-6.188.94-6.188 4.316v38.07c0 17.442 9.848 24.664 23.633 24.664 13.875 0 23.723-7.222 23.723-24.664v-38.07c0-3.375-3.094-4.316-6.188-4.316zM184.852 222.52c-3.094 0-6.188.94-6.188 4.316v58.14c0 3.47 3.094 4.407 6.188 4.407s6.28-.938 6.28-4.406v-58.141c0-3.375-3.187-4.316-6.28-4.316zM225.453 222.895h-12.941c-4.782 0-9.188 1.218-9.188 8.253v49.043c0 7.13 4.406 8.348 9.188 8.348h12.941c18.66 0 25.973-15.379 25.973-32.82 0-17.446-7.5-32.824-25.973-32.824zm0 54.296h-8.16c-1.031 0-1.594-.375-1.594-1.593v-39.856c0-1.219.563-1.594 1.594-1.594h8.16c10.219 0 13.223 12.38 13.223 21.57 0 9.188-2.723 21.473-13.223 21.473zM274.867 234.148h20.91c3.192 0 3.942-2.812 3.942-5.625s-.844-5.625-3.942-5.625h-25.785c-4.691 0-9.191 1.22-9.191 8.25v49.137c0 7.035 4.5 8.254 9.191 8.254h25.785c3.094 0 3.942-2.812 3.942-5.625s-.75-5.629-3.942-5.629h-20.91c-1.125 0-1.594-.375-1.594-1.594V260.22h19.036c3.093 0 3.937-2.813 3.937-5.625s-.844-5.625-3.937-5.625h-19.036v-13.223c0-1.223.47-1.598 1.594-1.598zM255.121 38.066c-37.266 0-67.586 30.32-67.586 67.586 0 37.27 30.32 67.59 67.586 67.59 37.27 0 67.59-30.32 67.59-67.59 0-37.265-30.32-67.586-67.59-67.586zm0 120.157c-28.984 0-52.566-23.582-52.566-52.567 0-28.988 23.582-52.57 52.566-52.57 28.988 0 52.57 23.582 52.57 52.57 0 28.985-23.582 52.567-52.57 52.567zM162.04 55.3l-6.997 7a67.513 67.513 0 0 0-33.27-21.632c-17.359-4.961-35.613-2.867-51.394 5.898C54.594 55.332 43.172 69.72 38.21 87.078c-10.242 35.832 10.574 73.32 46.41 83.563a67.327 67.327 0 0 0 18.55 2.609c29.407 0 56.536-19.371 65.013-49.02a68.12 68.12 0 0 0 2.464-14.085c.075-1.09.114-2.684.114-4.493a7.509 7.509 0 0 0-7.512-7.507 7.508 7.508 0 0 0-7.508 7.507c0 1.438-.031 2.735-.082 3.48a52.97 52.97 0 0 1-1.922 10.97c-7.965 27.87-37.12 44.062-64.992 36.097-27.867-7.969-44.062-37.125-36.094-64.992 3.856-13.5 12.743-24.691 25.02-31.508 12.273-6.816 26.469-8.449 39.969-4.59a52.489 52.489 0 0 1 26.722 17.868l-43.242 43.242L80.56 95.66c-2.934-2.933-7.688-2.933-10.621 0s-2.934 7.688 0 10.621l25.87 25.871c1.47 1.465 3.391 2.2 5.313 2.2s3.844-.73 5.309-2.2l66.23-66.23a7.51 7.51 0 0 0 0-10.621 7.51 7.51 0 0 0-10.62 0zm0 0"
                                  fill="#000000"
                                  opacity="1"
                                  data-original="#000000"
                                  class="dark:fill-white"
                                ></path>
                                <path
                                  d="M287.285 74.887a7.514 7.514 0 0 0-10.625 0L255.2 96.352l-21.466-21.465a7.51 7.51 0 0 0-10.62 0 7.51 7.51 0 0 0 0 10.62l21.464 21.466-21.465 21.465a7.51 7.51 0 0 0 5.313 12.82 7.486 7.486 0 0 0 5.308-2.2l21.465-21.464 21.461 21.465c1.469 1.464 3.39 2.199 5.313 2.199s3.843-.735 5.312-2.2c2.93-2.933 2.93-7.69 0-10.62l-21.465-21.465 21.465-21.465a7.516 7.516 0 0 0 0-10.621zm0 0"
                                  fill="#000000"
                                  opacity="1"
                                  data-original="#000000"
                                  class="dark:fill-white"
                                ></path>
                              </g>
                            </svg>
                            <div>
                              <div class="font-semibold">Guides</div>
                              <div
                                class="text-gray-600 dark:text-gray-300 mt-2"
                              >
                                Get guides to maximize our platform
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="px-6 pt-2  bg-gray-100 dark:bg-gray-800">
                      <div class="flex items-center justify-between">
                        <p class="text-gray-500 dark:text-white font-semibold">
                          Recent Posts
                        </p>
                        <div
                          class="flex items-center hover:cursor-pointer text-blue-600"
                        >
                          <p class="font-semibold">See all</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0"
                            y="0"
                            viewBox="0 0 492.004 492.004"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            class="h-3 w-5"
                          >
                            <g>
                              <path
                                d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z"
                                fill="#3B82F6"
                                opacity="1"
                                data-original="#000000"
                                class=""
                              ></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div
                        class="mt-0 p-3 rounded-md hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <p class="text-sm text-gray-600 dark:text-gray-100">
                          April 14
                        </p>
                        <p
                          class=" text-sm  text-gray-900 dark:text-gray-50"
                        >
                          Lorem, ipsum dolor sit amet consectetur
                        </p>
                      </div>
                      <div
                        class=" px-3 rounded-md hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <p class="text-sm text-gray-600 dark:text-gray-100">
                          March 26
                        </p>
                        <p
                          class=" text-sm  mt-1 text-gray-900 dark:text-gray-50"
                        >
                          Lorem, ipsum dolor sit abue amet consectetur
                        </p>
                      </div>
                      <div
                        class="mt-3 p-3 rounded-md hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <p class=" text-sm text-gray-600 dark:text-gray-100">
                          February 19
                        </p>
                        <p
                          class=" text-sm  mt-1 text-gray-900 dark:text-gray-50"
                        >
                          Lorem, ipsum dolor sit amet
                        </p>
                      </div>
                    </div>
                  </div>
          </div>
        </div>

        <!-- Solutions -->

        <div
          class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] py-3 ps-px sm:px-3"
        >
          <button
            type="button"
            class="flex items-center w-full hover:text-base-blue font-medium text-[16px] dark:text-gray-100 dark:hover"
          >
            <p class="custom-underline">
Solutions            </p>

            <svg
              class="flex-shrink-0 ms-2 size-4 text-gray-500 dark:text-gray-100 dark:hover"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div
            class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-[800px] hidden z-50 bg-white sm:shadow-md rounded-lg p-2 dark:bg-neutral-900 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5"
          >
          <div
                    class="grid py-2 px-2 bg-white dark:bg-gray-800 rounded-2xl mx-auto max-w-screen-xl text-gray-900 dark:text-white md:px-2"
                  >
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div>
                        <div
                          class="flex items-center p-4 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
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
                            class="h-6 w-6 mr-6"
                          >
                            <g>
                              <path
                                class="icon-fill dark:fill-white"
                                d="M133.529 352.213c-12.907-23.147-19.733-51.52-19.733-82.24 0-51.627 44.693-93.653 99.52-93.653 54.933 0 99.52 42.027 99.52 93.653 0 5.867 4.8 10.667 10.667 10.667s10.667-4.8 10.667-10.667c0-63.467-54.187-114.987-120.853-114.987S92.462 206.613 92.462 269.973c0 34.347 7.787 66.453 22.507 92.693 14.4 25.707 24.427 37.547 42.88 56.213 2.133 2.133 4.8 3.2 7.573 3.2 2.667 0 5.44-.96 7.36-3.2 4.267-4.053 4.267-10.88.107-15.04-16.427-16.532-25.6-27.092-39.36-51.626zM94.702 51.413c36.587-19.947 76.48-30.08 118.827-30.08 42.453 0 77.973 9.067 118.827 30.187 1.6.747 3.2 1.173 4.907 1.173 3.84 0 7.573-2.133 9.493-5.76 2.667-5.227.64-11.733-4.587-14.4C298.649 10.027 258.969 0 213.529 0c-45.867 0-89.28 10.987-129.067 32.64-5.227 2.88-7.04 9.28-4.267 14.507 2.88 5.226 9.28 7.04 14.507 4.266z"
                                fill="#000000"
                                opacity="1"
                                data-original="#000000"
                              ></path>
                              <path
                                class="icon-fill dark:fill-white"
                                d="M212.569 103.04c-68.8 0-131.733 38.507-160.213 98.027-9.707 20.16-14.613 43.413-14.613 69.013 0 28.8 5.12 56.32 15.573 84.373 2.133 5.547 8.213 8.32 13.76 6.293 5.547-2.133 8.32-8.213 6.293-13.76-12.694-34.026-14.187-60.266-14.187-76.906 0-22.4 4.16-42.56 12.48-59.84 24.96-52.267 80.32-85.973 141.013-85.973 85.227 0 154.56 65.387 154.56 145.813 0 22.933-19.947 41.493-44.373 41.493s-44.373-18.667-44.373-41.493c0-34.667-29.44-62.827-65.707-62.827s-65.707 28.16-65.707 62.827c0 42.133 16.427 81.707 46.187 111.36 23.04 22.933 45.227 35.52 79.253 44.8.853.32 1.813.427 2.773.427 4.693 0 8.96-3.093 10.24-7.787 1.6-5.653-1.813-11.52-7.467-13.12-30.08-8.213-49.707-19.307-69.867-39.36-25.707-25.6-39.893-59.84-39.893-96.213 0-22.933 19.947-41.493 44.373-41.493s44.373 18.667 44.373 41.493c0 34.667 29.547 62.827 65.707 62.827s65.707-28.16 65.707-62.827c.001-92.16-78.932-167.147-175.892-167.147z"
                                fill="#000000"
                                opacity="1"
                                data-original="#000000"
                              ></path>
                              <path
                                class="icon-fill dark:fill-white"
                                d="M403.395 147.2c-21.227-29.653-48.107-52.907-80-69.333-67.2-34.56-152.96-34.453-220.053.213-32 16.533-58.987 40-80.107 69.867-3.413 4.8-2.24 11.413 2.56 14.827 1.92 1.28 4.053 1.92 6.187 1.92 3.307 0 6.613-1.493 8.747-4.373 19.093-27.093 43.52-48.32 72.427-63.253 61.12-31.573 139.307-31.68 200.533-.213 28.8 14.72 53.12 35.84 72.32 62.72 3.413 4.8 10.133 5.867 14.933 2.453 4.8-3.415 5.867-10.028 2.453-14.828zM340.569 359.253c-8.533 1.493-17.173 2.027-22.293 2.027-21.333 0-39.04-5.013-54.08-15.253-25.92-17.6-41.387-45.973-41.387-75.947 0-5.867-4.8-10.667-10.667-10.667s-10.667 4.8-10.667 10.667c0 37.12 18.987 72.107 50.667 93.653 18.453 12.48 40.747 18.88 66.133 18.88 2.987 0 13.547-.107 26.027-2.347 5.76-1.067 9.707-6.613 8.64-12.373s-6.613-9.706-12.373-8.64z"
                                fill="#000000"
                                opacity="1"
                                data-original="#000000"
                              ></path>
                            </g>
                          </svg>
                          <div>
                            <p
                              class="font-semibold text-gray-900 dark:text-gray-50"
                            >
                              Security
                            </p>
                            <p class="mt-2 text-gray-500 dark:text-gray-100">
                              All your customer's data will be safe and secure
                            </p>
                          </div>
                        </div>

                        <div
                          class="flex items-center p-4 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0"
                            y="0"
                            viewBox="0 0 124 124"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            class="h-6 w-6 mr-6"
                          >
                            <g>
                              <path
                                class="icon-fill dark:fill-white"
                                d="M62.082 79.883c-9.972 0-18.085-7.951-18.085-17.726S52.11 44.43 62.082 44.43c1.414 0 3.137.348 3.023 2.158-.109 1.728-1.675 1.842-3.023 1.842-7.767 0-14.085 6.158-14.085 13.727s6.318 13.726 14.085 13.726 14.085-6.158 14.085-13.726a13.3 13.3 0 0 0-1.552-6.273 2 2 0 1 1 3.537-1.867 17.498 17.498 0 0 1 2.015 8.14c0 9.775-8.112 17.726-18.085 17.726z"
                                fill="#000000"
                                opacity="1"
                                data-original="#000000"
                              ></path>
                              <path
                                class="icon-fill dark:fill-white"
                                d="M71.62 51.494c-.405 0-.814-.123-1.168-.378a14.45 14.45 0 0 0-1.67-1.037 2 2 0 1 1 1.87-3.535c.742.393 1.462.839 2.14 1.328 1.536 1.107.724 3.622-1.172 3.622zM116.474 30.605l-.071-8.683a2 2 0 0 0-2-1.983h-.017a2 2 0 0 0-1.984 2.016l.021 2.635C100.416 10.292 81.183 1 62.735 1 43.659 1 26.001 9.544 14.296 24.439a2 2 0 1 0 3.146 2.47C28.384 12.985 44.893 5 62.735 5c17.934 0 36.663 9.366 47.813 23.623h-5.489a2 2 0 0 0 0 4h9.415c.645-.001 2-.72 2-2.018zM119.937 39.766a2 2 0 0 0-3.727 1.453A55.52 55.52 0 0 1 120 61.463c0 21.931-15.277 42.99-37.045 52.057l1.49-2.28a2 2 0 1 0-3.349-2.187l-4.77 7.298c-.664 1.013-.237 2.436.867 2.924l8.036 3.544c2.359 1.035 3.974-2.618 1.614-3.66l-3.419-1.507c10.495-4.167 20.009-11.097 27.169-19.876C119.365 87.02 124 74.464 124 61.463a59.514 59.514 0 0 0-4.063-21.697c-.401-1.029 2.696 6.919 0 0zM65.108 117.878c-.787.031-1.578.047-2.373.047-31.576 0-57.265-25.328-57.265-56.462 0-5.508 2.315-12.397 4.521-18.212l1.764 3.903c1.065 2.354 4.706.699 3.646-1.646l-3.729-8.25c-.459-1.014-1.722-1.463-2.718-.965l-7.849 3.931a2 2 0 1 0 1.791 3.575l3.221-1.613c-2.282 6.05-4.646 13.222-4.646 19.276 0 33.338 27.483 60.461 61.265 60.461.848 0 1.692-.018 2.531-.051a1.999 1.999 0 1 0-.159-3.994c-.786.031 1.101-.042 0 0z"
                                fill="#000000"
                                opacity="1"
                                data-original="#000000"
                              ></path>
                              <path
                                class="icon-fill dark:fill-white"
                                d="M65.201 101.99c-1.963 0-7.782.023-8.688-.363-1.56-.664-2.832-2.357-2.832-4.093V93.55a32.499 32.499 0 0 1-8.561-3.617l-2.8 2.794c-1.758 1.736-4.755 1.445-6.442-.169-.824-.789-4.032-4.065-4.774-4.927-1.582-1.839-1.547-4.689.182-6.415l2.818-2.811c-1.648-2.808-2.85-5.759-3.534-8.678h-3.944c-2.459 0-4.491-2.02-4.626-4.457-.063-1.139-.033-5.734 0-6.878.068-2.357 1.975-4.621 4.462-4.621h3.998a32.278 32.278 0 0 1 3.622-8.535l-2.795-2.789c-1.749-1.749-1.446-4.759.169-6.439.791-.822 4.075-4.024 4.938-4.763 1.84-1.575 4.69-1.54 6.418.182l2.822 2.816c2.815-1.646 5.775-2.846 8.703-3.53V26.62c0-2.46 2.028-4.485 4.462-4.621 1.141-.063 5.747-.036 6.894 0a4.605 4.605 0 0 1 4.462 4.621v3.984a32.465 32.465 0 0 1 8.561 3.617l2.8-2.794c1.754-1.742 4.759-1.441 6.442.17.824.789 4.032 4.064 4.773 4.926 1.582 1.84 1.547 4.689-.183 6.415l-2.817 2.811c1.648 2.807 2.849 5.757 3.534 8.677h3.944c2.402 0 4.529 1.777 4.775 4.209.119 1.177.05 5.95.016 7.127-.068 2.358-1.973 4.62-4.462 4.62H93.54a32.312 32.312 0 0 1-3.622 8.536l2.795 2.788c1.75 1.75 1.446 4.76-.169 6.44-.791.822-4.074 4.023-4.938 4.762-1.841 1.576-4.689 1.543-6.418-.181l-2.822-2.816c-2.815 1.645-5.774 2.846-8.703 3.53v3.929c0 2.358-2.026 4.62-4.462 4.62zm-7.521-4.615c.043.203.186.615.626.615h6.737c.205-.043.62-.185.62-.621v-5.568a2 2 0 0 1 1.672-1.972c3.409-.567 6.949-1.995 10.238-4.128a2.002 2.002 0 0 1 2.501.262l3.939 3.931c.317.317.742.13.942.012l4.792-4.622c.286-.285.113-.69-.005-.892l-3.794-3.786a2 2 0 0 1-.237-2.547c2.023-2.951 3.546-6.533 4.288-10.088a2 2 0 0 1 1.958-1.591h5.424c.204-.042.619-.183.619-.619v-6.726c-.082-.405-.348-.61-.791-.61h-5.581a2 2 0 0 1-1.973-1.671c-.567-3.399-1.998-6.929-4.135-10.21a2 2 0 0 1 .263-2.508l3.939-3.931c.311-.31.128-.729.012-.928l-4.632-4.781c-.29-.288-.702-.114-.907.004L80.4 38.187a1.997 1.997 0 0 1-2.54.235c-2.957-2.017-6.549-3.538-10.114-4.279a2 2 0 0 1-1.593-1.958v-5.568c0-.385-.269-.621-.462-.621h-6.737c-.205.043-.62.185-.62.621v5.732a2 2 0 0 1-1.672 1.972c-3.408.567-6.948 1.994-10.238 4.127a1.996 1.996 0 0 1-2.5-.262l-3.939-3.93c-.316-.316-.742-.13-.942-.013l-4.792 4.622c-.286.285-.113.69.005.892l3.794 3.787a2 2 0 0 1 .237 2.547c-2.022 2.949-3.545 6.532-4.288 10.087a2 2 0 0 1-1.958 1.591H26.62c-.205.044-.62.185-.62.622v6.72c.043.203.186.615.626.615h5.581a2 2 0 0 1 1.973 1.671c.567 3.398 1.997 6.929 4.135 10.211a2 2 0 0 1-.263 2.508l-3.939 3.93c-.311.311-.128.73-.012.929l4.632 4.781c.29.289.702.115.907-.005l3.795-3.787a1.999 1.999 0 0 1 2.541-.235c2.956 2.018 6.547 3.539 10.113 4.28a2 2 0 0 1 1.593 1.958v5.408z"
                                fill="#000000"
                                opacity="1"
                                data-original="#000000"
                              ></path>
                            </g>
                          </svg>
                          <div>
                            <p
                              class="font-semibold text-gray-900 dark:text-gray-50"
                            >
                              Automation
                            </p>
                            <p class="mt-2 text-gray-500 dark:text-gray-100">
                              Build strategic funnels that will convert
                            </p>
                          </div>
                        </div>

                        <div
                          class="flex items-center p-4 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0"
                            y="0"
                            viewBox="0 0 384 384"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            class="h-8 w-8 mr-6"
                          >
                            <g>
                              <path
                                d="M10.668 234.668h42.664c5.89 0 10.668 4.773 10.668 10.664V352c0 5.89-4.777 10.668-10.668 10.668H10.668C4.778 362.668 0 357.891 0 352V245.332c0-5.89 4.777-10.664 10.668-10.664zM117.332 149.332H160c5.89 0 10.668 4.777 10.668 10.668v192c0 5.89-4.777 10.668-10.668 10.668h-42.668c-5.89 0-10.664-4.777-10.664-10.668V160c0-5.89 4.773-10.668 10.664-10.668zM224 192h42.668c5.89 0 10.664 4.777 10.664 10.668V352c0 5.89-4.773 10.668-10.664 10.668H224c-5.89 0-10.668-4.777-10.668-10.668V202.668c0-5.89 4.777-10.668 10.668-10.668zM330.668 128h42.664c5.89 0 10.668 4.777 10.668 10.668V352c0 5.89-4.777 10.668-10.668 10.668h-42.664c-5.89 0-10.668-4.777-10.668-10.668V138.668c0-5.89 4.777-10.668 10.668-10.668zm0 0"
                                fill="#000000"
                                opacity="1"
                                data-original="#000000"
                                class="dark:fill-white"
                              ></path>
                              <path
                                d="M352 0c-17.664.02-31.98 14.336-32 32 .043 3.484.66 6.938 1.828 10.219L268.43 73.96a31.728 31.728 0 0 0-51.082 6.84L170.25 57.473c.23-1.371.367-2.754.418-4.141a32 32 0 0 0-54.621-22.695 31.99 31.99 0 0 0-6.938 34.894l-61.093 45.594A31.63 31.63 0 0 0 32 106.668c-17.672 0-32 14.324-32 32 0 17.672 14.328 32 32 32s32-14.328 32-32a31.755 31.755 0 0 0-2.145-11.25l61.704-46.05c12.07 6.73 27.125 4.757 37.05-4.86l53.559 26.527c3.57 15.903 18.535 26.574 34.734 24.77 16.2-1.805 28.45-15.504 28.43-31.805 0-.813-.18-1.578-.238-2.375l58.078-34.527A31.681 31.681 0 0 0 352 64c17.672 0 32-14.328 32-32S369.672 0 352 0zm0 0"
                                fill="#000000"
                                opacity="1"
                                data-original="#000000"
                                class="dark:fill-white"
                              ></path>
                            </g>
                          </svg>
                          <div>
                            <p
                              class="font-semibold text-gray-900 dark:text-gray-50"
                            >
                              Analytics
                            </p>
                            <p class="mt-2 text-gray-500 dark:text-gray-100">
                              Have a better understating about your traffic
                              management
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div
                          class="flex items-center p-4 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0"
                            y="0"
                            viewBox="0 0 512 512"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            class="h-11 w-11 mr-4"
                          >
                            <g>
                              <path
                                class="icon-fill dark:fill-white"
                                d="M252.958 320.301c5.547-4.721 9.541-10.995 11.467-18.182 2.507-9.355 1.221-19.128-3.622-27.516-4.843-8.389-12.663-14.389-22.019-16.896-7.184-1.924-14.61-1.604-21.478.841l-27.258-47.212c-4.045-7.006-11.289-11.216-19.379-11.262-8.048-.057-15.379 4.083-19.503 11.041-3.106 5.241-6.19 10.584-9.456 16.241-17.207 29.807-36.69 63.561-63.009 87.196l-42.81 24.718C9.231 354.663.064 388.874 15.456 415.532c10.329 17.891 29.133 27.904 48.443 27.904a55.488 55.488 0 0 0 27.82-7.469l5.866-3.387 26.499 45.898c6.344 10.986 17.89 17.135 29.748 17.135a34.078 34.078 0 0 0 17.083-4.586l7.967-4.6a8 8 0 0 0 2.929-10.928l-38.785-67.178c37.246-11.775 75.774-11.374 115.195-9.753 8.33.345 15.879-3.713 20.194-10.846 4.315-7.132 4.402-15.7.234-22.92zm-18.315-47.139c5.228 1.401 9.597 4.754 12.303 9.441s3.425 10.146 2.024 15.374a20.165 20.165 0 0 1-4.27 8.02l-19.137-33.146a20.154 20.154 0 0 1 9.08.311zM83.719 422.11c-19.02 10.979-43.426 4.44-54.407-14.579-10.98-19.019-4.44-43.425 14.579-54.406l36.596-21.128 39.827 68.985zm79.197 55.06c-8.73 5.041-19.934 2.038-24.975-6.692l-26.499-45.898 16.873-9.742 35.64 61.731zm-28.066-83.012-41.311-71.554c22.223-21.274 39.348-48.397 54.4-74.1l76.918 133.225c-30.361-.046-60.309 2.466-90.007 12.429zm129.877-14.719c-1.306 2.158-3.322 3.261-5.849 3.142-5.137-.211-10.259-.4-15.37-.548l-86.312-149.497a1389.65 1389.65 0 0 1 7.734-13.263c1.241-2.094 3.179-3.198 5.605-3.198h.044c2.448.014 4.388 1.142 5.612 3.262l88.603 153.465c1.261 2.184 1.238 4.48-.067 6.637zm24.866-112.221a7.998 7.998 0 0 1-10.929-2.928 8 8 0 0 1 2.928-10.928l20.475-11.821a8.001 8.001 0 0 1 8 13.856zm-34.32-73.05a8 8 0 0 1 5.657 9.798l-6.119 22.837a8.004 8.004 0 0 1-7.723 5.932 8 8 0 0 1-7.732-10.072l6.119-22.837a8.003 8.003 0 0 1 9.798-5.658zm70.049 125.754a8.004 8.004 0 0 1-9.799 5.658l-22.836-6.119a8 8 0 0 1 4.141-15.455l22.836 6.119a7.998 7.998 0 0 1 5.658 9.797zm82.3-54.729c41.552 0 75.358-33.806 75.358-75.357 0-41.553-33.806-75.358-75.358-75.358s-75.358 33.806-75.358 75.358 33.806 75.357 75.358 75.357zm-38.185-29.961c3.758-17.869 19.527-30.901 38.186-30.901s34.427 13.032 38.186 30.9c-10.33 8.703-23.653 13.962-38.186 13.962-14.534 0-27.856-5.258-38.186-13.961zm22.403-62.683c0-8.702 7.08-15.782 15.782-15.782 8.703 0 15.783 7.08 15.783 15.782s-7.08 15.782-15.783 15.782c-8.702 0-15.782-7.08-15.782-15.782zm15.782-42.071c32.73 0 59.358 26.628 59.358 59.358a58.985 58.985 0 0 1-8.973 31.328 54.908 54.908 0 0 0-26.669-27.487c5.012-5.62 8.067-13.023 8.067-21.128 0-17.524-14.258-31.782-31.783-31.782s-31.782 14.258-31.782 31.782c0 8.105 3.054 15.508 8.066 21.128a54.906 54.906 0 0 0-26.669 27.488 58.985 58.985 0 0 1-8.973-31.328c0-32.732 26.628-59.359 59.358-59.359zm21.033 143.752c-41.552 0-75.358 33.806-75.358 75.358s33.806 75.357 75.358 75.357 75.358-33.806 75.358-75.357c0-41.552-33.806-75.358-75.358-75.358zm0 16c32.73 0 59.358 26.628 59.358 59.358a58.985 58.985 0 0 1-8.973 31.328 54.905 54.905 0 0 0-26.669-27.487c5.012-5.62 8.066-13.023 8.066-21.128 0-17.524-14.257-31.782-31.782-31.782s-31.783 14.258-31.783 31.782c0 8.105 3.054 15.507 8.067 21.127a54.904 54.904 0 0 0-26.669 27.487 58.985 58.985 0 0 1-8.973-31.328c0-32.729 26.628-59.357 59.358-59.357zm0 57.854c-8.703 0-15.783-7.08-15.783-15.782s7.08-15.782 15.783-15.782c8.702 0 15.782 7.08 15.782 15.782s-7.08 15.782-15.782 15.782zm-38.186 46.901c3.759-17.869 19.527-30.901 38.186-30.901s34.427 13.032 38.186 30.901c-10.33 8.703-23.652 13.961-38.186 13.961-14.533 0-27.856-5.258-38.186-13.961zM279.788 167.104c41.553 0 75.358-33.806 75.358-75.358s-33.806-75.357-75.358-75.357-75.358 33.806-75.358 75.357c0 41.552 33.805 75.358 75.358 75.358zm-38.185-29.962c3.758-17.869 19.527-30.901 38.186-30.901s34.427 13.033 38.185 30.901c-10.33 8.703-23.653 13.961-38.186 13.961-14.533.001-27.856-5.258-38.185-13.961zm38.186-46.901c-8.703 0-15.783-7.08-15.783-15.782s7.08-15.782 15.783-15.782c8.702 0 15.782 7.08 15.782 15.782s-7.08 15.782-15.782 15.782zm-.001-57.853c32.73 0 59.358 26.628 59.358 59.357a58.988 58.988 0 0 1-8.973 31.329 54.905 54.905 0 0 0-26.669-27.487c5.012-5.62 8.067-13.023 8.067-21.128 0-17.524-14.257-31.782-31.782-31.782s-31.783 14.258-31.783 31.782c0 8.105 3.054 15.507 8.066 21.127a54.906 54.906 0 0 0-26.669 27.488 58.988 58.988 0 0 1-8.973-31.329c0-32.729 26.628-59.357 59.358-59.357z"
                                fill="#000000"
                                opacity="1"
                                data-original="#000000"
                              ></path>
                            </g>
                          </svg>
                          <div>
                            <p
                              class="font-semibold text-gray-900 dark:text-gray-50"
                            >
                              Engagement
                            </p>
                            <p class="mt-2 text-gray-500 dark:text-gray-100">
                              Engage with your customers with our various
                              engagement tools
                            </p>
                          </div>
                        </div>

                        <div
                          class="flex items-center p-4 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0"
                            y="0"
                            viewBox="0 0 460 460"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            class="h-6 w-6 mr-6"
                          >
                            <g>
                              <path
                                class="icon-fill dark:fill-white"
                                d="M7.516 460h333.941c4.418 0 7.543-4.078 7.543-8.5V278.871l106.922-106.93a7.999 7.999 0 0 0 .105-11.304l-42.547-42.602a8.246 8.246 0 0 0-11.507-.008L349 170.68V89.45a7.795 7.795 0 0 0-2.117-5.66l-80.836-81.2A7.936 7.936 0 0 0 260.5 0H7.516C3.102 0 0 4.078 0 8.496v443.008C0 455.922 3.102 460 7.516 460zm255.398-173.387 24.649 24.649-37.028 12.379zm39.441 16.813-31.609-31.606 101.516-101.289 31.383 31.383zM407.875 135l31.3 31.3-24.234 24.29-31.351-31.36zM269 27.809 322.145 81H269zM16 16h237v73.45a7.204 7.204 0 0 0 2.09 5.425A7.203 7.203 0 0 0 260.5 97H333v89.645l-79.453 79.5a7.154 7.154 0 0 0-1.82 2.949L240.445 303H67.7a8 8 0 0 0 0 16h167.403l-4.82 14.602a7.843 7.843 0 0 0 1.929 8.097c.562.563 1.2 1.301 1.875 1.301H67.699a8 8 0 0 0 0 16h213.004c4.422 0 8-3.582 8-8s-3.578-8-8-8h-38.691l62.886-20.848a7.009 7.009 0 0 0 2.903-1.843L333 294.906V444H16zm0 0"
                                fill="#000000"
                                opacity="1"
                                data-original="#000000"
                              ></path>
                              <path
                                class="icon-fill dark:fill-white"
                                d="M280.703 383H67.7a8 8 0 0 0 0 16h213.004c4.422 0 8-3.582 8-8s-3.578-8-8-8zM67.7 279h113.003c4.422 0 8-3.582 8-8s-3.578-8-8-8H67.7a8 8 0 0 0 0 16zm0 0"
                                fill="#000000"
                                opacity="1"
                                data-original="#000000"
                              ></path>
                            </g>
                          </svg>
                          <div>
                            <p
                              class="font-semibold text-gray-900 dark:text-gray-50"
                            >
                              Reports
                            </p>
                            <p class="mt-2 text-gray-500 dark:text-gray-100">
                              Create, edit, and manage newly informed decisions
                            </p>
                          </div>
                        </div>

                        <div
                          class="flex items-center p-4 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0"
                            y="0"
                            viewBox="0 0 32 32"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            class="h-6 w-6 mr-6"
                          >
                            <g>
                              <path
                                class="icon-fill dark:fill-white"
                                d="M4 18c0-1.654 1.346-3 3-3s3 1.346 3 3h2v-3.27c0-.747.86-1.238 1.505-.863.65.378 1.495-.114 1.495-.867 0-.726-.856-1.243-1.495-.867-.651.383-1.505-.11-1.505-.863V6H3C1.346 6 0 7.346 0 9v9z"
                                fill="#000000"
                                opacity="1"
                                data-original="#000000"
                              ></path>
                              <path
                                class="icon-fill dark:fill-white"
                                d="M12 28c-1.654 0-3-1.346-3-3s1.346-3 3-3v-2H8.73c-.746 0-1.251-.842-.863-1.506C8.242 17.854 7.757 17 7 17c-.724 0-1.24.858-.867 1.494.384.654-.106 1.506-.863 1.506H0v9c0 1.654 1.346 3 3 3h9z"
                                fill="#000000"
                                opacity="1"
                                data-original="#000000"
                              ></path>
                              <path
                                class="icon-fill dark:fill-white"
                                d="M22 20c0 1.654-1.346 3-3 3s-3-1.346-3-3h-2v3.27c0 .749-.859 1.24-1.505.863-.646-.377-1.495.113-1.495.867 0 .729.855 1.244 1.495.867.648-.381 1.505.118 1.505.863V32h9c1.654 0 3-1.346 3-3v-9zM29 0H19a1 1 0 0 0-1 1v4.27c0 .758.852 1.244 1.506.863C20.16 5.75 21 6.255 21 7c0 .73-.854 1.245-1.494.867-.65-.383-1.506.118-1.506.863V13a1 1 0 0 0 1 1h3c0 1.654 1.346 3 3 3s3-1.346 3-3h3a1 1 0 0 0 1-1V3c0-1.654-1.346-3-3-3z"
                                fill="#000000"
                                opacity="1"
                                data-original="#000000"
                              ></path>
                            </g>
                          </svg>
                          <div>
                            <p
                              class="font-semibold text-gray-900 dark:text-gray-50"
                            >
                              Integrations
                            </p>
                            <p class="mt-2 text-gray-500 dark:text-gray-100">
                              Connect with third-party tools and find out
                              expectations
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
          </div>
        </div>
        <!-- About Us -->

        <div
          class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] py-3 ps-px sm:px-3"
        >
          <button
            type="button"
            class="flex items-center w-full hover:text-base-blue font-medium text-[16px] dark:text-gray-100 dark:hover"
          >
            <p class="custom-underline">
About Us            </p>

            <svg
              class="flex-shrink-0 ms-2 size-4 text-gray-500 dark:text-gray-100 dark:hover"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div
            class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-96 hidden z-50 bg-white sm:shadow-md rounded-lg p-2 dark:bg-neutral-900 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5"
          >
          <div
                    class="grid py-2 px-2 rounded-2xl mx-auto max-w-screen-xl text-gray-900 dark:text-white md:px-2"
                  >
                    <ul class="col-span-2 md:col-span-1">
                      <li>
                        <a
                          href="#"
                          class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <svg
                            class="mr-2 w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <div>
                            <div class="">Background</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <svg
                            class="mr-2 w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <div>
                            <div class="">Our Team</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <svg
                            class="mr-2 w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <div>
                            <div class="">Contact Us</div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
          </div>
        </div>

        <a
          class="py-3 ps-px sm:px-3 font-medium text-[16px] hover:text-base-blue dark:text-gray-100 dark:hover"
          href="#"
          aria-current="page"
        >
        <router-link to="/blogs">
          <p class="custom-underline">
           Blogs
          </p>
        </router-link>
        </a>

        
      </div>



      <div
              class="flex items-center lg:order-2 lg:mb-0 justify-end"
            >
              <div
                class="relative"
                @click="openSearchModal(true)"
                data-tw-toggle="modals"
                data-tw-target="#quick-searchs"
                data-modal-targets="quick-search"
                data-modal-toggles="quick-search"
              >
                <div
                  class="flex md:mr-0 md:w-[300px] w-[400px] cursor-text items-center rounded-[0.6rem] bg-gray-50 border border-gray-300 px-3.5 py-2 text-neutral-600 transition-colors hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                  onclick="this.querySelector('input').focus();"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="search"
                    class="lucide lucide-search stroke-[1] h-[18px] w-[18px]"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  <input
                    type="text"
                    placeholder="Quick search..."
                    class="ml-2.5 mr-auto bg-transparent border-none hover:cursor-pointer p-0 focus:ring-0 dark:text-white dark:placeholder-white"
                    onfocus="this.parentNode.classList.add('bg-gray-50', 'dark:bg-gray-700')"
                    onblur="this.parentNode.classList.remove('bg-neutral-200', 'dark:bg-neutral-700')"
                  />
                  <div>⌘K</div>
                </div>
              </div>
            </div>
     
    </div>
            
         
  
  
        
         
       
      </nav>
    </header>
  
    <TransitionRoot
      :show="isSearchOpen"
      as="template"
      enter="duration-300 ease-out"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="duration-200 ease-in"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <Dialog
        as="div"
        @close="openSearchModal(false)"
        class="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 overflow-y-hidden z-[60] [&:has(.hidden)]:duration-[0s,0.2s] [&:has(.hidden)]:delay-[0.2s,0s] [&:has(.hidden)]:visible [&:has(.flex)]:opacity-1 [&.flex]:visible [&.flex]:opacity-100 [&.flex]:duration-[0s,0.1s]"
      >
        <div class="fixed inset-0 bg-black/30" aria-hidden="true" />
        <DialogPanel>
          <div
            class="relative mx-auto my-2 w-[95%] scale-95 transition-transform group-[.show]:scale-100 sm:mt-40 sm:w-[600px] lg:w-[700px]"
          >
            <TransitionChild
              enter="duration-300 ease-in"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-out"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 flex w-12 items-center justify-center"
                >
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-50"
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8 a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  data-tw-merge=""
                  type="text"
                  placeholder="Search Circular, Directive, Articles ....."
                  class="disabled:bg-slate-100 dark:text-gray-50 disabled:cursor-not-allowed dark:bg-gray-700 dark:placeholder:text-gray-50 dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full border-slate-200 placeholder:text-slate-400/90 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 rounded-lg border-0 py-3.5 pl-12 pr-14 text-base shadow-lg focus:ring-0"
                />
                <div class="absolute inset-y-0 right-0 flex w-14 items-center">
                  <div
                    class="mr-auto rounded-[0.4rem] border bg-slate-100 px-2 py-1 text-xs text-slate-500/80"
                  >
                    ESC
                  </div>
                </div>
              </div>
            </TransitionChild>
            <TransitionChild
              enter="duration-300 ease-in"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-100 ease-out"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <div
                class="global-search global-search--show-result group relative z-10 mt-1 max-h-[468px] overflow-y-auto rounded-lg bg-white dark:bg-gray-700 pb-1 shadow-lg sm:max-h-[615px]"
              >
                <div
                  class="flex flex-col items-center justify-center pb-28 pt-20 group-[.global-search--show-result]:hidden"
                >
                  <i
                    data-tw-merge=""
                    data-lucide="search-x"
                    class="h-20 w-20 fill-theme-1/5 stroke-[0.5] text-theme-1/20"
                  ></i>
                  <div class="mt-5 text-xl font-medium">No result found</div>
                  <div
                    class="mt-3 w-2/3 text-center leading-relaxed text-slate-500"
                  >
                    No results found for
                    <span
                      class="global-search__keyword font-medium italic"
                    ></span>
                    . Please try a different search term or check your spelling.
                  </div>
                </div>
                <div class="hidden group-[.global-search--show-result]:block">
                  <div class="px-5 py-4">
                    <div class="flex items-center">
                      <div
                        class="text-xs uppercase text-slate-500 dark:text-gray-50"
                      >
                        Trending Now....
                      </div>
                    </div>
                    <div class="mt-3.5 flex flex-wrap gap-2">
                      <a
                        class="flex dark:bg-gray-400 items-center gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50 dark:hover:bg-gray-500"
                        href=""
                      >
                        <IconBooks color="black" class="h-5 w-5 stroke-[1.1]" />
                        दफा २
                      </a>
                      <a
                        class="flex items-center dark:bg-gray-400 gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50 dark:hover:bg-gray-500"
                        href=""
                      >
                        <IconCurrencyRupee
                          color="black"
                          class="h-5 w-5 stroke-[1.1]"
                        />
                        करमा व्याज
                      </a>
                      <a
                        class="flex items-center dark:bg-gray-400 gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50 dark:hover:bg-gray-500"
                        href=""
                      >
                        <IconFileReport
                          color="black"
                          class="h-5 w-5 stroke-[1.1]"
                        />
                        विदेशी लगानी
                      </a>
                      <div
                        data-tw-merge=""
                        data-tw-placement="bottom-end"
                        class="dropdown relative"
                      >
                        <a
                          data-tw-toggle="dropdown"
                          aria-expanded="false"
                          href="javascript:;"
                          class="cursor-pointer dark:bg-gray-400 flex items-center gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50 dark:hover:bg-gray-500"
                          >More
                          <IconChevronDown
                            color="black"
                            class="h-5 w-5 stroke-[1.1]"
                          />
                        </a>
                        <div
                          data-transition=""
                          data-selector=".show"
                          data-enter="transition-all ease-linear duration-150"
                          data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                          data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                          data-leave="transition-all ease-linear duration-150"
                          data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                          data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                          class="dropdown-menu absolute z-[9999] hidden"
                        >
                          <div
                            data-tw-merge=""
                            class="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                          >
                            <a
                              class="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                              ><i
                                data-tw-merge=""
                                data-lucide="map"
                                class="stroke-[1] mr-2 h-4 w-4"
                              ></i>
                              Locations</a
                            >
                            <a
                              class="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                              ><i
                                data-tw-merge=""
                                data-lucide="file-check"
                                class="stroke-[1] mr-2 h-4 w-4"
                              ></i>
                              Projects</a
                            >
                            <a
                              class="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                              ><i
                                data-tw-merge=""
                                data-lucide="printer"
                                class="stroke-[1] mr-2 h-4 w-4"
                              ></i>
                              Devices</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-t border-dashed px-5 py-4">
                    <div class="flex items-center">
                      <div
                        class="text-xs uppercase text-slate-500 dark:text-gray-50"
                      >
                        Circulars
                      </div>
                      <a
                        class="ml-auto text-xs text-slate-500 dark:text-gray-50"
                        href=""
                      >
                        See All
                      </a>
                    </div>
                    <div class="mt-3.5 flex flex-col gap-1">
                      <a
                        class="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 dark:hover:bg-gray-500 hover:bg-slate-50/80"
                        href=""
                      >
                        <div
                          class="image-fit zoom-in box h-6 w-6 overflow-hidden"
                        >
                          <IconNotebook
                            color="black"
                            class="stroke-[1] w-5 h-5 -mr-1.5 text-slate-500 dark:fill-white"
                          />
                        </div>
                        <div class="truncate font-medium dark:text-gray-50">
                          Regarding Income Tax
                        </div>
                        <div
                          class="hidden text-slate-500 sm:block dark:text-gray-200"
                        >
                          आयकर ऐन, २०३१
                        </div>
                      </a>
                      <a
                        class="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 dark:hover:bg-gray-500 hover:bg-slate-50/80"
                        href=""
                      >
                        <div
                          class="image-fit zoom-in box h-6 w-6 overflow-hidden"
                        >
                          <IconNotebook
                            color="black"
                            class="stroke-[1] w-5 h-5 -mr-1.5 text-slate-500 dark:fill-white"
                          />
                        </div>
                        <div class="truncate font-medium dark:text-gray-50">
                          TDS on Payment
                        </div>
                        <div
                          class="hidden text-slate-500 sm:block dark:text-gray-200"
                        >
                          मूल्य अभिवृद्धि कर ऐन, २०५२
                        </div>
                      </a>
                      <a
                        class="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 dark:hover:bg-gray-500 dark:hover:bg-gray-500 hover:bg-slate-50/80"
                        href=""
                      >
                        <div
                          class="image-fit zoom-in box h-6 w-6 overflow-hidden"
                        >
                          <IconNotebook
                            color="black"
                            class="stroke-[1] w-5 h-5 -mr-1.5 text-slate-500 dark:fill-white"
                          />
                        </div>
                        <div class="truncate font-medium dark:text-gray-50">
                          Taxable Income on Mismatch
                        </div>
                        <div
                          class="hidden text-slate-500 sm:block dark:text-gray-200"
                        >
                          आयकर ऐन - आ.व २०७७/७८
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="border-t border-dashed px-5 py-4">
                    <div class="flex items-center">
                      <div
                        class="text-xs uppercase text-slate-500 dark:text-gray-50"
                      >
                        Directives
                      </div>
                      <a
                        class="ml-auto text-xs text-slate-500 dark:text-gray-200"
                        href=""
                      >
                        See All
                      </a>
                    </div>
                    <div class="mt-3.5 flex flex-col gap-1">
                      <a
                        class="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 dark:hover:bg-gray-500 hover:bg-slate-50/80"
                        href=""
                      >
                        <div
                          class="zoom-in box flex h-6 w-6 items-center justify-center overflow-hidden rounded-md border-theme-1/10 bg-theme-1/10"
                        >
                          <IconPencil
                            color="black"
                            class="stroke-[1] w-5 h-5 -mr-1.5 text-slate-500 dark:fill-white"
                          />
                        </div>
                        <div class="truncate font-medium dark:text-gray-50">
                          १.४.५ नजीर
                        </div>
                        <div
                          class="hidden text-slate-500 sm:block dark:text-gray-200"
                        >
                          मूल्य अभिबृद्धि कर निर्देशिका
                        </div>
                      </a>
                      <a
                        class="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 dark:hover:bg-gray-500 hover:bg-slate-50/80"
                        href=""
                      >
                        <div
                          class="zoom-in box flex h-6 w-6 items-center justify-center overflow-hidden rounded-md border-theme-1/10 bg-theme-1/10"
                        >
                          <IconPencil
                            color="black"
                            class="stroke-[1] w-5 h-5 -mr-1.5 text-slate-500 dark:fill-white"
                          />
                        </div>
                        <div class="truncate font-medium dark:text-gray-50">
                          १.४.५ नजीर
                        </div>
                        <div
                          class="hidden text-slate-500 sm:block dark:text-gray-200"
                        >
                          मूल्य अभिबृद्धि कर निर्देशिका
                        </div>
                      </a>
                      <a
                        class="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 dark:hover:bg-gray-500 hover:bg-slate-50/80"
                        href=""
                      >
                        <div
                          class="zoom-in box flex h-6 w-6 items-center justify-center overflow-hidden rounded-md border-theme-1/10 bg-theme-1/10"
                        >
                          <IconPencil
                            color="black"
                            class="stroke-[1] w-5 h-5 -mr-1.5 text-slate-500 dark:fill-white"
                          />
                        </div>
                        <div class="truncate font-medium dark:text-gray-50">
                          ३.२ अन्तःशुल्क नलाग्ने
                        </div>
                        <div
                          class="hidden text-slate-500 sm:block dark:text-gray-200"
                        >
                          अन्तःशुल्क निर्देशिका
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="border-t border-dashed px-5 py-4">
                    <div class="flex items-center">
                      <div
                        class="text-xs uppercase text-slate-500 dark:text-gray-50"
                      >
                        Rule
                      </div>
                      <a
                        class="ml-auto text-xs text-slate-500 dark:text-gray-50"
                        href=""
                      >
                        See All
                      </a>
                    </div>
                    <div class="mt-3.5 flex flex-col gap-1">
                      <a
                        class="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 dark:hover:bg-gray-500 hover:bg-slate-50/80"
                        href=""
                      >
                        <div
                          class="image-fit zoom-in box h-6 w-6 overflow-hidden"
                        >
                          <IconMessage
                            color="black"
                            class="stroke-[1] w-5 h-5 -mr-1.5 text-slate-500 dark:fill-white"
                          />
                        </div>
                        <div class="truncate font-medium dark:text-gray-50">
                          दफा १० ख १
                        </div>
                        <div
                          class="hidden text-slate-500 sm:block dark:text-gray-200"
                        >
                          मूल्य अभिवृद्धि कर ऐन, २०५२
                        </div>
                      </a>
                      <a
                        class="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 dark:hover:bg-gray-500 hover:bg-slate-50/80"
                        href=""
                      >
                        <div
                          class="image-fit zoom-in box h-6 w-6 overflow-hidden"
                        >
                          <IconMessage
                            color="black"
                            class="stroke-[1] w-5 h-5 -mr-1.5 text-slate-500 dark:fill-white"
                          />
                        </div>
                        <div class="truncate font-medium dark:text-gray-50">
                          दफा २
                        </div>
                        <div
                          class="hidden text-slate-500 sm:block dark:text-gray-200"
                        >
                          मूल्य अभिवृद्धि कर ऐन, २०५२
                        </div>
                      </a>
                      <a
                        class="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 dark:hover:bg-gray-500 hover:bg-slate-50/80"
                        href=""
                      >
                        <div
                          class="image-fit zoom-in box h-6 w-6 overflow-hidden"
                        >
                          <IconMessage
                            color="black"
                            class="stroke-[1] w-5 h-5 -mr-1.5 text-slate-500 dark:fill-white"
                          />
                        </div>
                        <div class="truncate font-medium dark:text-gray-50">
                          दफा ३१ क
                        </div>
                        <div
                          class="hidden text-slate-500 sm:block dark:text-gray-200"
                        >
                          मूल्य अभिवृद्धि कर ऐन, २०५२
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </TransitionChild>
          </div>
          <!--        </div>-->
        </DialogPanel>
      </Dialog>
    </TransitionRoot>
  </template>
  
  <style>
  .bg-dots-darker {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
  }
  @media (prefers-color-scheme: dark) {
    .dark\:bg-dots-lighter {
      background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
    }
  }
  .slide-leave-active {
    transition: transform 0.4s ease;
  }
  .slide-enter-active {
    transition: transform 0.4s ease;
  }
  .slide-enter,
  .slide-leave-to {
    transform: translateX(-100%);
  }
  .slide-enter-to,
  .slide-leave {
    transform: translateX(0%);
  }
  </style>
  
  <script setup>
  import {
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
  } from "@headlessui/vue";
  import {
    IconBooks,
    IconChevronDown,
    IconCurrencyRupee,
    IconFileReport,
    IconMessage,
    IconNotebook,
    IconPencil,
  } from "@tabler/icons-vue";
  import { onMounted, ref } from "vue";
  import ThemeSwitcher from "../ThemeSwitcher.vue";
  defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
  });
  let isOpen = ref(false);
  let isSearchOpen = ref(false);
  function openSearchModal(value) {
    isSearchOpen.value = value;
  }
  function hasUserText() {
    return localStorage.getItem("userText") === "Login Text";
  }
  onMounted(() => {
    const highlightedText = localStorage.getItem("highlightedText");
    if (highlightedText) {
      const highlightedTextElement = document.getElementById("highlighted-text");
      if (highlightedTextElement) {
        highlightedTextElement.textContent = highlightedText;
      }
    }
  });

  </script>
  

  <style scoped>
.custom-underline::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  transform: scaleX(0);
  transition: transform 0.3s ease;
  position: relative;
  top: 5px;
}

.custom-underline:hover::after {
  transform: scaleX(1);
}
.custom-underline2::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  transform: scaleX(0);
  transition: transform 0.1s ease;
  position: relative;
  top: 5px;
}

.custom-underline2:hover::after {
  transform: scaleX(1);
}
</style>
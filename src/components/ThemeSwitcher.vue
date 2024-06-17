<template>
    <div class="flex justify-center">
      <div class="relative">
        <button
          class="flex text-md border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
          @click="toggleDropdown"
        >
          <SunIcon
            v-if="option === 'light'"
            class="h-6 w-6 dark:text-white"
            aria-hidden="true"
          />
          <MoonIcon
            v-if="option === 'dark'"
            class="h-6 w-6 dark:text-white"
            aria-hidden="true"
          />
          <ComputerDesktopIcon
            v-if="option === 'system'"
            class="h-6 w-6"
            aria-hidden="true"
          />
        </button>
        <div
          v-if="isDropdownOpen"
          class="absolute right-0 mt-2 ml-11 bg-white border border-gray-300 rounded-b shadow-lg dark:bg-gray-800 dark:border-gray-700 rounded z-50"
        >
          <button
            @click="setOption('light')"
            class="flex themeColor-center py-1 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-800 w-full text-left cursor-pointer px-3 focus:outline-none focus:ring rounded truncate whitespace-nowrap text-gray-500 active:text-gray-600 dark:hover:text-gray-400 dark:active:text-gray-600 themeColor-center"
          >
            <SunIcon class="h-5 w-5" aria-hidden="true" />
            <span class="ml-2">Light</span>
          </button>
          <button
            @click="setOption('dark')"
            class="flex themeColor-center hover:bg-gray-200 py-1 dark:text-white dark:hover:bg-gray-800 w-full text-left cursor-pointer px-3 focus:outline-none focus:ring rounded truncate whitespace-nowrap text-gray-500 active:text-gray-600 dark:hover:text-gray-400 dark:active:text-gray-600 themeColor-center"
          >
            <MoonIcon class="h-5 w-5" aria-hidden="true" />
            <span class="ml-2">Dark</span>
          </button>
          <button
            @click="setOption('system')"
            class="flex themeColor-center hover:bg-gray-200 py-1 dark:text-white dark:hover:bg-gray-800 w-full text-left cursor-pointer px-3 focus:outline-none focus:ring rounded truncate whitespace-nowrap text-gray-500 active:text-gray-600 dark:hover:text-gray-400 dark:active:text-gray-600 themeColor-center"
          >
            <ComputerDesktopIcon class="h-5 w-5" aria-hidden="true" />
            <span class="ml-2">System</span>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from "vue";
  import {
    SunIcon,
    MoonIcon,
    ComputerDesktopIcon,
  } from "@heroicons/vue/20/solid";
  
  const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
  const option = ref(localStorage.getItem("option"));
  const isDropdownOpen = ref(false);
  
  const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
  };
  
  const setOption = (selectedOption) => {
    localStorage.setItem("option", selectedOption);
    option.value = selectedOption;
    isDropdownOpen.value = false;
  };
  
  const setTheme = () => {
    if (option.value === "system") {
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? toggleDarkClass("dark")
        : toggleDarkClass("light");
    } else {
      option.value === "dark"
        ? toggleDarkClass("dark")
        : toggleDarkClass("light");
    }
  };
  
  const toggleDarkClass = (className) => {
    if (className === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  
  watch(option, setTheme);
  
  onMounted(() => {
    if (!option.value) {
      setOption("system");
    }
  
    setTheme();
  
    systemDarkMode.addListener((event) => {
      if (option.value === "system") {
        if (event.matches) {
          toggleDarkClass("dark");
        } else {
          toggleDarkClass("light");
        }
      }
    });
  });
  </script>
  
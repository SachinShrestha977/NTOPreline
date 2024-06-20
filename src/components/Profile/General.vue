<template>
    <div class="pb-10">
      <div class="mb-10">
        <h2 class="text-xl font-bold mb-4 dark:text-gray-100">Profile</h2>
        <p class="text-gray-500 dark:text-gray-300">
          This information will be displayed publicly so be careful what you
          share.
        </p>
  
        <hr class="my-4" />
        <div class="flex justify-between items-center">
          <p class="mr-2 dark:text-gray-100">Full Name</p>
          <p class="mr-16 text-gray-500 dark:text-gray-300">Ram Shrestha</p>
          <div class="flex items-center hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0"
              y="0"
              viewBox="0 0 492.493 492"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              class="h-4 w-4"
            >
              <g>
                <path
                  d="M304.14 82.473 33.165 353.469a10.799 10.799 0 0 0-2.816 4.949L.313 478.973a10.716 10.716 0 0 0 2.816 10.136 10.675 10.675 0 0 0 7.527 3.114 10.6 10.6 0 0 0 2.582-.32l120.555-30.04a10.655 10.655 0 0 0 4.95-2.812l271-270.977zM476.875 45.523 446.711 15.36c-20.16-20.16-55.297-20.14-75.434 0l-36.949 36.95 105.598 105.597 36.949-36.949c10.07-10.066 15.617-23.465 15.617-37.715s-5.547-27.648-15.617-37.719zm0 0"
                  fill="#3B82F6"
                  opacity="1"
                  data-original="#000000"
                  class="dark:fill-blue-300"
                ></path>
              </g>
            </svg>
            <button class="text-blue-500 dark:text-blue-300 px-3 py-1">
              Update
            </button>
          </div>
        </div>
  
        <hr class="my-4" />
        <div class="flex justify-between items-center">
          <p class="dark:text-gray-100">Email Address</p>
          <p class="text-gray-500 dark:text-gray-300">shrestharam@gmail.com</p>
          <div class="flex items-center hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0"
              y="0"
              viewBox="0 0 492.493 492"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              class="h-4 w-4"
            >
              <g>
                <path
                  d="M304.14 82.473 33.165 353.469a10.799 10.799 0 0 0-2.816 4.949L.313 478.973a10.716 10.716 0 0 0 2.816 10.136 10.675 10.675 0 0 0 7.527 3.114 10.6 10.6 0 0 0 2.582-.32l120.555-30.04a10.655 10.655 0 0 0 4.95-2.812l271-270.977zM476.875 45.523 446.711 15.36c-20.16-20.16-55.297-20.14-75.434 0l-36.949 36.95 105.598 105.597 36.949-36.949c10.07-10.066 15.617-23.465 15.617-37.715s-5.547-27.648-15.617-37.719zm0 0"
                  fill="#3B82F6"
                  opacity="1"
                  data-original="#000000"
                  class="dark:fill-blue-300"
                ></path>
              </g>
            </svg>
            <button class="text-blue-500 dark:text-blue-300 px-3 py-1">
              Update
            </button>
          </div>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between items-center mb-4">
          <p class="mr-2 dark:text-gray-100">Address</p>
          <p class="mr-5 text-gray-500 dark:text-gray-300">Kathmandu, Nepal</p>
          <div class="flex items-center hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0"
              y="0"
              viewBox="0 0 492.493 492"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              class="h-4 w-4"
            >
              <g>
                <path
                  d="M304.14 82.473 33.165 353.469a10.799 10.799 0 0 0-2.816 4.949L.313 478.973a10.716 10.716 0 0 0 2.816 10.136 10.675 10.675 0 0 0 7.527 3.114 10.6 10.6 0 0 0 2.582-.32l120.555-30.04a10.655 10.655 0 0 0 4.95-2.812l271-270.977zM476.875 45.523 446.711 15.36c-20.16-20.16-55.297-20.14-75.434 0l-36.949 36.95 105.598 105.597 36.949-36.949c10.07-10.066 15.617-23.465 15.617-37.715s-5.547-27.648-15.617-37.719zm0 0"
                  fill="#3B82F6"
                  opacity="1"
                  data-original="#000000"
                  class="dark:fill-blue-300"
                ></path>
              </g>
            </svg>
            <button class="text-blue-500 dark:text-blue-300 px-3 py-1">
              Update
            </button>
          </div>
        </div>
  
        <!-- Logout button -->
        <!-- <div class="text-right">
        <button
          class="bg-red-500 rounded-md p-2 text-white hover:bg-red-700 transition-colors duration-300"
          @click="handleLogout"
        >
          Logout
        </button>
      </div> -->
      </div>
  
      <div class="mb-10">
        <h2 class="text-xl font-bold mb-4 dark:text-gray-100">Bank Accounts</h2>
        <p class="text-gray-500 dark:text-gray-300">
          Connect your bank account with this account
        </p>
  
        <hr class="my-4" />
        <div class="flex justify-between items-center">
          <p class="mr-2 dark:text-gray-100">Global Ime Bank</p>
          <div class="flex items-center hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0"
              y="0"
              viewBox="0 0 492.493 492"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              class="h-4 w-4"
            >
              <g>
                <path
                  d="M304.14 82.473 33.165 353.469a10.799 10.799 0 0 0-2.816 4.949L.313 478.973a10.716 10.716 0 0 0 2.816 10.136 10.675 10.675 0 0 0 7.527 3.114 10.6 10.6 0 0 0 2.582-.32l120.555-30.04a10.655 10.655 0 0 0 4.95-2.812l271-270.977zM476.875 45.523 446.711 15.36c-20.16-20.16-55.297-20.14-75.434 0l-36.949 36.95 105.598 105.597 36.949-36.949c10.07-10.066 15.617-23.465 15.617-37.715s-5.547-27.648-15.617-37.719zm0 0"
                  fill="#3B82F6"
                  opacity="1"
                  data-original="#000000"
                  class="dark:fill-blue-300"
                ></path>
              </g>
            </svg>
            <button class="text-blue-500 dark:text-blue-300 px-3 py-1">
              Update
            </button>
          </div>
        </div>
  
        <hr class="my-4" />
        <div class="flex justify-between items-center">
          <p class="mr-2 dark:text-gray-100">Nabil Bank</p>
          <div class="flex items-center hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0"
              y="0"
              viewBox="0 0 492.493 492"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              class="h-4 w-4"
            >
              <g>
                <path
                  d="M304.14 82.473 33.165 353.469a10.799 10.799 0 0 0-2.816 4.949L.313 478.973a10.716 10.716 0 0 0 2.816 10.136 10.675 10.675 0 0 0 7.527 3.114 10.6 10.6 0 0 0 2.582-.32l120.555-30.04a10.655 10.655 0 0 0 4.95-2.812l271-270.977zM476.875 45.523 446.711 15.36c-20.16-20.16-55.297-20.14-75.434 0l-36.949 36.95 105.598 105.597 36.949-36.949c10.07-10.066 15.617-23.465 15.617-37.715s-5.547-27.648-15.617-37.719zm0 0"
                  fill="#3B82F6"
                  opacity="1"
                  data-original="#000000"
                  class="dark:fill-blue-300"
                ></path>
              </g>
            </svg>
            <button class="text-blue-500 dark:text-blue-300 px-3 py-1">
              Update
            </button>
          </div>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between items-center mb-4">
          <p class="mr-2 dark:text-gray-100">NIC Asia Bank</p>
          <div class="flex items-center hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0"
              y="0"
              viewBox="0 0 492.493 492"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              class="h-4 w-4"
            >
              <g>
                <path
                  d="M304.14 82.473 33.165 353.469a10.799 10.799 0 0 0-2.816 4.949L.313 478.973a10.716 10.716 0 0 0 2.816 10.136 10.675 10.675 0 0 0 7.527 3.114 10.6 10.6 0 0 0 2.582-.32l120.555-30.04a10.655 10.655 0 0 0 4.95-2.812l271-270.977zM476.875 45.523 446.711 15.36c-20.16-20.16-55.297-20.14-75.434 0l-36.949 36.95 105.598 105.597 36.949-36.949c10.07-10.066 15.617-23.465 15.617-37.715s-5.547-27.648-15.617-37.719zm0 0"
                  fill="#3B82F6"
                  opacity="1"
                  data-original="#000000"
                  class="dark:fill-blue-300"
                ></path>
              </g>
            </svg>
            <button class="text-blue-500 dark:text-blue-300 px-3 py-1">
              Update
            </button>
          </div>
        </div>
        <div>
          <p
            class="text-blue-700 hover:cursor-pointer hover:text-blue-500 dark:text-blue-300 transition-colors duration-300"
          >
            +Add another banks
          </p>
        </div>
      </div>
  
      <div class="mb-10">
        <h2 class="text-xl font-bold mb-4 dark:text-gray-100">Integrations</h2>
        <p class="text-gray-500 dark:text-gray-200">
          Connect applications to your account.
        </p>
  
        <hr class="my-4" />
        <div class="flex justify-between items-center">
          <p class="mr-2 dark:text-gray-100">QuickBooks</p>
          <div class="flex items-center hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0"
              y="0"
              viewBox="0 0 492.493 492"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              class="h-4 w-4"
            >
              <g>
                <path
                  d="M304.14 82.473 33.165 353.469a10.799 10.799 0 0 0-2.816 4.949L.313 478.973a10.716 10.716 0 0 0 2.816 10.136 10.675 10.675 0 0 0 7.527 3.114 10.6 10.6 0 0 0 2.582-.32l120.555-30.04a10.655 10.655 0 0 0 4.95-2.812l271-270.977zM476.875 45.523 446.711 15.36c-20.16-20.16-55.297-20.14-75.434 0l-36.949 36.95 105.598 105.597 36.949-36.949c10.07-10.066 15.617-23.465 15.617-37.715s-5.547-27.648-15.617-37.719zm0 0"
                  fill="#3B82F6"
                  opacity="1"
                  data-original="#000000"
                  class="dark:fill-blue-300"
                ></path>
              </g>
            </svg>
            <button class="text-blue-500 dark:text-blue-300 px-3 py-1">
              Update
            </button>
          </div>
        </div>
  
        <div>
          <p
            class="text-blue-700 hover:cursor-pointer hover:text-blue-500 dark:text-blue-300 transition-colors duration-300"
          >
            +Add another applications
          </p>
        </div>
      </div>
  
      <div class="mb-10">
        <h2 class="text-xl font-bold mb-4 dark:text-gray-100">
          Language and Dates
        </h2>
        <p class="text-gray-500 dark:text-gray-300">
          Choose your desired language and date format.
        </p>
  
        <hr class="my-4" />
        <div class="flex justify-between items-center">
          <p class="mr-2 dark:text-gray-100">Language</p>
          <p class="mr-16 text-gray-500 dark:text-gray-300">English</p>
          <div class="flex items-center hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0"
              y="0"
              viewBox="0 0 492.493 492"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              class="h-4 w-4"
            >
              <g>
                <path
                  d="M304.14 82.473 33.165 353.469a10.799 10.799 0 0 0-2.816 4.949L.313 478.973a10.716 10.716 0 0 0 2.816 10.136 10.675 10.675 0 0 0 7.527 3.114 10.6 10.6 0 0 0 2.582-.32l120.555-30.04a10.655 10.655 0 0 0 4.95-2.812l271-270.977zM476.875 45.523 446.711 15.36c-20.16-20.16-55.297-20.14-75.434 0l-36.949 36.95 105.598 105.597 36.949-36.949c10.07-10.066 15.617-23.465 15.617-37.715s-5.547-27.648-15.617-37.719zm0 0"
                  fill="#3B82F6"
                  opacity="1"
                  data-original="#000000"
                  class="dark:fill-blue-300"
                ></path>
              </g>
            </svg>
            <button class="text-blue-500 dark:text-blue-300 px-3 py-1">
              Update
            </button>
          </div>
        </div>
  
        <hr class="my-4" />
        <div class="flex justify-between items-center">
          <p class="mr-2 dark:text-gray-100">Date Format</p>
          <p class="mr-10 text-gray-500 dark:text-gray-300">DD-MM-YYYY</p>
          <div class="flex items-center hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0"
              y="0"
              viewBox="0 0 492.493 492"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              class="h-4 w-4"
            >
              <g>
                <path
                  d="M304.14 82.473 33.165 353.469a10.799 10.799 0 0 0-2.816 4.949L.313 478.973a10.716 10.716 0 0 0 2.816 10.136 10.675 10.675 0 0 0 7.527 3.114 10.6 10.6 0 0 0 2.582-.32l120.555-30.04a10.655 10.655 0 0 0 4.95-2.812l271-270.977zM476.875 45.523 446.711 15.36c-20.16-20.16-55.297-20.14-75.434 0l-36.949 36.95 105.598 105.597 36.949-36.949c10.07-10.066 15.617-23.465 15.617-37.715s-5.547-27.648-15.617-37.719zm0 0"
                  fill="#3B82F6"
                  opacity="1"
                  data-original="#000000"
                  class="dark:fill-blue-300"
                ></path>
              </g>
            </svg>
            <button class="text-blue-500 dark:text-blue-300 px-3 py-1">
              Update
            </button>
          </div>
        </div>
        <hr class="my-4" />
        <div>
          <p class="dark:text-gray-100">Automatic Timezone</p>
        </div>
      </div>
      <div @click="handleLogout" class="flex justify-end">
        <button
          class="bg-red-600 rounded-lg py-2 px-4 text-gray-50 hover:bg-red-700 hover:shadow-2xl"
        >
          Log Out
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import Swal from "sweetalert2";
  import { toast } from "vue3-toastify";
  import "vue3-toastify/dist/index.css";
  export default {
    name: "General",
    methods: {
      handleLogout() {
        Swal.fire({
          title: "Are you sure?",
          text: "You will be logged out",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, logout",
        }).then((result) => {
          if (result.isConfirmed) {
            console.log("logged out");
            toast.success("Logged out successfully");
            setTimeout(() => {
              this.$router.push("/signIn");
            }, 1000);
            localStorage.removeItem("userText");
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
        });
      },
    },
  };
  </script>
  
  <style>
  .font-semibold {
    font-weight: 600;
  }
  </style>
  
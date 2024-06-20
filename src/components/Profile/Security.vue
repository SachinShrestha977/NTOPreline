<template>
    <div class="flex md:flex-row flex-col">
      <!-- Left Column for Personal Information -->
      <div class="md:w-1/3 w-full">
        <h2 class="text-xl font-bold mb-4 dark:text-gray-100">Change Password</h2>
        <p class="text-gray-500 dark:text-gray-300">
          Change your password as needed.
        </p>
      </div>
  
      <!-- Right Column for Form -->
      <div class="md:w-2/3 w-full">
        <div>
          <label for="currentPassword" class="block mb-2 dark:text-gray-100"
            >Current Password</label
          >
          <input
            id="currentPassword"
            type="password"
            placeholder="Current Password"
            class="border mb-4 p-2 w-full rounded-md dark:bg-gray-300 dark:placeholder-gray-800"
          />
        </div>
        <div>
          <label for="newPassword" class="block mb-2 dark:text-gray-100"
            >New Password</label
          >
          <input
            id="newPassword"
            type="password"
            placeholder="New Password"
            class="border mb-4 p-2 w-full rounded-md dark:bg-gray-300 dark:placeholder-gray-800"
          />
        </div>
        <div>
          <label for="confirmPassword" class="block mb-2 dark:text-gray-100"
            >Confirm Password</label
          >
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            class="border mb-4 p-2 w-full rounded-md dark:bg-gray-300 dark:placeholder-gray-800"
          />
        </div>
        <button
          class="bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Change Password
        </button>
      </div>
    </div>
  
    <hr class="my-4" />
  
    <div class="flex md:flex-row flex-col">
      <!-- Left Column for Personal Information -->
      <div class="md:w-1/3 w-full p-4">
        <h2 class="text-xl font-bold mb-4 dark:text-gray-100">
          Log Out Of Other Sessions
        </h2>
        <p class="text-gray-500 dark:text-gray-300">
          Please enter your current password to log out from other devices.
        </p>
      </div>
  
      <!-- Right Column for Form -->
      <div class="md:w-2/3 w-full p-4">
        <div>
          <label for="password" class="block mb-2 dark:text-gray-100"
            >Your Password</label
          >
          <input
            id="logOutPassword"
            type="password"
            placeholder="Your Password"
            class="border mb-4 p-2 w-full rounded-md dark:bg-gray-300 dark:placeholder-gray-800"
          />
        </div>
  
        <button
          class="bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Log out
        </button>
      </div>
    </div>
  
    <hr class="my-4" />
  
    <div class="flex md:flex-row flex-col">
      <!-- Left Column for Personal Information -->
      <div class="md:w-1/3 w-full p-4">
        <h2 class="text-xl font-bold mb-4 dark:text-gray-100">Delete Account</h2>
        <p class="dark:text-gray-300">
          Please enter your current password to delete this account.
        </p>
      </div>
  
      <!-- Right Column for Form -->
      <div class="md:w-2/3 w-full p-4">
        <div>
          <label for="password" class="block mb-2">Your Password</label>
          <input
            id="deletePassword"
            type="password"
            placeholder="Your Password"
            class="border mb-4 p-2 w-full rounded-md dark:bg-gray-300 dark:placeholder-gray-800"
          />
        </div>
  
        <button
          class="bg-red-700 text-white p-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
        >
          Delete this account
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Security",
  };
  </script>
  
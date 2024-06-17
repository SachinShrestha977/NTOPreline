<template>
    <div class="dark:bg-gray-700 p-6">
      <div class="md:flex min-h-screen border border-gray-500 rounded-lg">
        <!-- Image Section -->
        <div class="md:w-1/2 w-auto flex justify-center dark:bg-gray-500 items-center md:p-0 p-2">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-4922762-4097209.png?f=webp"
            alt="Sign In"
          />
        </div>
  
        <!-- Form Section -->
        <div class="md:w-1/2 mr-8 mx-16 px-8 mb-8 mt-8 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
          <div class="p-4 sm:p-7">
            <div class="text-center">
              <img
                src="https://nepaltaxonline.com/themes/nepaltaxonline/img/logo-header.png"
                class="h-9 mx-auto"
                alt="Nepal Tax Logo"
              />
              <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
              <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                Don't have an account yet?
                <router-link to="/signup">
                  <a class="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500">
                    Sign up here
                  </a>
                </router-link>
              </p>
            </div>
  
            <div class="mt-5">
              <button
                type="button"
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                @click="signInWithGoogle"
              >
                <svg class="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                  <!-- Google SVG paths -->
                </svg>
                Sign in with Google
              </button>
              <button
                type="button"
                class="w-full mt-2 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                @click="signInWithFacebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="46"
                  height="47"
                  x="0"
                  y="0"
                  viewBox="0 0 100 100"
                  style="enable-background:new 0 0 512 512"
                  xml:space="preserve"
                  class="w-6 h-6"
                >
                  <!-- Facebook SVG paths -->
                </svg>
                Sign in with Facebook
              </button>
  
              <div class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">Or</div>
  
              <!-- Form -->
              <div class="grid gap-y-4">
                <!-- Form Group -->
                <div>
                  <label for="email" class="block text-sm mb-2 dark:text-white">Email address</label>
                  <div class="relative">
                    <input
                      type="email"
                      id="email"
                      v-model="email"
                      name="email"
                      class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required
                    />
                  </div>
                  <p v-if="emailError" class="text-xs text-red-600 mt-2">{{ emailError }}</p>
                </div>
                <!-- End Form Group -->
  
                <!-- Form Group -->
                <div>
                  <div class="flex justify-between items-center">
                    <label for="password" class="block text-sm mb-2 dark:text-white">Password</label>
                    <a class="text-sm text-blue-600 decoration-2 hover:underline font-medium" href="../examples/html/recover-account.html">Forgot password?</a>
                  </div>
                  <div class="relative">
                    <input
                      type="password"
                      id="password"
                      v-model="password"
                      name="password"
                      class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required
                    />
                  </div>
                  <p v-if="passwordError" class="text-xs text-red-600 mt-2">{{ passwordError }}</p>
                </div>
                <!-- End Form Group -->
  
                <!-- Checkbox -->
                <div class="flex items-center">
                  <div class="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <div class="ms-3">
                    <label for="remember-me" class="text-sm dark:text-white">Remember me</label>
                  </div>
                </div>
                <!-- End Checkbox -->
  
                <button
                  type="submit"
                  class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  @click="submitForm"
                >
                  Sign in
                </button>
              </div>
              <!-- End Form -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { toast } from "vue3-toastify";
  import "vue3-toastify/dist/index.css";
  export default {
    name: "SignIn",
    data() {
      return {
        email: "",
        password: "",
        emailError: "",
        passwordError: "",
      };
    },
    methods: {
      submitForm() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
        // Reset errors
        this.emailError = "";
        this.passwordError = "";
  
        // Validate email
        if (!this.email || !emailRegex.test(this.email.trim())) {
          this.emailError = "Valid email is required";
        }
  
        // Validate password
        if (!this.password || this.password.length < 8) {
          this.passwordError = "Password must be at least 8 characters long";
        }
  
        // If there are no errors, perform sign-in logic
        if (!this.emailError && !this.passwordError) {
          // Perform sign-in logic
          toast.success("Login Success");
          setTimeout(() => {
            this.$router.push("/myProfile");
          }, 1000);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .input-field {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  </style>
  
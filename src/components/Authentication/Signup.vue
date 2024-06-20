<template>
    <div class="flex min-h-screen items-center justify-center pt-6 pb-5 dark:bg-gray-700">
      <div class="md:flex border border-gray-300 dark:bg-gray-600 rounded-lg">
        <!-- Image Section -->
        <div class="md:w-1/3 w-auto md:flex bg-gray-100 dark:bg-gray-500 m-4 rounded-lg justify-center items-center">
          <div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-8044864-6430773.png"
              alt="Sign Up"
            />
          </div>
        </div>
  
        <!-- Form Section -->
        <div class="md:w-2/3 w-full flex justify-center items-center p-4">
          <div class="w-full bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-700 dark:border-neutral-700">
            <div class="p-4 sm:p-7">
              <div class="text-center">
                <img
                  src="https://nepaltaxonline.com/themes/nepaltaxonline/img/logo-header.png"
                  class="h-9 mx-auto"
                  alt="Nepal Tax Logo"
                />
                <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
                <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                  Already have an account?
                  <router-link to="/signin">
                    <a class="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500">
                      Sign in here
                    </a>
                  </router-link>
                </p>
              </div>
  
              <div class="mt-5">
                <!-- Form -->
                <div class="grid gap-y-4">
                  <!-- Form Group - Email -->
                  <div>
                    <label for="email" class="block text-sm mb-2 dark:text-white">Email address</label>
                    <div class="relative">
                      <input
                        type="email"
                        id="email"
                        v-model="email"
                        name="email"
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        required
                        @input="validateEmail"
                      />
                    </div>
                    <p v-if="errors.email" class="text-xs text-red-600 mt-2">{{ errors.email }}</p>
                  </div>
                  <!-- End Form Group - Email -->
  
                  <!-- Form Group - Password -->
                  <div>
                    <label for="password" class="block text-sm mb-2 dark:text-white">Password</label>
                    <div class="relative">
                      <input
                        type="password"
                        id="password"
                        v-model="password"
                        name="password"
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        required
                        @input="validatePassword"
                      />
                    </div>
                    <p v-if="errors.password" class="text-xs text-red-600 mt-2">{{ errors.password }}</p>
                  </div>
                  <!-- End Form Group - Password -->
  
                  <!-- Form Group - Confirm Password -->
                  <div>
                    <label for="confirm-password" class="block text-sm mb-2 dark:text-white">Confirm Password</label>
                    <div class="relative">
                      <input
                        type="password"
                        id="confirm-password"
                        v-model="confirmPassword"
                        name="confirm-password"
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        required
                        @input="validateConfirmPassword"
                      />
                    </div>
                    <p v-if="errors.confirmPassword" class="text-xs text-red-600 mt-2">{{ errors.confirmPassword }}</p>
                  </div>
                  <!-- End Form Group - Confirm Password -->
  
                  <!-- Checkbox -->
                  <div class="flex items-center">
                    <input
                      id="accept-terms"
                      v-model="acceptTerms"
                      name="accept-terms"
                      type="checkbox"
                      class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-600 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                    <label for="accept-terms" class="text-sm dark:text-white ms-3">I accept the
                      <a href="#" class="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500">Terms and Conditions</a>
                    </label>
                  </div>
                  <!-- End Checkbox -->
  
                  <button
                    type="button"
                    @click="submitForm"
                    class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Sign up
                  </button>
                </div>
                <!-- End Form -->
              </div>
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
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
      errors: {
        email: "",
        password: "",
        confirmPassword: ""
      }
    };
  },
  methods: {
   validateEmail() {
this.errors.email = this.email ? "" : "Please include a valid email address";
},
    validatePassword() {
      this.errors.password = this.password.length >= 8 ? "" : "Password must be at least 8 characters long";
    },
    validateConfirmPassword() {
      this.errors.confirmPassword = this.password === this.confirmPassword ? "" : "Passwords do not match";
    },
    async submitForm() {
      this.validateEmail();
      this.validatePassword();
      this.validateConfirmPassword();

      
      
      if (!this.email || !this.password || this.password.length < 8 || this.password !== this.confirmPassword || !this.acceptTerms) {
        toast.error("Please correct the errors in the form.");
        return;
      }

      
        toast.success("Signed Up Successfully!");
        setTimeout(() => {
            this.$router.push("/signin");
        }, 1000)
      
    }
  }
};
</script>

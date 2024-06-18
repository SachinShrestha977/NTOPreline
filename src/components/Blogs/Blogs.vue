<template>
    <div class="dark:bg-gray-700 p-6">
      <!-- Section 1 -->
  
      <div
        class="container mx-auto px-4 flex flex-col md:flex-row justify-center"
      >
        <div class="w-full md:w-1/6"></div>
        <!-- Empty div for left space -->
  
        <div class="flex flex-wrap w-full md:w-3/4 md:mx-3">
          <h2 class="w-full text-2xl font-semibold mb-2 dark:text-gray-50">
            Editor's Pick
          </h2>
          <hr class="w-full border-t-2 border-gray-300 mb-4" />
  
          <div class="w-full md:w-1/2 md:pr-3">
            <div class="mb-4">
              <router-link to="/blogs/specific">
                <img
                  :src="sec1col1.img"
                  alt="Blog Image"
                  class="w-full h-auto shadow-md hover:cursor-pointer"
                />
                <h2
                  class="text-xl font-semibold mt-2 hover:cursor-pointer dark:text-gray-50"
                >
                  {{ sec1col1.title }}
                </h2>
              </router-link>
  
              <p class="text-gray-500 text-sm mt-3 dark:text-gray-200">
                {{ sec1col1.content }}
              </p>
  
              <p
                class="mt-3 text-sm hover:cursor-pointer hover:text-orange-400 transition-colors duration-200 dark:text-gray-50"
              >
                {{ sec1col1.writer }}
              </p>
              <p
                class="mt-3 mr-1 inline text-sm text-gray-500 dark:text-gray-200"
              >
                {{ sec1col1.postDate }}
              </p>
              <p class="inline mr-1 text-sm text-gray-500 dark:text-gray-200">
                &middot;
              </p>
              <p class="inline text-sm text-gray-500 dark:text-gray-200">
                {{ sec1col1.readTime }}
              </p>
            </div>
          </div>
  
          <div class="w-full md:w-1/2 md:pr-3">
            <!-- Flex container for image and content -->
            <div
              v-for="(item, index) in sec1col2"
              :key="index"
              class="flex items-center mb-6 h-auto hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 hover:cursor-pointer"
            >
              <img
                :src="item.img"
                alt="Related Image"
                class="w-2/5 h-auto mr-4"
              />
              <!-- Image on the left -->
              <div>
                <!-- Content on the right -->
                <h2 class="text-xl font-semibold dark:text-gray-50">
                  {{ item.title }}
                </h2>
                <p
                  class="mt-3 text-sm hover:cursor-pointer hover:text-orange-400 transition-colors duration-200 dark:text-gray-50"
                >
                  {{ item.writer }}
                </p>
                <p
                  class="mt-3 mr-1 inline text-sm text-gray-500 dark:text-gray-200"
                >
                  {{ item.postDate }}
                </p>
                <p class="inline mr-1 text-sm text-gray-500 dark:text-gray-200">
                  &middot;
                </p>
                <p class="inline text-sm text-gray-500 dark:text-gray-200">
                  {{ item.readTime }}
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <div class="w-full md:w-1/4 md:mx-3">
          <h2 class="w-full text-2xl font-semibold mb-2 dark:text-gray-50">
            Trending
          </h2>
          <hr class="w-full border-t-2 border-gray-300 mb-4" />
          <div
            v-for="(item, index) in trending"
            :key="index"
            class="flex mb-6 h-22 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 hover:cursor-pointer"
          >
            <p class="text-gray-300 text-3xl mr-6 ml-4">{{ item.number }}</p>
            <!-- Image on the left -->
            <div>
              <!-- Content on the right -->
              <h2 class="text-xl font-semibold dark:text-gray-50">
                {{ item.title }}
              </h2>
              <p
                class="mt-1 text-sm hover:cursor-pointer dark:text-gray-50 hover:text-orange-400 transition-colors duration-200"
              >
                {{ item.writer }}
              </p>
              <p
                class="mt-3 mr-1 inline text-sm text-gray-500 dark:text-gray-200"
              >
                {{ item.postDate }}
              </p>
              <p class="inline mr-1 text-sm text-gray-500 dark:text-gray-200">
                &middot;
              </p>
              <p class="inline text-sm text-gray-500 dark:text-gray-200">
                {{ item.readTime }}
              </p>
            </div>
          </div>
  
          <div class="flex items-center">
            <p
              class="text-blue-700 hover:cursor-pointer hover:text-blue-500 transition-colors duration-300"
            >
              See all trending
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0"
              y="0"
              viewBox="0 0 128 128"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              class="h-4 w-4"
            >
              <g
                transform="matrix(3.061616997868383e-16,-1,1,3.061616997868383e-16,-0.00006294250491123421,127.99968910217285)"
              >
                <path
                  d="M64 88a3.988 3.988 0 0 1-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0L64 78.344l37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40A3.988 3.988 0 0 1 64 88z"
                  fill="#1E40AF"
                  opacity="1"
                  data-original="#000000"
                  class=""
                ></path>
              </g>
            </svg>
          </div>
        </div>
  
        <div class="w-full md:w-1/6"></div>
        <!-- Empty div for right space -->
      </div>
  
      <hr class="my-4 mx-52 border-t-2 border-gray-300" />
  
      <!-- Section2 (image) -->
  
      <div
        class="flex flex-col md:flex-row md:mx-52 md:w-auto w-auto h-auto mt-8 bg-gray-50 mb-10"
      >
        <div class="md:w-1/2 p-4 dark:bg-gray-600">
          <div class="mx-12">
            <p class="text-gray-400 mt-10 dark:text-gray-50">MOST RECENT</p>
            <p class="text-2xl mt-2 dark:text-gray-50">
              What I Wish I'd Known When I Made a Drastic Career Change
            </p>
  
            <hr class="border-t-2 border-gray-300" />
            <p class="mt-3 text-gray-600 dark:text-gray-100">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur sit excepturi ad id magni vitae inventore
              exercitationem hic ipsum, iusto blanditiis rem sed ullam totam
              repellat eveniet qui recusandae laudantium.
            </p>
            <div>
              <p
                class="mt-5 text-sm hover:cursor-pointer dark:text-gray-50 hover:text-orange-400 transition-colors duration-200"
              >
                James Smith
              </p>
              <p
                class="mt-3 mr-1 inline text-sm text-gray-500 dark:text-gray-200"
              >
                April 9
              </p>
              <p class="inline mr-1 text-sm text-gray-500 dark:text-gray-200">
                &middot;
              </p>
              <p class="inline text-sm text-gray-500 dark:text-gray-200">
                5 mins read
              </p>
            </div>
          </div>
        </div>
        <div class="md:w-1/2">
          <img
            src="https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2021/opinion/shutterstock1996158416-1635437565.jpg&w=900&height=601"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>
      </div>
  
      <hr class="my-4 mx-52 border-t-2 border-gray-300" />
  
      <!-- Section 3 -->


      <!-- Card Blog -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  

  <!-- Grid -->
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Card -->
    <a class="group" href="#">
      <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://149358047.v2.pressablecdn.com/wp-content/uploads/2016/10/IPS-taxes-pic.jpg" alt="Image Description">
        <span class="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-neutral-900">
          Sponsored
        </span>
      </div>

      <div class="mt-7">
        <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
          Related Post Title
        </h3>
        <p class="mt-3 text-gray-800 dark:text-neutral-200">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere architecto repellat sapiente reiciendis non         </p>
        <p class="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
          Read more
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a class="group" href="#">
      <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description">
      </div>

      <div class="mt-7">
        <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
            Related Post Title

        </h3>
        <p class="mt-3 text-gray-800 dark:text-neutral-200">
             porro aliquid officiis similique neque illum tenetur ad, amet, et quod impedit aperiam tempore magni vel?        </p>
        <p class="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
          Read more
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a class="group relative flex flex-col w-full min-h-60 bg-[url('https://ktmguide.com/wp-content/uploads/2024/03/417776870_780643370762102_7145521128950993684_n.jpg')] bg-center bg-cover rounded-xl hover:shadow-lg transition" href="#">
      <div class="flex-auto p-4 md:p-6">
      </div>
      <div class="pt-0 p-4 ">
        <div class=" inline-flex items-center gap-2 text-sm font-medium text-white hover:text-orange-400" @click="openGurkha">
            <p>
                          Visit the site

            </p>
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </div>
      </div>
    </a>
    <!-- End Card -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Card Blog -->
  
      
  
      <!-- Section4 -->
  
      <div class="flex flex-col md:flex-row mx-auto justify-center px-4 mt-10">
        <div class="w-full md:w-1/6"></div>
  
        <!-- Most Recent -->
  
        <div id="app" class="w-3/4 mr-6">
          <p class="font-semibold text-2xl dark:text-gray-50">MOST RECENT</p>
          <hr class="w-full border-t-2 border-gray-300 mb-4" />
          <div
            v-for="(item, index) in paginatedItems"
            :key="index"
            class="md:flex w-auto md:w-auto h-auto md:h-auto hover:bg-gray-100 dark:hover:bg-gray-600 mb-4"
          >
            <div class="md:w-3/4 mr-2 p-2">
              <p class="text-gray-500 dark:text-gray-50">EDITOR'S PICK</p>
              <p class="font-semibold text-xl mt-3 dark:text-gray-50">
                {{ item.title }}
              </p>
              <p class="text-sm mt-3 text-gray-500 dark:text-gray-200">
                {{ item.description }}
              </p>
              <p
                class="text-sm hover:cursor-pointer dark:text-gray-50 mt-3 hover:text-orange-400 transition-colors duration-200"
              >
                {{ item.author }}
              </p>
              <p
                class="mt-3 mr-1 inline text-sm text-gray-500 dark:text-gray-200"
              >
                {{ item.date }}
              </p>
              <p class="inline mr-1 text-sm text-gray-500 dark:text-gray-200">
                &middot;
              </p>
              <p class="inline text-sm text-gray-500 dark:text-gray-200">
                {{ item.readTime }}
              </p>
            </div>
            <div class="w-1/4">
              <img :src="item.img" alt="" class="p-2 h-full" />
            </div>
          </div>
          <div class="flex justify-center items-center my-4">
            <button
              @click="prevPage"
              :disabled="currentPage <= 1"
              class="px-4 py-2 mr-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-150 ease-in-out"
            >
              Previous
            </button>
            <span
              class="px-4 py-2 mr-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 dark:bg-gray-500 dark:text-white text-gray-800"
            >
              Page {{ currentPage }} of {{ totalPages }}
            </span>
            <button
              @click="nextPage"
              :disabled="currentPage >= totalPages"
              class="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-r focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-150 ease-in-out"
            >
              Next
            </button>
          </div>
        </div>
  
        <!-- Popular -->
  
        <div class="md:w-1/4 mt-10 md:mt-0">
          <!-- Right column content -->
          <h2 class="font-semibold text-2xl dark:text-gray-50">Popular</h2>
          <hr class="w-full border-t-2 border-gray-300 mb-4" />
          <div
            v-for="(item, index) in popular"
            :key="index"
            class="flex w-auto mb-6 h-auto hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 hover:cursor-pointer"
          >
            <p class="text-gray-300 text-3xl mr-6 ml-4">{{ item.number }}</p>
            <!-- Image on the left -->
            <div>
              <!-- Content on the right -->
              <h2 class="text-xl font-semibold dark:text-gray-50">
                {{ item.title }}
              </h2>
              <p
                class="mt-1 text-sm hover:cursor-pointer dark:text-gray-50 hover:text-orange-400 transition-colors duration-200"
              >
                {{ item.writer }}
              </p>
              <p
                class="mt-3 mr-1 inline text-sm text-gray-500 dark:text-gray-200"
              >
                {{ item.postDate }}
              </p>
              <p class="inline mr-1 text-sm text-gray-500 dark:text-gray-200">
                &middot;
              </p>
              <p class="inline text-sm text-gray-500 dark:text-gray-200">
                {{ item.postDate }}
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/6"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Blogs",
    
    
    
    
    data() {
      return {
        showComponent: false,
        Manish: "Hello",
        sec1col1: {
          title: "Tax Refunds | Everything You Need To Know | Taxes | Nepal News",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus minima, ullam, nihil fugiat dolorum suscipit unde, distinctio rem ea expedita.",
          writer: "James Smith",
          postDate: "April 10",
          readTime: "5 mins read",
          img: "https://www.usnews.com/dims4/USNEWS/4e1c360/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fe1%2F9e%2F97de830446d49b8ecb064f25112b%2Fgettyimages-1438794367.jpg",
        },
  
        sec1col2: [
          {
            title: "Related Post Title",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus minima, ullam, nihil fugiat dolorum suscipit unde, distinctio rem ea expedita.",
            writer: "James Smith",
            postDate: "April 10",
            readTime: "5 mins read",
            img: "https://www.usnews.com/dims4/USNEWS/4e1c360/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fe1%2F9e%2F97de830446d49b8ecb064f25112b%2Fgettyimages-1438794367.jpg",
          },
          {
            title: "Related Post Title",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus minima, ullam, nihil fugiat dolorum suscipit unde, distinctio rem ea expedita.",
            writer: "James Smith",
            postDate: "April 10",
            readTime: "5 mins read",
            img: "https://cdn.mos.cms.futurecdn.net/QD3B58fDcaeg9xELQr7HHN.jpg",
          },
          {
            title: "Related Post Title",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus minima, ullam, nihil fugiat dolorum suscipit unde, distinctio rem ea expedita.",
            writer: "James Smith",
            postDate: "April 10",
            readTime: "5 mins read",
            img: "https://media.istockphoto.com/id/1426962165/photo/tax-word-on-wooden-blocks-with-calculator-pen-magnifying-glass-and-data-analysis-background.webp?b=1&s=170667a&w=0&k=20&c=xYShpCBR3hWOX_F7F4o5YtMNL9m98_78CjupfuDEibk=",
          },
          {
            title: "Related Post Title",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus minima, ullam, nihil fugiat dolorum suscipit unde, distinctio rem ea expedita.",
            writer: "James Smith",
            postDate: "April 10",
            readTime: "5 mins read",
            img: "https://www.usnews.com/dims4/USNEWS/4e1c360/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fe1%2F9e%2F97de830446d49b8ecb064f25112b%2Fgettyimages-1438794367.jpg",
          },
        ],
  
        trending: [
          {
            title: "Related Post Title",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus minima, ullam, nihil fugiat dolorum suscipit unde, distinctio rem ea expedita.",
            writer: "James Smith",
            postDate: "April 10",
            readTime: "5 mins read",
            number: "01",
          },
          {
            title: "Related Post Title",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus minima, ullam, nihil fugiat dolorum suscipit unde, distinctio rem ea expedita.",
            writer: "James Smith",
            postDate: "April 10",
            readTime: "5 mins read",
            number: "02",
          },
          {
            title: "Related Post Title",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus minima, ullam, nihil fugiat dolorum suscipit unde, distinctio rem ea expedita.",
            writer: "James Smith",
            postDate: "April 10",
            readTime: "5 mins read",
            number: "03",
          },
          {
            title: "Related Post Title",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus minima, ullam, nihil fugiat dolorum suscipit unde, distinctio rem ea expedita.",
            writer: "James Smith",
            postDate: "April 10",
            readTime: "5 mins read",
            number: "04",
          },
        ],
  
        section3: [
          {
            title: "Related Post Title",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus minima, ullam, nihil fugiat dolorum suscipit unde, distinctio rem ea expedita.",
            writer: "James Smith",
            postDate: "April 22",
            readTime: "8 mins read",
            img: "https://149358047.v2.pressablecdn.com/wp-content/uploads/2016/10/IPS-taxes-pic.jpg",
          },
          {
            title: "Related Post Title",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus minima, ullam, nihil fugiat dolorum suscipit unde, distinctio rem ea expedita.",
            writer: "James Smith",
            postDate: "April 22",
            readTime: "8 mins read",
            img: "https://149358047.v2.pressablecdn.com/wp-content/uploads/2016/10/IPS-taxes-pic.jpg",
          },
        ],
        popular: [
          {
            title: "Related Post Title",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus minima, ullam, nihil fugiat dolorum suscipit unde, distinctio rem ea expedita.",
            writer: "James Smith",
            postDate: "April 10",
            readTime: "5 mins read",
            number: "01",
          },
          {
            title: "Related Post Title",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus minima, ullam, nihil fugiat dolorum suscipit unde, distinctio rem ea expedita.",
            writer: "James Smith",
            postDate: "April 10",
            readTime: "5 mins read",
            number: "02",
          },
          {
            title: "Related Post Title",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus minima, ullam, nihil fugiat dolorum suscipit unde, distinctio rem ea expedita.",
            writer: "James Smith",
            postDate: "April 10",
            readTime: "5 mins read",
            number: "03",
          },
          {
            title: "Related Post Title",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus minima, ullam, nihil fugiat dolorum suscipit unde, distinctio rem ea expedita.",
            writer: "James Smith",
            postDate: "April 10",
            readTime: "5 mins read",
            number: "04",
          },
        ],
  
        items: [
          {
            title: "Understanding and Navigating Capital Gains Tax",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe,eaque exercitationem sequi nulla et soluta facilis autem, quasimpedit similique!...",
            author: "James Smith",
            date: "April 9",
            readTime: "5 mins read",
            img: "https://www.hrblock.com/tax-center/wp-content/uploads/2023/11/new-tax-laws-2023-feature-1280x720.jpg",
          },
          {
            title: "Understanding and Navigating Capital Gains Tax",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe,eaque exercitationem sequi nulla et soluta facilis autem, quasimpedit similique!...",
            author: "James Smith",
            date: "April 9",
            readTime: "5 mins read",
            img: "https://www.usnews.com/dims4/USNEWS/4e1c360/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fe1%2F9e%2F97de830446d49b8ecb064f25112b%2Fgettyimages-1438794367.jpg",
          },
          {
            title: "Understanding and Navigating Capital Gains Tax",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe, eaque exercitationem sequi nulla et soluta facilis autem, quasimpedit similique!...",
            author: "James Smith",
            date: "April 9",
            readTime: "5 mins read",
            img: "https://www.usnews.com/dims4/USNEWS/4e1c360/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fe1%2F9e%2F97de830446d49b8ecb064f25112b%2Fgettyimages-1438794367.jpg",
          },
          {
            title: "Understanding and Navigating Capital Gains Tax",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe,eaque exercitationem sequi nulla et soluta facilis autem, quasimpedit similique!...",
            author: "James Smith",
            date: "April 9",
            readTime: "5 mins read",
            img: "https://www.usnews.com/dims4/USNEWS/4e1c360/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fe1%2F9e%2F97de830446d49b8ecb064f25112b%2Fgettyimages-1438794367.jpg",
          },
          {
            title: "Understanding and Navigating Capital Gains Tax",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe,eaque exercitationem sequi nulla et soluta facilis autem, quasimpedit similique!...",
            author: "James Smith",
            date: "April 9",
            readTime: "5 mins read",
            img: "https://www.usnews.com/dims4/USNEWS/4e1c360/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fe1%2F9e%2F97de830446d49b8ecb064f25112b%2Fgettyimages-1438794367.jpg",
          },
          {
            title: "Understanding and Navigating Capital Gains Tax",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe,eaque exercitationem sequi nulla et soluta facilis autem, quasimpedit similique!...",
            author: "James Smith",
            date: "April 9",
            readTime: "5 mins read",
            img: "https://www.usnews.com/dims4/USNEWS/4e1c360/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fe1%2F9e%2F97de830446d49b8ecb064f25112b%2Fgettyimages-1438794367.jpg",
          },
          {
            title: "Understanding and Navigating Capital Gains Tax",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe eaque exercitationem sequi nulla et soluta facilis autem, quasimpedit similique!...",
            author: "James Smith",
            date: "April 9",
            readTime: "5 mins read",
            img: "https://www.usnews.com/dims4/USNEWS/4e1c360/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fe1%2F9e%2F97de830446d49b8ecb064f25112b%2Fgettyimages-1438794367.jpg",
          },
          {
            title: "Understanding and Navigating Capital Gains Tax",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe,eaque exercitationem sequi nulla et soluta facilis autem, quasimpedit similique!...",
            author: "James Smith",
            date: "April 9",
            readTime: "5 mins read",
            img: "https://www.usnews.com/dims4/USNEWS/4e1c360/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fe1%2F9e%2F97de830446d49b8ecb064f25112b%2Fgettyimages-1438794367.jpg",
          },
          {
            title: "Understanding and Navigating Capital Gains Tax",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe,eaque exercitationem sequi nulla et soluta facilis autem, quasimpedit similique!...",
            author: "James Smith",
            date: "April 9",
            readTime: "5 mins read",
            img: "https://www.hrblock.com/tax-center/wp-content/uploads/2023/11/new-tax-laws-2023-feature-1280x720.jpg",
          },
          {
            title: "Understanding and Navigating Capital Gains Tax",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe,eaque exercitationem sequi nulla et soluta facilis autem, quasimpedit similique!...",
            author: "James Smith",
            date: "April 9",
            readTime: "5 mins read",
            img: "https://www.usnews.com/dims4/USNEWS/4e1c360/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fe1%2F9e%2F97de830446d49b8ecb064f25112b%2Fgettyimages-1438794367.jpg",
          },
          {
            title: "Understanding and Navigating Capital Gains Tax",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe, eaque exercitationem sequi nulla et soluta facilis autem, quasimpedit similique!...",
            author: "James Smith",
            date: "April 9",
            readTime: "5 mins read",
            img: "https://www.usnews.com/dims4/USNEWS/4e1c360/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fe1%2F9e%2F97de830446d49b8ecb064f25112b%2Fgettyimages-1438794367.jpg",
          },
          {
            title: "Understanding and Navigating Capital Gains Tax",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe,eaque exercitationem sequi nulla et soluta facilis autem, quasimpedit similique!...",
            author: "James Smith",
            date: "April 9",
            readTime: "5 mins read",
            img: "https://www.usnews.com/dims4/USNEWS/4e1c360/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fe1%2F9e%2F97de830446d49b8ecb064f25112b%2Fgettyimages-1438794367.jpg",
          },
          {
            title: "Understanding and Navigating Capital Gains Tax",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe,eaque exercitationem sequi nulla et soluta facilis autem, quasimpedit similique!...",
            author: "James Smith",
            date: "April 9",
            readTime: "5 mins read",
            img: "https://www.usnews.com/dims4/USNEWS/4e1c360/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fe1%2F9e%2F97de830446d49b8ecb064f25112b%2Fgettyimages-1438794367.jpg",
          },
          {
            title: "Understanding and Navigating Capital Gains Tax",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe,eaque exercitationem sequi nulla et soluta facilis autem, quasimpedit similique!...",
            author: "James Smith",
            date: "April 9",
            readTime: "5 mins read",
            img: "https://www.usnews.com/dims4/USNEWS/4e1c360/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fe1%2F9e%2F97de830446d49b8ecb064f25112b%2Fgettyimages-1438794367.jpg",
          },
          {
            title: "Understanding and Navigating Capital Gains Tax",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe eaque exercitationem sequi nulla et soluta facilis autem, quasimpedit similique!...",
            author: "James Smith",
            date: "April 9",
            readTime: "5 mins read",
            img: "https://www.usnews.com/dims4/USNEWS/4e1c360/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fe1%2F9e%2F97de830446d49b8ecb064f25112b%2Fgettyimages-1438794367.jpg",
          },
          {
            title: "Understanding and Navigating Capital Gains Tax",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe,eaque exercitationem sequi nulla et soluta facilis autem, quasimpedit similique!...",
            author: "James Smith",
            date: "April 9",
            readTime: "5 mins read",
            img: "https://www.usnews.com/dims4/USNEWS/4e1c360/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fe1%2F9e%2F97de830446d49b8ecb064f25112b%2Fgettyimages-1438794367.jpg",
          },
        ], // Your items data
        currentPage: 1,
        pageSize: 5,
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.items.length / this.pageSize);
      },
      paginatedItems() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        return this.items.slice(start, end);
      },
    },
    methods: {
      openGurkha() {
        window.open("https://gurkhatech.com/", "_blank");
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      mounted() {
        // Fetch your data here and assign it to this.items
        this.items = [
          {
            title: "Understanding and Navigating Capital Gains Tax",
            description: "Lorem ipsum dolor sit amet...",
            author: "James Smith",
            date: "April 9",
            readTime: "5 mins read",
            img: "https://www.example.com/image.jpg",
          },
          // Add more items as per your actual data
        ];
      },
    },
  };
  </script>
  
  <style scoped></style>
  
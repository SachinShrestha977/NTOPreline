<script>
import {
  IconCircleChevronLeft,
  IconCircleChevronDown,
  IconCircleChevronUp,
  IconChevronDown,
} from "@tabler/icons-vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import Vue3TabsChrome from "vue3-tabs-chrome";
import "vue3-tabs-chrome/dist/vue3-tabs-chrome.css";
import Swal from "sweetalert2";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: "Article",
  components: {
    Vue3TabsChrome,
    DisclosurePanel,
    DisclosureButton,
    Disclosure,
    IconCircleChevronLeft,
    IconCircleChevronUp,
    IconCircleChevronDown,
    IconChevronDown,
  },

  data() {
    return {
      isTextHighlighted: false,
      highlightedText: "",
      showDeleteIcon: false,
      removeIconPosition: { top: 0, left: 0 },
      showPenIcon: false,
      penIconPosition: { top: 0, left: 0 },
      selectedRange: null,
      searchQuery: "",
      isOpen: false,

      openDropdownId: null,

      isLoading: false,
      collapsed: false,
      posts: [
        {
          id: 1,

          title: "आयकर ऐन - ७७/७८",
          heading: "दफा ७ -. व्यवसायबाट भएको आयको गणना",
          subheading: "७. व्यवसायबाट भएको आयको गणना",
          content: [
            {
              title:
                "(१) कुनै व्यक्तिको कुनै आय वर्षमा कुनै व्यवसाय संचालनवाट भएको मुनाफा र लाभहरू सो व्यक्तिको सो व्यवसायको सो वर्षको आय हुनेछ ।",
            },
            {
              title:
                "(२) कुनै व्यक्तिको कुनै आय वर्षमा व्यवसाय संचालनवाट भएको मुनाफा र लाभको गणना गर्दा सो व्यक्तिले सो वर्षभित्र प्राप्त गरेको देहायका रकमहरू समावेश गरी गणना गर्नु पर्नेछः–",
              subtitle1: "(क) सेवा शुल्क,",
              subtitle2: "(ख) व्यापारिक मौज्दातको निसर्गबाट प्राप्त रकम,",
              subtitle3:
                "(ग) परिच्छेद–८ बमोजिम गणना गरिएको कुनै व्यक्तिको व्यावसायिक सम्पत्ति वा व्यावसायिक दायित्वको निसर्गबाट प्राप्त खूद लाभ,",
              subtitle4:
                "(घ) व्यवसायको ह्रासयोग्य सम्पत्तिको निसर्गबाट अनुसूची–२ को दफा ४ को उपदफा (२) को खण्ड (क) बमोजिम प्राप्त गरेको मानिने रकम,",
              subtitle5:
                "(ङ व्यवसायका सम्बन्धमा कुनै व्यक्तिबाट प्राप्त गरेको उपहार,",
              subtitle6:
                "(च) व्यवसाय संचालनको सम्बन्धमा कुनै प्रतिबन्ध स्वीकार गरे बापत प्राप्त गरेको रकम,",
              subtitle7:
                "(छ) कुनै व्यक्तिले प्राप्त गरेको रकम लगानीबाट हुने आयमा समावेश हुने प्रकृतिको भए तापनि त्यस्तो व्यक्तिले आफ्नो व्यवसायसंग प्रत्यक्ष रूपमा सम्बन्धित भई प्राप्त गरेको रकम, र",
              subtitle8:
                "(ज) परिच्छेद–६ वा ७ वा दफा ५६ वा ६० बमोजिम समावेश गरिनुपर्ने अन्य रकमहरू ।",
            },
            {
              title:
                "(३) उपदफा (२) मा जुनसुकै कुरा लेखिएको भए तापनि दफा १०, ५४ र ६९ बमोजिम छूट पाउने रकम र अन्तिम रूपमा कर कट्टी हुने भुक्तानीहरू व्यवसाय संचालनबाट भएको मुनाफा र लाभको गणना गर्दा समावेश गर्नुपर्ने छैन ।",
            },
          ],
          date: "2078/12/12",

          commentCount: "5",
          shareCount: "10",
        },
        {
          id: 2,
          title: "आयकर ऐन - 76/77",
          date: "2078/12/12",
          commentCount: "6",
          shareCount: "10",
        },
        {
          id: 3,
          title: "आयकर ऐन - 75/76",
          date: "2078/12/12",
          commentCount: "6",
          shareCount: "10",
        },
        {
          id: 4,
          title: "आयकर ऐन - ७७/७८",
          date: "2078/12/12",
          commentCount: "6",
          shareCount: "10",
        },
        {
          id: 5,
          title: "आयकर ऐन - ७७/७८",
          date: "2078/12/12",
          commentCount: "6",
          shareCount: "10",
        },
        {
          id: 6,
          title: "आयकर ऐन - ७७/७८",
          date: "2078/12/12",
          commentCount: "6",
          shareCount: "10",
        },
        {
          id: 7,
          title: "आयकर ऐन - ७७/७८",
          date: "2078/12/12",
          commentCount: "6",
          shareCount: "10",
        },
        {
          id: 8,
          title: "आयकर ऐन - ७७/७८",
          date: "2078/12/12",
          commentCount: "6",
          shareCount: "10",
        },
        {
          id: 9,
          title: "आयकर ऐन - ७७/७८",
          date: "2078/12/12",
          commentCount: "6",
          shareCount: "10",
        },
        {
          id: 10,
          title: "आयकर ऐन - ७७/७८",
          date: "2078/12/12",
          commentCount: "6",
          shareCount: "10",
        },
        {
          id: 11,
          title: "आयकर ऐन - ७७/७८",
          date: "2078/12/12",
          commentCount: "6",
          shareCount: "10",
        },
        {
          id: 12,
          title: "आयकर ऐन - ७७/७८",
          date: "2078/12/12",
          commentCount: "6",
          shareCount: "10",
        },
        {
          id: 13,
          title: "आयकर ऐन - ७७/७८",
          date: "2078/12/12",
          commentCount: "6",
          shareCount: "10",
        },
        {
          id: 14,
          title: "आयकर ऐन - ७७/७८",
          date: "2078/12/12",
          commentCount: "6",
          shareCount: "10",
        },
        {
          id: 15,
          title: "आयकर ऐन - ७७/७८",
          date: "2078/12/12",
          commentCount: "6",
          shareCount: "10",
        },
        {
          id: 16,
          title: "आयकर ऐन - ७७/७८",
          date: "2078/12/12",
          commentCount: "6",
          shareCount: "10",
        },
      ],
    };
  },

  methods: {
    deletePost(postId) {
      Swal.fire({
        title: "Are you sure?",
        text: "Article will be deleted from your bookmarks",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete",
      }).then((result) => {
        if (result.isConfirmed) {
          toast.success("Deleted an article");
          const index = this.posts.findIndex((post) => post.id === postId);
          if (index !== -1) {
            // Remove the post from the array
            this.posts.splice(index, 1);
          }
        }
      });

      // Find the index of the post with the given ID
    },
  },
};
</script>

<template>
  <div class="contain mt-0 h-screen">
    <div
      class="w-full border-b border-slate-200 dark:border-slate-800 lg:border-b-0 lg:border-e"
    >
      <p class="dark:text-gray-50 text-2xl px-4 font-semibold pb-5">
        Your Bookmarked Articles:
      </p>
      <ul
        class="divide-y dark:text-white md:mb-0 mb-5"
        @click.prevent="handleAnchorClick"
      >
        <li
          v-for="post in posts"
          :key="post.id"
          class="flex justify-between relative p-3 hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <div>
            <h3 class="text-sm font-medium leading-5 dark:text-white">
              {{ post.title }}
            </h3>

            <ul
              class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500 dark:text-white"
            >
              <li>{{ post.date }}</li>
              <li>&middot;</li>
              <li>{{ post.commentCount }} comments</li>
              <li>&middot;</li>
              <li>{{ post.shareCount }} shares</li>
            </ul>
          </div>

          <div
            @click="deletePost(post.id)"
            class="flex items-center space-x-1 hover:cursor-pointer"
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
              class="h-4 w-4"
            >
              <g>
                <path
                  fill="#EF4444"
                  fill-rule="evenodd"
                  d="M170.8 14.221A14.21 14.21 0 0 1 185 .014L326.991.006a14.233 14.233 0 0 1 14.2 14.223v35.117H170.8zm233.461 477.443a21.75 21.75 0 0 1-21.856 20.33H127.954a21.968 21.968 0 0 1-21.854-20.416L84.326 173.06H427.5l-23.234 318.6zm56.568-347.452H51.171v-33A33.035 33.035 0 0 1 84.176 78.2l343.644-.011a33.051 33.051 0 0 1 33 33.02v33zm-270.79 291.851a14.422 14.422 0 1 0 28.844 0V233.816a14.42 14.42 0 0 0-28.839-.01v202.257zm102.9 0a14.424 14.424 0 1 0 28.848 0V233.816a14.422 14.422 0 0 0-28.843-.01z"
                  opacity="1"
                  data-original="#fc0005"
                  class="dark:fill-[#FF6347]"
                ></path>
              </g>
            </svg>
            <button class="text-red-500 dark:text-[#FF6347]">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>

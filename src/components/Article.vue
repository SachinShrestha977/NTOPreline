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

export default {
  name: "ArticlePage",
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
      isOpenArticle: false,

      openDropdownId: null,
      acts: [
        {
          label: "Goods and Services Tax (GST) Act",
          value: "Goods and Services Tax (GST) Act",
        },
        {
          label: "Central Sales Tax (CST) Act",
          value: "Central Sales Tax (CST) Act",
        },
        { label: "Customs Act", value: "Customs Act" },
        { label: "Central Excise Act", value: "Central Excise Act" },
        {
          label: "Value Added Tax (VAT) Act",
          value: "Value Added Tax (VAT) Act",
        },
        { label: "Sales of Goods Act", value: "Sales of Goods Act" },
      ],
      years: [
        { label: "2024", value: "2024" },
        { label: "2023", value: "2023" },
        { label: "2022", value: "2022" },
        { label: "2021", value: "2021" },
        { label: "2020", value: "2020" },
        { label: "2019", value: "2019" },
        { label: "2018", value: "2018" },
        { label: "2017", value: "2017" },
        { label: "2016", value: "2016" },
      ],
      modules: [
        {
          label: " Excise/ST/VAT",
          value: " Excise/ST/VAT",
        },
        {
          label: "Account & Audit",
          value: "Account & Audit",
        },
        { label: "GST", value: "GST" },
        { label: "Income Tax", value: "Income Tax" },
        {
          label: "International Tax",
          value: "International Tax",
        },
        { label: "Transfer Pricing", value: "Transfer Pricing" },
      ],
      doctypes: [
        {
          label: " Case Laws",
          value: " Case Laws",
        },
        {
          label: "Rules",
          value: "Rules",
        },
        { label: "Acts", value: "Acts" },
        { label: "Income Tax", value: "Income Tax" },
        {
          label: "Commentaries",
          value: "Commentaries",
        },
        { label: "News", value: "News" },
        { label: "Forms", value: "Forms" },
        { label: "Articles", value: "Articles" },
        { label: "Tariff", value: "Tariff" },
        { label: "Bills", value: "Bills" },
        { label: "Report", value: "Report" },
        { label: "Standards", value: "Standards" },
        { label: "Treaties", value: "Treaties" },
      ],

      subjects: [
        {
          label: " Royalties or Fees For Technical Services ",
          value: " Royalties or Fees For Technical Services ",
        },
        {
          label: "Business Profits ",
          value: "Business Profits ",
        },
        { label: "Permanent Establishment", value: "Permanent Establishment" },
        { label: "Capital Gain ", value: "Capital Gain " },
        {
          label: "Dividend ",
          value: "Dividend ",
        },
        { label: "Elimination of Double", value: "Elimination of Double " },
        { label: "Interest", value: "Interest" },
        { label: "Other Incomes", value: "Other Incomes" },
      ],

      courts: [
        {
          label: " Supreme Court of Nepal (Sarbochha Adalat) ",
          value: " Supreme Court of Nepal (Sarbochha Adalat) ",
        },
        {
          label: "Appellate Court ",
          value: "Appellate Court ",
        },
        {
          label: "District Court (Jilla Adalat)",
          value: "District Court (Jilla Adalat)",
        },
        { label: "Specialized Courts ", value: "Specialized Courts " },
        {
          label: "Dividend ",
          value: "Dividend ",
        },
        {
          label: "Local Courts (Sthaniya Adalat)",
          value: "Local Courts (Sthaniya Adalat)",
        },
      ],

      benchs: [
        {
          label: " Constitutional Bench ",
          value: " Constitutional Bench ",
        },
        {
          label: "Appellate Bench ",
          value: "Appellate Bench ",
        },
        {
          label: "Special Court Bench",
          value: "Special Court Bench",
        },
        { label: "Administrative Bench ", value: "Administrative Bench " },
        {
          label: "Conciliation Bench ",
          value: "Conciliation Bench ",
        },
        {
          label: "Labor Bench",
          value: "Labor Bench ",
        },
        {
          label: "Juvenile Bench",
          value: "Juvenile Bench ",
        },
        {
          label: "Revenue Bench",
          value: "Revenue Bench ",
        },
        {
          label: "Military Bench",
          value: "Military Bench ",
        },
      ],

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

      activeTab: null,
      heading: null,
      subheading: null,
      content: null,
      tabs: [{ key: "post", label: "आयकर ऐन - ७७/७८" }],
    };
  },

  methods: {
    openDropdown(dropdownId) {
      this.openDropdownId = dropdownId;
    },
    closeDropdown() {
      this.openDropdownId = null;
    },
    beforeEnter(el) {
      el.style.transform = "translateY(-10px)";
      el.style.opacity = 0;
    },
    enter(el, done) {
      el.offsetHeight; // Trigger reflow to apply transform
      el.style.transition = "transform 0.3s, opacity 0.3s";
      el.style.transform = "translateY(0)";
      el.style.opacity = 1;
      done();
    },
    leave(el, done) {
      el.style.transition = "transform 0.3s, opacity 0.3s";
      el.style.transform = "translateY(-10px)";
      el.style.opacity = 0;
      done();
    },
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    handleAnchorClick() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },

    openPost(post) {
      const existingTab = this.tabs.find((tab) => tab.key === "post" + post.id);
      if (!existingTab) {
        this.tabs.push({
          key: "post" + post.id,
          label: post.title,
        });
        this.activeTab = "post" + post.id;
        this.heading = post.heading;
        this.subheading = post.subheading;
        this.content1 = post.content[0].title;
        this.content2 = post.content[1].title;
        this.subtitle1 = post.content[1].subtitle1;
        this.subtitle2 = post.content[1].subtitle2;
        this.subtitle3 = post.content[1].subtitle3;
        this.subtitle4 = post.content[1].subtitle4;
        this.subtitle5 = post.content[1].subtitle5;
        this.subtitle6 = post.content[1].subtitle6;
        this.subtitle7 = post.content[1].subtitle7;
        this.subtitle8 = post.content[1].subtitle8;
        this.content3 = post.content[2].title;
      }
    },

    checkForSelection() {
      const selection = window.getSelection();
      if (!selection.rangeCount) return;

      const range = selection.getRangeAt(0);
      if (selection.toString().trim() !== "") {
        this.selectedRange = range;
        const rect = range.getBoundingClientRect();
        this.showPenIcon = true;
        this.penIconPosition = {
          top: rect.top + window.scrollY - 30,
          left: rect.left + window.scrollX + rect.width / 2,
        };

        // Update highlightedText and isTextHighlighted
        this.highlightedText = this.selectedRange.toString().trim();
        this.isTextHighlighted = this.isHighlighted(this.highlightedText);
        this.showDeleteButton = false; // Reset delete button visibility
      }
    },
    isHighlighted(text) {
      const savedHighlights =
        JSON.parse(localStorage.getItem("highlightedTexts")) || [];
      return savedHighlights.includes(text);
    },
    highlightText() {
      if (!this.selectedRange) return;

      // Get the highlighted text
      const highlightedText = this.selectedRange.toString().trim();

      // Check if the text is already highlighted
      const isAlreadyHighlighted = this.isHighlighted(highlightedText);

      if (isAlreadyHighlighted) {
        // Text is already highlighted, show the delete button
        this.showDeleteButton = true;
        return;
      }

      // Creating a span to highlight the text
      const span = document.createElement("span");
      span.style.backgroundColor = "yellow"; // Or any highlight color
      this.selectedRange.surroundContents(span);

      // Hide the pen icon and deselect the text
      this.showPenIcon = false;
      window.getSelection().removeAllRanges();
      this.isTextHighlighted = true;

      // Save highlighted text to localStorage
      const savedHighlights =
        JSON.parse(localStorage.getItem("highlightedTexts")) || [];
      savedHighlights.push(highlightedText);
      localStorage.setItem("highlightedTexts", JSON.stringify(savedHighlights));
    },

    deleteHighlightedText() {
      // Get the highlighted text
      const highlightedText = this.selectedRange.toString().trim();
      console.log("Highlighted Text:", highlightedText);

      // Remove the highlighted text from localStorage
      const savedHighlights =
        JSON.parse(localStorage.getItem("highlightedTexts")) || [];
      console.log("Saved Highlights:", savedHighlights);

      const index = savedHighlights.indexOf(highlightedText);
      console.log("Index:", index);

      if (index !== -1) {
        // Remove the surrounding span element
        const spanElements = document.querySelectorAll(
          `span[style="background-color: yellow;"]`
        );
        spanElements.forEach((span) => {
          if (span.textContent.trim() === highlightedText) {
            span.outerHTML = span.innerHTML; // Remove the span by replacing it with its content
          }
        });

        // Update savedHighlights
        savedHighlights.splice(index, 1);
        console.log("Updated Saved Highlights:", savedHighlights);
        localStorage.setItem(
          "highlightedTexts",
          JSON.stringify(savedHighlights)
        );
        console.log(
          "LocalStorage after deletion:",
          localStorage.getItem("highlightedTexts")
        );
      }

      // Remove the highlight visually
      const selection = window.getSelection();
      selection.removeAllRanges();
      this.isTextHighlighted = false;
      this.showDeleteButton = false; // Hide the delete button after deletion
      this.showPenIcon = false; // Hide the pen button after deletion
    },

    openTwitter() {
      const tweetText = encodeURIComponent(
        "आयकर ऐन - ७७/७८\nVisit https://gurkhatech.com/ for more information."
      );
      window.open(
        `https://twitter.com/intent/tweet?hashtags=आयकर&text=${tweetText}`,
        "_blank"
      );
    },
  },
  computed: {
    filteredActs() {
      return this.acts.filter((act) =>
        act.label.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    filteredYears() {
      return this.years.filter((year) =>
        year.label.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    filteredModules() {
      return this.modules.filter((module) =>
        module.label.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    filteredDocTypes() {
      return this.doctypes.filter((doctype) =>
        doctype.label.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },

    filteredSubjects() {
      return this.subjects.filter((subject) =>
        subject.label.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },

    filteredCourts() {
      return this.courts.filter((court) =>
        court.label.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },

    filteredBenchs() {
      return this.benchs.filter((bench) =>
        bench.label.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<template>
  <div class="contain mt-0 bg-gray-100 md:h-screen">
    <div
      class="flex flex-wrap border border-slate-200 bg-white dark:border-slate-800 dark:bg-neutral-900 lg:flex-nowrap md:h-screen"
    >
      <!-- Left Column Big Screen -->

      <div class="relative hidden md:block">
        <div
          class="border-b border-slate-200 dark:border-slate-800 lg:w-60 lg:border-b-0 lg:border-e"
          :class="collapsed ? '!w-12 overflow-hidden' : ''"
          style="transition: width 0.7s ease, overflow 0.6s ease"
        >
          <div
            class="grid justify-items-end w-64 lg:w-80 border-b border-slate-200"
            :class="{ '-ml-32 lg:-ml-48': collapsed }"
          >
            <div class="mr-6 mb-2 mt-2 p-0.8 flex items-center">
              <a
                @click="collapsed = !collapsed"
                class="flex items-center"
                href="#"
              >
                <span v-if="!collapsed" class="mr-1 dark:text-white">Hide</span>
                <IconCircleChevronLeft
                  color="black"
                  :class="collapsed ? 'rotate-180 transform' : ''"
                  class="stroke-[1] w-7 h-7 mr-16 text-black dark:bg-white dark:text-white rounded-full hover:bg-white transition-transform duration-1000 ease-in-out"
                />
              </a>
            </div>
          </div>

          <div class="p-2">
            <div class="w-full" :class="collapsed ? 'hidden' : ''">
              <div
                class="mx-auto w-full max-w-md rounded-xl bg-white dark:bg-gray-900"
              >
                <Disclosure v-slot="{ open }">
                  <DisclosureButton
                    class="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-blue-600 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                  >
                    <span>Income Tax Act</span>
                    <span class="text-purple-500"
                      ><IconChevronDown
                        stroke="{2}"
                        color="blue"
                        :class="open ? 'rotate-180 transform' : ''"
                        class="h-5 w-5"
                      />
                    </span>
                  </DisclosureButton>

                  <DisclosurePanel class="px-6 pb-2 pt-4">
                    <ul class="tab-nav -mx-4 flex flex-wrap xl:mx-0">
                      <li
                        class="tab-item w-full xs:w-1/2 xs:py-1 sm:w-1/3 lg:w-1/4 xl:w-full xl:px-0 xl:py-0"
                      >
                        <a
                          href="#"
                          data-target="#article-generator"
                          class="active tab-toggle relative isolate flex text-slate-500 before:content-[''] dark:text-slate-400 [&amp;.active]:text-blue-600 [&amp;.active]:before:absolute [&amp;.active]:before:-inset-x-3 [&amp;.active]:before:inset-y-0 [&amp;.active]:before:-z-10 [&amp;.active]:before:rounded-md [&amp;.active]:before:bg-blue-100 [&amp;.active]:before:dark:bg-blue-950 active"
                        >
                          <div class="flex items-center py-2">
                            <div class="me-3 h-5">
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-full"
                              >
                                <path
                                  class="fill-blue-300"
                                  d="M13.7087 3.30729C12.6049 2.90591 11.395 2.90591 10.2913 3.30729L3.24266 5.87042C1.48732 6.50872 1.4873 8.99128 3.24266 9.62959L10.2913 12.1927C11.395 12.5941 12.6049 12.5941 13.7087 12.1927L20.7573 9.62959C22.5126 8.99128 22.5126 6.50873 20.7573 5.87042L13.7087 3.30729Z"
                                ></path>
                                <path
                                  class="fill-blue-600"
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M2.05781 12.395C2.24283 11.8746 2.81467 11.6028 3.33504 11.7878L11.33 14.6304C11.7634 14.7845 12.2367 14.7845 12.67 14.6304L20.665 11.7878C21.1854 11.6028 21.7572 11.8746 21.9422 12.395C22.1273 12.9154 21.8554 13.4872 21.335 13.6722L13.3401 16.5149C12.4733 16.8231 11.5268 16.8231 10.66 16.5149L2.66502 13.6722C2.14465 13.4872 1.87279 12.9154 2.05781 12.395Z"
                                ></path>
                                <path
                                  class="fill-blue-300"
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M2.05781 16.645C2.24283 16.1246 2.81467 15.8528 3.33504 16.0378L11.33 18.8804C11.7634 19.0345 12.2367 19.0345 12.67 18.8804L20.665 16.0378C21.1854 15.8528 21.7572 16.1246 21.9422 16.645C22.1273 17.1654 21.8554 17.7372 21.335 17.9222L13.3401 20.7649C12.4733 21.0731 11.5268 21.0731 10.66 20.7649L2.66502 17.9222C2.14465 17.7372 1.87279 17.1654 2.05781 16.645Z"
                                ></path>
                              </svg>
                            </div>
                            <span class="text-sm font-medium">
                              आयकर ऐन - ७७/७८
                            </span>
                          </div>
                        </a>
                      </li>
                      <li
                        class="tab-item w-full px-4 xs:w-1/2 xs:py-1 sm:w-1/3 lg:w-1/4 xl:w-full xl:px-0 xl:py-0"
                      >
                        <a
                          href="#"
                          data-target="#rewrite-article"
                          class="tab-toggle relative isolate flex text-slate-500 before:content-[''] dark:text-slate-400 [&amp;.active]:text-blue-600 [&amp;.active]:before:absolute [&amp;.active]:before:-inset-x-3 [&amp;.active]:before:inset-y-0 [&amp;.active]:before:-z-10 [&amp;.active]:before:rounded-md [&amp;.active]:before:bg-blue-100 [&amp;.active]:before:dark:bg-blue-950"
                        >
                          <div class="flex items-center py-2">
                            <div class="me-3 h-5">
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-full"
                              >
                                <path
                                  class="fill-blue-300"
                                  d="M12.9227 14.118C13.3783 15.2569 14.4814 16.0038 15.7081 16.0038H18.5867L17.7929 15.21C17.4024 14.8195 17.4024 14.1863 17.7929 13.7958C18.1834 13.4053 18.8166 13.4053 19.2071 13.7958L21.352 15.9407C21.9378 16.5265 21.9378 17.4762 21.352 18.062L19.2071 20.207C18.8166 20.5975 18.1834 20.5975 17.7929 20.207C17.4024 19.8165 17.4024 19.1833 17.7929 18.7928L18.5819 18.0038H15.7081C13.6636 18.0038 11.8251 16.759 11.0657 14.8607L9.0773 9.88961C8.62171 8.75064 7.51858 8.00378 6.29187 8.00378H3C2.44772 8.00378 2 7.55607 2 7.00378C2 6.4515 2.44772 6.00378 3 6.00378H6.29187C8.33639 6.00378 10.1749 7.24854 10.9343 9.14683L12.9227 14.118Z"
                                ></path>
                                <path
                                  class="fill-blue-600"
                                  d="M19.2071 3.79302C18.8166 3.40249 18.1834 3.40249 17.7929 3.79301C17.4024 4.18353 17.4024 4.8167 17.7929 5.20722L18.5819 5.99622H15.7081C13.6636 5.99622 11.8251 7.24097 11.0657 9.13926L9.0773 14.1104C8.62171 15.2494 7.51858 15.9962 6.29187 15.9962H3C2.44772 15.9962 2 16.4439 2 16.9962C2 17.5485 2.44772 17.9962 3 17.9962H6.29187C8.33639 17.9962 10.1749 16.7515 10.9343 14.8532L12.9227 9.88204C13.3783 8.74307 14.4814 7.99622 15.7081 7.99622H18.5867L17.7929 8.79005C17.4024 9.18057 17.4024 9.81374 17.7929 10.2043C18.1834 10.5948 18.8166 10.5948 19.2071 10.2042L21.352 8.05928C21.9378 7.47349 21.9378 6.52376 21.352 5.93797L19.2071 3.79302Z"
                                ></path>
                              </svg>
                            </div>
                            <span class="text-sm font-medium">
                              आयकर ऐन, २०३१
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div" class="mt-2" v-slot="{ open }">
                  <DisclosureButton
                    class="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-blue-600 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                  >
                    <span>VAT Act</span>
                    <IconChevronDown
                      color="blue"
                      :class="open ? 'rotate-180 transform' : ''"
                      class="h-5 w-5 text-purple-500"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
                    <ul class="tab-nav -mx-4 flex flex-wrap xl:mx-0">
                      <li
                        class="tab-item w-full px-4 xs:w-1/2 xs:py-1 sm:w-1/3 lg:w-1/4 xl:w-full xl:px-0 xl:py-0"
                      >
                        <a
                          href="#"
                          data-target="#tags-generator"
                          class="tab-toggle relative isolate flex text-slate-500 before:content-[''] dark:text-slate-400 [&amp;.active]:text-blue-600 [&amp;.active]:before:absolute [&amp;.active]:before:-inset-x-3 [&amp;.active]:before:inset-y-0 [&amp;.active]:before:-z-10 [&amp;.active]:before:rounded-md [&amp;.active]:before:bg-blue-100 [&amp;.active]:before:dark:bg-blue-950"
                        >
                          <div class="flex items-center py-2">
                            <div class="me-3 h-5">
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-full"
                              >
                                <path
                                  class="fill-blue-300"
                                  d="M20.6811 13.2434C21.3004 12.6241 21.6181 11.7652 21.5509 10.892L21.1469 5.63919C21.0334 4.16385 19.8611 2.99161 18.3858 2.87812L13.133 2.47406C12.2598 2.40689 11.4009 2.72463 10.7816 3.3439L3.27199 10.8535C2.10042 12.0251 2.10042 13.9246 3.27199 15.0962L8.92884 20.753C10.1004 21.9246 11.9999 21.9246 13.1715 20.753L20.6811 13.2434Z"
                                ></path>
                                <path
                                  class="fill-blue-600"
                                  d="M14.5857 7.318C13.9999 7.90379 13.9999 8.85354 14.5857 9.43932C15.1715 10.0251 16.1212 10.0251 16.707 9.43932C17.2928 8.85354 17.2928 7.90379 16.707 7.318C16.1212 6.73222 15.1715 6.73222 14.5857 7.318Z"
                                ></path>
                                <path
                                  class="fill-blue-600"
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7.51469 13.682L10.3431 16.5104C10.7336 16.9009 11.3668 16.9009 11.7573 16.5104C12.1479 16.1199 12.1479 15.4867 11.7573 15.0962L8.92891 12.2677C8.53838 11.8772 7.90522 11.8772 7.5147 12.2677C7.12417 12.6583 7.12417 13.2914 7.51469 13.682Z"
                                ></path>
                              </svg>
                            </div>
                            <span class="text-sm font-medium">
                              मूल्य अभिवृद्धि कर ऐन, २०५२
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div" class="mt-2" v-slot="{ open }">
                  <DisclosureButton
                    class="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-blue-600 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                  >
                    <span>अन्तःशुल्क (Excise)</span>
                    <IconChevronDown
                      color="blue"
                      :class="open ? 'rotate-180 transform' : ''"
                      class="h-5 w-5 text-purple-500"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
                    <ul class="tab-nav -mx-4 flex flex-wrap xl:mx-0">
                      <li
                        class="tab-item w-full px-4 xs:w-1/2 xs:py-1 sm:w-1/3 lg:w-1/4 xl:w-full xl:px-0 xl:py-0"
                      >
                        <a
                          href="#"
                          data-target="#ads-content"
                          class="tab-toggle relative isolate flex text-slate-500 before:content-[''] dark:text-slate-400 [&amp;.active]:text-blue-600 [&amp;.active]:before:absolute [&amp;.active]:before:-inset-x-3 [&amp;.active]:before:inset-y-0 [&amp;.active]:before:-z-10 [&amp;.active]:before:rounded-md [&amp;.active]:before:bg-blue-100 [&amp;.active]:before:dark:bg-blue-950"
                        >
                          <div class="flex items-center py-2">
                            <div class="me-3 h-5">
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-full"
                              >
                                <path
                                  class="fill-blue-300"
                                  d="M11 4.99999C11 4.4477 10.5509 3.99424 10.002 4.05548C8.57508 4.21469 7.20175 4.7137 5.99987 5.51676C4.51983 6.50569 3.36628 7.9113 2.68509 9.55584C2.0039 11.2004 1.82567 13.01 2.17294 14.7558C2.5202 16.5016 3.37737 18.1053 4.63604 19.3639C5.89472 20.6226 7.49836 21.4798 9.24419 21.8271C10.99 22.1743 12.7996 21.9961 14.4442 21.3149C16.0887 20.6337 17.4943 19.4802 18.4832 18.0001C19.2863 16.7982 19.7853 15.4249 19.9445 13.9979C20.0057 13.4491 19.5523 13 19 13H15.0079C14.4556 13 14.0234 13.4596 13.8432 13.9817C13.7596 14.2239 13.6449 14.4557 13.501 14.6711C13.1705 15.1657 12.7007 15.5513 12.1511 15.7789C11.6015 16.0066 10.9967 16.0661 10.4132 15.9501C9.82972 15.834 9.29376 15.5476 8.8731 15.1269C8.45244 14.7062 8.16597 14.1703 8.04991 13.5868C7.93385 13.0033 7.99341 12.3985 8.22107 11.8489C8.44873 11.2993 8.83426 10.8295 9.32891 10.499C9.54426 10.3551 9.77608 10.2404 10.0183 10.1568C10.5404 9.97655 11 9.54438 11 8.99209V4.99999Z"
                                ></path>
                                <path
                                  class="fill-blue-600"
                                  d="M21 11C21.5523 11 22.0057 10.5509 21.9445 10.002C21.8509 9.16274 21.6394 8.33912 21.3149 7.55583C20.8626 6.4639 20.1997 5.47175 19.364 4.63602C18.5282 3.8003 17.5361 3.13736 16.4442 2.68507C15.6609 2.36062 14.8372 2.14912 13.9979 2.05548C13.4491 1.99424 13 2.4477 13 2.99998V6.99209C13 7.54438 13.4596 7.97655 13.9817 8.1568C14.0387 8.17648 14.0952 8.19791 14.1511 8.22105C14.516 8.37221 14.8476 8.59377 15.1269 8.87308C15.4062 9.15239 15.6278 9.48398 15.7789 9.84891C15.8021 9.90479 15.8235 9.96128 15.8432 10.0183C16.0234 10.5403 16.4556 11 17.0079 11H21Z"
                                ></path>
                              </svg>
                            </div>
                            <span class="text-sm font-medium">
                              अन्तःशुल्क ऐन, २०५८
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div" class="mt-2" v-slot="{ open }">
                  <DisclosureButton
                    class="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-blue-600 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                  >
                    <span>Circular</span>
                    <IconChevronDown
                      color="blue"
                      :class="open ? 'rotate-180 transform' : ''"
                      class="h-5 w-5 text-purple-500"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
                    <ul class="tab-nav -mx-4 flex flex-wrap xl:mx-0">
                      <li
                        v-for="name in [
                          'Business Sector',
                          'Clarifications on Tax Rates',
                          'Deduction of expense',
                        ]"
                        class="tab-item w-full px-4 xs:w-1/2 xs:py-1 sm:w-1/3 lg:w-1/4 xl:w-full xl:px-0 xl:py-0"
                      >
                        <a
                          href="#"
                          data-target="#ads-content"
                          class="tab-toggle relative isolate flex text-slate-500 before:content-[''] dark:text-slate-400 [&amp;.active]:text-blue-600 [&amp;.active]:before:absolute [&amp;.active]:before:-inset-x-3 [&amp;.active]:before:inset-y-0 [&amp;.active]:before:-z-10 [&amp;.active]:before:rounded-md [&amp;.active]:before:bg-blue-100 [&amp;.active]:before:dark:bg-blue-950"
                        >
                          <div class="flex items-center py-2">
                            <div class="me-3 h-5">
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-full"
                              >
                                <path
                                  class="fill-blue-300"
                                  d="M11 4.99999C11 4.4477 10.5509 3.99424 10.002 4.05548C8.57508 4.21469 7.20175 4.7137 5.99987 5.51676C4.51983 6.50569 3.36628 7.9113 2.68509 9.55584C2.0039 11.2004 1.82567 13.01 2.17294 14.7558C2.5202 16.5016 3.37737 18.1053 4.63604 19.3639C5.89472 20.6226 7.49836 21.4798 9.24419 21.8271C10.99 22.1743 12.7996 21.9961 14.4442 21.3149C16.0887 20.6337 17.4943 19.4802 18.4832 18.0001C19.2863 16.7982 19.7853 15.4249 19.9445 13.9979C20.0057 13.4491 19.5523 13 19 13H15.0079C14.4556 13 14.0234 13.4596 13.8432 13.9817C13.7596 14.2239 13.6449 14.4557 13.501 14.6711C13.1705 15.1657 12.7007 15.5513 12.1511 15.7789C11.6015 16.0066 10.9967 16.0661 10.4132 15.9501C9.82972 15.834 9.29376 15.5476 8.8731 15.1269C8.45244 14.7062 8.16597 14.1703 8.04991 13.5868C7.93385 13.0033 7.99341 12.3985 8.22107 11.8489C8.44873 11.2993 8.83426 10.8295 9.32891 10.499C9.54426 10.3551 9.77608 10.2404 10.0183 10.1568C10.5404 9.97655 11 9.54438 11 8.99209V4.99999Z"
                                ></path>
                                <path
                                  class="fill-blue-600"
                                  d="M21 11C21.5523 11 22.0057 10.5509 21.9445 10.002C21.8509 9.16274 21.6394 8.33912 21.3149 7.55583C20.8626 6.4639 20.1997 5.47175 19.364 4.63602C18.5282 3.8003 17.5361 3.13736 16.4442 2.68507C15.6609 2.36062 14.8372 2.14912 13.9979 2.05548C13.4491 1.99424 13 2.4477 13 2.99998V6.99209C13 7.54438 13.4596 7.97655 13.9817 8.1568C14.0387 8.17648 14.0952 8.19791 14.1511 8.22105C14.516 8.37221 14.8476 8.59377 15.1269 8.87308C15.4062 9.15239 15.6278 9.48398 15.7789 9.84891C15.8021 9.90479 15.8235 9.96128 15.8432 10.0183C16.0234 10.5403 16.4556 11 17.0079 11H21Z"
                                ></path>
                              </svg>
                            </div>
                            <span class="text-sm font-medium">
                              {{ name }}
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div" class="mt-2" v-slot="{ open }">
                  <DisclosureButton
                    class="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-blue-600 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                  >
                    <span>Directive</span>
                    <IconChevronDown
                      color="blue"
                      :class="open ? 'rotate-180 transform' : ''"
                      class="h-5 w-5 text-purple-500"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
                    <ul class="tab-nav -mx-4 flex flex-wrap xl:mx-0">
                      <li
                        v-for="name in [
                          'मूल्य अभिबृद्धि कर निर्देशिका',
                          'अन्तःशुल्क निर्देशिका',
                          'शिक्षा सेवा कर निर्देशिका, २०६५',
                          'स्थायी संस्थापन सम्बन्धी निर्देशिका,२०७७',
                        ]"
                        class="tab-item w-full px-4 xs:w-1/2 xs:py-1 sm:w-1/3 lg:w-1/4 xl:w-full xl:px-0 xl:py-0"
                      >
                        <a
                          href="#"
                          data-target="#ads-content"
                          class="tab-toggle relative isolate flex text-slate-500 before:content-[''] dark:text-slate-400 [&amp;.active]:text-blue-600 [&amp;.active]:before:absolute [&amp;.active]:before:-inset-x-3 [&amp;.active]:before:inset-y-0 [&amp;.active]:before:-z-10 [&amp;.active]:before:rounded-md [&amp;.active]:before:bg-blue-100 [&amp;.active]:before:dark:bg-blue-950"
                        >
                          <div class="flex items-center py-2">
                            <div class="me-3 h-5">
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-full"
                              >
                                <path
                                  class="fill-blue-600"
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z"
                                ></path>
                                <path
                                  class="fill-blue-300"
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M3 10C3 9.44772 3.44772 9 4 9H14C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11H4C3.44772 11 3 10.5523 3 10Z"
                                ></path>
                                <path
                                  class="fill-blue-600"
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14Z"
                                ></path>
                                <path
                                  class="fill-blue-300"
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M3 18C3 17.4477 3.44772 17 4 17H14C14.5523 17 15 17.4477 15 18C15 18.5523 14.5523 19 14 19H4C3.44772 19 3 18.5523 3 18Z"
                                ></path>
                              </svg>
                            </div>
                            <span class="text-sm font-medium">
                              {{ name }}
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <!-- Navbar -->
        <header class="from-theme-1 to-theme-2 group/mainmenu">
          <nav
            class="bg-white border-gray-200 dark:bg-neutral-900 dark:border-gray-600 border-y"
          >
            <div class="grid py-1 px-2 lg:grid-cols-2">
              <div class="md:flex hidden items-center">
                <ul class="flex flex-row mt-0 space-x-2 text-sm font-medium">
                  <!-- Act -->

                  <li class="relative">
                    <div class="p-2 rounded-md dark:hover:bg-gray-800">
                      <button
                        id="dropdown-button-megamenu-act"
                        @mouseover="openDropdown('act')"
                        @mouseleave="closeDropdown"
                        aria-expanded="false"
                        class="flex justify-between items-center w-full font-medium dark:hover:bg-gray-800 md:p-0 md:w-auto dark:text-white hover:text-primary-500"
                      >
                        Act/Rule
                        <svg
                          class="ml-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <transition
                        name="dropdown"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        @leave="leave"
                      >
                        <nav
                          id="megamenu-act"
                          v-show="openDropdownId === 'act'"
                          @mouseover="openDropdown('act')"
                          @mouseleave="closeDropdown"
                          ref="dropdown"
                          class="absolute min-w-72 bg-white rounded border-b shadow-xl dark:bg-gray-800 dark:border-gray-600 z-50"
                        >
                          <div
                            class="grid py-2 mx-auto max-w-screen-xl text-gray-900 dark:text-white"
                          >
                            <input
                              type="text"
                              placeholder="Search..."
                              v-model="searchQuery"
                              class="px-10 py-4 ml-3 mr-2 h-8 w-auto shadow-inner placeholder-gray-400 text-gray-900 bg-white dark:bg-gray-600 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <ul class="col-span-2 md:col-span-1">
                              <li v-for="act in filteredActs" :key="act.value">
                                <a
                                  href="#"
                                  class="flex p-3 rounded-lg dark:hover:bg-gray-700"
                                >
                                  <input
                                    :id="`act${act.value}`"
                                    type="checkbox"
                                    :value="act.value"
                                    class="w-4 h-4 text-blue-600 bg-white border-gray-900 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    :for="`act${act.value}`"
                                    class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                                    >{{ act.label }}</label
                                  >
                                </a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </transition>
                    </div>
                  </li>

                  <!-- Year -->

                  <li class="relative">
                    <div class="p-2 rounded-md dark:hover:bg-gray-800">
                      <button
                        id="dropdown-button-megamenu-year"
                        @mouseover="openDropdown('year')"
                        @mouseleave="closeDropdown"
                        aria-expanded="false"
                        class="flex justify-between items-center w-full font-medium dark:hover:bg-gray-800 md:p-0 md:w-auto dark:text-white hover:text-primary-500"
                      >
                        Year
                        <svg
                          class="ml-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <transition
                        name="dropdown"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        @leave="leave"
                      >
                        <nav
                          id="megamenu-year"
                          v-show="openDropdownId === 'year'"
                          @mouseover="openDropdown('year')"
                          @mouseleave="closeDropdown"
                          ref="dropdown"
                          class="absolute min-w-48 bg-white rounded border-b shadow-xl dark:bg-gray-800 dark:border-gray-600 z-50 overflow-y-auto max-h-96"
                        >
                          <div
                            class="grid py-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white"
                          >
                            <!-- Search Bar -->
                            <input
                              type="text"
                              placeholder="Search..."
                              v-model="searchQuery"
                              class="px-3 py-2 ml-3 mr-2 h-8 w-auto shadow-inner placeholder-gray-400 text-gray-900 bg-white dark:bg-gray-600 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <ul class="col-span-2 md:col-span-1">
                              <li
                                v-for="year in filteredYears"
                                :key="year.value"
                              >
                                <a
                                  href="#"
                                  class="flex p-3 rounded-lg dark:hover:bg-gray-700"
                                >
                                  <input
                                    :id="`year${year.value}`"
                                    type="checkbox"
                                    :value="year.value"
                                    class="w-4 h-4 text-blue-600 bg-white border-gray-900 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    :for="`year${year.value}`"
                                    class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                                    >{{ year.label }}</label
                                  >
                                </a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </transition>
                    </div>
                  </li>

                  <!-- Module -->

                  <li class="relative">
                    <div class="p-2 rounded-md dark:hover:bg-gray-800">
                      <button
                        id="dropdown-button-megamenu-module"
                        @mouseover="openDropdown('module')"
                        @mouseleave="closeDropdown"
                        aria-expanded="false"
                        class="flex justify-between items-center w-full font-medium dark:hover:bg-gray-800 md:p-0 md:w-auto dark:text-white hover:text-primary-500"
                      >
                        Module
                        <svg
                          class="ml-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <transition
                        name="dropdown"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        @leave="leave"
                      >
                        <nav
                          id="megamenu-module"
                          v-show="openDropdownId === 'module'"
                          @mouseover="openDropdown('module')"
                          @mouseleave="closeDropdown"
                          ref="dropdown"
                          class="absolute min-w-72 bg-white rounded border-b shadow-xl dark:bg-gray-800 dark:border-gray-600 z-50"
                        >
                          <div
                            class="grid py-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white"
                          >
                            <!-- Search Bar -->
                            <input
                              type="text"
                              placeholder="Search..."
                              v-model="searchQuery"
                              class="px-3 py-2 ml-3 mr-2 h-8 w-auto shadow-inner placeholder-gray-400 text-gray-900 bg-white dark:bg-gray-600 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <ul class="col-span-2 md:col-span-1">
                              <li
                                v-for="module in filteredModules"
                                :key="module.value"
                              >
                                <a
                                  href="#"
                                  class="flex p-3 rounded-lg dark:hover:bg-gray-700"
                                >
                                  <input
                                    :id="`module${module.value}`"
                                    type="checkbox"
                                    :value="module.value"
                                    class="w-4 h-4 text-blue-600 bg-white border-gray-900 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    :for="`module${module.value}`"
                                    class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                                    >{{ module.label }}</label
                                  >
                                </a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </transition>
                    </div>
                  </li>

                  <!-- DocType -->

                  <li class="relative">
                    <div
                      class="p-2 rounded-md dark:hover:bg-gray-800"
                      style="white-space: nowrap"
                    >
                      <button
                        id="dropdown-button-megamenu-doctype"
                        @mouseover="openDropdown('doctype')"
                        @mouseleave="closeDropdown"
                        aria-expanded="false"
                        class="flex justify-between items-center w-full font-medium dark:hover:bg-gray-800 md:p-0 md:w-auto dark:text-white hover:text-primary-500"
                      >
                        Document Type
                        <svg
                          class="ml-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <transition
                        name="dropdown"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        @leave="leave"
                      >
                        <nav
                          id="megamenu-doctype"
                          v-show="openDropdownId === 'doctype'"
                          @mouseover="openDropdown('doctype')"
                          @mouseleave="closeDropdown"
                          ref="dropdown"
                          class="absolute min-w-72 bg-white rounded border-b shadow-xl dark:bg-gray-800 dark:border-gray-600 z-50 overflow-y-auto max-h-96"
                        >
                          <div
                            class="grid py-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white"
                          >
                            <!-- Search Bar -->
                            <input
                              type="text"
                              placeholder="Search..."
                              v-model="searchQuery"
                              class="px-3 py-2 ml-3 mr-2 h-8 w-auto shadow-inner placeholder-gray-400 text-gray-900 bg-white dark:bg-gray-600 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <ul class="col-span-2 md:col-span-1">
                              <li
                                v-for="doctype in filteredDocTypes"
                                :key="doctype.value"
                              >
                                <a
                                  href="#"
                                  class="flex p-3 rounded-lg dark:hover:bg-gray-700"
                                >
                                  <input
                                    :id="`doctype${doctype.value}`"
                                    type="checkbox"
                                    :value="doctype.value"
                                    class="w-4 h-4 text-blue-600 bg-white border-gray-900 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    :for="`doctype${doctype.value}`"
                                    class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                                    >{{ doctype.label }}</label
                                  >
                                </a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </transition>
                    </div>
                  </li>

                  <!-- Subject -->

                  <li class="relative">
                    <div class="p-2 rounded-md dark:hover:bg-gray-800">
                      <button
                        id="dropdown-button-megamenu-subject"
                        @mouseover="openDropdown('subject')"
                        @mouseleave="closeDropdown"
                        aria-expanded="false"
                        class="flex justify-between items-center w-full font-medium dark:hover:bg-gray-800 md:p-0 md:w-auto dark:text-white hover:text-primary-500"
                      >
                        Subject
                        <svg
                          class="ml-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <transition
                        name="dropdown"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        @leave="leave"
                      >
                        <nav
                          id="megamenu-subject"
                          v-show="openDropdownId === 'subject'"
                          @mouseover="openDropdown('subject')"
                          @mouseleave="closeDropdown"
                          ref="dropdown"
                          class="absolute min-w-72 bg-white rounded border-b shadow-xl dark:bg-gray-800 dark:border-gray-600 z-50 overflow-y-auto max-h-96"
                        >
                          <div
                            class="grid py-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white"
                          >
                            <!-- Search Bar -->
                            <input
                              type="text"
                              placeholder="Search..."
                              v-model="searchQuery"
                              class="px-3 py-2 ml-3 mr-2 h-8 w-auto shadow-inner placeholder-gray-400 text-gray-900 bg-white dark:bg-gray-600 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <ul class="col-span-2 md:col-span-1">
                              <li
                                v-for="subject in filteredSubjects"
                                :key="subject.value"
                              >
                                <a
                                  href="#"
                                  class="flex p-3 rounded-lg dark:hover:bg-gray-700"
                                >
                                  <input
                                    :id="`subject${subject.value}`"
                                    type="checkbox"
                                    :value="subject.value"
                                    class="w-4 h-4 text-blue-600 bg-white border-gray-900 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    :for="`subject${subject.value}`"
                                    class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                                    >{{ subject.label }}</label
                                  >
                                </a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </transition>
                    </div>
                  </li>

                  <!-- Court -->

                  <li class="relative">
                    <div class="p-2 rounded-md dark:hover:bg-gray-800">
                      <button
                        id="dropdown-button-megamenu-court"
                        @mouseover="openDropdown('court')"
                        @mouseleave="closeDropdown"
                        aria-expanded="false"
                        class="flex justify-between items-center w-full font-medium dark:hover:bg-gray-800 md:p-0 md:w-auto dark:text-white hover:text-primary-500"
                      >
                        Court
                        <svg
                          class="ml-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <transition
                        name="dropdown"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        @leave="leave"
                      >
                        <nav
                          id="megamenu-court"
                          v-show="openDropdownId === 'court'"
                          @mouseover="openDropdown('court')"
                          @mouseleave="closeDropdown"
                          ref="dropdown"
                          class="absolute min-w-72 bg-white rounded border-b shadow-xl dark:bg-gray-800 dark:border-gray-600 z-50 overflow-y-auto max-h-96"
                        >
                          <div
                            class="grid py-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white"
                          >
                            <!-- Search Bar -->
                            <input
                              type="text"
                              placeholder="Search..."
                              v-model="searchQuery"
                              class="px-3 py-2 ml-3 mr-2 h-8 w-auto shadow-inner placeholder-gray-400 text-gray-900 bg-white dark:bg-gray-600 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <ul class="col-span-2 md:col-span-1">
                              <li
                                v-for="court in filteredCourts"
                                :key="court.value"
                              >
                                <a
                                  href="#"
                                  class="flex p-3 rounded-lg dark:hover:bg-gray-700"
                                >
                                  <input
                                    :id="`court${court.value}`"
                                    type="checkbox"
                                    :value="court.value"
                                    class="w-4 h-4 text-blue-600 bg-white border-gray-900 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    :for="`court${court.value}`"
                                    class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                                    >{{ court.label }}</label
                                  >
                                </a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </transition>
                    </div>
                  </li>

                  <!-- Bench -->

                  <li class="relative">
                    <div class="p-2 rounded-md dark:hover:bg-gray-800">
                      <button
                        id="dropdown-button-megamenu-bench"
                        @mouseover="openDropdown('bench')"
                        @mouseleave="closeDropdown"
                        aria-expanded="false"
                        class="flex justify-between items-center w-full font-medium dark:hover:bg-gray-800 md:p-0 md:w-auto dark:text-white hover:text-primary-500"
                      >
                        Bench
                        <svg
                          class="ml-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <transition
                        name="dropdown"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        @leave="leave"
                      >
                        <nav
                          id="megamenu-bench"
                          v-show="openDropdownId === 'bench'"
                          @mouseover="openDropdown('bench')"
                          @mouseleave="closeDropdown"
                          ref="dropdown"
                          class="absolute min-w-72 bg-white rounded border-b shadow-xl dark:bg-gray-800 dark:border-gray-600 z-50 overflow-y-auto max-h-96"
                        >
                          <div
                            class="grid py-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white"
                          >
                            <!-- Search Bar -->
                            <input
                              type="text"
                              placeholder="Search..."
                              v-model="searchQuery"
                              class="px-3 py-2 ml-3 mr-2 h-8 w-auto shadow-inner placeholder-gray-400 text-gray-900 bg-white dark:bg-gray-600 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <ul class="col-span-2 md:col-span-1">
                              <li
                                v-for="bench in filteredBenchs"
                                :key="bench.value"
                              >
                                <a
                                  href="#"
                                  class="flex p-3 rounded-lg dark:hover:bg-gray-700"
                                >
                                  <input
                                    :id="`bench${bench.value}`"
                                    type="checkbox"
                                    :value="bench.value"
                                    class="w-4 h-4 text-blue-600 bg-white border-gray-900 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    :for="`bench${bench.value}`"
                                    class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                                    >{{ bench.label }}
                                  </label>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </transition>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex space-x-2">
                  <!-- Left Column Small Screen -->

                  <div class="relative md:hidden flex -mb-4">
                    <div
                      class="lg:w-60"
                      :class="collapsed ? '!w-12 overflow-hidden' : ''"
                      style="transition: width 0.7s ease, overflow 0.6s ease"
                    >
                      <div
                        class="grid justify-items-end w-64 lg:w-80"
                        :class="{ '-ml-32 lg:-ml-48': collapsed }"
                      >
                        <div class="mr-6 mb-2 mt-2 p-0.8 flex items-center">
                          <a
                            @click="collapsed = !collapsed"
                            class="flex items-center"
                            href="#"
                          >
                            <span v-if="!collapsed" class="mr-1 dark:text-white"
                              >Hide</span
                            >
                            <IconCircleChevronLeft
                              color="black"
                              :class="collapsed ? 'rotate-180 transform' : ''"
                              class="stroke-[1] w-7 h-7 mr-16 text-black dark:bg-white dark:text-white rounded-full hover:bg-white transition-transform duration-1000 ease-in-out"
                            />
                          </a>
                        </div>
                      </div>

                      <div class="p-2">
                        <div class="w-full" :class="collapsed ? 'hidden' : ''">
                          <div
                            class="mx-auto w-full max-w-md rounded-xl bg-white dark:bg-gray-900"
                          >
                            <Disclosure v-slot="{ open }">
                              <DisclosureButton
                                class="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-blue-600 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                              >
                                <span>Income Tax Act</span>
                                <span class="text-purple-500"
                                  ><IconChevronDown
                                    stroke="{2}"
                                    color="blue"
                                    :class="open ? 'rotate-180 transform' : ''"
                                    class="h-5 w-5"
                                  />
                                </span>
                              </DisclosureButton>

                              <DisclosurePanel class="px-6 pb-2 pt-4">
                                <ul
                                  class="tab-nav -mx-4 flex flex-wrap xl:mx-0"
                                >
                                  <li
                                    class="tab-item w-full xs:w-1/2 xs:py-1 sm:w-1/3 lg:w-1/4 xl:w-full xl:px-0 xl:py-0"
                                  >
                                    <a
                                      href="#"
                                      data-target="#article-generator"
                                      class="active tab-toggle relative isolate flex text-slate-500 before:content-[''] dark:text-slate-400 [&amp;.active]:text-blue-600 [&amp;.active]:before:absolute [&amp;.active]:before:-inset-x-3 [&amp;.active]:before:inset-y-0 [&amp;.active]:before:-z-10 [&amp;.active]:before:rounded-md [&amp;.active]:before:bg-blue-100 [&amp;.active]:before:dark:bg-blue-950 active"
                                    >
                                      <div class="flex items-center py-2">
                                        <div class="me-3 h-5">
                                          <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-full"
                                          >
                                            <path
                                              class="fill-blue-300"
                                              d="M13.7087 3.30729C12.6049 2.90591 11.395 2.90591 10.2913 3.30729L3.24266 5.87042C1.48732 6.50872 1.4873 8.99128 3.24266 9.62959L10.2913 12.1927C11.395 12.5941 12.6049 12.5941 13.7087 12.1927L20.7573 9.62959C22.5126 8.99128 22.5126 6.50873 20.7573 5.87042L13.7087 3.30729Z"
                                            ></path>
                                            <path
                                              class="fill-blue-600"
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M2.05781 12.395C2.24283 11.8746 2.81467 11.6028 3.33504 11.7878L11.33 14.6304C11.7634 14.7845 12.2367 14.7845 12.67 14.6304L20.665 11.7878C21.1854 11.6028 21.7572 11.8746 21.9422 12.395C22.1273 12.9154 21.8554 13.4872 21.335 13.6722L13.3401 16.5149C12.4733 16.8231 11.5268 16.8231 10.66 16.5149L2.66502 13.6722C2.14465 13.4872 1.87279 12.9154 2.05781 12.395Z"
                                            ></path>
                                            <path
                                              class="fill-blue-300"
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M2.05781 16.645C2.24283 16.1246 2.81467 15.8528 3.33504 16.0378L11.33 18.8804C11.7634 19.0345 12.2367 19.0345 12.67 18.8804L20.665 16.0378C21.1854 15.8528 21.7572 16.1246 21.9422 16.645C22.1273 17.1654 21.8554 17.7372 21.335 17.9222L13.3401 20.7649C12.4733 21.0731 11.5268 21.0731 10.66 20.7649L2.66502 17.9222C2.14465 17.7372 1.87279 17.1654 2.05781 16.645Z"
                                            ></path>
                                          </svg>
                                        </div>
                                        <span class="text-sm font-medium">
                                          आयकर ऐन - ७७/७८
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                  <li
                                    class="tab-item w-full px-4 xs:w-1/2 xs:py-1 sm:w-1/3 lg:w-1/4 xl:w-full xl:px-0 xl:py-0"
                                  >
                                    <a
                                      href="#"
                                      data-target="#rewrite-article"
                                      class="tab-toggle relative isolate flex text-slate-500 before:content-[''] dark:text-slate-400 [&amp;.active]:text-blue-600 [&amp;.active]:before:absolute [&amp;.active]:before:-inset-x-3 [&amp;.active]:before:inset-y-0 [&amp;.active]:before:-z-10 [&amp;.active]:before:rounded-md [&amp;.active]:before:bg-blue-100 [&amp;.active]:before:dark:bg-blue-950"
                                    >
                                      <div class="flex items-center py-2">
                                        <div class="me-3 h-5">
                                          <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-full"
                                          >
                                            <path
                                              class="fill-blue-300"
                                              d="M12.9227 14.118C13.3783 15.2569 14.4814 16.0038 15.7081 16.0038H18.5867L17.7929 15.21C17.4024 14.8195 17.4024 14.1863 17.7929 13.7958C18.1834 13.4053 18.8166 13.4053 19.2071 13.7958L21.352 15.9407C21.9378 16.5265 21.9378 17.4762 21.352 18.062L19.2071 20.207C18.8166 20.5975 18.1834 20.5975 17.7929 20.207C17.4024 19.8165 17.4024 19.1833 17.7929 18.7928L18.5819 18.0038H15.7081C13.6636 18.0038 11.8251 16.759 11.0657 14.8607L9.0773 9.88961C8.62171 8.75064 7.51858 8.00378 6.29187 8.00378H3C2.44772 8.00378 2 7.55607 2 7.00378C2 6.4515 2.44772 6.00378 3 6.00378H6.29187C8.33639 6.00378 10.1749 7.24854 10.9343 9.14683L12.9227 14.118Z"
                                            ></path>
                                            <path
                                              class="fill-blue-600"
                                              d="M19.2071 3.79302C18.8166 3.40249 18.1834 3.40249 17.7929 3.79301C17.4024 4.18353 17.4024 4.8167 17.7929 5.20722L18.5819 5.99622H15.7081C13.6636 5.99622 11.8251 7.24097 11.0657 9.13926L9.0773 14.1104C8.62171 15.2494 7.51858 15.9962 6.29187 15.9962H3C2.44772 15.9962 2 16.4439 2 16.9962C2 17.5485 2.44772 17.9962 3 17.9962H6.29187C8.33639 17.9962 10.1749 16.7515 10.9343 14.8532L12.9227 9.88204C13.3783 8.74307 14.4814 7.99622 15.7081 7.99622H18.5867L17.7929 8.79005C17.4024 9.18057 17.4024 9.81374 17.7929 10.2043C18.1834 10.5948 18.8166 10.5948 19.2071 10.2042L21.352 8.05928C21.9378 7.47349 21.9378 6.52376 21.352 5.93797L19.2071 3.79302Z"
                                            ></path>
                                          </svg>
                                        </div>
                                        <span class="text-sm font-medium">
                                          आयकर ऐन, २०३१
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </DisclosurePanel>
                            </Disclosure>

                            <Disclosure as="div" class="mt-2" v-slot="{ open }">
                              <DisclosureButton
                                class="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-blue-600 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                              >
                                <span>VAT Act</span>
                                <IconChevronDown
                                  color="blue"
                                  :class="open ? 'rotate-180 transform' : ''"
                                  class="h-5 w-5 text-purple-500"
                                />
                              </DisclosureButton>
                              <DisclosurePanel
                                class="px-4 pb-2 pt-4 text-sm text-gray-500"
                              >
                                <ul
                                  class="tab-nav -mx-4 flex flex-wrap xl:mx-0"
                                >
                                  <li
                                    class="tab-item w-full px-4 xs:w-1/2 xs:py-1 sm:w-1/3 lg:w-1/4 xl:w-full xl:px-0 xl:py-0"
                                  >
                                    <a
                                      href="#"
                                      data-target="#tags-generator"
                                      class="tab-toggle relative isolate flex text-slate-500 before:content-[''] dark:text-slate-400 [&amp;.active]:text-blue-600 [&amp;.active]:before:absolute [&amp;.active]:before:-inset-x-3 [&amp;.active]:before:inset-y-0 [&amp;.active]:before:-z-10 [&amp;.active]:before:rounded-md [&amp;.active]:before:bg-blue-100 [&amp;.active]:before:dark:bg-blue-950"
                                    >
                                      <div class="flex items-center py-2">
                                        <div class="me-3 h-5">
                                          <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-full"
                                          >
                                            <path
                                              class="fill-blue-300"
                                              d="M20.6811 13.2434C21.3004 12.6241 21.6181 11.7652 21.5509 10.892L21.1469 5.63919C21.0334 4.16385 19.8611 2.99161 18.3858 2.87812L13.133 2.47406C12.2598 2.40689 11.4009 2.72463 10.7816 3.3439L3.27199 10.8535C2.10042 12.0251 2.10042 13.9246 3.27199 15.0962L8.92884 20.753C10.1004 21.9246 11.9999 21.9246 13.1715 20.753L20.6811 13.2434Z"
                                            ></path>
                                            <path
                                              class="fill-blue-600"
                                              d="M14.5857 7.318C13.9999 7.90379 13.9999 8.85354 14.5857 9.43932C15.1715 10.0251 16.1212 10.0251 16.707 9.43932C17.2928 8.85354 17.2928 7.90379 16.707 7.318C16.1212 6.73222 15.1715 6.73222 14.5857 7.318Z"
                                            ></path>
                                            <path
                                              class="fill-blue-600"
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M7.51469 13.682L10.3431 16.5104C10.7336 16.9009 11.3668 16.9009 11.7573 16.5104C12.1479 16.1199 12.1479 15.4867 11.7573 15.0962L8.92891 12.2677C8.53838 11.8772 7.90522 11.8772 7.5147 12.2677C7.12417 12.6583 7.12417 13.2914 7.51469 13.682Z"
                                            ></path>
                                          </svg>
                                        </div>
                                        <span class="text-sm font-medium">
                                          मूल्य अभिवृद्धि कर ऐन, २०५२
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </DisclosurePanel>
                            </Disclosure>

                            <Disclosure as="div" class="mt-2" v-slot="{ open }">
                              <DisclosureButton
                                class="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-blue-600 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                              >
                                <span>अन्तःशुल्क (Excise)</span>
                                <IconChevronDown
                                  color="blue"
                                  :class="open ? 'rotate-180 transform' : ''"
                                  class="h-5 w-5 text-purple-500"
                                />
                              </DisclosureButton>
                              <DisclosurePanel
                                class="px-4 pb-2 pt-4 text-sm text-gray-500"
                              >
                                <ul
                                  class="tab-nav -mx-4 flex flex-wrap xl:mx-0"
                                >
                                  <li
                                    class="tab-item w-full px-4 xs:w-1/2 xs:py-1 sm:w-1/3 lg:w-1/4 xl:w-full xl:px-0 xl:py-0"
                                  >
                                    <a
                                      href="#"
                                      data-target="#ads-content"
                                      class="tab-toggle relative isolate flex text-slate-500 before:content-[''] dark:text-slate-400 [&amp;.active]:text-blue-600 [&amp;.active]:before:absolute [&amp;.active]:before:-inset-x-3 [&amp;.active]:before:inset-y-0 [&amp;.active]:before:-z-10 [&amp;.active]:before:rounded-md [&amp;.active]:before:bg-blue-100 [&amp;.active]:before:dark:bg-blue-950"
                                    >
                                      <div class="flex items-center py-2">
                                        <div class="me-3 h-5">
                                          <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-full"
                                          >
                                            <path
                                              class="fill-blue-300"
                                              d="M11 4.99999C11 4.4477 10.5509 3.99424 10.002 4.05548C8.57508 4.21469 7.20175 4.7137 5.99987 5.51676C4.51983 6.50569 3.36628 7.9113 2.68509 9.55584C2.0039 11.2004 1.82567 13.01 2.17294 14.7558C2.5202 16.5016 3.37737 18.1053 4.63604 19.3639C5.89472 20.6226 7.49836 21.4798 9.24419 21.8271C10.99 22.1743 12.7996 21.9961 14.4442 21.3149C16.0887 20.6337 17.4943 19.4802 18.4832 18.0001C19.2863 16.7982 19.7853 15.4249 19.9445 13.9979C20.0057 13.4491 19.5523 13 19 13H15.0079C14.4556 13 14.0234 13.4596 13.8432 13.9817C13.7596 14.2239 13.6449 14.4557 13.501 14.6711C13.1705 15.1657 12.7007 15.5513 12.1511 15.7789C11.6015 16.0066 10.9967 16.0661 10.4132 15.9501C9.82972 15.834 9.29376 15.5476 8.8731 15.1269C8.45244 14.7062 8.16597 14.1703 8.04991 13.5868C7.93385 13.0033 7.99341 12.3985 8.22107 11.8489C8.44873 11.2993 8.83426 10.8295 9.32891 10.499C9.54426 10.3551 9.77608 10.2404 10.0183 10.1568C10.5404 9.97655 11 9.54438 11 8.99209V4.99999Z"
                                            ></path>
                                            <path
                                              class="fill-blue-600"
                                              d="M21 11C21.5523 11 22.0057 10.5509 21.9445 10.002C21.8509 9.16274 21.6394 8.33912 21.3149 7.55583C20.8626 6.4639 20.1997 5.47175 19.364 4.63602C18.5282 3.8003 17.5361 3.13736 16.4442 2.68507C15.6609 2.36062 14.8372 2.14912 13.9979 2.05548C13.4491 1.99424 13 2.4477 13 2.99998V6.99209C13 7.54438 13.4596 7.97655 13.9817 8.1568C14.0387 8.17648 14.0952 8.19791 14.1511 8.22105C14.516 8.37221 14.8476 8.59377 15.1269 8.87308C15.4062 9.15239 15.6278 9.48398 15.7789 9.84891C15.8021 9.90479 15.8235 9.96128 15.8432 10.0183C16.0234 10.5403 16.4556 11 17.0079 11H21Z"
                                            ></path>
                                          </svg>
                                        </div>
                                        <span class="text-sm font-medium">
                                          अन्तःशुल्क ऐन, २०५८
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </DisclosurePanel>
                            </Disclosure>

                            <Disclosure as="div" class="mt-2" v-slot="{ open }">
                              <DisclosureButton
                                class="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-blue-600 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                              >
                                <span>Circular</span>
                                <IconChevronDown
                                  color="blue"
                                  :class="open ? 'rotate-180 transform' : ''"
                                  class="h-5 w-5 text-purple-500"
                                />
                              </DisclosureButton>
                              <DisclosurePanel
                                class="px-4 pb-2 pt-4 text-sm text-gray-500"
                              >
                                <ul
                                  class="tab-nav -mx-4 flex flex-wrap xl:mx-0"
                                >
                                  <li
                                    v-for="name in [
                                      'Business Sector',
                                      'Clarifications on Tax Rates',
                                      'Deduction of expense',
                                    ]"
                                    class="tab-item w-full px-4 xs:w-1/2 xs:py-1 sm:w-1/3 lg:w-1/4 xl:w-full xl:px-0 xl:py-0"
                                  >
                                    <a
                                      href="#"
                                      data-target="#ads-content"
                                      class="tab-toggle relative isolate flex text-slate-500 before:content-[''] dark:text-slate-400 [&amp;.active]:text-blue-600 [&amp;.active]:before:absolute [&amp;.active]:before:-inset-x-3 [&amp;.active]:before:inset-y-0 [&amp;.active]:before:-z-10 [&amp;.active]:before:rounded-md [&amp;.active]:before:bg-blue-100 [&amp;.active]:before:dark:bg-blue-950"
                                    >
                                      <div class="flex items-center py-2">
                                        <div class="me-3 h-5">
                                          <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-full"
                                          >
                                            <path
                                              class="fill-blue-300"
                                              d="M11 4.99999C11 4.4477 10.5509 3.99424 10.002 4.05548C8.57508 4.21469 7.20175 4.7137 5.99987 5.51676C4.51983 6.50569 3.36628 7.9113 2.68509 9.55584C2.0039 11.2004 1.82567 13.01 2.17294 14.7558C2.5202 16.5016 3.37737 18.1053 4.63604 19.3639C5.89472 20.6226 7.49836 21.4798 9.24419 21.8271C10.99 22.1743 12.7996 21.9961 14.4442 21.3149C16.0887 20.6337 17.4943 19.4802 18.4832 18.0001C19.2863 16.7982 19.7853 15.4249 19.9445 13.9979C20.0057 13.4491 19.5523 13 19 13H15.0079C14.4556 13 14.0234 13.4596 13.8432 13.9817C13.7596 14.2239 13.6449 14.4557 13.501 14.6711C13.1705 15.1657 12.7007 15.5513 12.1511 15.7789C11.6015 16.0066 10.9967 16.0661 10.4132 15.9501C9.82972 15.834 9.29376 15.5476 8.8731 15.1269C8.45244 14.7062 8.16597 14.1703 8.04991 13.5868C7.93385 13.0033 7.99341 12.3985 8.22107 11.8489C8.44873 11.2993 8.83426 10.8295 9.32891 10.499C9.54426 10.3551 9.77608 10.2404 10.0183 10.1568C10.5404 9.97655 11 9.54438 11 8.99209V4.99999Z"
                                            ></path>
                                            <path
                                              class="fill-blue-600"
                                              d="M21 11C21.5523 11 22.0057 10.5509 21.9445 10.002C21.8509 9.16274 21.6394 8.33912 21.3149 7.55583C20.8626 6.4639 20.1997 5.47175 19.364 4.63602C18.5282 3.8003 17.5361 3.13736 16.4442 2.68507C15.6609 2.36062 14.8372 2.14912 13.9979 2.05548C13.4491 1.99424 13 2.4477 13 2.99998V6.99209C13 7.54438 13.4596 7.97655 13.9817 8.1568C14.0387 8.17648 14.0952 8.19791 14.1511 8.22105C14.516 8.37221 14.8476 8.59377 15.1269 8.87308C15.4062 9.15239 15.6278 9.48398 15.7789 9.84891C15.8021 9.90479 15.8235 9.96128 15.8432 10.0183C16.0234 10.5403 16.4556 11 17.0079 11H21Z"
                                            ></path>
                                          </svg>
                                        </div>
                                        <span class="text-sm font-medium">
                                          {{ name }}
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </DisclosurePanel>
                            </Disclosure>

                            <Disclosure as="div" class="mt-2" v-slot="{ open }">
                              <DisclosureButton
                                class="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-blue-600 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                              >
                                <span>Directive</span>
                                <IconChevronDown
                                  color="blue"
                                  :class="open ? 'rotate-180 transform' : ''"
                                  class="h-5 w-5 text-purple-500"
                                />
                              </DisclosureButton>
                              <DisclosurePanel
                                class="px-4 pb-2 pt-4 text-sm text-gray-500"
                              >
                                <ul
                                  class="tab-nav -mx-4 flex flex-wrap xl:mx-0"
                                >
                                  <li
                                    v-for="name in [
                                      'मूल्य अभिबृद्धि कर निर्देशिका',
                                      'अन्तःशुल्क निर्देशिका',
                                      'शिक्षा सेवा कर निर्देशिका, २०६५',
                                      'स्थायी संस्थापन सम्बन्धी निर्देशिका,२०७७',
                                    ]"
                                    class="tab-item w-full px-4 xs:w-1/2 xs:py-1 sm:w-1/3 lg:w-1/4 xl:w-full xl:px-0 xl:py-0"
                                  >
                                    <a
                                      href="#"
                                      data-target="#ads-content"
                                      class="tab-toggle relative isolate flex text-slate-500 before:content-[''] dark:text-slate-400 [&amp;.active]:text-blue-600 [&amp;.active]:before:absolute [&amp;.active]:before:-inset-x-3 [&amp;.active]:before:inset-y-0 [&amp;.active]:before:-z-10 [&amp;.active]:before:rounded-md [&amp;.active]:before:bg-blue-100 [&amp;.active]:before:dark:bg-blue-950"
                                    >
                                      <div class="flex items-center py-2">
                                        <div class="me-3 h-5">
                                          <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-full"
                                          >
                                            <path
                                              class="fill-blue-600"
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z"
                                            ></path>
                                            <path
                                              class="fill-blue-300"
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M3 10C3 9.44772 3.44772 9 4 9H14C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11H4C3.44772 11 3 10.5523 3 10Z"
                                            ></path>
                                            <path
                                              class="fill-blue-600"
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14Z"
                                            ></path>
                                            <path
                                              class="fill-blue-300"
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M3 18C3 17.4477 3.44772 17 4 17H14C14.5523 17 15 17.4477 15 18C15 18.5523 14.5523 19 14 19H4C3.44772 19 3 18.5523 3 18Z"
                                            ></path>
                                          </svg>
                                        </div>
                                        <span class="text-sm font-medium">
                                          {{ name }}
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </DisclosurePanel>
                            </Disclosure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="md:hidden flex items-center"
                    @click="isOpenArticle = !isOpenArticle"
                  >
                    <button class="outline-none mobile-menu-button pl-2">
                      <svg
                        class="w-6 h-6 -ml-2 dark:text-white"
                        x-show="!isOpen"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                      </svg>
                    </button>
                    <span
                      v-show="!isOpen"
                      class="ml-3 hover:cursor-pointer dark:text-white"
                      >Articles</span
                    >
                  </div>
                </div>
                <div
                  class="md:hidden flex items-center"
                  @click="isOpen = !isOpen"
                >
                  <button class="outline-none mobile-menu-button pl-2">
                    <svg
                      class="w-6 h-6 -ml-2 dark:text-white"
                      x-show="!isOpen"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>
                  <span
                    v-show="!isOpen"
                    class="ml-3 hover:cursor-pointer dark:text-white"
                    >Filters</span
                  >
                </div>
              </div>
            </div>

            <transition name="slide" mode="out-in">
              <div
                class="md:hidden shadow-xl border border-gray-200 rounded-e-lg dark:rounded-lg"
                v-show="isOpen"
              >
                <ul class="mt-0 space-x-2 text-sm font-medium">
                  <!-- Act -->

                  <li class="relative pl-2">
                    <div class="p-2 rounded-md dark:hover:bg-gray-800">
                      <button
                        id="dropdown-button-megamenu-act"
                        @mouseover="openDropdown('act')"
                        @mouseleave="closeDropdown"
                        aria-expanded="false"
                        class="flex justify-between items-center w-full font-medium dark:hover:bg-gray-800 md:p-0 md:w-auto dark:text-white hover:text-primary-500"
                      >
                        Act/Rule
                        <svg
                          class="ml-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <transition
                        name="dropdown"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        @leave="leave"
                      >
                        <nav
                          id="megamenu-act"
                          v-show="openDropdownId === 'act'"
                          @mouseover="openDropdown('act')"
                          @mouseleave="closeDropdown"
                          ref="dropdown"
                          class="absolute min-w-72 bg-white rounded border-b shadow-xl dark:bg-gray-800 dark:border-gray-600 z-50"
                        >
                          <div
                            class="grid py-2 mx-auto max-w-screen-xl text-gray-900 dark:text-white"
                          >
                            <input
                              type="text"
                              placeholder="Search..."
                              v-model="searchQuery"
                              class="px-10 py-4 ml-3 mr-2 h-8 w-auto shadow-inner placeholder-gray-400 text-gray-900 bg-white dark:bg-gray-600 dark:bg-gray-600 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <ul class="col-span-2 md:col-span-1">
                              <li v-for="act in filteredActs" :key="act.value">
                                <a
                                  href="#"
                                  class="flex p-3 rounded-lg dark:hover:bg-gray-700"
                                >
                                  <input
                                    :id="`act${act.value}`"
                                    type="checkbox"
                                    :value="act.value"
                                    class="w-4 h-4 text-blue-600 bg-white border-gray-900 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    :for="`act${act.value}`"
                                    class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                                    >{{ act.label }}</label
                                  >
                                </a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </transition>
                    </div>
                  </li>

                  <!-- Year -->

                  <li class="relative">
                    <div class="p-2 rounded-md dark:hover:bg-gray-800">
                      <button
                        id="dropdown-button-megamenu-year"
                        @mouseover="openDropdown('year')"
                        @mouseleave="closeDropdown"
                        aria-expanded="false"
                        class="flex justify-between items-center w-full font-medium dark:hover:bg-gray-800 md:p-0 md:w-auto dark:text-white hover:text-primary-500"
                      >
                        Year
                        <svg
                          class="ml-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <transition
                        name="dropdown"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        @leave="leave"
                      >
                        <nav
                          id="megamenu-year"
                          v-show="openDropdownId === 'year'"
                          @mouseover="openDropdown('year')"
                          @mouseleave="closeDropdown"
                          ref="dropdown"
                          class="absolute min-w-48 bg-white rounded border-b shadow-xl dark:bg-gray-800 dark:border-gray-600 z-50 overflow-y-auto max-h-96"
                        >
                          <div
                            class="grid py-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white"
                          >
                            <!-- Search Bar -->
                            <input
                              type="text"
                              placeholder="Search..."
                              v-model="searchQuery"
                              class="px-3 py-2 ml-3 mr-2 h-8 w-auto shadow-inner placeholder-gray-400 text-gray-900 bg-white dark:bg-gray-600 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <ul class="col-span-2 md:col-span-1">
                              <li
                                v-for="year in filteredYears"
                                :key="year.value"
                              >
                                <a
                                  href="#"
                                  class="flex p-3 rounded-lg dark:hover:bg-gray-700"
                                >
                                  <input
                                    :id="`year${year.value}`"
                                    type="checkbox"
                                    :value="year.value"
                                    class="w-4 h-4 text-blue-600 bg-white border-gray-900 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    :for="`year${year.value}`"
                                    class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                                    >{{ year.label }}</label
                                  >
                                </a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </transition>
                    </div>
                  </li>

                  <!-- Module -->

                  <li class="relative">
                    <div class="p-2 rounded-md dark:hover:bg-gray-800">
                      <button
                        id="dropdown-button-megamenu-module"
                        @mouseover="openDropdown('module')"
                        @mouseleave="closeDropdown"
                        aria-expanded="false"
                        class="flex justify-between items-center w-full font-medium dark:hover:bg-gray-800 md:p-0 md:w-auto dark:text-white hover:text-primary-500"
                      >
                        Module
                        <svg
                          class="ml-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <transition
                        name="dropdown"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        @leave="leave"
                      >
                        <nav
                          id="megamenu-module"
                          v-show="openDropdownId === 'module'"
                          @mouseover="openDropdown('module')"
                          @mouseleave="closeDropdown"
                          ref="dropdown"
                          class="absolute min-w-72 bg-white rounded border-b shadow-xl dark:bg-gray-800 dark:border-gray-600 z-50"
                        >
                          <div
                            class="grid py-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white"
                          >
                            <!-- Search Bar -->
                            <input
                              type="text"
                              placeholder="Search..."
                              v-model="searchQuery"
                              class="px-3 py-2 ml-3 mr-2 h-8 w-auto shadow-inner placeholder-gray-400 text-gray-900 bg-white dark:bg-gray-600 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <ul class="col-span-2 md:col-span-1">
                              <li
                                v-for="module in filteredModules"
                                :key="module.value"
                              >
                                <a
                                  href="#"
                                  class="flex p-3 rounded-lg dark:hover:bg-gray-700"
                                >
                                  <input
                                    :id="`module${module.value}`"
                                    type="checkbox"
                                    :value="module.value"
                                    class="w-4 h-4 text-blue-600 bg-white border-gray-900 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    :for="`module${module.value}`"
                                    class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                                    >{{ module.label }}</label
                                  >
                                </a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </transition>
                    </div>
                  </li>

                  <!-- DocType -->

                  <li class="relative">
                    <div
                      class="p-2 rounded-md dark:hover:bg-gray-800"
                      style="white-space: nowrap"
                    >
                      <button
                        id="dropdown-button-megamenu-doctype"
                        @mouseover="openDropdown('doctype')"
                        @mouseleave="closeDropdown"
                        aria-expanded="false"
                        class="flex justify-between items-center w-full font-medium dark:hover:bg-gray-800 md:p-0 md:w-auto dark:text-white hover:text-primary-500"
                      >
                        Document Type
                        <svg
                          class="ml-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <transition
                        name="dropdown"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        @leave="leave"
                      >
                        <nav
                          id="megamenu-doctype"
                          v-show="openDropdownId === 'doctype'"
                          @mouseover="openDropdown('doctype')"
                          @mouseleave="closeDropdown"
                          ref="dropdown"
                          class="absolute min-w-72 bg-white rounded border-b shadow-xl dark:bg-gray-800 dark:border-gray-600 z-50 overflow-y-auto max-h-96"
                        >
                          <div
                            class="grid py-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white"
                          >
                            <!-- Search Bar -->
                            <input
                              type="text"
                              placeholder="Search..."
                              v-model="searchQuery"
                              class="px-3 py-2 ml-3 mr-2 h-8 w-auto shadow-inner placeholder-gray-400 text-gray-900 bg-white dark:bg-gray-600 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <ul class="col-span-2 md:col-span-1">
                              <li
                                v-for="doctype in filteredDocTypes"
                                :key="doctype.value"
                              >
                                <a
                                  href="#"
                                  class="flex p-3 rounded-lg dark:hover:bg-gray-700"
                                >
                                  <input
                                    :id="`doctype${doctype.value}`"
                                    type="checkbox"
                                    :value="doctype.value"
                                    class="w-4 h-4 text-blue-600 bg-white border-gray-900 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    :for="`doctype${doctype.value}`"
                                    class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                                    >{{ doctype.label }}</label
                                  >
                                </a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </transition>
                    </div>
                  </li>

                  <!-- Subject -->

                  <li class="relative">
                    <div class="p-2 rounded-md dark:hover:bg-gray-800">
                      <button
                        id="dropdown-button-megamenu-subject"
                        @mouseover="openDropdown('subject')"
                        @mouseleave="closeDropdown"
                        aria-expanded="false"
                        class="flex justify-between items-center w-full font-medium dark:hover:bg-gray-800 md:p-0 md:w-auto dark:text-white hover:text-primary-500"
                      >
                        Subject
                        <svg
                          class="ml-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <transition
                        name="dropdown"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        @leave="leave"
                      >
                        <nav
                          id="megamenu-subject"
                          v-show="openDropdownId === 'subject'"
                          @mouseover="openDropdown('subject')"
                          @mouseleave="closeDropdown"
                          ref="dropdown"
                          class="absolute min-w-72 bg-white rounded border-b shadow-xl dark:bg-gray-800 dark:border-gray-600 z-50 overflow-y-auto max-h-96"
                        >
                          <div
                            class="grid py-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white"
                          >
                            <!-- Search Bar -->
                            <input
                              type="text"
                              placeholder="Search..."
                              v-model="searchQuery"
                              class="px-3 py-2 ml-3 mr-2 h-8 w-auto shadow-inner placeholder-gray-400 text-gray-900 bg-white dark:bg-gray-600 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <ul class="col-span-2 md:col-span-1">
                              <li
                                v-for="subject in filteredSubjects"
                                :key="subject.value"
                              >
                                <a
                                  href="#"
                                  class="flex p-3 rounded-lg dark:hover:bg-gray-700"
                                >
                                  <input
                                    :id="`subject${subject.value}`"
                                    type="checkbox"
                                    :value="subject.value"
                                    class="w-4 h-4 text-blue-600 bg-white border-gray-900 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    :for="`subject${subject.value}`"
                                    class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                                    >{{ subject.label }}</label
                                  >
                                </a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </transition>
                    </div>
                  </li>

                  <!-- Court -->

                  <li class="relative">
                    <div class="p-2 rounded-md dark:hover:bg-gray-800">
                      <button
                        id="dropdown-button-megamenu-court"
                        @mouseover="openDropdown('court')"
                        @mouseleave="closeDropdown"
                        aria-expanded="false"
                        class="flex justify-between items-center w-full font-medium dark:hover:bg-gray-800 md:p-0 md:w-auto dark:text-white hover:text-primary-500"
                      >
                        Court
                        <svg
                          class="ml-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <transition
                        name="dropdown"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        @leave="leave"
                      >
                        <nav
                          id="megamenu-court"
                          v-show="openDropdownId === 'court'"
                          @mouseover="openDropdown('court')"
                          @mouseleave="closeDropdown"
                          ref="dropdown"
                          class="absolute min-w-72 bg-white rounded border-b shadow-xl dark:bg-gray-800 dark:border-gray-600 z-50 overflow-y-auto max-h-96"
                        >
                          <div
                            class="grid py-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white"
                          >
                            <!-- Search Bar -->
                            <input
                              type="text"
                              placeholder="Search..."
                              v-model="searchQuery"
                              class="px-3 py-2 ml-3 mr-2 h-8 w-auto shadow-inner placeholder-gray-400 text-gray-900 bg-white dark:bg-gray-600 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <ul class="col-span-2 md:col-span-1">
                              <li
                                v-for="court in filteredCourts"
                                :key="court.value"
                              >
                                <a
                                  href="#"
                                  class="flex p-3 rounded-lg dark:hover:bg-gray-700"
                                >
                                  <input
                                    :id="`court${court.value}`"
                                    type="checkbox"
                                    :value="court.value"
                                    class="w-4 h-4 text-blue-600 bg-white border-gray-900 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    :for="`court${court.value}`"
                                    class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                                    >{{ court.label }}</label
                                  >
                                </a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </transition>
                    </div>
                  </li>

                  <!-- Bench -->

                  <li class="relative">
                    <div class="p-2 rounded-md dark:hover:bg-gray-800">
                      <button
                        id="dropdown-button-megamenu-bench"
                        @mouseover="openDropdown('bench')"
                        @mouseleave="closeDropdown"
                        aria-expanded="false"
                        class="flex justify-between items-center w-full font-medium dark:hover:bg-gray-800 md:p-0 md:w-auto dark:text-white hover:text-primary-500"
                      >
                        Bench
                        <svg
                          class="ml-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <transition
                        name="dropdown"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        @leave="leave"
                      >
                        <nav
                          id="megamenu-bench"
                          v-show="openDropdownId === 'bench'"
                          @mouseover="openDropdown('bench')"
                          @mouseleave="closeDropdown"
                          ref="dropdown"
                          class="absolute min-w-72 bg-white rounded border-b shadow-xl dark:bg-gray-800 dark:border-gray-600 z-50 overflow-y-auto max-h-96"
                        >
                          <div
                            class="grid py-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white"
                          >
                            <!-- Search Bar -->
                            <input
                              type="text"
                              placeholder="Search..."
                              v-model="searchQuery"
                              class="px-3 py-2 ml-3 mr-2 h-8 w-auto shadow-inner placeholder-gray-400 text-gray-900 bg-white dark:bg-gray-600 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <ul class="col-span-2 md:col-span-1">
                              <li
                                v-for="bench in filteredBenchs"
                                :key="bench.value"
                              >
                                <a
                                  href="#"
                                  class="flex p-3 rounded-lg dark:hover:bg-gray-700"
                                >
                                  <input
                                    :id="`bench${bench.value}`"
                                    type="checkbox"
                                    :value="bench.value"
                                    class="w-4 h-4 text-blue-600 bg-white border-gray-900 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    :for="`bench${bench.value}`"
                                    class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                                    >{{ bench.label }}
                                  </label>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </transition>
                    </div>
                  </li>
                </ul>
              </div>
            </transition>
          </nav>
        </header>

        <!-- Two divs in the same line -->
        <div class="md:flex mt-5 md:mt-0">
          <!-- First div with border -->
          <div
            class="w-full hidden md:block border-b border-slate-200 dark:border-slate-800 lg:w-96 lg:border-b-0 lg:border-e"
          >
            <div class="">
              <ul
                class="divide-y overflow-y-auto dark:text-white custom-scrollbar"
                @click.prevent="handleAnchorClick"
                style="max-height: 657px"
              >
                <li
                  v-for="post in posts"
                  :key="post.id"
                  class="relative p-3 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
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

                  <a
                    href="#"
                    @click="openPost(post)"
                    :class="[
                      'absolute inset-0',
                      'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                    ]"
                  />
                </li>
              </ul>
            </div>
          </div>

          <!-- ArticleList Mobile Menu -->

          <div
            v-show="isOpenArticle"
            class="w-full border-b md:hidden border-slate-200 dark:border-slate-800 lg:w-96 lg:border-b-0 lg:border-e"
          >
            <div class="">
              <ul
                class="divide-y overflow-y-auto dark:text-white"
                @click.prevent="handleAnchorClick"
                style="max-height: 657px"
              >
                <li
                  v-for="post in posts"
                  :key="post.id"
                  class="relative p-3 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
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

                  <a
                    href="#"
                    @click="openPost(post)"
                    :class="[
                      'absolute inset-0',
                      'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                    ]"
                  />
                </li>
              </ul>
            </div>
          </div>

          <!-- Second div with scrollable content -->
          <div
            class="w-full dark:text-red-500 overflow-y-auto custom-scrollbar"
            style="max-height: 657px"
          >
            <div class="sticky top-0 z-10 bg-white dark:bg-gray-800">
              <vue3-tabs-chrome :tabs="tabs" v-model="activeTab" />
            </div>
            <div v-if="isLoading" class="loading-state">
              <div role="status" class="max-w-sm animate-pulse mt-11">
                <div
                  class="h-2.5 bg-gray-400 rounded-full dark:bg-gray-200 w-48 mb-4"
                ></div>
                <div
                  class="h-2 bg-gray-400 rounded-full dark:bg-gray-200 max-w-[360px] mb-2.5"
                ></div>
                <div
                  class="h-2 bg-gray-400 rounded-full dark:bg-gray-200 mb-2.5"
                ></div>
                <div
                  class="h-2 bg-gray-400 rounded-full dark:bg-gray-200 max-w-[330px] mb-2.5"
                ></div>
                <div
                  class="h-2 bg-gray-400 rounded-full dark:bg-gray-200 max-w-[300px] mb-2.5"
                ></div>
                <div
                  class="h-2 bg-gray-400 rounded-full dark:bg-gray-200 max-w-[360px]"
                ></div>
                <span class="sr-only">Loading...</span>
              </div>
            </div>

            <div
              v-else
              class="w-full text-slate-900 px-4 py-3 dark:text-gray-100"
              @mouseup="checkForSelection"
              id="article-content"
            >
              <p class="text-2xl font-bold">{{ heading }}</p>
              <p class="text-xl mt-2 pl-2">{{ subheading }}</p>
              <p class="text-md mt-2 pl-4">{{ content1 }}</p>
              <p class="text-md mt-2 pl-4">{{ content2 }}</p>
              <p class="text-sm mt-2 pl-6">{{ subtitle1 }}</p>
              <p class="text-sm mt-2 pl-6">{{ subtitle2 }}</p>
              <p class="text-sm mt-2 pl-6">{{ subtitle3 }}</p>
              <p class="text-sm mt-2 pl-6">{{ subtitle4 }}</p>
              <p class="text-sm mt-2 pl-6">{{ subtitle5 }}</p>
              <p class="text-sm mt-2 pl-6">{{ subtitle6 }}</p>
              <p class="text-sm mt-2 pl-6">{{ subtitle7 }}</p>
              <p class="text-sm mt-2 pl-6">{{ subtitle8 }}</p>
              <p class="text-md mt-2 pl-4">{{ content3 }}</p>
              <p class="text-md mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum ligula quis arcu consequat, quis convallis libero
                convallis. Integer vehicula sapien eget ligula gravida, a
                pretium mi fermentum. Duis nec leo vel turpis congue malesuada
                sed non dui. Nunc eget eros nec orci feugiat fermentum. Proin
                vel nisi non lectus pulvinar euismod. Fusce auctor purus vitae
                justo scelerisque, quis vehicula libero dignissim. Donec dictum
                dolor sit amet erat tincidunt, in sodales risus auctor. Vivamus
                quis efficitur ligula. Integer interdum turpis vitae lacus
                hendrerit fermentum. Sed ultricies nisl ut metus lobortis
                ultricies. Maecenas sit amet lacus a lacus ultrices volutpat vel
                non tortor. Phasellus efficitur tempor felis. Maecenas sodales
                condimentum felis, a scelerisque velit dictum eget. Sed eget
                velit id turpis mattis posuere. Vivamus sed convallis lectus.
              </p>
              <span
                v-if="showPenIcon"
                :style="{
                  top: penIconPosition.top + 'px',
                  left: penIconPosition.left + 'px',
                }"
                class="absolute mt-[-10px] h-10 w-auto bg-black p-1 shadow cursor-pointer z-10 flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="25"
                  height="25"
                  x="0"
                  y="0"
                  viewBox="0 0 512.002 512.002"
                  style="enable-background: new 0 0 512 512"
                  xml:space="preserve"
                  class="mr-6"
                  @click="highlightText"
                >
                  <g>
                    <path
                      d="m128.002 163.175 147.469-147.47c5.881-5.881 15.416-5.881 21.296 0l210.824 210.824c5.881 5.881 5.881 15.415 0 21.296l-147.469 147.47-232.12-232.12zm206.271 248.864-131.867 28.835L82.423 320.89l28.835-131.867 223.015 223.016zM69.058 350.118l104.12 104.12-42.058 42.057a15.058 15.058 0 0 1-18.119 2.427L7.589 438.487c-8.621-4.926-10.198-16.702-3.177-23.723l64.646-64.646z"
                      fill="#ffffff"
                      opacity="1"
                      data-original="#000000"
                      class=""
                    ></path>
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="25"
                  height="25"
                  x="0"
                  y="0"
                  viewBox="0 0 512 512"
                  style="enable-background: new 0 0 512 512"
                  xml:space="preserve"
                  class="mr-6"
                  @click="openTwitter"
                >
                  <g>
                    <path
                      d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                      fill="#ffffff"
                      opacity="1"
                      data-original="#000000"
                      class=""
                    ></path>
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="25"
                  height="25"
                  x="0"
                  y="0"
                  viewBox="0 0 32 32"
                  style="enable-background: new 0 0 512 512"
                  xml:space="preserve"
                  class=""
                  @click="deleteHighlightedText"
                  v-if="isTextHighlighted"
                >
                  <g>
                    <g fill="#000">
                      <path
                        d="M12 5a4 4 0 0 1 8 0h5a3 3 0 1 1 0 6H7a3 3 0 1 1 0-6zM7 13v15a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V13z"
                        fill="#ffffff"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: transform 0.3s, opacity 0.3s;
}

.dropdown-enter,
.dropdown-leave-to {
  transform: translateY(-10px);
  opacity: 0;
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

.line-through {
  text-decoration: line-through;
}
/* Custom scrollbar styles */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 8px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #c8c8c8; /* Change this color to match your design */
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #989898; /* Change this color for the hover state */
}

.custom-scrollbar::-webkit-scrollbar-track {
  background-color: #ffffff; /* Change this color to match your design */
  border-radius: 4px;
}
.dark .custom-scrollbar::-webkit-scrollbar-track {
  background-color: #374151; /* Change this color to match your design */
  border-radius: 4px;
}
</style>

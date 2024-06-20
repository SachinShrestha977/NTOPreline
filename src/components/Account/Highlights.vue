<template>
  <div class="h-screen flex justify-center">
    <div class="">
      <h1 class="text-2xl font-semibold mb-4 dark:text-gray-50">
        Your Highlighted Texts:
      </h1>
      <ul class="divide-y divide-gray-300">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="px-4 py-3 flex items-center gap-4 transition-colors duration-200 cursor-pointer"
          @click="handleItemClick(item)"
        >
          <span class="text-sm dark:text-gray-100"> {{ index + 1 }}</span>

          <span class="dark:text-gray-100">{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "vue3-toastify/dist/index.css";

export default {
  name: "Highlights",
  data() {
    let items = localStorage.getItem("highlightedTexts");
    if (items) {
      items = JSON.parse(items);
    } else {
      items = [];
    }
    return {
      items,
    };
  },
  mounted() {},
  methods: {
    handleItemClick(item) {
      // Handle click on list item, if needed
      console.log("Clicked item:", item);
    },
  },
};
</script>

<style>
.font-semibold {
  font-weight: 600;
}
</style>

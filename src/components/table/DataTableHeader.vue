<template>
  <tr class="header-color flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
    <th v-for="singleHeader in headerData" :key="singleHeader.value" class="p-3 text-left">
      {{ singleHeader.label }}
    </th>
  </tr>
</template>

<script setup lang=ts>
const props = defineProps({
  headerData: Object,
  headerColor: String,
})

const { headerColor, headerData } = toRefs(props)

</script>

<style scoped>
  @media (min-width: 640px) {
    table {
      display: inline-table !important;
    }

    thead tr:not(:first-child) {
      display: none;
    }
  }

  td:not(:last-child) {
    border-bottom: 0;
  }

  th:not(:last-child) {
    border-bottom: 2px solid rgba(0, 0, 0, .1);
  }

  .header-color {
    background-color: v-bind(headerColor);
  }

</style>

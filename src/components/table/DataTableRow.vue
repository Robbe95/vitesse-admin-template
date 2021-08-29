<template>
  <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
    <td v-for="header in headers" :key="header.value" class="border-grey-light border hover-color cell-color p-3" v-html="rowData[header.value]" />
  </tr>
</template>

<script setup lang=ts>
const props = defineProps({
  hoverColor: String,
  cellColor: String,
  rowData: { type: Object, required: true },
  headers: { type: Object, required: true },
})

const { hoverColor, cellColor, rowData } = toRefs(props)

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
  .hover-color:hover {
    background-color: v-bind(hoverColor);
  }

  .cell-color {
    background-color: v-bind(cellColor);
  }

</style>

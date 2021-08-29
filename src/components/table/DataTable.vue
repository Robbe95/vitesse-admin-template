<template>
  <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
    <thead class="text-white">
      <DataTableHeader
        v-for="singleData in tableData.data"
        :key="singleData.id"
        :header-data="tableData.headers"
        :header-color="headerColor"
      />
    </thead>
    <tbody class="flex-1 sm:flex-none">
      <DataTableRow
        v-for="rowData in tableData.data"
        :key="rowData.id"
        :row-data="rowData"
        :headers="tableData.headers"
        :cell-color="cellColor"
        :hover-color="hoverColor"
      />
    </tbody>
  </table>
</template>

<script setup lang="ts">

const props = defineProps({
  headerColor: String,
  hoverColor: String,
  cellColor: String,
  tableData: { type: Object, required: true },
})

const { headerColor, hoverColor, cellColor, tableData } = toRefs(props)

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

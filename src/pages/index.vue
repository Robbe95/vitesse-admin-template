<script setup lang="ts">
const data = ref({
  headers: [
    {
      label: 'First name', value: 'first_name',
    },
    {
      label: 'Last name', value: 'last_name',
    },
  ],
  data: [
    { id: 1, first_name: 'Robbe', last_name: 'Vaes' },
    { id: 2, first_name: 'Robberto', last_name: 'Vaes Coolio' },
    { id: 3, first_name: 'Robbetest', last_name: 'Vaestester' },
  ],
  pagination: {
    currentPage: 1,
    totalPages: 3,
    baseUrl: 'https://example.com/data?page=',
  },
  ordered_by: 'first_name',
})
</script>

<template>
  <div class="text-black ">
    Index page
    <DataTable
      :table-data="data"
      header-color="#03fcd3"
      hover-color="rgba(243, 244, 246, 1)"
      cell-color="white"
    />
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>

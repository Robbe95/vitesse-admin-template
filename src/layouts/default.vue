<template>
  <div class="flex md:flex-row flex-col bg-gray-100">
    <NavBar />
    <main class="px-4 py-10 text-center text-gray-700 flex-1 dark:text-gray-200 ">
      <router-view class="w-full" />
      <Footer />
      <div class="mt-5 mx-auto text-center opacity-25 text-sm">
        [Default Layout]
      </div>
    </main>
  </div>
</template>

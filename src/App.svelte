<script>
  import Main from "./Main.svelte";
  import Sidebar from "./Sidebar.svelte";
</script>

<main class="bg-background flex text-black font-roboto">
  <div class="h-screen w-96 ml-5">
    <Sidebar />
  </div>
  <div class="h-auto w-screen bg-white m-10 ml-5 rounded-2xl">
    <Main />
  </div>
</main>

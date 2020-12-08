<script>
import Main from "./Main.svelte";
import Sidebar from "./Sidebar.svelte";
</script>

<style>
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), url('assets/fonts/Roboto/Roboto-Thin.ttf') format('ttf');
  }
</style>

<main class="bg-background flex text-black font-sans">
  <div class="h-screen w-96 ml-5">
    <Sidebar/>
  </div>
  <div class="h-auto w-screen bg-white m-10 ml-5 rounded-2xl">
   <Main/>
  </div>
</main>

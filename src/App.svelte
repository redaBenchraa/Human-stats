<script>
  import Main from "./Main.svelte";
  import Popup from "./Popup.svelte";
  import Sidebar from "./Sidebar.svelte";
  import { selectedItem, visible } from "./stores";
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
  * {
    font-family: "Open Sans" !important;
  }
</style>

<main class="bg-background flex text-black select-none">
  <div class="h-screen w-96 ml-5">
    <Sidebar />
  </div>
  <div class="h-auto w-screen bg-white m-10 ml-5 rounded-2xl">
    <Main />
  </div>
  {#if $visible}
    <Popup item={$selectedItem} />
  {/if}
</main>

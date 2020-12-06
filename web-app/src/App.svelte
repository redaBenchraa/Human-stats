<script>
import Main from "./Main.svelte";
import Sidebar from "./Sidebar.svelte";
  
  let dark = false;
</script>
<syles>

</syles>

<main>
  <div class="flex">
    <div class="h-screen w-64  bg-gray-300 flex justify-center">
      <Sidebar/>
    </div>
    <div class="h-screen">
     <Main/>
    </div>
  </div>
  
</main>

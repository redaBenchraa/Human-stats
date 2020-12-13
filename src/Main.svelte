<script>
  import Category from "./Category.svelte";
  import { items } from "./stores.js";
</script>

<div class="h-full w-full flex flex-col justify-center">
  <div class="text-4xl font-bold text-center">Fun facts based on your input</div>
  <div class="flex flex-row flex-wrap justify-center">
    {#each items as item}
      <Category {item} />
    {/each}
  </div>
</div>

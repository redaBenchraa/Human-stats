<script>
  import { visible, selectedIndex } from "./stores.js";
  export let item;

  function handleClick() {
    visible.set(true);
    selectedIndex.set(item.index);
  }
</script>

<style>
  .item {
    position: relative;
    transition: all 0.5s;
    overflow: hidden;
  }

  .item:after {
    content: "";
    background: white;
    display: block;
    position: absolute;
    padding-top: 500%;
    padding-left: 500%;
    margin-left: -100px !important;
    margin-top: -100%;
    opacity: 0;
    transition: all 1s;
  }

  .item:active:after {
    padding: 0;
    margin: 0;
    opacity: 0.5;
    transition: 0s;
    border-radius: 50%;
  }
</style>

<div
  on:click={handleClick}
  class="item h-36 w-44 bg-background hover:bg-gray-200 rounded-lg m-3 p-2 flex flex-col justify-center cursor-pointer hover:shadow-sm">
  <img class="h-24 w-24 mx-auto" src={item.logo} alt={item.label} />
  <div class="font-bold text-2xl text-center">{item.label}</div>
</div>

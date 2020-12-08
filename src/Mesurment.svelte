<script>
  import Slider from "./Slider.svelte";
  export let item;
  export let value;
</script>

<div class="h-20 rounded-md w-full bg-white flex flex-row">
  <div class="w-20  my-auto flex flex-col justify-center">
    <img src={item.logo} alt="icon" class="h-10 w-10 m-auto" />
    <div class="bold text-lg text-center">{item.label}</div>
  </div>
  <div class="w-64">
    <div class="fixed w-6 h-20 bg-gradient-to-r from-white z-10" />
    <Slider settings={item.settings} bind:value />
    <div class="relative -top-16 -right-56 w-8 h-20 bg-gradient-to-r from-transparent to-white z-10" />
  </div>
</div>

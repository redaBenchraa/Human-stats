<script>
  import Mesurment from "./Mesurment.svelte";
  import { height, weight, age } from "./stores.js";
  let heightItem = {
    logo: "./assets/images/height.svg",
    label: "Height",
    settings: {
      start: 10,
      end: 300,
    },
    value: 10,
  };
  let weightItem = {
    logo: "./assets/images/weight-scale.svg",
    label: "Weight",
    settings: {
      start: 5,
      end: 250,
    },
    value: 5,
  };
  let ageItem = {
    logo: "./assets/images/cake.svg",
    label: "Age",
    settings: {
      start: 0,
      end: 150,
    },
    value: 0,
  };
</script>

<div class="flex flex-col space-y-4 my-7">
  <Mesurment item={heightItem} bind:value={$height} />
  <Mesurment item={weightItem} bind:value={$weight} />
  <Mesurment item={ageItem} bind:value={$age} />
</div>

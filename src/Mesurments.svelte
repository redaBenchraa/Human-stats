<script>
  import Mesurment from "./Mesurment.svelte";
  let items = [
    {
      logo: "./assets/images/height.svg",
      label: "Height",
      settings: {
        start: 10,
        end: 300,
      },
    },
    {
      logo: "./assets/images/weight-scale.svg",
      label: "Weight",
      settings: {
        start: 5,
        end: 250,
      },
    },
    {
      logo: "./assets/images/cake.svg",
      label: "Age",
      settings: {
        start: 0,
        end: 150,
      },
    },
  ];
</script>

<div class="flex flex-col space-y-4 my-7">
  {#each items as item}
    <Mesurment {item} />
  {/each}
</div>

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
      value: 10,
    },
    {
      logo: "./assets/images/weight-scale.svg",
      label: "Weight",
      settings: {
        start: 5,
        end: 250,
      },
      value: 5,
    },
    {
      logo: "./assets/images/cake.svg",
      label: "Age",
      settings: {
        start: 0,
        end: 150,
      },
      value: 0,
    },
  ];
  $: values = items.map((x) => x.value);
  $: console.log(`the values are ${values}`);
</script>

<div class="flex flex-col space-y-4 my-7">
  {#each items as item}
    <Mesurment {item} bind:value={item.value} />
  {/each}
</div>

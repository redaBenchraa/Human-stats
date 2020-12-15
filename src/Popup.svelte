<script>
  import { fade } from "svelte/transition";
  import {} from "./helper.js";
  import { visible, weight, height, age } from "./stores.js";
  import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import "swiper/swiper.scss";
  import "swiper/components/navigation/navigation.scss";
  import "swiper/components/pagination/pagination.scss";
  import "swiper/components/effect-fade/effect-fade.scss";
  import "swiper/swiper-bundle.css";

  SwiperCore.use([Navigation, Pagination, EffectFade]);

  export let item;

  function close() {
    visible.set(false);
  }

  function getText(fact) {
    if (fact.calculation) {
      return fact.text.formatUnicorn(
        new Intl.NumberFormat().format(
          Math.trunc(fact.calculation($height, $weight, $age))
        )
      );
    }
    return fact.text;
  }
</script>

<style>
  .blur {
    backdrop-filter: blur(2px);
  }
  .popup {
    width: 50rem;
    height: 35rem;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<div
  transition:fade={{ duration: 200 }}
  class="absolute blur flex justify-center w-screen h-screen z-20">
  <div
    on:click={close}
    class="absolute w-screen h-screen opacity-20 bg-lightBlack z-10" />
  <div class="popup my-auto relative bg-white rounded-lg z-20">
    <div
      on:click={close}
      class="absolute text-2xl right-0 font-black cursor-pointer p-1 pr-2 z-30">
      &#x2716;
    </div>
    <img class="w-40 h-40 -mt-20 mx-auto" src={item.logo} alt={item.label} />
    <Swiper
      class="-mt-20 h-full"
      centeredSlides
      centeredSlidesBounds
      centerInsufficientSlides
      navigation
      pagination={{ clickable: true, type: 'fraction' }}>
      {#each item.facts as fact}
        <SwiperSlide class="p-20 h-full w-full">
          <div class="content h-full text-center text-2xl">
            <span>{getText(fact)}</span>
          </div>
        </SwiperSlide>
      {/each}
    </Swiper>
  </div>
</div>

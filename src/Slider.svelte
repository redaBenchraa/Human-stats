<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import "swiper/swiper.scss";

  export let settings;
  let activeIndex = 0;
  const arr = Array(settings.end - settings.start + 1)
    .fill()
    .map((_, idx) => settings.start + idx);
</script>

<style>
  .redMarker {
    height: 10px;
    width: 3px;
  }
  .bigMarker {
    height: 15px;
    width: 3px;
  }
  .smallMarker {
    height: 10px;
    width: 3px;
  }
</style>

<div class="select-none ml-1">
  <div class="w-full pb-1">
    <div class="redMarker" />
  </div>
  <Swiper
    initialSlide={10}
    slidesPerView={20}
    spaceBetween={0}
    speed={100}
    grabCursor
    mousewheelControl
    mousewheel
    freeMode
    freeModeMomentum
    centeredSlides
    freeModeSticky
    on:slideChange={(e) => {
      activeIndex = e.detail[0][0].activeIndex;
    }}>
    {#each arr as item, index}
      {#if item % 5 === 0}
        <SwiperSlide>
          <div class="bigMarker" />
          <div>{item}</div>
        </SwiperSlide>
      {:else}
        <SwiperSlide>
          <div class="smallMarker" />
        </SwiperSlide>
      {/if}
    {/each}
  </Swiper>
  <div class="w-full">
    <div class="redMarker" />
  </div>
</div>

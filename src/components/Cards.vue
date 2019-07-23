<template>
  <div id="cards">
    <swiper :options="swiperOption">
      <swiper-slide v-for="card in cards" v-bind:key="card.number">
        <Card
          :number="card.number"
          :name="card.name"
          :expireDate="card.expireDate"
          :ccv="card.ccv"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

import Card from "./Card";

export default {
  components: {
    swiper,
    swiperSlide,
    Card
  },
  data() {
    return {
      cards: [
        {
          number: "1233456678995555",
          name: "Maria Garcia Martinez",
          expireDate: "02/18",
          ccv: "345"
        },
        {
          number: "1233456678995554",
          name: "Maria Garcia Martinez",
          expireDate: "02/18",
          ccv: "345"
        }
      ],
      swiperOption: {
        width: 200,
        slidesPerView: 1,
        spaceBetween: 12,
        centeredSlides: true
      }
    };
  }
};
</script>

<style scoped lang="scss">
#cards {
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper {
  width: 240px;
}
.swiper-slide {
  width: 120px;
}
</style>

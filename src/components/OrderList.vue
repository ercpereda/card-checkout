<template>
  <div id="order-list">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in order" :key="item.id">
        <OrderItem
          :name="item.name"
          :description="item.description"
          :size="item.size"
          :color="item.color"
          :price="item.price"
          :image="item.image"
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import OrderItem from "./OrderItem";

export default {
  props: {
    order: Array
  },
  components: {
    OrderItem
  },
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        slidesPerView: 3,
        mousewheel: true,
        centeredSlides: true,
        effect: "coverflow",
        coverflowEffect: {
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className}" style="background: #f3647b;"></span>`;
          }
        }
      }
    };
  }
};
</script>

<style scoped lang="scss">
#order-list {
  height: 100%;
}

.swiper-container {
  height: 200px;
  width: 90%;
  margin: 20px;
}

.swiper-slide {
  height: 30px;
  width: 80%;
}
</style>

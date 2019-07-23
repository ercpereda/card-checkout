<template>
  <div class="order-item">
    <div class="order-image-background">
      <img :src="image" />
    </div>

    <div class="text-container">
      <p class="title">{{ name }}</p>
      <p class="sub-title">
        {{ description }} / {{ color }} / Size: {{ size }}
      </p>
      <p class="price">{{ price | money }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    size: Number,
    color: String,
    price: Number,
    image: String
  }
};
</script>

<style scoped lang="scss">
$size: 60px;

.order-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 0 10px;
}
.order-image-background {
  width: $size;
  height: $size;
  border-radius: calc(#{$size} / 2);
  background: linear-gradient(
    to bottom,
    rgba(243, 100, 124, 1) 0%,
    rgba(243, 101, 121, 1) 4%,
    rgba(242, 104, 112, 0.96) 16%,
    rgba(241, 111, 92, 0.96) 41%,
    rgba(230, 102, 85, 0.96) 53%,
    rgba(219, 85, 70, 0.96) 61%,
    rgba(45, 47, 90, 0.96) 96%
  );
}
p {
  margin: 0;
  margin-left: 20px;
  color: $white;
}
.title {
  font-size: 12px;
  font-weight: bold;
}
.sub-title {
  font-size: 8px;
}
.price {
  font-size: 16px;
  font-weight: bold;
  text-align: right;
}
img {
  width: 80px;
  height: 80px;
  transform: translate(-10%, -20%);
}
</style>

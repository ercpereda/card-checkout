<template>
  <div id="payment-container">
    <h1>Payment</h1>

    <Cards />
  </div>
</template>

<script>
import Cards from "./Cards";

export default {
  components: {
    Cards
  }
};
</script>

<style scoped lang="scss">
h1 {
  color: $container-color-1;
  margin-top: 18px;
  margin-left: 24px;
}
</style>

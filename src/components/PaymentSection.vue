<template>
  <div id="payment-container">
    <h1>Payment</h1>

    <CheckoutForm />
  </div>
</template>

<script>
import CheckoutForm from "./CheckoutForm";

export default {
  components: {
    CheckoutForm
  }
};
</script>

<style scoped lang="scss">
h1 {
  color: $container-color-1;
  margin-top: 18px;
  margin-left: 24px;
}
#payment-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>

<template>
  <div id="payment-container">
    <h1 class="title">Payment</h1>

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
#payment-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
}
.title {
  color: $secondary;
  margin-top: 18px;
  margin-left: 24px;
}
</style>

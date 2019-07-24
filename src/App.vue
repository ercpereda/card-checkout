<template>
  <div id="app">
    <BaseContainer>
      <template #left>
        <OrderSection />
      </template>

      <template #right>
        <PaymentSection />
      </template>
    </BaseContainer>
  </div>
</template>

<script>
import BaseContainer from "./components/BaseContainer";
import PaymentSection from "./components/PaymentSection";
import OrderSection from "./components/OrderSection";

export default {
  name: "app",
  components: {
    BaseContainer,
    PaymentSection,
    OrderSection
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  align-items: center;

  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;

  background: linear-gradient(
    to right,
    $primary 0%,
    $primary 55%,
    $secondary 55%,
    $secondary 100%
  );
}
</style>

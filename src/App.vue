<template>
  <div id="app">
    <Container />
  </div>
</template>

<script>
import Container from "./components/Container";

export default {
  name: "app",
  components: {
    Container
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
    $background1 0%,
    $background1 55%,
    $background2 55%,
    $background2 100%
  );
}
</style>

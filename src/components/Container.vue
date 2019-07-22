<template>
  <div id="container"></div>
</template>

<style lang="scss">
#container {
  width: 80%;
  margin: 0 20%;
  height: 60vh;
  background-color: white;
  border-radius: 25px;

  $separation-pos: 58.385%;
  background: linear-gradient(
    to right,
    $container-color-1 0%,
    $container-color-1 $separation-pos,
    $container-color-2 $separation-pos,
    $container-color-2 100%
  );

  box-shadow: -15px 15px 4px 0px rgba(0, 0, 0, 0.15);
}
</style>

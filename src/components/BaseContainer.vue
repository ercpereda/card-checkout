<template>
  <div id="container">
    <div class="columns left">
      <slot name="left"></slot>
    </div>
    <div class="columns right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
$separation-pos: 58.385%;

#container {
  display: flex;
  width: 80%;
  height: 50vh;
  margin: 0 20%;
  padding: 0;
  border-radius: 25px;

  background: linear-gradient(
    to right,
    $container-color-1 0%,
    $container-color-1 $separation-pos,
    $container-color-2 $separation-pos,
    $container-color-2 100%
  );

  box-shadow: -15px 15px 4px 0px rgba(0, 0, 0, 0.15);
}

.columns {
  height: 100%;
}

.left {
  width: $separation-pos;
}

.right {
  width: calc(100% - #{$separation-pos});
}
</style>

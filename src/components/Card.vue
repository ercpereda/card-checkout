<template>
  <div class="card">
    <h2 class="number">{{ number }}</h2>
    <div class="horizontal-layout">
      <h4>CARD HOLDER</h4>
      <h4>EXPIRY DATE</h4>
    </div>
    <div class="horizontal-layout">
      <h3>{{ name }}</h3>
      <h3>{{ expireDate }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: String,
    name: String,
    expireDate: String,
    ccv: String
  }
};
</script>

<style scoped lang="scss">
$card-width: 180px;

h2 {
  font-size: 14px;
  margin: 0;
  margin-bottom: 14px;
}
h3 {
  font-size: 10px;
  margin: 0;
}
h4 {
  font-size: 8px;
  margin: 0;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: $card-width;
  height: calc(#{$card-width} / 1.586);
  background-color: #f3647b;
  border-radius: 18px;
  padding: 10px;
  color: $white;
}

.horizontal-layout {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 25px;
}
</style>

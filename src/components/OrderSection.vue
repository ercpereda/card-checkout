<template>
  <div id="order-container">
    <h1 class="title">Order</h1>

    <OrderList :order="order" />

    <div class="order-total">
      <p class="label">ORDER TOTAL</p>
      <p class="label total">{{ total | money }}</p>
    </div>
  </div>
</template>

<script>
import OrderList from "./OrderList";

import OrderItems from "@/data/adidas";

export default {
  components: {
    OrderList
  },
  data() {
    return {
      order: OrderItems
    };
  },
  computed: {
    total: function() {
      // TODO: Move this to a getter of Vuex.
      return this.order.reduce((acc, item) => acc + item.price, 0);
    }
  }
};
</script>

<style scoped lang="scss">
.title {
  color: $white;
  margin-top: 18px;
  margin-left: 24px;
}

.content {
  display: flex;
  flex-direction: column;
}

#order-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
}

.order-total {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-top: 1px solid $primary;
  padding: 8px;
  width: 75%;
}
.label {
  color: $white;
  margin-bottom: 0;
}
.total {
  font-size: 28px;
  font-weight: bold;
}
</style>

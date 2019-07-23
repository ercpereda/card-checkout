<template>
  <div id="order-container">
    <h1>Order</h1>

    <div id="content">
      <div class="list-container">
        <OrderList :order="order" />
      </div>

      <div id="order-total">
        <p class="label">ORDER TOTAL</p>
        <p class="total">{{ total | money }}</p>
      </div>
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
h1 {
  color: $container-color-2;
  margin-top: 18px;
  margin-left: 24px;
}
#order-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: strech;
}
#order-total {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-top: 1px solid #f3647b;
  padding: 8px;
  width: 75%;
  height: 30px;
}
#content {
  display: flex;
  flex-direction: column;
}
.list-container {
  flex-grow: 10;
}
p.label {
  color: $white;
  margin-bottom: 0;
}
p.total {
  color: $white;
  font-size: 28px;
  font-weight: bold;
}
</style>

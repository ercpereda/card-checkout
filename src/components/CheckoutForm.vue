<template>
  <b-form id="checkout-form" @submit.prevent="handleSubmit">
    <b-form-group
      id="card-name-group"
      label="CARD HOLDER"
      label-for="card-name"
      label-size="sm"
    >
      <b-form-input
        id="card-name"
        :class="['rounded-pill']"
        v-model="formData.name"
        required
        placeholder="Enter the name as shown in the card"
        size="sm"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="card-number-group"
      label="CARD NUMBER"
      label-for="card-number"
      label-size="sm"
    >
      <b-form-input
        id="card-number"
        :class="['rounded-pill']"
        v-model="formData.number"
        required
        placeholder="XXXX XXXX XXXX XXXX"
        size="sm"
      ></b-form-input>
    </b-form-group>

    <div id="expire-date-cvv-group">
      <b-form-group
        id="card-expire-group"
        label="EXPIRE DATE"
        label-for="card-expire-input-group"
        label-size="sm"
      >
        <b-input-group id="card-expire-input-group">
          <b-form-select
            id="card-expiry-month"
            :class="['rounded-pill']"
            v-model="formData.month"
            :options="months"
            required
            placeholder="MM"
            size="sm"
          ></b-form-select>
          <b-form-select
            id="card-expiry-year"
            :class="['rounded-pill']"
            v-model="formData.year"
            :options="year"
            required
            placeholder="YY"
            size="sm"
          ></b-form-select>
        </b-input-group>
      </b-form-group>

      <b-form-group
        id="card-cvv-group"
        label="CVV"
        label-for="card-cvv"
        label-size="sm"
      >
        <b-form-input
          id="card-cvv"
          :class="['rounded-pill']"
          v-model="formData.cvv"
          required
          size="sm"
        ></b-form-input>
      </b-form-group>
    </div>

    <b-button
      :class="['float-right']"
      pill
      type="submit"
      variant="primary"
      size="sm"
    >
      Submit
    </b-button>
  </b-form>
</template>

<script>
const range = (start, end) =>
  Array.from(
    { length: end - start + 1 },
    (_, i) => `${i + start < 10 ? "0" : ""}${i + start}`
  );

export default {
  name: "checkout-form",
  data() {
    return {
      formData: {
        name: "",
        number: "",
        month: "",
        year: "",
        cvv: ""
      }
    };
  },
  computed: {
    months: function() {
      return range(1, 12);
    },
    year: function() {
      const year = new Date().getFullYear() - 2000;
      console.log(year);
      return range(year, 99);
    }
  },
  methods: {
    handleSubmit() {}
  }
};
</script>

<style scoped lang="scss">
#checkout-form {
  margin: 0 24px 24px 24px;
}
#expire-date-cvv-group {
  display: flex;
  justify-content: space-between;
}
#card-cvv {
  width: 56px;
}
#card-expiry-month {
  margin-right: 2.5px;
}
#card-expiry-year {
  margin-left: 2.5px;
}
</style>

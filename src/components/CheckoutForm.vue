<template>
  <b-form id="checkout-form" @submit.prevent="handleSubmit">
    <b-alert v-if="success" variant="success" show>Payment Procesed!</b-alert>
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
        placeholder="Enter the name as shown in the card"
        size="sm"
        :state="!$v.formData.name.$error && null"
        :disabled="success"
      ></b-form-input>

      <b-form-invalid-feedback>
        Requiered
      </b-form-invalid-feedback>
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
        placeholder="XXXX XXXX XXXX XXXX"
        size="sm"
        :state="!$v.formData.number.$error && null"
        :disabled="success"
      ></b-form-input>

      <b-form-invalid-feedback v-if="$v.formData.number.required">
        Required
      </b-form-invalid-feedback>
      <b-form-invalid-feedback v-else-if="$v.formData.number.numeric">
        Only numeric values
      </b-form-invalid-feedback>
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
            id="card-expire-month"
            :class="['rounded-pill']"
            v-model="formData.month"
            :options="months"
            placeholder="MM"
            size="sm"
            :state="!$v.formData.month.$error && null"
            :disabled="success"
          ></b-form-select>
          <b-form-select
            id="card-expire-year"
            :class="['rounded-pill']"
            v-model="formData.year"
            :options="year"
            placeholder="YY"
            size="sm"
            :state="!$v.formData.year.$error && null"
            :disabled="success"
          ></b-form-select>

          <b-form-invalid-feedback>
            Required
          </b-form-invalid-feedback>
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
          size="sm"
          :state="!$v.formData.cvv.$error && null"
          :disabled="success"
        ></b-form-input>

        <b-form-invalid-feedback>
          Required
        </b-form-invalid-feedback>
      </b-form-group>
    </div>

    <b-button pill block type="submit" size="md" :disabled="success">
      Submit
    </b-button>
  </b-form>
</template>

<script>
import { required, numeric } from "vuelidate/lib/validators";

export default {
  name: "checkout-form",
  data() {
    return {
      success: false,
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
      return this.range(1, 12);
    },
    year: function() {
      const year = new Date().getFullYear() - 2000;
      return this.range(year, 99);
    }
  },
  validations: {
    formData: {
      name: { required },
      number: { required, numeric },
      month: { required },
      year: { required },
      cvv: { required, numeric }
    }
  },
  methods: {
    handleSubmit() {
      this.$v.$touch();

      if (this.$v.formData.$error) return;

      this.success = true;
      this.$v.$reset();
    },
    range(start, end) {
      return Array.from(
        { length: end - start + 1 },
        (_, i) => `${i + start < 10 ? "0" : ""}${i + start}`
      );
    }
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
#card-expire-month {
  margin-right: 2.5px;
}
#card-expire-year {
  margin-left: 2.5px;
}
button.btn {
  background-color: $secondary;
}
</style>

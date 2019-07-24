<template>
  <b-form id="checkout-form" @submit.prevent="handleSubmit">
    <b-alert v-if="success" variant="success" show>Payment Procesed!</b-alert>
    <b-form-group
      id="card-name-group"
      label="CARD HOLDER"
      label-for="card-name"
      label-size="sm"
      :invalid-feedback="requiredInvalidFeedback"
      :state="!$v.formData.name.$error && null"
    >
      <b-form-input
        id="card-name"
        :class="['rounded-pill']"
        v-model="formData.name"
        placeholder="Enter the name as shown in the card"
        size="sm"
        :disabled="success"
        :state="!$v.formData.name.$error && null"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="card-number-group"
      label="CARD NUMBER"
      label-for="card-number"
      label-size="sm"
      :invalid-feedback="cardNumberInvalidFeeddback"
      :state="!$v.formData.number.$error && null"
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
    </b-form-group>

    <div id="expire-date-cvv-group">
      <b-form-group
        id="card-expire-group"
        label="EXPIRE DATE"
        label-for="card-expire-input-group"
        label-size="sm"
        :invalid-feedback="expireDateInvalidFeedback"
        :state="!$v.formData.expireDate.$error && null"
      >
        <b-input-group id="card-expire-input-group">
          <b-form-select
            id="card-expire-month"
            :class="['rounded-pill']"
            v-model="formData.expireDate.month"
            :options="months"
            placeholder="MM"
            size="sm"
            :state="!$v.formData.expireDate.month.$error && null"
            :disabled="success"
          ></b-form-select>
          <b-form-select
            id="card-expire-year"
            :class="['rounded-pill']"
            v-model="formData.expireDate.year"
            :options="year"
            placeholder="YY"
            size="sm"
            :state="!$v.formData.expireDate.year.$error && null"
            :disabled="success"
          ></b-form-select>
        </b-input-group>
      </b-form-group>

      <b-form-group
        id="card-cvv-group"
        label="CVV"
        label-for="card-cvv"
        label-size="sm"
        :invalid-feedback="cvvInvalidFeedback"
        :state="!$v.formData.cvv.$error && null"
      >
        <b-form-input
          id="card-cvv"
          :class="['rounded-pill']"
          v-model="formData.cvv"
          size="sm"
          :state="!$v.formData.cvv.$error && null"
          :disabled="success"
        ></b-form-input>
      </b-form-group>
    </div>

    <b-button pill block type="submit" size="md" :disabled="success">
      Purchase
    </b-button>
  </b-form>
</template>

<script>
import { required, numeric } from "vuelidate/lib/validators";
import { cardValid, expireDateValid, cvvValid } from "@/validators";

export default {
  name: "checkout-form",
  data() {
    return {
      success: false,
      formData: {
        name: "",
        number: "",
        expireDate: { month: "", year: "" },
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
    },
    requiredInvalidFeedback() {
      return "Required";
    },
    cardNumberInvalidFeeddback() {
      if (
        !this.$v.formData.number.required ||
        !this.$v.formData.number.numeric ||
        !this.$v.formData.number.cardValid
      ) {
        return "Invalid card number";
      }

      return null;
    },
    expireDateInvalidFeedback() {
      return "Required";
    },
    cvvInvalidFeedback() {
      if (!this.$v.formData.cvv.required) {
        return "Required";
      }
      if (!this.$v.formData.cvv.numeric) {
        return "Numeric";
      }
      if (!this.$v.formData.cvv.cvvValid) {
        return "Invalid";
      }
      return null;
    }
  },
  validations: {
    formData: {
      name: { required },
      number: {
        required,
        numeric,
        cardValid
      },
      expireDate: {
        month: { required },
        year: { required },
        expireDateValid
      },
      cvv: { required, numeric, cvvValid }
    }
  },
  methods: {
    handleSubmit() {
      this.$v.$touch();

      if (this.$v.formData.$error) return;

      this.success = true;
      this.$v.$reset();
    },
    onMonthChange(value) {
      this.expireDate.month = value;
    },
    onYearChange(value) {
      this.expireDate.year = value;
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
.col-form-label-sm {
  margin-bottom: 0.1rem;
}
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

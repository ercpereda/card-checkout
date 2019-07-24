<template>
  <b-form id="checkout-form" @submit.prevent="handleSubmit">
    <b-alert v-if="success" variant="success" show>Payment Procesed!</b-alert>
    <div class="form-container">
      <b-form-group
        id="card-name-group"
        :invalid-feedback="requiredInvalidFeedback"
        :state="!$v.formData.name.$error && null"
        label="CARD HOLDER"
        label-for="card-name"
        label-size="sm"
      >
        <b-form-input
          id="card-name"
          :class="['rounded-pill']"
          :disabled="success"
          :state="!$v.formData.name.$error && null"
          v-model="formData.name"
          placeholder="Enter the name as shown in the card"
          size="sm"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="card-number-group"
        :invalid-feedback="cardNumberInvalidFeeddback"
        :state="!$v.formData.number.$error && null"
        label="CARD NUMBER"
        label-for="card-number"
        label-size="sm"
      >
        <b-form-input
          id="card-number"
          :class="['rounded-pill']"
          :state="!$v.formData.number.$error && null"
          :disabled="success"
          v-model="formData.number"
          placeholder="XXXX XXXX XXXX XXXX"
          size="sm"
        ></b-form-input>
      </b-form-group>

      <div id="expire-date-cvv-group">
        <b-form-group
          id="card-expire-group"
          label="EXPIRE DATE"
          :invalid-feedback="expireDateInvalidFeedback"
          :state="!$v.formData.expireDate.$error && null"
          label-for="card-expire-input-group"
          label-size="sm"
        >
          <b-input-group id="card-expire-input-group">
            <b-form-select
              id="card-expire-month"
              :class="['rounded-pill']"
              :options="months"
              :state="!$v.formData.expireDate.month.$error && null"
              :disabled="success"
              v-model="formData.expireDate.month"
              placeholder="MM"
              size="sm"
            ></b-form-select>
            <b-form-select
              id="card-expire-year"
              :class="['rounded-pill']"
              :options="years"
              :state="!$v.formData.expireDate.year.$error && null"
              :disabled="success"
              v-model="formData.expireDate.year"
              placeholder="YY"
              size="sm"
            ></b-form-select>
          </b-input-group>
        </b-form-group>

        <b-form-group
          id="card-cvv-group"
          :invalid-feedback="cvvInvalidFeedback"
          :state="!$v.formData.cvv.$error && null"
          label="CVV"
          label-for="card-cvv"
          label-size="sm"
        >
          <b-form-input
            id="card-cvv"
            :class="['rounded-pill']"
            :state="!$v.formData.cvv.$error && null"
            :disabled="success"
            v-model="formData.cvv"
            size="sm"
          ></b-form-input>
        </b-form-group>
      </div>
    </div>

    <b-button pill block type="submit" size="md">
      Purchase
    </b-button>
  </b-form>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { cardValid, expireDateValid, cvvValid } from "@/validators";

export default {
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
  validations: {
    formData: {
      name: { required },
      number: {
        required,
        cardValid
      },
      expireDate: {
        month: { required },
        year: { required },
        expireDateValid
      },
      cvv: { required, cvvValid }
    }
  },
  computed: {
    months: function() {
      return this.$_range(1, 12);
    },
    years: function() {
      const year = new Date().getFullYear() - 2000;
      return this.$_range(year, 99);
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
      if (
        !this.$v.formData.expireDate.month.required ||
        !this.$v.formData.expireDate.year.required
      ) {
        return "Required";
      }
      if (!this.$v.formData.expireDate.expireDataValid) {
        return "Invalid date";
      }

      return null;
    },
    cvvInvalidFeedback() {
      if (!this.$v.formData.cvv.required) {
        return "Required";
      }
      if (!this.$v.formData.cvv.cvvValid) {
        return "Invalid";
      }
      return null;
    }
  },
  methods: {
    handleSubmit() {
      this.$v.$touch();

      if (this.$v.formData.$error) return;

      this.success = true;
      this.$v.$reset();
    },
    $_range(start, end) {
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
  margin: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.form-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
};
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
.btn {
  background-color: $secondary;
}
</style>

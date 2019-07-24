import CheckoutForm from "@/components/CheckoutForm.vue";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuelidate from "vuelidate";
import BootstrapVue from "bootstrap-vue";

const localVue = createLocalVue();
localVue.use(Vuelidate);
localVue.use(BootstrapVue);

let wrapper;

beforeEach(() => {
  wrapper = mount(CheckoutForm, { localVue });
});

afterEach(() => {
  wrapper.destroy();
});

describe("CheckoutForm.vue", () => {
  it("Sets the correct default data", () => {
    expect(typeof CheckoutForm.data).toBe("function");
    const defaultData = CheckoutForm.data();
    expect(defaultData.success).toBe(false);
    expect(defaultData.formData.name).toBe("");
    expect(defaultData.formData.number).toBe("");
    expect(defaultData.formData.expireDate.month).toBe("");
    expect(defaultData.formData.expireDate.year).toBe("");
    expect(defaultData.formData.cvv).toBe("");
  });

  it("Should show an error if the name is empty", () => {
    const form = wrapper.find("form");
    const cardName = wrapper.find("#card-name");
    expect(cardName.classes()).not.toContain("is-invalid");

    form.trigger("submit.prevent");

    expect(wrapper.vm.$v.formData.name.$error).toBe(true);
    expect(cardName.classes()).toContain("is-invalid");
  });

  it("Should show an error if the card number is invalid", () => {
    const form = wrapper.find("form");
    const cardNumber = wrapper.find("#card-number");
    expect(cardNumber.classes()).not.toContain("is-invalid");

    cardNumber.setValue("234324");
    form.trigger("submit.prevent");

    expect(wrapper.vm.$v.formData.number.$error).toBe(true);
    expect(cardNumber.classes()).toContain("is-invalid");
  });

  it("Should show an error if the expire date is invalid", () => {
    const form = wrapper.find("form");
    const cardExpireMonth = wrapper.find("#card-expire-month");
    const cardExpireYear = wrapper.find("#card-expire-year");
    const cardExpireGroup = wrapper.find("#card-expire-group");
    expect(cardExpireGroup.classes()).not.toContain("is-invalid");

    cardExpireMonth
      .findAll("option")
      .at(0)
      .setSelected();
    cardExpireYear
      .findAll("option")
      .at(0)
      .setSelected();

    form.trigger("submit.prevent");

    expect(wrapper.vm.$v.formData.expireDate.$error).toBe(true);
    expect(cardExpireGroup.classes()).toContain("is-invalid");
  });

  it("Should show success message if the form is valid", () => {
    const form = wrapper.find("form");
    const cardName = wrapper.find("#card-name");
    const cardNumber = wrapper.find("#card-number");
    const cardExpireMonth = wrapper.find("#card-expire-month");
    const cardExpireYear = wrapper.find("#card-expire-year");
    const cardCvv = wrapper.find("#card-cvv");

    cardName.setValue("Bruce Wane");
    cardNumber.setValue("2720991080614402");
    cardExpireMonth
      .findAll("option")
      .at(11)
      .setSelected();
    cardExpireYear
      .findAll("option")
      .at(1)
      .setSelected();
    cardCvv.setValue("235");

    form.trigger("submit.prevent");

    wrapper.vm.$forceUpdate();
    expect(wrapper.vm.$v.$error).toBe(false);

    const alert = wrapper.find(".alert-success");
    expect(alert.isEmpty()).toBe(false);
  });
});

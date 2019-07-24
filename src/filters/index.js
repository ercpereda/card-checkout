export default {
  filters: {
    money: function(value) {
      if (!value) return "$ --.--";

      try {
        return `$ ${parseFloat(value).toFixed(2)}`;
      } catch (e) {
        return "$ --.--";
      }
    }
  },
  init: function(Vue) {
    Object.keys(this.filters).forEach(filter => {
      Vue.filter(filter, this.filters[filter]);
    });
  }
};

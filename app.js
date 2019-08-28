new Vue({
  el: '#vue-app',
  data: {
    name: 'Janusz',
    job: 'Złodziej'
  },
  methods: {
    greet: function () {
      return 'Eloszka ' + this.name;
    }
  }
});

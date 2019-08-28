new Vue({
  el: '#vue-app',
  data: {
    name: 'Janusz',
    job: 'Złodziej',
    website: 'http://google.pl',
    websiteTag: '<a href="http://google.pl"> GGGGG </a>'
  },
  methods: {
    greet: function () {
      return 'Eloszka ' + this.name;
    }
  }
});

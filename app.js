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

new Vue({
  el: '#vue-app-events',
  data:{
    age: 25,
    x: 0,
    y: 0
  },
  methods:{
    add: function (inc) {
      this.age += inc;
    },
    subtract: function (dec) {
      this.age -= dec;
    },
    updateXY: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function () {
      alert('you clicked me');
    }
  }
})

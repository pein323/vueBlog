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

new Vue({
  el: '#vue-app-keyboard',
  data: {
    name: '',
    age: ''
  },
  methods:{
    logAge: function (event) {
      console.log('Passed age value');
    },
    logName: function (event) {
      console.log('Passed name value');
    }
  }
})

new Vue({
  el: '#vue-app-dynamic-css',
  data: {
    available: false,
    nearby: false
  },
  methods: {},
  computed: {
    compClasses: function () {
      return {
        available: this.available,
        nearby: this.nearby
      };
    }
  }
})

new Vue({
  el: '#vue-app-conditionals',
  data: {
    error: false,
    success: false,
  },
  methods: {

  },
  computed: {

  }
})

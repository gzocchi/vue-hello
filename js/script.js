const app = new Vue({
  el: "#root",
  data: {
    h1Message: "Hello Vue!!!",
    mainImg:
      "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imgArray: [
      "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
    color: "red",
  },
  methods: {
    imgChange: function () {
      this.mainImg =
        this.imgArray[this.randomNumber(0, this.imgArray.length - 1)];
    },
    colorChange: function () {
      this.color == "red" ? (this.color = "green") : (this.color = "red");
    },
    randomNumber: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
});

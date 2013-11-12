var initDonut = function () {
  Morris.Donut({
    element: 'donut-one',
    data: [
      { label: "Coffee", value: 16 },
      { label: "Polish debugging", value: 30 },
      { label: "Divide & Conquer", value: 20 },
      { label: "Luck", value: 18 },
      { label: "Balmer Peek", value: 22 }
    ],
    colors:['#3b3b3b', '#5f5f5f', '#939393', '#bbbbbb', '#dedede',],
    backgroundColor: '#242424',
    labelColor: '#ffffff',
    gridTextFamily: 'sequilight'
  });

}

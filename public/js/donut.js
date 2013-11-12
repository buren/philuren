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
    backgroundColor: '#242424',
    labelColor: '#ffffff'
  });

}

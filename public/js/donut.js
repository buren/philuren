var initDonut = function () {
  Morris.Donut({
    element: 'donut-phifflarn',
    data: [
      { label: "Coffee", value: 12 },
      { label: "Dumbness", value: 50 },
      { label: "Beer", value: 8 },
      { label: "Luck", value: 18 },
      { label: "Balmer Peek", value: 22 }
    ],
    backgroundColor: '#242424',
    labelColor: '#ffffff'
  });

  Morris.Donut({
    element: 'donut-buren',
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

  Morris.Donut({
    element: 'donut-all',
    data: [
      { label: "awesome", value: 100 }
    ],
    backgroundColor: '#242424',
    labelColor: '#ffffff'
  });

}

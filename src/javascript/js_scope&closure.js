function bookHotel(city) {
  var availableHotel = "None";
  for (var i = 0; i < hotels.length; i++) {
    var hotel = hotels[i];
    if (hotel.city === city && hotel.hasRoom) {
      availableHotel = hotel.name;
      break;
    }
  }
  // 여기서 i와 hotel은 여전히 접근 가능하다.
  console.log("Checked " + (i + 1) + " record(s)");
  console.log("Last checked " + hotel.name);

  // Closure => 함수내에 중첩함수 선언
  {
    function placeOrder() {
      var totalAmount = 200;
      console.log("Order placed to " + availableHotel);
    }
  }
  placeOrder();
  // 접근 불가
  //   console.log(totalAmount);
  return availableHotel;
}

var hotels = [
  { name: "Hotel A", hasRoom: false, city: "Sanya" },
  { name: "Hotel B", hasRoom: true, city: "Sanya" },
];
console.log(bookHotel("Sanya"));
// 접근 불가
// console.log(availableHotel);

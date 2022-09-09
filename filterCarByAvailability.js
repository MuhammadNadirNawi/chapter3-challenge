function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  // pengulangan sampai mencapai index terakir dari array cars
  for (let i = 0; i < cars.length; i++) {
    // pengkondisian Property	available di mana valuenya itu sama dengan true
    if (cars[i].available == true) {
      // masukkan data yang yang bernilai true ke array result
      result.push(cars[i]);
    }
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}

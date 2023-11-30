//!fonksiyonlar kendi scope alanlarını oluşturur
//!var ile if blockları içinde yeni bir scope oluşturulmaz
//! let ve const ile block içi scope oluşturulur

var kullanici = "Mert"; //* Global Scope
const isim = "Mehmet";
isim = "Ahmet"; //* const değiştirilemez bu yüzden hata verir
console.log(isim);

function isimYazdir() {
  var kullanici = "Nur"; //*function scope
  console.log(kullanici);
}

if (true) {
  var kullanici = "Ali"; //* if Scope yukarıdaki kullanıcıyı değiştirdi bunu let ve const ile yapsaydık değiştirmezdi
  console.log(kullanici);
}

console.log(kullanici);
isimYazdir();

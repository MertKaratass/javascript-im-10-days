// let sayi1 = 10;
// let sayi2 = 20;
// let toplam = sayi1 + sayi2;
// let sayi3 = 30;
// let sayi4 = 40;
// let toplam2 = sayi3 + sayi4;

// console.log(toplam);
// console.log(toplam2);

//!Fonksiynlar
// function sayıToplami(sayi1, sayi2) {
//   let toplam = sayi1 + sayi2;
//   console.log(toplam);
// }
//*sağa fonksiyonun adı sola paranteze parametreleri yazılır

// sayıToplami(10, 20);
// sayıToplami(20, 30);
//?fonksiyonu çağrıldı parametreler girildi parantez içine yazılan sayılar yukarıdaki sayı1 ve sayi2 ye eşit oldu

//!gelişmiş toplama fonksiyoınu
let toplam = 0;
function sayıToplami(...sayilar) {
  for (let sayi of sayilar) {
    toplam += sayi;
  }
}
//?sayi of sayilar sayilar dizisinin içindeki her bir elemanı sayi değişkenine atar
//*let dışarıda tanımlamanın sebebi fonksiyonun içinde tanımlanırsa her çağrıldığında sıfırlanır

sayıToplami(10, 20, 30, 40, 50, 60, 5, 2, 3, 100);
console.log(toplam);

//!Yaş Hesaplama
function yasHesapla(dogumYili) {
  return new Date().getFullYear() - dogumYili;
} //?new Date().getFullYear() şu anki yılı verir burda let ilede şu şekilde tanımlanabilirdi let yil = new Date().getFullYear(); return yil - dogumYili;

const hesapla = yasHesapla(1990); //*fonksiyonu hesapla değişkenine atadık
console.log(hesapla);


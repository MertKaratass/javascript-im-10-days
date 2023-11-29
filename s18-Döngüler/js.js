let meyve = ["elma", "armut", "muz", "kivi", "çilek"];

for (let i = 0; i < meyve.length; i++) {
  //   console.log(meyve[i]);
}
//* i kaçtan başladığını belirtir. i<meyve.lenght ise meyve arrayının içindeki elemanların sayısından küçük olduğu sürece döngü devam eder. i++ ise i yi 1 arttırır. meyve.lenght yerine 5 yazsaydık da aynı sonucu alırdık.

//!0 dan 100 e kadar olan sayıları yazdırma
for (let i = 0; i <= 100; i++) {
  //   console.log(i);
}

//!Sayı topalama
// let sayılar = [10, 20, 5, 50, 100, 200];
// console.log(
//   sayılar[0] + sayılar[1] + sayılar[2] + sayılar[3] + sayılar[4] + sayılar[5]
// );

// let toplam = 0;
// for (let i = 0; i < sayılar.length; i++) {
//   console.log((toplam = toplam + sayılar[i]));
// }

//! Kısayol index
// let sayılar = [10, 20, 5, 50, 100, 200];
// let toplam = 0;
// for (let i in sayılar) {
//   console.log(toplam += sayılar[i]);
// } //* i sayılar arrayinin indexini belirtir.

//! Direk sayıları alma
// let sayılar = [10, 20, 5, 50, 100, 200];
// let toplam = 0;
// for (let index of sayılar) {
//   console.log((toplam += index));
// } //* index sayıları direk alır.

//!object ile döngü
const user = [
  {
    id: 1,
    ad: "Mehmet",
    soyad: "Kara",
    email: "karaatas@gmail.com",
    yas: 30,
  },
  {
    id: 2,
    ad: "Betül",
    soyad: "Sarı",
    email: "ali@gmail.com",
    yas: 18,
  },
  {
    id: 3,
    ad: "seda",
    soyad: "Aydın",
    email: "dsad@gmail.com",
    yas: 25,
  },
];

for (let i = 0; i < user.length; i++) {
  console.log(user[i].ad);
}//* user[i].ad ise objenin içindeki adları yazdırır.hepsini yazdırmak için user[i] yazmak yeterli.

// for (let key in user) {
//   console.log(key, user[key]);
// } //* key objenin içindeki keyleri belirtir. user[key] ise objenin içindeki keylerin değerlerini belirtir. sadece key yazarsak sadece keyleri yazdırırız. sadece user[key] yazarsak sadece değerleri yazdırırız.

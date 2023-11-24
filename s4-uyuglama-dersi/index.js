/* Öğrenci Bilgiler

1-Mert Karataş
doğum tarihi:2000
notu:100, 90,10

1-Eylül Demir
doğum tarihi:2002
notu:60, 30,50

geçer not:45

PROGRAM ŞARTLARI:
1- öğrencilerin yaşlarını hesaplayın
2-Öğrencilerin ders ortamaların hesaplayın
3- Öğrencilerin dersi geçip geçmediğini hesaplayın
 */

let suankiYil = new Date().getFullYear();
let gecmeNotu = 45;

let ogr1 = "Mert Karataş";
let ogr1DogumYil = 2000;
let ogr1Yas = suankiYil - ogr1DogumYil;
let ogr1DersNot = 100;
let ogr1DersNot2 = 90;
let ogr1DersNot3 = 10;
let ogr1NotOrt = parseInt((ogr1DersNot + ogr1DersNot2 + ogr1DersNot3) / 3);
let ogr1DersDurum = ogr1NotOrt > gecmeNotu;

let ogr2 = "Eylül Demir";
let ogr2DogumYil = 2002;
let ogr2Yas = suankiYil - ogr2DogumYil;
let ogr2DersNot = 60;
let ogr2DersNot2 = 30;
let ogr2DersNot3 = 50;
let ogr2NotOrt = parseInt((ogr2DersNot + ogr2DersNot2 + ogr2DersNot3) / 3);
let ogr2DersDurum = ogr2NotOrt > gecmeNotu;

console.log("1. Öğrenci Geçme Durumu:", ogr1DersDurum);
console.log("2. Öğrenci Geçme Durumu:", ogr2DersDurum);

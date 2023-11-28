let products = ["iphone", "samsung", "huawei"];
let result;
result = products.length; //*eleman sayısı verir

//!Array to string
// result = products.toString(); //*stringe çevirir
// result = products.join(" / "); //*virgül yerine elemanları / bu  işaretle değiştirdi

//!Diziden eleman silme
// result = products.shift(); //*ilk elemanı siler geri döndürür
// result = products.pop(); //*son elemanı siler geri döndürür

//!Diziye eleman ekleme
// result = products.push("xiaomi"); //*sona ekler
// result = products.unshift("casper"); //*başa ekler

//!Dizi birleştirme
let urunler1 = ["asus", "apple"];
let urunler2 = ["dell", "casper"];
let urunler3 = ["acer", "exper"];
// result = urunler1.concat(urunler2, urunler3); //*dizileri birleştirir
// result = urunler1.splice(0, 0, urunler2);//*0. indexten itibaren 0 eleman siler ve urunler2 yi ekler 
result = urunler1.splice(1, 1, "xiaomi");//*1. indexten itibaren 1 eleman siler ve xiaomi yi ekler

console.log(result);
console.log(urunler1);

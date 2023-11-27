let url = "https://www.DOM.com";
let yotube = "DOM";
let result;

//* KARAKTER SAYISI BUL */

result = url.length;
result = yotube.length;
result = yotube.replace(" ", "").length;
console.log(result);

//*YOTUBE DEĞİŞKENİ KAÇ KARAKTERDEN OLUŞUYOR  */
result = yotube.split(" ").length;
result = yotube.split(".").length;
console.log(result);

//* 3 -KANAL ADI BAŞLANGIÇ KONTROL  */
result = yotube.startsWith("DOM");
if (result) {
  console.log("yapılacaklar.");
} else {
  console.log("false döndü");
}

//* 4- Kelime kontrolü  */
if (yotube.indexOf("DOM") > -1) {
  console.log("çalıştı");
} else {
  console.log("çalışmadı");
}
console.log(result);

//* 5- yotube ve url değişkenini birleştir */
yotube = yotube.toLowerCase().replace(" ", "-");
url = url.replace("com", "com/");

const newUrl = url.replace(url, url + yotube);
newUrl = `${url}/${yotube}`;
console.log(newUrl);

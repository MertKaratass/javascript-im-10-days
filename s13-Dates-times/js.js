let tarih = new Date();

let result;

//?Get methods
result = tarih.getDate(); //!gün
result = tarih.getDay(); //!0 = pazar, 6= cumartesi
result = tarih.getFullYear(); //!yıl
result = tarih.getHours(); //!Saat
result = tarih.getTime(); //!milli saniye

//! Tarihi Güncelleme methodları
tarih.getFullYear(2025);
tarih.setMonth(2);
tarih.setDate(2);
result = tarih;
console.log(result);

//! Doğum Tarihi yaş bulma

let dogumTarihi = new Date(1996, 8, 14);
result = tarih.getFullYear() - dogumTarihi.getFullYear();

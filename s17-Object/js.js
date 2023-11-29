let customer = {
  "ad": "Mehmet",
  "soyad": "Kara",
  "şehir": "İstanbul",
  "yas": 30,
  "products": ["Laptop", "Telefon", "Klavye", "Mouse"],
};

let customer2 = {
"ad": "Betül",
  "soyad": "Sarı",
  "şehir": "erzurum",
  "yas": 18,
  "products": {
    "Laptop":"Lenova",
    "price":5000,
},
};

let customer3 = {
  "ad": "seda",
  "soyad": "Aydın",
  "Şehir": "Ankara",
  "yas": 25,
};
let musteriler = [customer, customer2, customer3];

let urunler = [{
    "id": 1,
    "ad": "Huawei",
    "fiyat": 4000,
},
{
    "id": 2,
    "ad": "Samsung",
    "fiyat": 5000,
},
{
    "id": 3,
    "ad": "Apple",
    "fiyat": 6000,
},
{
    "id": 4,
    "ad": "Xiaomi",
    "fiyat": 3000,
},
];

console.log(urunler[2].fiyat);

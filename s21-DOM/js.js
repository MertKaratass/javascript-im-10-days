//!Tekli Seçiciler
// const title = document.querySelector(".title"); //*gördüğü ilk classı seçer
// const title1 = document.querySelector("#title"); //*gördüğü ilk id seçer
// const title2 = document.querySelector("#title2");
// title.style.color = "blue";
// title1.style.color = "blue";
// title2.style.color = "blue";

document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.backgroundColor = "yellow";
document.querySelector("h1").style.width = "250px";
document.querySelector("h1").style.height = "250px";
const title = document.querySelector("h1");
title.innerText = "DOM";
title.innerHTML = "<button>Click</button>";
// const list = document.querySelectorAll("ul");
// document.querySelector("li").style.color = "blue";
// document.querySelector("li:last-child").style.color = "blue";
// document.querySelector("li:nth-child(2)").style.color = "green";
// document.querySelector("li:nth-child(3)").style.color = "green";

//!Çoklu Seçiciler
// const listİtem = document.getElementsByClassName("list-item");
// const listİtem = document.querySelectorAll(".list-item");
// listİtem.style.color = "blue"; //*hata verir
// listİtem[0].style.color = "blue"; //*doğru
// const list1 = document.querySelector(".list1");
// const listİtem = list1.getElementsByTagName("li"); //*tagname ile hepsine ulaşırız

const listİtem =document.querySelectorAll(".list1 li");//*list1 içindeki li leri seçer list2 yazarsak list2 içindeki li leri seçer

// for (let i = 0; i < listİtem.length; i++) {
//   listİtem[i].style.color = "blue";
// }

for (let list of listİtem) { //*burdaki let of işlemi listİtemı list e atar
  list.style.color = "blue";
}

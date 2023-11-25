let yas = parseInt(prompt("yaşınızı girin"));
let mezuniyet = prompt("mezunniyetini girin");

if ((yas >= 18 && mezuniyet == "lise") || mezuniyet == "üniversite") {
  console.log("ehliyet alabilir");
} else if (yas === 17) {
  console.log("sadece 1 yılın var almak için");
} else {
  console.log("yaşınız tutmuyor");
}

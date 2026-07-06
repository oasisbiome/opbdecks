// This running block picks a random background image every time the page loads
var images = [
  "https://images5.alphacoders.com/109/thumb-1920-1092839.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdFFveGe9D9T8dfdR17hoKHrSRCmkLVpoLUSt69NlXBg&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMA5L2b-9B9I7nmvZYaKH_dLj_S9Czm6Gs6nY5vJBPoQ&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YuFejivtTir2CJu-MdlGhSyQwtDlN-kKL8aIuACqtQ&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcDUH4XaCq037vjr2VsfDGz6AjVzgToLhGtHwdgLSacA&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdX5CmfWoBT_Ur20Eedz7kB_RiKnDreeASmZVA8-cjw&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbZ_0qThPYxWw0ptnyoAFrCHzAMGW5ErWFpWV4fYWb7g&s=10"
];

var randomIndex = Math.floor(Math.random() * images.length);
document.body.style.backgroundImage = "url('" + images[randomIndex] + "')";


// These are our basic copy button functions
function copyDeck1() {
  var listText = document.getElementById("myList1").innerText;
  navigator.clipboard.writeText(listText);
  alert("Decklist copied to clipboard.");
}

function copyDeck2() {
  var listText = document.getElementById("myList2").innerText;
  navigator.clipboard.writeText(listText);
  alert("Decklist copied to clipboard.");
}

function copyDeck3() {
  var listText = document.getElementById("myList3").innerText;
  navigator.clipboard.writeText(listText);
  alert("Decklist copied to clipboard.");
}

function copyDeck4() {
  var listText = document.getElementById("myList4").innerText;
  navigator.clipboard.writeText(listText);
  alert("Decklist copied to clipboard.");
}

function copyDeck5() {
  var listText = document.getElementById("myList5").innerText;
  navigator.clipboard.writeText(listText);
  alert("Decklist copied to clipboard.");
}

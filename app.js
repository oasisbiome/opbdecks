var images = [
  "https://i.redd.it/g7bsmlohztva1.png",
  "https://www.chromethemer.com/wallpapers/chromebook-wallpapers/images/960/water-pokemon-chromebook-wallpaper.jpg",
  "https://i.pinimg.com/736x/07/bd/cb/07bdcb605727348d60ac19d4e8215e06.jpg",
  "https://www.chromethemer.com/download/hd-wallpapers/pokemon-3840x2160.jpg",
  "https://pbs.twimg.com/media/GYbQ2oBaAAAwskB.jpg"
];

var randomIndex = Math.floor(Math.random() * images.length);
document.body.style.backgroundImage = "url('" + images[randomIndex] + "')";

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

function copyDeck6() {
  var listText = document.getElementById("myList6").innerText;
  navigator.clipboard.writeText(listText);
  alert("Decklist copied to clipboard.");
}

function copyDeck7() {
  var listText = document.getElementById("myList7").innerText;
  navigator.clipboard.writeText(listText);
  alert("Decklist copied to clipboard.");
}

function copyDeck8() {
  var listText = document.getElementById("myList8").innerText;
  navigator.clipboard.writeText(listText);
  alert("Decklist copied to clipboard.");
}

function copyDeck9() {
  var listText = document.getElementById("myList9").innerText;
  navigator.clipboard.writeText(listText);
  alert("Decklist copied to clipboard.");
}

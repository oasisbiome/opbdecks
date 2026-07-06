var images = [
  "https://i.redd.it/g7bsmlohztva1.png",
  "https://www.chromethemer.com/wallpapers/chromebook-wallpapers/images/960/water-pokemon-chromebook-wallpaper.jpg",
  "https://i.pinimg.com/736x/07/bd/cb/07bdcb605727348d60ac19d4e8215e06.jpg",
  "https://www.chromethemer.com/download/hd-wallpapers/pokemon-3840x2160.jpg",
  "https://images5.alphacoders.com/109/thumb-1920-1092839.jpg",
  "https://pbs.twimg.com/media/GYbQ2oBaAAAwskB.jpg",
  "https://i.pinimg.com/736x/0c/43/6d/0c436df5549f92d21cfcad66387d156e.jpg",
  "https://wallpapercave.com/wp/wp10135847.png"
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

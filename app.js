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

function sortMyDecks() {
  var value = document.getElementById("deckSorter").value;
  var container = document.getElementById("deckContainer");
  var boxes = Array.from(container.getElementsByClassName("deck-box"));

  boxes.sort(function(a, b) {
    if (value === "az") {
      return a.getAttribute("data-name").localeCompare(b.getAttribute("data-name"));
    }
    if (value === "za") {
      return b.getAttribute("data-name").localeCompare(a.getAttribute("data-name"));
    }
    if (value === "price-low") {
      return parseFloat(a.getAttribute("data-price")) - parseFloat(b.getAttribute("data-price"));
    }
    if (value === "price-high") {
      return parseFloat(b.getAttribute("data-price")) - parseFloat(a.getAttribute("data-price"));
    }
    if (value === "newest") {
      return parseInt(a.getAttribute("data-age")) - parseInt(b.getAttribute("data-age"));
    }
    if (value === "oldest") {
      return parseInt(b.getAttribute("data-age")) - parseInt(a.getAttribute("data-age"));
    }
    return 0;
  });

  for (var i = 0; i < boxes.length; i++) {
    container.appendChild(boxes[i]);
  }
}

function searchMyDecks() {
  var input = document.getElementById("deckSearch").value.toLowerCase();
  var container = document.getElementById("deckContainer");
  var boxes = container.getElementsByClassName("deck-box");

  for (var i = 0; i < boxes.length; i++) {
    var name = boxes[i].getAttribute("data-name").toLowerCase();
    var type = boxes[i].getAttribute("data-type").toLowerCase();
    
    if (name.indexOf(input) > -1 || type.indexOf(input) > -1) {
      boxes[i].style.display = "";
    } else {
      boxes[i].style.display = "none";
    }
  }
}

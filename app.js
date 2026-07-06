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

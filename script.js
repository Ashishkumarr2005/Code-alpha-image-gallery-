function filterImages(category) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(function(card) {
    if (category === "all") {
      card.style.display = "block";
    } 
    else if (card.classList.contains(category)) {
      card.style.display = "block";
    } 
    else {
      card.style.display = "none";
    }
  });
}

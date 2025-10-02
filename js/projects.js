const card = document.querySelectorAll(".card");
const cardInner = document.querySelectorAll(".card__inner");

card.forEach((c, i) => {
  c.addEventListener("mouseenter", function (e) {
    cardInner[i].classList.toggle('is-flipped');
  });
  c.addEventListener("mouseleave", function (e) {
    cardInner[i].classList.toggle('is-flipped');
  });
});

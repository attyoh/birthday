function changeImage(event) {
    const clickedBox = event.target;
    clickedBox.src = "img/openTreasureBox.jpg";
    clickedBox.alt = "closeBox";
}

const imageBoxes = document.querySelectorAll(".image-box");
imageBoxes.forEach(function (box) {
box.addEventListener("click", changeImage);
});
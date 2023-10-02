function changeImageAndRedirect(event) {
    const clickedBox = event.target;
  
    // 画像の透明度を変更して徐々に切り替えるエフェクト
    clickedBox.style.opacity = 0;
  
    setTimeout(function () {
      clickedBox.src = "img/treasureBox.jpg";
      clickedBox.alt = "treasureBox";
  
      // 透明度を元に戻す
      clickedBox.style.opacity = 1;
    }, 2000);
  
    setTimeout(function () {
      const birthdayUrl = "birthday.html";
      window.location.href = birthdayUrl;
    }, 3500);
  }
  
  function changeImage(event) {
    const clickedBox = event.target;
    clickedBox.src = "img/openTreasureBox.jpg";
    clickedBox.alt = "closeBox";
  }
  
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  const boxNumber = "box" + randomNumber;
  const randomBox = document.getElementById(boxNumber);
  randomBox.addEventListener("click", changeImageAndRedirect);
  
  const imageBoxes = document.querySelectorAll(".image-box");
  imageBoxes.forEach(function (box) {
    if (box != randomBox) {
      box.addEventListener("click", changeImage);
    }
  });
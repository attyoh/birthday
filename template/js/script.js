function playAudio() {
    var clapAudio = document.getElementById("clap");
    clapAudio.play();
}

// 紙ふぶきアニメーション
const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#FFFFFF"];

// 正方形のSVGを生成する関数
function createSquareSVG(size) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><rect width="${size}" height="${size}" fill="currentColor" /></svg>`;
}

// 長方形のSVGを生成する関数
function createRectangleSVG(width, height) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" fill="currentColor" /></svg>`;
}

// 星型のSVGを生成する関数
function createStarSVG() {
    // 星型のSVGパスを生成
    return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2l1.45 5.32H20l-4.02 3.09 1.47 5.36L12 14.24l-4.45 3.54 1.47-5.36L4 7.32h6.55z"/></svg>';
}

// ハート型のSVGを生成する関数
function createHeartSVG() {
    // ハート型のSVGパスを生成
    return '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 16.18 2 13.19 2 9.5 2 7.02 3.98 5 6.5 5c1.74 0 3.41.81 4.5 2.09C11.09 5.81 12.76 5 14.5 5 17.02 5 19 7.02 19 9.5c0 3.69-3.4 6.68-8.55 10.54L12 21.35z"/></svg>';
}

function createFlake() {
    const flake = document.createElement("div");
    flake.classList.add("flake");
    document.body.appendChild(flake);

    const startLeft = Math.random() * window.innerWidth;
    const duration = Math.random() * 10 + 2;
    const color = getRandomColor();
    let shape;

    const randomValue = Math.random();
    const width = Math.floor(Math.random() * 30) + 15; // 幅をランダムに設定 (20から60の間)
    const height = Math.floor(Math.random() * 20) + 5; // 高さをランダムに設定 (10から40の間)

    if (randomValue < 0.40) {
        // 正方形の紙ふぶきを生成
        shape = createSquareSVG(height);
    } else if (randomValue < 0.80) {
        // 長方形の紙ふぶきを生成
        shape = createRectangleSVG(width, height);
    } else if (randomValue < 0.95) {
        // 星型の紙ふぶきを生成
        shape = createStarSVG();
    } else {
        // ハート型の紙ふぶきを生成
        shape = createHeartSVG();
    }

    flake.innerHTML = shape;
    flake.style.left = `${startLeft}px`;
    flake.style.animation = `fall ${duration}s linear`;
    flake.style.color = color;

    flake.addEventListener("animationiteration", () => {
        flake.style.left = `${Math.random() * window.innerWidth}px`;
        flake.style.color = getRandomColor();
    });

    setTimeout(() => {
        flake.remove();
    }, duration * 1000);
}

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function adjustFlakesPosition() {
    const flakes = document.querySelectorAll(".flake");
    flakes.forEach((flake) => {
        const startLeft = Math.random() * window.innerWidth;
        flake.style.left = `${startLeft}px`;
    });
}

window.addEventListener("resize", adjustFlakesPosition);

setInterval(createFlake, 100);

// 拍手アニメーション
class RotatingImage {
    constructor(imageId1, imageId2) {
        this.image_right = document.getElementById(imageId1);
        this.image_left = document.getElementById(imageId2);
        this.rotation_right = 0;
        this.rotation_left = 0;
        this.rotateRight1 = true;
        this.rotateRight2 = true;
    }

    rotate() {
        if (this.rotateRight1) {
            this.rotation_right -= 20;
        } else {
            this.rotation_right += 20;
        }

        this.image_right.style.transform = `rotate(${this.rotation_right}deg)`;

        if (this.rotateRight2) {
            this.rotation_left += 20;
        } else {
            this.rotation_left -= 20;
        }

        this.image_left.style.transform = `rotate(${this.rotation_left}deg)`;

        // 方向を切り替える
        this.rotateRight1 = !this.rotateRight1;
        this.rotateRight2 = !this.rotateRight2;
    }
}

const rotatingImage_center = new RotatingImage('img_center_left', 'img_center_right');
const rotatingImage_right = new RotatingImage('img_right_left', 'img_right_right');
const rotatingImage_left = new RotatingImage('img_left_left', 'img_left_right');

setInterval(() => {
    rotatingImage_center.rotate();
    rotatingImage_right.rotate();
    rotatingImage_left.rotate();
    playAudio();
}, 100); // 0.1秒ごとに回転させる場合

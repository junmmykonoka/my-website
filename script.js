let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    // すべての画像を非表示にする
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // 次の画像へ進む
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // 現在の画像を表示する
    slides[slideIndex - 1].style.display = "block";

    // 2秒ごとに次の画像へ切り替え
    setTimeout(showSlides, 2000); // 2000ミリ秒 = 2秒
}
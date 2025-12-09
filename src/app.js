const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('navList')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

const img1 = document.getElementById("myImage1");
const img2 = document.getElementById("myImage2");

let showingFirst = true;

function crossFade() {
    if (showingFirst) {
        img1.style.opacity = 1; // fade img1 in
        img2.style.opacity = 0; // ensure img2 hidden

        // After 6s, fade img1 out
        setTimeout(() => {
            img1.style.opacity = 0;
        }, 6000);

    } else {
        img2.style.opacity = 1; // fade img2 in
        img1.style.opacity = 0; // ensure img1 hidden

        // After 6s, fade img2 out
        setTimeout(() => {
            img2.style.opacity = 0;
        }, 6000);
    }

    // Switch image after full 9-second cycle
    showingFirst = !showingFirst;
    setTimeout(crossFade, 9000);
}

crossFade(); // start loop

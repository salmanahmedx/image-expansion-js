const images = document.querySelectorAll(".img")

let previousImg = null;

images.forEach(img => {
    img.addEventListener("click", (e) => {
        if (previousImg !== null) {
            previousImg.classList.toggle("active")
        }
        e.target.classList.toggle("active")
        previousImg = e.target;
    })
})
let addBtns = document.querySelectorAll('.save');
let listan = document.getElementById("list");

function toggleImage(event) {
    let btn = event.target;
    let imgSrc = btn.getAttribute('data-img'); 

    if (btn.classList.contains('saved')) {
        // Unsave logic
        btn.classList.remove('saved');
        btn.textContent = 'Save'; // Update button text
        let images = listan.querySelectorAll('li img');
        images.forEach(function(img) {
            if (img.src === imgSrc || img.src.endsWith(imgSrc)) { // Match src correctly
                img.parentElement.remove(); // Remove the <li> containing the image
            }
        });
    } else {
        // Save logic
        btn.classList.add('saved');
        btn.textContent = 'Unsave'; // Update button text

        if (imgSrc) {
            let newImg = document.createElement('img');
            newImg.src = imgSrc;
            newImg.alt = "Bild";

            let newLi = document.createElement('li');
            newLi.appendChild(newImg);
            listan.appendChild(newLi);
        }
    }
}

addBtns.forEach(function(btn) {
    btn.addEventListener("click", toggleImage);
});
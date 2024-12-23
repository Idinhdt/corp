document.addEventListener("DOMContentLoaded", function () {
    let listan = document.getElementById("list");

    // Load saved images from localStorage when the page is loaded
    loadSavedImages();

    // Use event delegation to handle button clicks (even if buttons are dynamically added)
    document.body.addEventListener("click", function (event) {
        if (event.target && event.target.classList.contains('save')) {
            toggleImage(event);
        }
    });

    function toggleImage(event) {
        let btn = event.target;
        let imgSrc = btn.getAttribute('data-img'); // Image URL from button
        console.log('Button clicked! Image source:', imgSrc);

        // Load saved images from localStorage
        let savedImages = JSON.parse(localStorage.getItem('savedImages')) || [];
        console.log('Currently saved images:', savedImages);

        if (savedImages.includes(imgSrc)) {
            // Image is already saved, so remove it
            btn.textContent = 'Save';
            savedImages = savedImages.filter(image => image !== imgSrc); // Remove from savedImages array
            console.log('Removing image from saved images:', imgSrc);
            removeImageFromList(imgSrc);
        } else {
            // Image is not saved, so save it
            btn.textContent = 'Unsave';
            savedImages.push(imgSrc); // Add to savedImages array
            console.log('Saving image:', imgSrc);
            addImageToList(imgSrc);
        }

        // Save the updated list of images to localStorage
        console.log('Updated saved images:', savedImages);
        localStorage.setItem('savedImages', JSON.stringify(savedImages));
    }

    function addImageToList(imgSrc) {
        // Normalize the image URL
        let normalizedSrc = normalizeUrl(imgSrc);

        // Avoid duplication by checking if the image is already in the list
        let imageExists = Array.from(listan.querySelectorAll('img')).some(img => normalizeUrl(img.src) === normalizedSrc);
        console.log('Image exists in the list:', imageExists);

        if (!imageExists) {
            let newImg = document.createElement('img');
            newImg.src = imgSrc;
            newImg.alt = "Saved Image";

            let newLi = document.createElement('li');
            newLi.appendChild(newImg);
            listan.appendChild(newLi);
        }
    }

    function removeImageFromList(imgSrc) {
        // Normalize the image URL
        let normalizedSrc = normalizeUrl(imgSrc);

        // Find and remove the image from the list
        let images = listan.querySelectorAll('li img');
        images.forEach(function (img) {
            if (normalizeUrl(img.src) === normalizedSrc) {
                img.parentElement.remove(); // Remove the <li> element containing the image
            }
        });
    }

    function normalizeUrl(url) {
        // This function can be adjusted based on how you want to handle the URL comparison
        // For now, let's assume you want to strip the base URL (if necessary) to make comparisons simpler
        let a = document.createElement('a');
        a.href = url; // Create a temporary link element and set the href
        return a.pathname; // Return just the relative path (ignores domain)
    }

    function loadSavedImages() {
        // Load the saved image URLs from localStorage
        let savedImages = JSON.parse(localStorage.getItem('savedImages')) || [];
        console.log('Loading saved images from localStorage:', savedImages);

        // Add saved images to the list
        savedImages.forEach(imgSrc => {
            addImageToList(imgSrc);
        });

        // Update the button states based on saved images
        let addBtns = document.querySelectorAll('.save');
        addBtns.forEach(function (btn) {
            let imgSrc = btn.getAttribute('data-img');
            console.log('Checking button state for image:', imgSrc);
            if (savedImages.includes(imgSrc)) {
                btn.textContent = 'Unsave'; // Image is saved, so button says "Unsave"
            } else {
                btn.textContent = 'Save';  // Image is not saved, so button says "Save"
            }
        });
    }
});
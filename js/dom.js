let addBtns = document.querySelectorAll('.save');
let inputz = document.getElementsByClassName("listInput")
let listan = document.getElementById("list")

function addImageToList(event) {
    let imgSrc = event.target.getAttribute('data-img'); 
    if (imgSrc) {
      let newImg = document.createElement('img');  
      newImg.src = imgSrc;  
      newImg.alt = "Bild";  
  
   
      let newLi = document.createElement('li');
      newLi.appendChild(newImg); 
      listan.appendChild(newLi);  
    }
  }

addBtns.forEach(function(btn) {
    btn.addEventListener("click", addImageToList);
  });
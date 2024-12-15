var openButtons = document.querySelectorAll('.mini');

openButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var modalId = button.getAttribute('data-modal');
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
  });
});

var closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(function(closeButton) {
  closeButton.addEventListener('click', function() {
    var modal = closeButton.closest('.modal');
    modal.style.display = "none";
  });
});

window.addEventListener('click', function(event) {
  var modals = document.querySelectorAll('.modal');
  modals.forEach(function(modal) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

//--------------------------------------------------//

const lists = document.getElementById("slist");
const close = document.getElementById("x");

  function sparade() {
    lists.classList.toggle("show");
  }

  function closed() {
    lists.classList.remove("show");
  }
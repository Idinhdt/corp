
  var modal = document.getElementById("d1");
  var img = document.getElementById("dm1");
  var span = document.getElementsByClassName("close")[0];

  
  img.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };


  function sparade() {
    var lists = document.getElementById("slist");
    lists.classList.toggle("show");
  }
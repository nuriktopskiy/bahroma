var modalOverlay = document.getElementById("modal-overlay");
var modal = document.getElementById("modal");

  function openModal(){
    modalOverlay.classList.add("active");
    modal.classList.add("active");
  };


  function closeModal(){
    modalOverlay.classList.remove("active");
    modal.classList.remove("active");
  };
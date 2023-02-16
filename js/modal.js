(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-modal-open]"),
      closeMenuBtn: document.querySelector("[data-modal-close]"),
      menu: document.querySelector("[data-modal]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
    }
  })();
(() => {
    const modalRefs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    modalRefs.openModalBtn.addEventListener("click", toggleModal);
    modalRefs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      modalRefs.modal.classList.toggle("is-hidden");
    }

    // mobile menu
    const menuRefs = {
      openMenuBtn: document.querySelector("[data-menu-open]"),
      closeMenuBtn: document.querySelector("[data-menu-close]"),
      menu: document.querySelector("[data-menu]"),
    };

    menuRefs.openMenuBtn.addEventListener("click", toggleMenu);
    menuRefs.closeMenuBtn.addEventListener("click", toggleMenu);

    function toggleMenu() {
      menuRefs.menu.classList.toggle("is-active");
    }
  })();
  


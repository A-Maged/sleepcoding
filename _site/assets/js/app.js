'use strict';

/* Modal */
(function () {

    var pagesHasModal = ['/'];
    var page = window.location.pathname;
    if (!pagesHasModal.includes(page)) {
        return;
    }

    var body = document.getElementsByTagName('body')[0];
    var openModalBtns = document.getElementsByClassName('lightbox-icon');
    var closeModalBtn = document.getElementsByClassName('close-modal')[0];
    var modal = document.getElementsByClassName('modal-wrapper')[0];

    // register open-buttons event
    for (var i = 0; i < openModalBtns.length; i++) {
        openModalBtns[i].addEventListener('click', openModal);
    }

    closeModalBtn.addEventListener('click', closeModal);

    window.addEventListener('click', function (e) {
        if (e.target == modal) {
            closeModal();
        }
    });

    function openModal(e) {
        modal.style.display = 'block';
        body.style.overflow = 'hidden';

        var imageSrc = e.target.parentElement.parentElement.dataset.src;
        document.querySelector('.modal-body img').src = imageSrc;
    }

    function closeModal() {
        modal.style.display = 'none';
        body.style.overflow = 'auto';
    }
})();

/* toggle menu */
(function () {
    var toggleMenu = document.querySelector('.toggle-menu');
    var menu = document.querySelector('nav');

    Array.from(toggleMenu.children).forEach(function (item) {
        item.addEventListener('click', function () {
            menu.classList.toggle("show-menu");
        });
    });

    // window.addEventListener('click', function(e){
    //     if( e.target != toggleMenu && e.target.parentElement != toggleMenu ){
    //         menu.classList.remove("show-menu");
    //     }
    // });
})();
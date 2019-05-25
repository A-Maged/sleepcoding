'use strict';

/* toggle menu */
(function() {
	var toggleMenu = document.querySelector('.toggle-menu');
	var menu = document.querySelector('nav');

	Array.from(toggleMenu.children).forEach(function(item) {
		item.addEventListener('click', function() {
			menu.classList.toggle('show-menu');
		});
	});

	// window.addEventListener('click', function(e){
	//     if( e.target != toggleMenu && e.target.parentElement != toggleMenu ){
	//         menu.classList.remove("show-menu");
	//     }
	// });
})();

// (function MODAL() {
// 	var btns = document.querySelectorAll('a[data-hook="show-hire-modal"]');
// 	var modal = document.querySelector('div[data-hook="modal"]');
// 	var modalContent = modal.querySelector('div[data-hook="modal-content"]');
// 	var closeBtn = modal.querySelector('i[data-hook="modal-close"]');

// 	// register events
// 	btns.forEach(function(btn) {
// 		btn.addEventListener('click', openModal);
// 	});
// 	// register events
// 	closeBtn.addEventListener('click', closeModal);

// 	// register events
// 	modal.addEventListener('click', function(e) {
// 		if (e.target == modal) {
// 			closeModal();
// 		}
// 	});

// 	function openModal(e) {
// 		e.preventDefault();
// 		modal.classList.add('show-modal');
// 	}

// 	function closeModal(e) {
// 		e.preventDefault();
// 		modal.classList.remove('show-modal');
// 	}
// })();

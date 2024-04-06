document.addEventListener('DOMContentLoaded', function () {
    const fontSizeControls = document.querySelectorAll('.font-size');

    fontSizeControls.forEach(function (control) {
        control.addEventListener('click', function (event) {
            event.preventDefault();

            const newSize = this.getAttribute('data-size');

            fontSizeControls.forEach(function (control) {
                control.classList.remove('font-size_active');
            });

            this.classList.add('font-size_active');

            const bookContainer = document.getElementById('book');
            bookContainer.classList.remove('book_fs-small', 'book_fs-big');

            if (newSize === 'small') {
                bookContainer.classList.add('book_fs-small');
            } else if (newSize === 'big') {
                bookContainer.classList.add('book_fs-big');
            }
        });
    });
});
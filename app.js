const searchInput = document.getElementById('searchInput');
const filterRatingButton = document.getElementById('filterRatingButton');
const movieCards = document.querySelectorAll('.card');

searchInput.addEventListener('input', function () {
    const searchQuery = searchInput.value.toLowerCase();

    movieCards.forEach(card => {
        const movieName = card.getAttribute('data-name').toLowerCase();

        if (movieName.includes(searchQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

filterRatingButton.addEventListener('click', function () {
    movieCards.forEach(card => {
        const movieRating = parseFloat(card.getAttribute('data-rating'));

        if (movieRating >= 8.0) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

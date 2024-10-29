const searchInput = document.getElementById('searchInput');
const movieCards = document.querySelectorAll('.card');

searchInput.addEventListener('input', function () {
    const searchQuery = searchInput.value.toLowerCase();

    movieCards.forEach(card => {
        const movieName = card.getAttribute('data-name').toLowerCase();

        // Show card if it matches the search query, otherwise hide it
        if (movieName.includes(searchQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
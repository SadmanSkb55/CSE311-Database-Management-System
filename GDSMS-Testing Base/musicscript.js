// Select all category buttons
const categoryButtons = document.querySelectorAll('.category-btn');
const musicCards = document.querySelectorAll('.music-card');

// Add event listener to each category button
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        musicCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

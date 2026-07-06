document.addEventListener('DOMContentLoaded', () => {
  // Clipboard Copy functionality
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.deck-card');
      const listText = card.querySelector('.deck-list-raw').innerText.trim();

      navigator.clipboard.writeText(listText).then(() => {
        const originalText = button.innerText;
        button.innerText = 'Copied to Clipboard!';
        button.style.backgroundColor = '#FFCB05';
        button.style.color = '#000';

        setTimeout(() => {
          button.innerText = originalText;
          button.style.backgroundColor = 'transparent';
          button.style.color = '#FFCB05';
        }, 2000);
      });
    });
  });

  // Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const deckCards = document.querySelectorAll('.deck-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      deckCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-type') === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

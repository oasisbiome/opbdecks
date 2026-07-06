document.addEventListener('DOMContentLoaded', () => {
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.deck-card');
      const rawText = card.querySelector('.deck-list-raw').innerText.trim();
      const cleanList = rawText.replace(/\s*—\s*\$\d+(\.\d{2})?/g, '');

      navigator.clipboard.writeText(cleanList).then(() => {
        const originalText = button.innerText;
        button.innerText = 'Copied clean list!';
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

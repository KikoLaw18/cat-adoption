document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const imageUrl = urlParams.get('img');
    const id = urlParams.get('id');
  
    if (imageUrl) {
      document.getElementById('catImage').src = imageUrl;
      document.getElementById('catImage').alt = `Cat ${id}`;
      document.getElementById('catTitle').textContent = `Cat ID: ${id}`;
      document.getElementById('catInfo').textContent = 'This is a cute cat. 🐱';
    }
  
    // Save to favourites
    document.getElementById('saveButton').addEventListener('click', () => {
      let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
      favourites.push({ id, imageUrl });
      localStorage.setItem('favourites', JSON.stringify(favourites));
      alert('Added to favourites! ❤️');
    });
  });
  
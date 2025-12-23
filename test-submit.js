// Test script to submit a game
fetch('http://localhost:3000/api/games/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Test Game',
    description: 'A test game for our game store',
    download_link: 'https://example.com/download',
    image_url: 'https://via.placeholder.com/300x200'
  })
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
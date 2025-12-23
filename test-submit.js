// Test script to submit a game with download link
fetch('http://localhost:3000/api/games/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Test Game With Download Link',
    description: 'A test game with download link to check database storage',
    download_link: 'https://example.com/test-download',
    image_url: 'https://via.placeholder.com/300x200'
  })
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
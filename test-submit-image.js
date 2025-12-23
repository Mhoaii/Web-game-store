// Test script to submit game with large data URL
const testSubmit = async () => {
  // Create a large data URL (simulate 1MB image)
  const largeDataUrl = 'data:image/png;base64,' + 'A'.repeat(1024 * 1024 * 1.3); // approx 1.3MB

  const response = await fetch('http://localhost:3000/api/games/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Test Game with Image',
      description: 'Test description',
      banner_url: largeDataUrl,
      avatar_url: largeDataUrl
    }),
  });

  console.log('Response status:', response.status);
  const data = await response.json();
  console.log('Response data:', data);
};

testSubmit();
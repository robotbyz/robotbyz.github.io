window.onload = function() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const viberLink = data.viberLink; // Assuming your JSON structure has a key named 'viberLink' with the Viber link
      window.location.href = viberLink;
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

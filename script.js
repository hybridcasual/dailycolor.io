// Array of colors with their names, hex values, and descriptions
const colors = [
    {
      name: 'Red',
      hex: '#FF0000',
      description: 'Red is a warm color often associated with passion, love, and energy.'
    },
    {
      name: 'Green',
      hex: '#00FF00',
      description: 'Green symbolizes growth, nature, and harmony. It is often associated with freshness and tranquility.'
    },
    {
      name: 'Blue',
      hex: '#0000FF',
      description: 'Blue represents calmness, stability, and trust. It is often associated with the sky and the ocean.'
    },
    // Add more colors as needed
  ];
  
  // Get thecurrent date
  const currentDate = new Date();
  
  // Get the index of the color based on the current date
  const colorIndex = currentDate.getDate() % colors.length;
  
  // Get the color information based on the index
  const color = colors[colorIndex];
  
  // Update the HTML elements with the color information
  document.getElementById('colorName').textContent = color.name;
  document.getElementById('colorCube').style.backgroundColor = color.hex;
  document.getElementById('colorDescription').textContent = color.description;
  document.getElementById('homeButton').style.color = color.hex;
  
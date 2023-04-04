// Get the form and result elements
const form = document.getElementById('converter-form');
const resultDiv = document.getElementById('result');

// Add event listener to the form submit button
form.addEventListener('submit', function(event) {
  // Prevent default form submission
  event.preventDefault();
  
  // Get the Fahrenheit value from the form
  const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
  
  // Calculate the Celsius value
  const celsius = ((fahrenheit - 32) * 5/9).toFixed(1);
  
  // Display the result
  resultDiv.innerHTML = `${fahrenheit}&deg;F is equal to ${celsius}&deg;C.`;
});

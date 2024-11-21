document.getElementById('price-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const bedrooms = parseInt(document.getElementById('bedrooms').value);
    const bathrooms = parseInt(document.getElementById('bathrooms').value);
    const balcony = parseInt(document.getElementById('balcony').value || 0);
    const windows = parseInt(document.getElementById('windows').value);
    const area = parseInt(document.getElementById('area').value);
    const city = document.getElementById('city').value;
    const parking = document.getElementById('parking').value;

    // Simple price prediction logic
    const basePrice = 50000; // Base price
    const pricePerBedroom = 20000;
    const pricePerBathroom = 15000;
    const pricePerBalcony = 5000;
    const pricePerWindow = 2000;
    const pricePerSquareFoot = 100;

    // Calculate predicted price
    const predictedPrice = basePrice + 
        (bedrooms * pricePerBedroom) +
        (bathrooms * pricePerBathroom) +
        (balcony * pricePerBalcony) +
        (windows * pricePerWindow) +
        (area * pricePerSquareFoot);

    // Add a discount for parking
    const parkingDiscount = (parking === 'yes') ? -5000 : 0;

    const finalPrice = predictedPrice + parkingDiscount;

    // Display result
    document.getElementById('predicted-price').innerText = finalPrice.toFixed(2);
    document.getElementById('result').classList.remove('hidden');
  
});


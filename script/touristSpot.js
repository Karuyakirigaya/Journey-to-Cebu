// Get the URL parameters to identify the tourist spot
const urlParams = new URLSearchParams(window.location.search);
const spotId = urlParams.get('id');

// Find the tourist spot data based on the spotId
const touristSpot = touristSpots.find(spot => spot.id == spotId);

// Populate the page with the spot's data
if (touristSpot) {
    document.getElementById('spot-name').textContent = touristSpot.name;
    document.getElementById('spot-description').textContent = touristSpot.description;
    document.getElementById('spot-location').textContent = touristSpot.location;

    // Opening hours
    const openingHoursList = document.getElementById('opening-hours');
    touristSpot.openingHours.forEach(hours => {
        const li = document.createElement('li');
        li.textContent = `${hours.day}: ${hours.time}`;
        openingHoursList.appendChild(li);
    });

    // Entry fee
    document.getElementById('entry-fee').textContent = touristSpot.entryFee;

    // Contact info
    document.getElementById('contact-info').textContent =
        `Phone: ${touristSpot.contact.phone}, Email: ${touristSpot.contact.email}`;
    // Assuming this code is part of your tourist spot population logic
    const images = touristSpot.images; // Get the array of images
    const imageGrid = document.getElementById('image-grid'); // Get the image grid container

    // Clear any previous images (optional)
    imageGrid.innerHTML = ''; // Clear previous images if needed

    if (images && images.length > 0) {
        images.forEach(imageSrc => {
            const imgElement = document.createElement('img'); // Create an img element
            imgElement.src = imageSrc; // Set the image source
            imgElement.alt = `Image of ${touristSpot.name}`; // Set alt text
            imageGrid.appendChild(imgElement); // Append the img element to the image grid
        });
    }



    // Recommendations
    // Assume touristSpot is defined and includes recommendations
    const recommendationsList = document.getElementById('recommended-list');

    touristSpot.recommendations.forEach(recId => {
        const recommendedSpot = touristSpots.find(spot => spot.id === recId);

        if (recommendedSpot) {
            const recommendationDiv = document.createElement('div');
            recommendationDiv.className = 'recommendation-item';

            recommendationDiv.innerHTML = `
            <img src="${recommendedSpot.image}" alt="${recommendedSpot.name}" class="recommendation-image">
            <h4>${recommendedSpot.name}</h4>
            <button onclick="location.href='tourist-spot.html?id=${recommendedSpot.id}'">Visit</button>
        `;

            recommendationsList.appendChild(recommendationDiv);
        }
    });



    // Initialize the map
    initMap(touristSpot.latitude, touristSpot.longitude); // Pass latitude and longitude to initMap
}

// Map initialization function
function initMap() {
    const urlParams = new URLSearchParams(window.location.search);
    const spotId = urlParams.get('id');

    // Find the tourist spot data based on the spotId
    const touristSpot = touristSpots.find(spot => spot.id == spotId);

    if (touristSpot) {
        const lat = touristSpot.latitude; // Use the latitude from your data
        const lng = touristSpot.longitude; // Use the longitude from your data

        // Create a new map centered at the specified coordinates
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: { lat: lat, lng: lng }, // Center the map
        });

        // Add a marker at the specified coordinates
        const marker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: map,
            title: touristSpot.name // Marker title
        });
    } else {
        console.error('Tourist spot not found!');
    }
}


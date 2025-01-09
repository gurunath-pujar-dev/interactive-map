// interactive_map.js

// Initialize the map and set its view
const map = L.map('map').setView([40.7128, -74.0060], 13); // Default: New York City

// Add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
}).addTo(map);

// List of points of interest
const locations = [
    {
        name: "Statue of Liberty",
        lat: 40.6892,
        lng: -74.0445,
        description: "An iconic symbol of freedom in New York Harbor.",
    },
    {
        name: "Central Park",
        lat: 40.7851,
        lng: -73.9683,
        description: "A large public park in the heart of Manhattan.",
    },
    {
        name: "Times Square",
        lat: 40.7580,
        lng: -73.9855,
        description: "The bustling commercial and entertainment hub.",
    },
    {
        name: "Empire State Building",
        lat: 40.7488,
        lng: -73.9857,
        description: "A famous skyscraper in New York City.",
    },
    {
        name: "Brooklyn Bridge",
        lat: 40.7061,
        lng: -73.9969,
        description: "A historic suspension bridge connecting Manhattan and Brooklyn.",
    },
];

// Add markers to the map
locations.forEach(location => {
    const marker = L.marker([location.lat, location.lng]).addTo(map);
    marker.bindPopup(`<b>${location.name}</b><br>${location.description}`);
});

// Search functionality
document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    const location = locations.find(loc => loc.name.toLowerCase().includes(query));

    if (location) {
        map.setView([location.lat, location.lng], 15); // Center map on the location
        L.popup()
            .setLatLng([location.lat, location.lng])
            .setContent(`<b>${location.name}</b><br>${location.description}`)
            .openOn(map);
    } else {
        alert('Location not found!');
    }
});

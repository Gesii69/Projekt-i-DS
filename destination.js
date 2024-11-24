const destinationSuggestions = {
    adventure: ["Machu Picchu, Peru", "Mount Everest, Nepal", "Grand Canyon, USA"],
    luxury: ["Maldives", "Dubai, UAE", "Monaco"],
    culture: ["Kyoto, Japan", "Rome, Italy", "Istanbul, Turkey"],
    beach: ["Bali, Indonesia", "Maui, Hawaii", "Santorini, Greece"],
};

// Form submission event listener
document.getElementById('suggestion-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const travelStyle = document.getElementById('travel-style').value;
    const suggestions = destinationSuggestions[travelStyle];

    // Display suggestions
    const suggestionResult = document.getElementById('suggestion-result');
    suggestionResult.innerHTML = `
        <h3>Recommended Destinations for ${travelStyle} Travel:</h3>
        <ul>
            ${suggestions.map(destination => `<li>${destination}</li>`).join('')}
        </ul>
    `;
    suggestionResult.style.display = 'block';
});
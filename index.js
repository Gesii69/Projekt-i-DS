// script.js

// AI-Powered Destination Suggestions
document.getElementById('flight-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const passengers = document.getElementById('passengers').value;

    // Simple AI Logic for Suggestions
    const suggestions = {
        Paris: 'Explore the Eiffel Tower and indulge in French cuisine.',
        Tokyo: 'Discover futuristic technology and ancient temples.',
        NewYork: 'Enjoy Broadway shows and iconic landmarks like Times Square.'
    };

    const aiSuggestion = document.getElementById('ai-suggestion');
    aiSuggestion.style.marginTop = '20px';

    if (suggestions[to]) {
        aiSuggestion.innerHTML = `<p><strong>Travel Tip:</strong> ${suggestions[to]}</p>`;
    } else {
        aiSuggestion.innerHTML = `<p><strong>Travel Tip:</strong> Enjoy your journey to ${to}!</p>`;
    }
});

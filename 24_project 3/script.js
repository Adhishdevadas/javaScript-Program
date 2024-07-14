// Example leaderboard data (can be fetched from an API)
const leaderboardData = [
    { rank: 1, name: 'John Doe', points: 350 },
    { rank: 2, name: 'Jane Smith', points: 300 },
    { rank: 3, name: 'Michael Johnson', points: 280 },
    { rank: 4, name: 'Emily Davis', points: 270 },
    { rank: 5, name: 'Robert Brown', points: 260 },
    // Add more data as needed...
];

// Function to render leaderboard
function renderLeaderboard(data) {
    const leaderboardBody = document.getElementById('leaderboard-body');
    leaderboardBody.innerHTML = ''; // Clear previous content

    data.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.rank}</td>
            <td>${entry.name}</td>
            <td>${entry.points}</td>
        `;
        leaderboardBody.appendChild(row);
    });
}

// Render leaderboard on page load
window.onload = function() {
    renderLeaderboard(leaderboardData);
};

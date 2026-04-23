const STORAGE_KEY = "teamScores";
let scores = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [0, 0, 0];

// Update score display
function updateDisplay() {
  scores.forEach((score, index) => {
    document.getElementById(`score-${index}`).textContent = score;
  });
}

// Change score logic (add or subtract 100 points)
function changeScore(teamIndex, change) {
  scores[teamIndex] += change * 100; // Adds or subtracts 100 points
  localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
  updateDisplay();
}

// Initialize the score display
document.addEventListener("DOMContentLoaded", () => {
  updateDisplay();

  document.querySelectorAll('.btn-increase').forEach(button => {
    button.addEventListener('click', () => {
      const teamIndex = parseInt(button.getAttribute('data-team'), 10);
      changeScore(teamIndex, 1); // Add 100 points
    });
  });

  document.querySelectorAll('.btn-decrease').forEach(button => {
    button.addEventListener('click', () => {
      const teamIndex = parseInt(button.getAttribute('data-team'), 10);
      changeScore(teamIndex, -1); // Subtract 100 points
    });
  });
});

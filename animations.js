// Add animation to project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card, index) => {
    card.style.animation = `fadeInUp 1s ease-in-out ${index * 0.2}s forwards`;
});

// Add more animations and interactions as needed

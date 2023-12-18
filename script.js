document.addEventListener("DOMContentLoaded", function () {
    // Existing JavaScript
    // Functionality for hamburger menu
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });




    // FAQ item toggle functionality
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item) => {
        const question = item.querySelector(".question");
        const answer = item.querySelector(".answer");
        question.addEventListener("click", () => {
            answer.classList.toggle("show-answer");
        });
    });
});

document.getElementById('housingQuiz').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const lifeStage = formData.get('lifeStage');
    const freeTime = formData.get('freeTime');
    const budget = formData.get('budget');
    const duration = formData.get('duration');
    const location = formData.get('location');
    
    let resultText = 'Based on your choices, ';
    
    if (lifeStage === 'student') {
        resultText += 'shared housing or student dorms might be perfect for you!';
    } else if (lifeStage === 'professional' && budget === 'medium' && location === 'city') {
        resultText += 'a modern apartment in the city center suits your lifestyle!';
    } else if (lifeStage === 'family' && location === 'suburb') {
        resultText += 'a spacious house in a quiet suburb is ideal for you!';
    } else if (freeTime === 'quiet' && duration === 'long') {
        resultText += 'a cozy, long-term rental in a peaceful area is a great fit!';
    } else {
        resultText += 'exploring various housing options would be best to find your perfect home!';
    }

    document.getElementById('quizResult').innerText = resultText;
});


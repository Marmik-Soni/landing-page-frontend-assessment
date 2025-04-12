window.addEventListener("scroll", () => {
  const topBar = document.querySelector(".top-bar");
  if (window.scrollY > 0) {
    topBar.classList.add("scrolled");
  } else {
    topBar.classList.remove("scrolled");
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const playButton = document.querySelector('.play-button');
  const videoPlaceholder = document.querySelector('.video-placeholder');
  const testimonialVideo = document.querySelector('.testimonial-video');

  if (playButton && videoPlaceholder && testimonialVideo) {
      playButton.addEventListener('click', function() {
          videoPlaceholder.style.display = 'none'; // Hide the placeholder
          testimonialVideo.controls = true;      // Show the video controls
          testimonialVideo.play();              // Start playing the video
      });
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
      const questionButton = item.querySelector('.faq-question');
      const answerDiv = item.querySelector('.faq-answer');

      questionButton.addEventListener('click', () => {
          // Toggle the 'active' class on the question button
          questionButton.classList.toggle('active');

          // Toggle the 'open' class on the answer div
          answerDiv.classList.toggle('open');

          // Toggle the arrow icon direction (optional, for visual feedback)
          const arrowIcon = questionButton.querySelector('.arrow-icon');
          if (arrowIcon) {
              arrowIcon.textContent = questionButton.classList.contains('active') ? '▲' : '▼';
          }

          // Collapse other open answers (optional, for accordion style)
          faqItems.forEach(otherItem => {
              if (otherItem !== item) {
                  const otherQuestionButton = otherItem.querySelector('.faq-question');
                  const otherAnswerDiv = otherItem.querySelector('.faq-answer');
                  otherQuestionButton.classList.remove('active');
                  otherAnswerDiv.classList.remove('open');
                  const otherArrowIcon = otherQuestionButton.querySelector('.arrow-icon');
                  if (otherArrowIcon) {
                      otherArrowIcon.textContent = '▼';
                  }
              }
          });
      });
  });
});